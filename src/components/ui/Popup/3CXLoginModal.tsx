import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { EyeIcon } from "lucide-react";
import { login3CX } from '../../../services/api'; // Ensure the import path is correct

export const ThreeCXLoginModal = ({ isOpen, onRequestClose }) => {
  const [fqdn, setFqdn] = useState("");
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const sanitizeFQDN = (fqdn) => {
    return fqdn.replace(/(^\w+:|^)\/\//, '');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Reset any previous errors

    const sanitizedFqdn = sanitizeFQDN(fqdn);

    try {
      const response = await login3CX(sanitizedFqdn, identifier, password);
      console.log('3CX login successful:', response);
      // Store the tokens in localStorage or handle as needed
      localStorage.setItem('3cxAccessToken', response.Token.access_token);
      localStorage.setItem('3cxRefreshToken', response.Token.refresh_token);
      onRequestClose(); // Close the modal on success
    } catch (error) {
      console.error('3CX login failed:', error);
      setError('3CX login failed. Please check your credentials and try again.');
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onRequestClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add 3CX Account</DialogTitle>
          <DialogDescription>Enter the details for your 3CX account.</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="grid gap-4 py-4">
          <div className="grid items-center grid-cols-4 gap-4">
            <Label htmlFor="fqdn" className="text-right">
              FQDN/URL
            </Label>
            <Input
              id="fqdn"
              placeholder="example.3cx.com"
              className="col-span-3"
              value={fqdn}
              onChange={(e) => setFqdn(e.target.value)}
              required
            />
          </div>
          <div className="grid items-center grid-cols-4 gap-4">
            <Label htmlFor="identifier" className="text-right">
              Extension/Username
            </Label>
            <Input
              id="identifier"
              type="text"
              placeholder="1234 or email@example.com"
              className="col-span-3"
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              required
            />
          </div>
          <div className="grid items-center grid-cols-4 gap-4">
            <Label htmlFor="password" className="text-right">
              Password
            </Label>
            <div className="col-span-3 relative">
              <Input
                id="password"
                type="password"
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <Button variant="ghost" size="icon" className="absolute bottom-1 right-1 h-7 w-7">
                <EyeIcon className="h-4 w-4" />
                <span className="sr-only">Toggle password visibility</span>
              </Button>
            </div>
          </div>
          {error && <div className="col-span-4 text-red-500 text-center">{error}</div>}
          <DialogFooter>
            <Button type="submit">Save</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
