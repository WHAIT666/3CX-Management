import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface CentralFormComponentProps {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

export default function CentralFormComponent({ onSubmit }: CentralFormComponentProps) {
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>3CX Configuration</CardTitle>
        <CardDescription>Enter your 3CX details to connect your Central.</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="grid gap-4" onSubmit={onSubmit}>
          <div className="grid gap-2">
            <Label htmlFor="fqdn">FQDN/URL</Label>
            <Input id="fqdn" placeholder="Enter your 3CX FQDN or URL" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="extension">Extension Number</Label>
            <Input id="extension" type="number" placeholder="Enter your 3CX extension number" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="Enter your 3CX password" required />
          </div>
          <Button type="submit" className="w-full">
            Connect to 3CX
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
