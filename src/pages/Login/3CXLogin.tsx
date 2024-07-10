import React, { useState } from "react";
import Modal from "react-modal";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { login3CX } from "../../services/api"; // Adjust the import path as necessary

const ThreeCXLogin = ({ isOpen, onRequestClose }) => {
  const [fqdn, setFqdn] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [securityCode, setSecurityCode] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const data = await login3CX(fqdn, username, password, securityCode);
      console.log("3CX login successful:", data);
      // Store the access token in localStorage or handle as needed
      localStorage.setItem("3CXAccessToken", data.access_token);
      onRequestClose(); // Close the modal on successful login
    } catch (err) {
      setError("3CX Login failed. Please check your credentials and try again.");
    }
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} contentLabel="3CX Login">
      <form onSubmit={handleSubmit}>
        <div>
          <Label htmlFor="fqdn">3CX FQDN</Label>
          <Input
            id="fqdn"
            type="text"
            placeholder="https://example.com"
            value={fqdn}
            onChange={(e) => setFqdn(e.target.value)}
            required
          />
        </div>
        <div>
          <Label htmlFor="username">3CX Username</Label>
          <Input
            id="username"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <Label htmlFor="password">3CX Password</Label>
          <Input
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <Label htmlFor="securityCode">3CX Security Code</Label>
          <Input
            id="securityCode"
            type="text"
            placeholder="Security Code"
            value={securityCode}
            onChange={(e) => setSecurityCode(e.target.value)}
            required
          />
        </div>
        {error && <p className="error">{error}</p>}
        <Button type="submit">Login</Button>
      </form>
    </Modal>
  );
};

export default ThreeCXLogin;
