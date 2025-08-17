
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Search,
  Menu,
  LogOut,
  SquarePen,
  Images,
  CirclePlay,
  PanelRight,
} from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import Image from "next/image";
import { trpc } from "@/utils/trpc";

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

const UserProfile = () => {
  const { user, signOut } = useAuth();

  const getInitials = (email: string) => {
    return email.slice(0, 2).toUpperCase();
  };

  return (
    <div className="p-3 border-t border-chat-border">
      <div className="flex items-center space-x-3">
        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
          {user.user_metadata.avatar_url ? (
            <Image
              src={user.user_metadata.avatar_url}
              alt="you"
              width={32}
              height={32}
              className="rounded-full"
            />
          ) : (
            <span className="text-sm font-medium text-primary-foreground">
              {user?.email ? getInitials(user.email) : "U"}
            </span>
          )}
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-sm font-medium text-foreground truncate">
            {/* {user?.email ? getUserName(user.email) : "User"} */}
            {user.user_metadata?.name}
          </div>
          <div className="text-xs text-muted-foreground">Free</div>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => signOut()}
          className="text-muted-foreground hover:text-foreground"
        >
          <LogOut className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

const ChatSidebar = ({
  isOpen,
  onToggle,
  currentChatId,
  onNewChat,
  onSelectChat,
}: ChatSidebarProps) => {
 
  const { data: threads, isLoading } = trpc.threads.list.useQuery();

const chatSessions: ChatSession[] =
  threads?.map(({ id, title, updated_at }) => ({
    id,
    title,
    createdAt: new Date(updated_at).toLocaleString(), // you can format how you like
  })) ?? [];

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
      <div
        className={`fixed top-0 left-0 h-full w-[50%] md:w-[29%] lg:w-[19%] z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:relative`}
      >
        <div className="h-screen bg-chat-sidebar flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between px-3 py-2 shrink-0">
            {/* Header content */}
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 rounded-lg flex items-center justify-center mx-auto">
                <Image
                  src="/chat-gpt-logo.png"
                  alt="gpt-logo"
                  className="invert-black-to-white"
                  width={22}
                  height={22}
                />
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={onToggle}
              className="text-muted-foreground hover:text-foreground"
            >
              <PanelRight className="w-6 h-6" />
            </Button>
          </div>

          {/* Navigation */}
          <div className="px-2 mb-1 mt-2 space-y-0 shrink-0">
            {/* Navigation buttons */}
            <Button
              onClick={onNewChat}
              className="w-full pl-2 justify-start font-light bg-transparent hover:bg-accent text-foreground "
            >
              <SquarePen strokeWidth={2.3} className="w-4 h-4 mr-0" />
              New chat
            </Button>

            <Button
              className="w-full pl-2 justify-start font-light bg-transparent hover:bg-accent text-foreground"
              variant="ghost"
            >
              <Search strokeWidth={2.3} className="w-4 h-4 mr-0" />
              Search chats
            </Button>

            <Button
              className="w-full pl-2   font-light justify-start bg-transparent hover:bg-accent text-foreground"
              variant="ghost"
            >
              <Images strokeWidth={2.3} className="w-4 h-4 mr-0" />
              Library
            </Button>
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto">
            {/* AI Models */}
            <div className="px-2 mb-3 py-2">
              {/* AI Models content */}
              <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-accent cursor-pointer">
                <CirclePlay strokeWidth={2.3} className="w-4 h-4 " />
                <span className="text-sm font-light">Sora</span>
              </div>
              <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-accent cursor-pointer">
                <div className="w-4 h-4 bg-primary rounded-sm"></div>
                <span className="text-sm font-normal">GPTs</span>
              </div>
            </div>

            {/* Chat History */}
            <div className="px-2">
              {/* Chat History content */}
              <h3 className="text-sm px-2 font-normal text-muted-foreground mb-2">
                Chats
              </h3>
              <ScrollArea className="h-full">
                <div className="space-y-0">
                  {chatSessions.map((chat) => (
                    <button
                      key={chat.id}
                      onClick={() => onSelectChat(chat.id)}
                      className={`
                      w-full text-left p-1 py-1 rounded-lg hover:bg-chat-background  transition-colors
                      ${currentChatId === chat.id ? "bg-chat-background" : ""}
                    `}
                    >
                      <div className="text-sm px-1 font-light text-foreground my-[0.17rem] truncate">
                        {chat.title}
                      </div>
                    </button>
                  ))}
                </div>
              </ScrollArea>
            </div>
          </div>

          {/* User Profile */}
          <div className="shrink-0">
            <UserProfile />
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatSidebar;



