import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { PenTool, Search, BookOpen, Volume2, Menu, X } from "lucide-react";

interface ChatSession {
  id: string;
  title: string;
  createdAt: string;
}

interface ChatSidebarProps {
  isOpen: boolean;
  onToggle: () => void;
  currentChatId?: string;
  onNewChat: () => void;
  onSelectChat: (chatId: string) => void;
}

const ChatSidebar = ({ isOpen, onToggle, currentChatId, onNewChat, onSelectChat }: ChatSidebarProps) => {
  const [chatSessions] = useState<ChatSession[]>([
    { id: "1", title: "ChatGPT clone setup", createdAt: "2h ago" },
    { id: "2", title: "Redis overview and comparison", createdAt: "1d ago" },
    { id: "3", title: "Build chrome extension", createdAt: "2d ago" },
    { id: "4", title: "tRPC in Next.js", createdAt: "3d ago" },
    { id: "5", title: "Improve skills section UI", createdAt: "1w ago" },
    { id: "6", title: "Setup custom domain", createdAt: "1w ago" }
  ]);

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden" 
          onClick={onToggle}
        />
      )}
      
      {/* Sidebar */}
      <div className={`
        fixed top-0 left-0 h-full w-80 z-50 transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        md:translate-x-0 md:relative md:w-80
      `}>
        <div className="h-full bg-chat-sidebar border-r border-chat-border flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-chat-border">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <div className="w-5 h-5 bg-white rounded-sm"></div>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={onToggle}
              className="md:hidden text-muted-foreground hover:text-foreground"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>

          {/* Navigation */}
          <div className="p-4 space-y-2">
            <Button 
              onClick={onNewChat}
              className="w-full justify-start bg-transparent hover:bg-accent text-foreground border border-chat-border"
              variant="outline"
            >
              <PenTool className="w-4 h-4 mr-3" />
              New chat
            </Button>
            
            <Button 
              className="w-full justify-start bg-transparent hover:bg-accent text-muted-foreground"
              variant="ghost"
            >
              <Search className="w-4 h-4 mr-3" />
              Search chats
            </Button>
            
            <Button 
              className="w-full justify-start bg-transparent hover:bg-accent text-muted-foreground"
              variant="ghost"
            >
              <BookOpen className="w-4 h-4 mr-3" />
              Library
            </Button>
          </div>

          {/* AI Models */}
          <div className="px-4 py-2">
            <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-accent cursor-pointer">
              <Volume2 className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm">Sora</span>
            </div>
            <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-accent cursor-pointer">
              <div className="w-4 h-4 bg-primary rounded-sm"></div>
              <span className="text-sm">GPTs</span>
            </div>
          </div>

          {/* Chat History */}
          <div className="flex-1 px-4">
            <h3 className="text-sm font-medium text-muted-foreground mb-3">Chats</h3>
            <ScrollArea className="h-full">
              <div className="space-y-1">
                {chatSessions.map((chat) => (
                  <button
                    key={chat.id}
                    onClick={() => onSelectChat(chat.id)}
                    className={`
                      w-full text-left p-3 rounded-lg hover:bg-accent transition-colors
                      ${currentChatId === chat.id ? 'bg-accent' : ''}
                    `}
                  >
                    <div className="text-sm font-medium text-foreground mb-1 truncate">
                      {chat.title}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {chat.createdAt}
                    </div>
                  </button>
                ))}
              </div>
            </ScrollArea>
          </div>

          {/* User Profile */}
          <div className="p-4 border-t border-chat-border">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-sm font-medium text-primary-foreground">SA</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium text-foreground truncate">Salman Ahmad</div>
                <div className="text-xs text-muted-foreground">Free</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatSidebar;