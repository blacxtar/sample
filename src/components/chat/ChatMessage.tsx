import { useState } from "react";
import { Copy, ThumbsUp, ThumbsDown, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ChatMessageProps {
  message: {
    id: string;
    content: string;
    role: "user" | "assistant";
    timestamp: string;
    imageUrl?: string;
  };
  isLatest?: boolean;
}

const ChatMessage = ({ message, isLatest }: ChatMessageProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(message.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (message.role === "user") {
    return (
      <div className="flex justify-end mb-4 animate-fade-in-up">
        <div className="chat-bubble-user">
          <p className="text-sm leading-relaxed">{message.content}</p>
          {message.imageUrl && (
            <img 
              src={message.imageUrl} 
              alt="User uploaded image" 
              className="mt-2 rounded-lg max-w-full"
            />
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col mb-6 animate-fade-in-up">
      <div className="flex items-start space-x-3">
        {/* AI Avatar
        <div className="w-7 h-7 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
          <div className="w-4 h-4 bg-white rounded-sm"></div>
        </div> */}
        
        {/* Message Content */}
        <div className="flex-1 min-w-0">
          <div className="chat-bubble-ai">
            <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
            {message.imageUrl && (
              <img 
                src={message.imageUrl} 
                alt="AI generated image" 
                className="mt-3 rounded-lg max-w-full"
              />
            )}
          </div>
          
          {/* Action Buttons */}
          <div className="flex items-center space-x-2 mt-2 ml-1">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleCopy}
              className="h-8 w-8 p-0 text-muted-foreground hover:text-foreground"
            >
              <Copy className="w-3.5 h-3.5" />
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              className="h-8 w-8 p-0 text-muted-foreground hover:text-foreground"
            >
              <ThumbsUp className="w-3.5 h-3.5" />
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              className="h-8 w-8 p-0 text-muted-foreground hover:text-foreground"
            >
              <ThumbsDown className="w-3.5 h-3.5" />
            </Button>
            
            {isLatest && (
              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0 text-muted-foreground hover:text-foreground"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </Button>
            )}
          </div>
        </div>
      </div>
      
      {copied && (
        <div className="text-xs text-muted-foreground mt-1 ml-10">
          Copied to clipboard
        </div>
      )}
    </div>
  );
};

export default ChatMessage;