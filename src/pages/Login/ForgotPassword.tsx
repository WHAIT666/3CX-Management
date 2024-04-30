import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import React from "react";

// Import your image
import forgotPasswordImage from "../../assets/techbase.png";

function ForgotPassword() {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
            <Card className="w-full max-w-md p-6 bg-white shadow-lg dark:bg-gray-950">
                <CardHeader className="text-center relative">
                    {/* Include your image */}
                    <img 
                        src={forgotPasswordImage} 
                        alt="Forgot Password" 
                        className="mx-auto mb-4" 
                        style={{ width: "150px", height: "150px" }} // Adjust width and height as needed
                    />
                    <CardTitle className="text-2xl font-bold">Forgot Password</CardTitle>
                    <CardDescription className="text-gray-500 dark:text-gray-400">
                        Enter your email to reset your password.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="email">User or Email</Label>
                        <Input id="email" placeholder="Your Email" required type="email" />
                    </div>
                </CardContent>
                <CardFooter className="text-center">
                    <Button className="w-full" type="submit">
                        Reset Password
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
}

export default ForgotPassword;
