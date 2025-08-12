import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Send, Paperclip, Mic, Square } from "lucide-react";

interface ChatInputProps {
  onSendMessage: (message: string, image?: File) => void;
  isLoading?: boolean;
  onStopGeneration?: () => void;
}

const ChatInput = ({ onSendMessage, isLoading, onStopGeneration }: ChatInputProps) => {
  const [message, setMessage] = useState("");
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() || selectedImage) {
      onSendMessage(message, selectedImage || undefined);
      setMessage("");
      setSelectedImage(null);
      if (textareaRef.current) {
        textareaRef.current.style.height = 'auto';
      }
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
    
    // Auto-resize textarea
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 120)}px`;
    }
  };

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedImage(file);
    }
  };

  return (
    <div className="absolute bottom-0 left-0 md:left-80 right-0 bg-chat-background p-3 pt-0">
      <div className="max-w-4xl mx-auto">
        {selectedImage && (
          <div className="mb-2 p-2 bg-chat-ai-bubble rounded-lg">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">
                Image: {selectedImage.name}
              </span>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSelectedImage(null)}
                className="h-6 w-6 p-0"
              >
                ×
              </Button>
            </div>
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="relative">
          <div className="flex  items-end space-x-2">
           
             
             
            
            
            {/* Input Area */}
            <div className="flex-1 max-w-[95%] mx-auto ">
              {/* Attachment Button */}
              <div className="relative ">
              <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={() => fileInputRef.current?.click()}
              className="left-1 h-12 w-12 p-0 absolute rounded-full text-muted-foreground hover:text-foreground flex-shrink-0"
            >
              <Paperclip className="w-5 h-5" />
            </Button>
              
              <textarea
                ref={textareaRef}
                value={message}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
                placeholder="Ask anything "
                className="chat-input pl-12 min-h-[48px] max-h-[120px] w-full resize-none overflow-y-auto"
                rows={1}
                disabled={isLoading}
              />
             {/* Send/Stop Button */}
            {isLoading ? (
              <Button
                type="button"
                onClick={onStopGeneration}
                size="sm"
                variant="ghost"
                className="h-9 w-9 p-0 absolute text-muted-foreground  right-2 bg-gray-500 rounded-full top-[5px] hover:text-foreground flex-shrink-0"
              >
                <Square className="w-5 h-5" />
              </Button>
            ) : (
              <Button
                type="submit"
                disabled={!message.trim() && !selectedImage}
                size="sm"
                className="h-9 w-9 p-0 absolute right-2 bg-gray-400 rounded-full top-[5px] flex-shrink-0 disabled:opacity-50"
              >
                <Send className="w-5 h-5" />
              </Button>
            )}
             
              
            {/* Voice Button */}
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="h-12 w-12 p-0  absolute right-10 text-muted-foreground hover:text-foreground flex-shrink-0"
            >
              <Mic className="w-5 h-5" />
            </Button>
            
            </div>
            
           
          </div>
          
          {/* Hidden file input */}
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleImageSelect}
            className="hidden"
          />
          </div>
        </form>
        
        <p className="text-xs text-muted-foreground text-center mt-0">
          ChatGPT can make mistakes. Check important info.
        </p>
      </div>
    </div> 
  );
};

export default ChatInput;