import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function CentralFormComponent({ central, onSubmit, onClose, showModal, isEditing = false }) {
  const [name, setName] = useState("");
  const [ipAddress, setIpAddress] = useState("");
  const [status, setStatus] = useState("Active");
  const [fqdn, setFqdn] = useState("");
  const [usernameOrCode, setUsernameOrCode] = useState("");
  const [password, setPassword] = useState("");
  const [ipError, setIpError] = useState("");

  useEffect(() => {
    if (isEditing && central) {
      setName(central.name.replace("Central ", ""));
      setIpAddress(central.ipAddress);
      setStatus(central.status);
      setFqdn(central.fqdnUrl || "");  // Add default value if editing
      setUsernameOrCode(central.usernameOrCode || "");  // Add default value if editing
      setPassword("");  // Password is not pre-filled for security reasons
    }
  }, [isEditing, central]);

  const validateIp = (ip) => {
    const ipRegex = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    return ipRegex.test(ip);
  };

  const handleIpChange = (e) => {
    const value = e.target.value;
    if (/^[0-9.]*$/.test(value)) {
      setIpError("");
      setIpAddress(value);
    } else {
      setIpError("Invalid characters in IP address");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateIp(ipAddress)) {
      setIpError("Invalid IP address format");
      return;
    }
    onSubmit({ 
      name: `Central ${name}`, 
      ipAddress, 
      status, 
      fqdnUrl: fqdn,  // Include these new fields in submission
      usernameOrCode, 
      password 
    });
    setIpError(""); // Clear error after successful submission
  };

  return (
    <Dialog open={showModal} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{isEditing ? "Edit Central" : "Add Central"}</DialogTitle>
          <DialogDescription>{isEditing ? "Update the details for the central." : "Enter details for the new central."}</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <label htmlFor="name">Name</label>
              <Input id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div className="grid gap-2">
              <label htmlFor="ipAddress">IP Address</label>
              <Input
                id="ipAddress"
                name="ipAddress"
                value={ipAddress}
                onChange={handleIpChange}
                required
              />
              {ipError && <p className="text-red-500">{ipError}</p>}
            </div>
            <div className="grid gap-2">
              <label htmlFor="status">Status</label>
              <select
                id="status"
                name="status"
                className="input"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                required
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>
            {/* New fields for FQDN, Username/Code, and Password */}
            <div className="grid gap-2">
              <label htmlFor="fqdn">FQDN/URL</label>
              <Input 
                id="fqdn" 
                name="fqdn" 
                value={fqdn} 
                onChange={(e) => setFqdn(e.target.value)} 
                placeholder="Enter your 3CX FQDN or URL" 
                required 
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="usernameOrCode">Security Code or Username</label>
              <Input 
                id="usernameOrCode" 
                name="usernameOrCode" 
                value={usernameOrCode} 
                onChange={(e) => setUsernameOrCode(e.target.value)} 
                placeholder="e.g., 1001 or email@example.com" 
                required 
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="password">Password</label>
              <Input 
                id="password" 
                name="password" 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                placeholder="Enter your 3CX password" 
                required 
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit">{isEditing ? "Save Changes" : "Add Central"}</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
