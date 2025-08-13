import {  useState } from "react";
import { Copy, ThumbsUp, ThumbsDown, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";

import { MemoizedMarkdown } from "../MarkDown";

// AI SDK v5 message structure
interface UIMessage {
  id: string;
  role: "user" | "assistant" | "system";
  parts: Array<{
    type: "text" | "image" | string; // string for tool parts like 'tool-weather'
    text?: string;
    image?: string;
    [key: string]: any; // for tool-specific properties
  }>;
}

interface ChatMessageProps {
  message: UIMessage; // Use AI SDK's v5 UIMessage type
  isLatest?: boolean;
  
}

const ChatMessage = ({ message, isLatest}: ChatMessageProps) => {
  const [copied, setCopied] = useState("");
 
  const getMessageContent = (message: UIMessage): string => {
    return message.parts
      .filter((part) => part.type === "text")
      .map((part) => part.text || "")
      .join("");
  };

  const messageContent = getMessageContent(message);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(messageContent);
    setCopied("true");
    setTimeout(() => setCopied(""), 2000);
  };

  if (message.role === "user") {
    return (
      <div  className="flex justify-end mb-4 animate-fade-in-up">
        <div className="chat-bubble-user">
          <p className="text-sm leading-relaxed">{messageContent}</p>
          {/* Handle image parts if needed */}
          {message.parts
            .filter((part) => part.type === "image")
            .map((part, index) => (
              <img
                key={index}
                src={part.image}
                alt="User uploaded image"
                className="mt-2 rounded-lg max-w-full"
              />
            ))}
        </div>
      </div>
    );
  }

  return (
    <div  className="flex flex-col mb-6 animate-fade-in-up">
      <div className="flex items-start space-x-3">
        <div className="flex-1 min-w-0">
          <div className="chat-bubble-ai">
            {/* Render text parts */}
            {message.parts.map((part, index) => {
              switch (part.type) {
                case "text":
                  return (
                   
                    <MemoizedMarkdown
                      content={messageContent}
                      id={message.id}
                      copiedText={copied}
                      onCopy={handleCopy}
                    />
                  );
                case "image":
                  return (
                    <img
                      key={index}
                      src={part.image}
                      alt="AI generated image"
                      className="mt-3 rounded-lg max-w-full"
                    />
                  );
                default:
                  // Handle tool parts (like 'tool-weather')
                  if (part.type.startsWith("tool-")) {
                    return (
                      <pre
                        key={index}
                        className="mt-2 text-xs bg-gray-100 dark:bg-gray-800 p-2 rounded overflow-x-auto"
                      >
                        {JSON.stringify(part, null, 2)}
                      </pre>
                    );
                  }
                  return null;
              }
            })}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-2 mt-0 ml-1">
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
