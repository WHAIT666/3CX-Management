import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useTheme } from "@/components/ui/theme-provider";
import loginImage from "../../assets/techbase.png";

async function loginUser(credentials) {
  return fetch('http://localhost:8080/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  }).then(response => {
    if (!response.ok) {
      throw new Error('Ocorreu um erro');
    }
    return response.json();
  });
}

function Login() {
  const navigate = useNavigate();
  const { theme } = useTheme();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Effect to check if user is already logged in
  useEffect(() => {
    const sessionToken = localStorage.getItem('sessionToken');
    if (sessionToken) {
      // Redirect to Dashboard if session token exists
      navigate('/dashboard');
    }
  }, [navigate]);

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      setError('');
      const response = await loginUser({ email, password });
      localStorage.setItem('sessionToken', response.authentication.sessionToken);
      navigate('/dashboard');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className={`flex items-center justify-center h-screen bg-gray-100 ${theme === 'dark' ? 'dark:bg-gray-900' : 'bg-gray-100'}`}>
      <Card className="w-full max-w-md p-6 bg-white shadow-lg dark:bg-gray-950">
        <CardHeader className="text-center relative">
          <img 
            src={loginImage} 
            alt="Login" 
            className="mx-auto mb-4" 
            style={{ width: "150px", height: "150px" }}
          />
          <CardTitle className="text-2xl font-bold">Login</CardTitle>
          <CardDescription className={`text-gray-500 ${theme === 'dark' ? 'dark:text-gray-400' : 'text-gray-500'}`}>
            Enter your credentials to access your account.
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleLogin}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" placeholder="Password" required type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            {error && <div className="text-red-500 text-center">{error}</div>}
            <div className="text-center text-sm">
              <a href="/forgot-password" className={`${theme === 'dark' ? 'text-white' : 'text-black'} hover:underline`}>
                Forgot Password?
              </a>
            </div>
          </CardContent>
          <CardFooter className="text-center">
            <Button className="w-full" type="submit">
              Login
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}

export default Login;
