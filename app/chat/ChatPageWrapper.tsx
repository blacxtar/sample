// app/chat/[id]/ChatPageWrapper.tsx
"use client";

import Chat from "@/components/Chat";
import ProtectedRoute from "@/components/ProtectedRoute";
import { trpc } from "@/utils/trpc";

export default function ChatPageWrapper({ id }: { id: string }) {
  const { data, isFetched } = trpc.messages.listByThread.useQuery({
    threadId: id,
    limit: 10,
  });
  if (isFetched) {
    const messages = data?.flatMap((item) => item.content) ?? [];
    console.log("Messages from db :",messages)
    return (
      <ProtectedRoute>
        <Chat id={id} initialMessages={messages} />
      </ProtectedRoute>
    );
  }
}
