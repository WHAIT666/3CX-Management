import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { resetPassword } from '@/services/api'; // Ensure the path is correct

const ResetPassword = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');
  const code = searchParams.get('code');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (!id || !code) {
      setError('Invalid password reset link');
      return;
    }

    try {
      console.log('Sending reset password request with:', { id, code, password, passwordConfirmation: confirmPassword });
      const response = await resetPassword(id, code, password, confirmPassword);
      setSuccess('Password has been reset successfully');
    } catch (error) {
      console.error('Error during reset password:', error);
      setError('Failed to reset password');
    }
  };

  return (
    <div>
      <h1>Reset Password</h1>
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
        <div className="grid gap-2">
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
        {error && <div className="text-red-500 text-center">{error}</div>}
        {success && <div className="text-green-500 text-center">{success}</div>}
        <Button type="submit">Reset Password</Button>
      </form>
    </div>
  );
};

export default ResetPassword;
