// 'use client'
import ProtectedRoute from "@/components/ProtectedRoute";
import Chat from "@/components/Chat";


export default function Home() {
  
  return (
    <ProtectedRoute>
      <Chat id={undefined}  />
    </ProtectedRoute>
  );
}