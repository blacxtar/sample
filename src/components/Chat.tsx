"use client";

import { useState } from "react";
import ChatSidebar from "@/components/chat/ChatSidebar";
import ChatArea from "@/components/chat/ChatArea";
import ChatInput from "@/components/chat/ChatInput";
import { UIMessage, useChat } from "@ai-sdk/react";
import { trpc } from "@/utils/trpc";
import { useRouter } from "next/navigation";

const Chat = ({
  id,
  initialMessages,
}: { id?: string | undefined; initialMessages?: UIMessage[] } = {}) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isInputLoading, setIsInputLoading] = useState(false);
  const router = useRouter();

  const { messages, sendMessage, status, stop } = useChat({
    id,
    messages: initialMessages,
  });

  const creatThread = trpc.threads.create.useMutation({
    onSuccess: (data) => {
      router.push(`/chat/${data.id}`);
    },
  });

  const renameThread = trpc.threads.rename.useMutation();
  const createMessage = trpc.messages.create.useMutation({
    onError: (error) => {
      console.log("Error while sending text :", error);
    },
  });

  const handleSendMessage = async (content: string, image?: File) => {
    if(id===undefined){
      creatThread.mutate({title:"New chat..."})
    }
    if (messages.length === 2) {
      const title = content.slice(0, 18);
      renameThread.mutate({ title: title, id: id });
    }

    setIsInputLoading(true);
    try {
      await sendMessage({ text: content });
      createMessage.mutate({ threadId: id, content: messages });
    } finally {
      setIsInputLoading(false);
    }
  };

  const handleNewChat = () => {
    creatThread.mutate({ title: "New chat..." });
    setSidebarOpen(false);
  };

  const handleSelectChat = (chatId: string) => {
    router.push(`/chat/${chatId}`);
    setSidebarOpen(false);
  };

  const handleStopGeneration = () => {
    stop();
    setIsInputLoading(false);
  };

  // Check if the last message is from assistant and still being generated
  const isLoading =
    isInputLoading ||
    (messages.length > 0 &&
      messages[messages.length - 1]?.role === "assistant" &&
      messages[messages.length - 1]?.parts?.some(
        (part) => part.type === "text" && !part.text?.trim()
      ));

  return (
    <div className="h-screen  flex overflow">
      {/* Sidebar */}
      <ChatSidebar
        isOpen={sidebarOpen}
        onToggle={() => setSidebarOpen(!sidebarOpen)}
        currentChatId={id}
        onNewChat={handleNewChat}
        onSelectChat={handleSelectChat}
      />

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col min-w-0">
        <ChatArea
          messages={messages} // Pass AI SDK messages directly
          status={status}
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
