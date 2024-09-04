import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Mail, Lock, X, Check, Loader } from "lucide-react";
import { useAuthStore } from "../Store/AuthStore"; // Import zustand store for authentication

export default function SignUpPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordStrength, setPasswordStrength] = useState(0);
  const navigate = useNavigate();

  const { signup, error, isLoading } = useAuthStore(); // Use zustand store for signup logic

  // Function to check password strength
  const checkPasswordStrength = (pass: string) => {
    let strength = 0;
    if (pass.length >= 6) strength++;
    if (pass.match(/[A-Z]/)) strength++;
    if (pass.match(/[a-z]/)) strength++;
    if (pass.match(/[0-9]/)) strength++;
    if (pass.match(/[^A-Za-z0-9]/)) strength++;
    setPasswordStrength(strength);
  };

  useEffect(() => {
    checkPasswordStrength(password);
  }, [password]);

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signup(email, password, name); // Call signup from zustand store
      navigate("/verify-email"); // Redirect to email verification page after signup
    } catch (error) {
      console.log("Error during sign up", error);
    }
  };

  // Helper component for password requirements
  const PasswordRequirement = ({ met, text }: { met: boolean; text: string }) => (
    <li className="flex items-center space-x-2">
      {met ? <Check className="w-4 h-4 text-green-500" /> : <X className="w-4 h-4 text-gray-300" />}
      <span className={met ? "text-green-500" : "text-gray-500"}>{text}</span>
    </li>
  );

  // Function to get color based on password strength
  const getStrengthColor = (strength: number) => {
    const colors = ['#FF4136', '#FF851B', '#FFDC00', '#2ECC40', '#0074D9'];
    return colors[strength] || colors[0];
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md bg-white shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center text-gray-800">Create Account</CardTitle>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <div className="relative">
              <Label htmlFor="name" className="sr-only">Name</Label>
              <Input 
                id="name" 
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                placeholder="Name"
                className="pl-10 bg-gray-100 border-gray-300"
                required
              />
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            </div>
            <div className="relative">
              <Label htmlFor="email" className="sr-only">Email</Label>
              <Input 
                id="email" 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                placeholder="Email"
                className="pl-10 bg-gray-100 border-gray-300"
                required
              />
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            </div>
            <div className="relative">
              <Label htmlFor="password" className="sr-only">Password</Label>
              <Input 
                id="password" 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                placeholder="Password"
                className="pl-10 bg-gray-100 border-gray-300"
                required
              />
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Password strength</span>
                <span className="text-gray-600">{['Very Weak', 'Weak', 'Fair', 'Good', 'Strong'][passwordStrength]}</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full transition-all duration-300 ease-in-out"
                  style={{
                    width: `${(passwordStrength / 5) * 100}%`,
                    backgroundColor: getStrengthColor(passwordStrength),
                  }}
                />
              </div>
              <ul className="text-xs space-y-1">
                <PasswordRequirement met={password.length >= 6} text="At least 6 characters" />
                <PasswordRequirement met={!!password.match(/[A-Z]/)} text="Contains uppercase letter" />
                <PasswordRequirement met={!!password.match(/[a-z]/)} text="Contains lowercase letter" />
                <PasswordRequirement met={!!password.match(/[0-9]/)} text="Contains a number" />
                <PasswordRequirement met={!!password.match(/[^A-Za-z0-9]/)} text="Contains special character" />
              </ul>
            </div>

            {error && <p className="text-red-500 font-semibold">{error}</p>}
          </CardContent>
          
          <CardFooter className="flex flex-col space-y-4">
            <Button 
              type="submit" 
              className="w-full bg-gray-800 hover:bg-gray-700 text-white"
              disabled={isLoading} // Disable button while loading
            >
              {isLoading ? <Loader className="animate-spin" size={16} /> : "Sign Up"}
            </Button>
            <p className="text-sm text-center text-gray-600">
              Already have an account?{" "}
              <Link to="/login" className="text-gray-800 hover:underline">
                Login
              </Link>
            </p>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
