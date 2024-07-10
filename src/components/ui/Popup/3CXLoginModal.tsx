import React, { useState } from 'react';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { EyeIcon } from "lucide-react";

const ThreeCXLoginModal = ({ isOpen, onRequestClose }) => {
  const [fqdn, setFqdn] = useState("");
  const [extension, setExtension] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle 3CX login logic here

    // After successful login, close the modal
    onRequestClose();
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
            <Label htmlFor="url" className="text-right">
              FQDN/URL
            </Label>
            <Input id="url" placeholder="example.3cx.com" className="col-span-3" value={fqdn} onChange={(e) => setFqdn(e.target.value)} />
          </div>
          <div className="grid items-center grid-cols-4 gap-4">
            <Label htmlFor="extension" className="text-right">
              Extension
            </Label>
            <Input id="extension" type="number" placeholder="1234" className="col-span-3" value={extension} onChange={(e) => setExtension(e.target.value)} />
          </div>
          <div className="grid items-center grid-cols-4 gap-4">
            <Label htmlFor="password" className="text-right">
              Password
            </Label>
            <div className="col-span-3 relative">
              <Input id="password" type="password" placeholder="********" value={password} onChange={(e) => setPassword(e.target.value)} />
              <Button variant="ghost" size="icon" className="absolute bottom-1 right-1 h-7 w-7">
                <EyeIcon className="h-4 w-4" />
                <span className="sr-only">Toggle password visibility</span>
              </Button>
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Save</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ThreeCXLoginModal;
