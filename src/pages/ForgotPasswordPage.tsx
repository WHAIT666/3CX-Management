import { useState } from "react";
import { useAuthStore } from "../Store/AuthStore"; // Import Zustand store for forgot password logic
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import { Loader, Mail } from "lucide-react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState(""); // State for input field
  const [isSubmitted, setIsSubmitted] = useState(false); // State to manage form submission
  const { isLoading, forgotPassword } = useAuthStore(); // Zustand hook to manage password reset logic

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await forgotPassword(email); // Trigger forgot password function from Zustand
    setIsSubmitted(true); // Update state to reflect the form submission
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Forgot Password</CardTitle>
          <CardDescription className="text-center">
            Enter your email address and we'll send you a link to reset your password.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {!isSubmitted ? (
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    placeholder="Enter your email address"
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} // Update email state
                  />
                </div>
                <Button className="w-full" type="submit" disabled={isLoading}>
                  {isLoading ? <Loader className="animate-spin" size={16} /> : "Send Reset Link"}
                </Button>
              </div>
            </form>
          ) : (
            // Display a success message if the email was submitted
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Mail className="h-12 w-12 text-orange-500" />
              </div>
              <p className="text-muted-foreground">
                If an account exists for {email}, you will receive a password reset link shortly.
              </p>
            </div>
          )}
        </CardContent>
        <CardFooter className="flex justify-center">
          <Link className="text-sm text-muted-foreground hover:underline" to="/login">
            Back to login
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
