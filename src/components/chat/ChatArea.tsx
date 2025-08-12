import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import ChatMessage from "./ChatMessage";
import TypingIndicator from "./TypingIndicator";

interface Message {
  id: string;
  content: string;
  role: "user" | "assistant";
  timestamp: string;
  imageUrl?: string;
}

interface ChatAreaProps {
  messages: Message[];
  isLoading?: boolean;
  onToggleSidebar: () => void;
}

const ChatArea = ({ messages, isLoading, onToggleSidebar }: ChatAreaProps) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  return (
    <div className="flex-1 flex flex-col h-screen">
      {/* Header */}
      <div className="sticky top-0 bg-chat-background/80 backdrop-blur-sm border-b border-chat-border p-4 z-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={onToggleSidebar}
              className="md:hidden text-muted-foreground hover:text-foreground"
            >
              <Menu className="w-5 h-5" />
            </Button>
            <h1 className="text-lg font-semibold">ChatGPT</h1>
          </div>
          <div className="flex items-center space-x-2">
            <div className="hidden sm:block px-3 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20">
              ✨ Upgrade your plan
            </div>
          </div>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-4xl mx-auto px-4 py-6">
          {messages.length === 0 ? (
            <div className="text-center py-12">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-6 h-6 bg-white rounded-sm"></div>
              </div>
              <h2 className="text-2xl font-semibold mb-2">What can I help with?</h2>
              <p className="text-muted-foreground">
                Start a conversation or try one of the suggestions below
              </p>
            </div>
          ) : (
            <>
              {messages.map((message, index) => (
                <ChatMessage
                  key={message.id}
                  message={message}
                  isLatest={index === messages.length - 1}
                />
              ))}
              {isLoading && <TypingIndicator />}
            </>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>
    </div>
  );
};

export default ChatArea;