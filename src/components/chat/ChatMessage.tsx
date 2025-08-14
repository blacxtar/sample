import { useState } from "react";
import { Copy, ThumbsUp, ThumbsDown, RotateCcw, Check, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

import { MemoizedMarkdown } from "../MarkDown";

// AI SDK v5 message structure with tool support
interface UIMessage {
  id: string;
  role: "user" | "assistant" | "system";
  parts: Array<{
    type: "text" | "image" | string; // string for tool parts like 'tool-generateImage'
    text?: string;
    image?: string;
    // Tool-specific properties
    state?: "input-available" | "output-available" | "error";
    toolCallId?: string;
    input?: any;
    output?: any;
    [key: string]: any;
  }>;
}

interface ChatMessageProps {
  message: UIMessage;
  isLatest?: boolean;
}

const ChatMessage = ({ message, isLatest }: ChatMessageProps) => {
  const [copied, setCopied] = useState("");
  const [liked, setLiked] = useState(false);
  const [disLiked, setDisLiked] = useState(false);

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
    setTimeout(() => setCopied(""), 3000);
  };

  if (message.role === "user") {
    return (
      <div className="flex justify-end mb-4 animate-fade-in-up">
        <div className="chat-bubble-user">
          <p className="text-sm leading-relaxed">{messageContent}</p>
          {/* Handle user uploaded images */}
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
    <div className="flex flex-col mb-6 animate-fade-in-up">
      <div className="flex items-start space-x-3">
        <div className="flex-1 min-w-0">
          <div className="chat-bubble-ai">
            {/* Render all parts */}
            {message.parts.map((part, index) => {
              switch (part.type) {
                case "text":
                  return (
                    <div key={index}>
                      <MemoizedMarkdown
                        content={messageContent|| ""}
                        id={`${message.id}-${index}`}
                        copiedText={copied}
                        onCopy={handleCopy}
                      />
                    </div>
                  );
                
                case "image":
                  return (
                    <div key={index} className="mt-3">
                      <img
                        src={part.image}
                        alt="AI generated image"
                        className="rounded-lg max-w-full h-auto"
                      />
                    </div>
                  );

                default:
                  // Handle tool parts (like 'tool-generateImage')
                  if (part.type === "tool-generateImage") {
                    const { state, toolCallId, input, output } = part;
                    
                    if (state === "input-available") {
                      return (
                        <div 
                          key={`${message.id}-tool-${index}`}
                          className="mt-3 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800"
                        >
                          <div className="flex items-center space-x-2">
                            <Loader2 className="w-4 h-4 animate-spin text-blue-600" />
                            <span className="text-sm text-blue-700 dark:text-blue-300">
                              Generating image: {input?.prompt || 'Creating your image...'}
                            </span>
                          </div>
                        </div>
                      );
                    }
                    
                    if (state === "output-available" && output?.image) {
                      return (
                        <div key={`${message.id}-tool-${index}`} className="mt-3">
                          <div className="mb-2">
                            <span className="text-xs text-muted-foreground">
                              Generated: {input?.prompt}
                            </span>
                          </div>
                          <div className="relative rounded-lg overflow-hidden">
                            <Image
                              src={`data:image/png;base64,${output.image}`}
                              alt={input?.prompt || "Generated image"}
                              width={400}
                              height={400}
                              className="w-full h-auto max-w-md"
                              priority={false}
                              placeholder="blur"
                              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                            />
                          </div>
                        </div>
                      );
                    }

                    if (state === "error") {
                      return (
                        <div 
                          key={`${message.id}-tool-${index}`}
                          className="mt-3 p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800"
                        >
                          <div className="flex items-center space-x-2">
                            <span className="text-sm text-red-700 dark:text-red-300">
                              ❌ Failed to generate image: {input?.prompt}
                            </span>
                          </div>
                        </div>
                      );
                    }

                    // Fallback for unknown states
                    return (
                      <div 
                        key={`${message.id}-tool-${index}`}
                        className="mt-2 text-xs bg-gray-100 dark:bg-gray-800 p-2 rounded"
                      >
                        <span className="text-muted-foreground">
                          Image generation in progress...
                        </span>
                      </div>
                    );
                  }

                  // Handle other tool types
                  if (part.type.startsWith("tool-")) {
                    return (
                      <pre
                        key={`${message.id}-tool-${index}`}
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
          <div className="flex items-center space-x-2 mt-2 ml-1">
            <Button
              variant="link"
              size="sm"
              onClick={handleCopy}
              className={`h-8 w-8 p-0 ${
                copied ? "bg-[#4e4c4c] text-white" : "text-muted-foreground"
              } hover:text-foreground`}
            >
              {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            </Button>

            <Button
              variant="link"
              size="sm"
              className={`h-8 w-8 p-0 ${
                liked ? "bg-[#4e4c4c] text-white" : "text-muted-foreground"
              } hover:text-foreground`}
              onClick={() => {
                setLiked((prev) => !prev);
                setDisLiked(false);
              }}
            >
              <ThumbsUp className="w-3.5 h-3.5" />
            </Button>

            <Button
              variant="link"
              size="sm"
              className={`h-8 w-8 p-0 ${
                disLiked ? "bg-[#4e4c4c] text-white" : "text-muted-foreground"
              } hover:text-foreground`}
              onClick={() => {
                setDisLiked((prev) => !prev);
                setLiked(false);
              }}
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
        <div className="text-xs text-muted-foreground mt-3 ml-2">
          Copied to clipboard
        </div>
      )}
    </div>
  );
};

export default ChatMessage;