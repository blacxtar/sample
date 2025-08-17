'use client';

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";
import Image from "next/image";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/auth");
    }
  }, [user, loading, router]);

  if (loading) {
    return (
      <div className="h-screen bg-chat-background flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center mx-auto">
              <Image src='/chat-gpt-logo.png' className="invert-black-to-white" alt="gpt-logo" width={32} height={32}/>
          </div>
         
          <div className="text-muted-foreground">Loading...</div>
        </div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return <>{children}</>;
};

export default ProtectedRoute;