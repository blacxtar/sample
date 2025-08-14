'use client';

import { useState } from "react";
import ChatSidebar from "@/components/chat/ChatSidebar";
import ChatArea from "@/components/chat/ChatArea";
import ChatInput from "@/components/chat/ChatInput";
import { useChat } from '@ai-sdk/react';

const Chat = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentChatId, setCurrentChatId] = useState<string>();
  const [isInputLoading, setIsInputLoading] = useState(false);
  
  // Use the AI SDK v5's useChat hook - only returns messages and sendMessage
  const { messages, sendMessage } = useChat();
console.log(messages)
  const handleSendMessage = async (content: string, image?: File) => {
    // For now, we'll handle text only. Image handling would need additional setup
    setIsInputLoading(true);
    try {
      await sendMessage({ text: content });
    } finally {
      setIsInputLoading(false);
    }
  };

  const handleNewChat = () => {
    setCurrentChatId(undefined);
    setSidebarOpen(false);
    // You might want to reset the chat here - the AI SDK doesn't have a built-in reset
    // You could reload the page or implement custom logic
    // window.location.reload();
  };

  const handleSelectChat = (chatId: string) => {
    setCurrentChatId(chatId);
    setSidebarOpen(false);
    // In a real app, load messages for this chat
  };

  const handleStopGeneration = () => {
    // In v5, there's no direct stop function available from useChat
    // You might need to implement this differently or check if there's an updated API
    setIsInputLoading(false);
  };

  // Check if the last message is from assistant and still being generated
  const isLoading = isInputLoading || (messages.length > 0 && 
    messages[messages.length - 1]?.role === 'assistant' && 
    messages[messages.length - 1]?.parts?.some(part => part.type === 'text' && !part.text?.trim()));

  return (
    <div className="h-screen  flex overflow">
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
          messages={messages} // Pass AI SDK messages directly
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