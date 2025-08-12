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
    <div className="sticky bottom-0 left-0 right-0 bg-chat-background border-t border-chat-border p-4">
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
          <div className="flex items-end space-x-2">
            {/* Attachment Button */}
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={() => fileInputRef.current?.click()}
              className="h-12 w-12 p-0 text-muted-foreground hover:text-foreground flex-shrink-0"
            >
              <Paperclip className="w-5 h-5" />
            </Button>
            
            {/* Input Area */}
            <div className="flex-1 relative">
              <textarea
                ref={textareaRef}
                value={message}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
                placeholder="Message ChatGPT..."
                className="chat-input min-h-[48px] max-h-[120px] w-full resize-none overflow-y-auto"
                rows={1}
                disabled={isLoading}
              />
            </div>
            
            {/* Send/Stop Button */}
            {isLoading ? (
              <Button
                type="button"
                onClick={onStopGeneration}
                size="sm"
                variant="ghost"
                className="h-12 w-12 p-0 text-muted-foreground hover:text-foreground flex-shrink-0"
              >
                <Square className="w-5 h-5" />
              </Button>
            ) : (
              <Button
                type="submit"
                disabled={!message.trim() && !selectedImage}
                size="sm"
                className="h-12 w-12 p-0 flex-shrink-0 disabled:opacity-50"
              >
                <Send className="w-5 h-5" />
              </Button>
            )}
            
            {/* Voice Button */}
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="h-12 w-12 p-0 text-muted-foreground hover:text-foreground flex-shrink-0"
            >
              <Mic className="w-5 h-5" />
            </Button>
          </div>
          
          {/* Hidden file input */}
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleImageSelect}
            className="hidden"
          />
        </form>
        
        <p className="text-xs text-muted-foreground text-center mt-2">
          ChatGPT can make mistakes. Check important info.
        </p>
      </div>
    </div>
  );
};

export default ChatInput;