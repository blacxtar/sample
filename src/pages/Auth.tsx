import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    // Check if user is already logged in
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        navigate("/");
      }
    };
    checkAuth();
  }, [navigate]);

  const handleGoogleAuth = async () => {
    setIsLoading(true);
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/`
        }
      });

      if (error) {
        toast({
          title: "Authentication Error",
          description: error.message,
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Authentication Error", 
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleEmailContinue = () => {
    toast({
      title: "Email authentication not available",
      description: "Please use Google to sign in.",
      variant: "destructive",
    });
  };

  return (
    <div className="min-h-screen bg-chat-background flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-chat-sidebar border-chat-border">
        <div className="p-8 space-y-6">
          {/* Header */}
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold text-foreground">ChatGPT</h1>
            <h2 className="text-2xl font-semibold text-foreground">Welcome back</h2>
          </div>

          {/* Email Input */}
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm text-muted-foreground">
                Email address
              </label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-chat-input-bg border-chat-border text-foreground"
                placeholder=""
              />
            </div>

            <Button 
              onClick={handleEmailContinue}
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-full h-12"
            >
              Continue
            </Button>
          </div>

          {/* Sign up link */}
          <div className="text-center">
            <span className="text-muted-foreground">Don't have an account? </span>
            <button className="text-primary hover:underline">
              Sign up
            </button>
          </div>

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-chat-border"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-chat-sidebar px-4 text-muted-foreground">OR</span>
            </div>
          </div>

          {/* Google Auth */}
          <div className="space-y-3">
            <Button
              onClick={handleGoogleAuth}
              disabled={isLoading}
              variant="outline"
              className="w-full bg-chat-input-bg border-chat-border text-foreground hover:bg-accent rounded-full h-12"
            >
              <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              {isLoading ? "Signing in..." : "Continue with Google"}
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Auth;