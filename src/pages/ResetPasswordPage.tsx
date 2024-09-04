// src/pages/ResetPassword.tsx

import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // useParams to get the token from the URL
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { resetPassword } from '@/services/api'; // Ensure this API call is correct
import toast from 'react-hot-toast'; // Import toast notifications

const ResetPassword = () => {
  const { token } = useParams(); // Get the reset token from the URL params
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false); // Handle loading state
  const navigate = useNavigate(); // For redirection after password reset

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    if (!token) {
      toast.error('Invalid password reset link');
      return;
    }

    try {
      setIsLoading(true);
      // Call the API to reset the password
      await resetPassword(token, password); // Call the resetPassword function from your API service
      toast.success('Password has been reset successfully');
      
      // Redirect to login page after successful reset
      setTimeout(() => {
        navigate('/login');
      }, 2000); // 2-second delay for user feedback
    } catch (error) {
      console.error('Error during reset password:', error);
      toast.error('Failed to reset password');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Reset Password</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid gap-2">
          <Label htmlFor="password">New Password</Label>
          <Input
            id="password"
            type="password"
            placeholder="Enter your new password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="grid gap-2 mt-4">
          <Label htmlFor="confirmPassword">Confirm New Password</Label>
          <Input
            id="confirmPassword"
            type="password"
            placeholder="Confirm your new password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>

        {/* Submit button with loading state */}
        <div className="mt-6">
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? 'Resetting...' : 'Reset Password'}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ResetPassword;
