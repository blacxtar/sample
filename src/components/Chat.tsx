'use client';

import { useState } from "react";
import ChatSidebar from "@/components/chat/ChatSidebar";
import ChatArea from "@/components/chat/ChatArea";
import ChatInput from "@/components/chat/ChatInput";

interface Message {
  id: string;
  content: string;
  role: "user" | "assistant";
  
  imageUrl?: string;
}

const Chat = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentChatId, setCurrentChatId] = useState<string>();
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async (content: string, image?: File) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      content,
      role: "user",
     
      imageUrl: image ? URL.createObjectURL(image) : undefined,
    };

    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    // Simulate AI response (replace with actual API call)
    setTimeout(() => {
      const aiMessage: Message = {
        id: crypto.randomUUID(),
        content: `I understand you're asking about: "${content}". This is a demo response. To integrate with actual AI APIs (like Google Gemini), you'll need to connect to Supabase for backend functionality and API key management.`,
        role: "assistant",
       
      };
      
      setMessages(prev => [...prev, aiMessage]);
      setIsLoading(false);
    }, 1500);
  };

  const handleNewChat = () => {
    setMessages([]);
    setCurrentChatId(undefined);
    setSidebarOpen(false);
  };

  const handleSelectChat = (chatId: string) => {
    setCurrentChatId(chatId);
    setSidebarOpen(false);
    // In a real app, load messages for this chat
  };

  const handleStopGeneration = () => {
    setIsLoading(false);
  };

  return (
    <div className="h-screen bg-chat-background flex overflow">
      {/* Sidebar */}
      <ChatSidebar
        isOpen={sidebarOpen}
        onToggle={() => setSidebarOpen(!sidebarOpen)}
        currentChatId={currentChatId}
        onNewChat={handleNewChat}
        onSelectChat={handleSelectChat}
      />

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col min-w-0">
        <ChatArea
          messages={messages}
          isLoading={isLoading}
          onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
        />
        
        <ChatInput
          onSendMessage={handleSendMessage}
          isLoading={isLoading}
          onStopGeneration={handleStopGeneration}
        />
      </div>
    </div>
  );
};

export default Chat;