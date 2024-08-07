import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { login3CX } from '../../../services/api'; // Ensure correct path to api

export const ThreeCXLoginModal = ({ isOpen, onRequestClose }) => {
  const [fqdn, setFqdn] = useState("");
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('3cxAccessToken');
    if (!token) {
      setShowModal(true);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Reset any previous errors

    try {
      const response = await login3CX(fqdn, identifier, password);
      console.log('Response:', response);

      if (response.Status === 'AuthSuccess') {
        // Store 3CX tokens in localStorage
        localStorage.setItem('3cxAccessToken', response.Token.access_token);
        localStorage.setItem('3cxRefreshToken', response.Token.refresh_token);
        setShowModal(false); // Close the modal on submit
        onRequestClose(); // Close the modal on submit
      } else {
        setError('Login failed. Please check your credentials.');
      }
    } catch (error) {
      console.error('Error during login:', error);
      setError('Login failed. Please check your credentials.');
    }
  };

  if (!showModal) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onRequestClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add 3CX Account</DialogTitle>
          <DialogDescription>Enter the details for your 3CX account.</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="fqdn">FQDN / URL</Label>
            <Input
              id="fqdn"
              type="text"
              placeholder="example.3cx.com"
              value={fqdn}
              onChange={(e) => setFqdn(e.target.value)}
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="identifier">Security Code or Username</Label>
            <Input
              id="identifier"
              type="text"
              placeholder="e.g. 1001 or email@example.com"
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <div className="text-red-500 text-center">{error}</div>}
          <DialogFooter>
            <Button type="submit">Save</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
