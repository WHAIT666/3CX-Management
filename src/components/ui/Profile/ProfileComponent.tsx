import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { CopyIcon } from "lucide-react";

export default function Component() {
  return (
    <div className="flex justify-start w-full p-4">
      <Card className="w-full max-w-5xl">
        <CardHeader className="flex flex-col items-start md:flex-row md:items-center md:justify-between">
          <div className="flex items-center space-x-4">
            <Avatar>
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback>AU</AvatarFallback>
            </Avatar>
            <div>
              <CardTitle>Santos, André</CardTitle>
              <CardDescription>1001</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="mobile">Mobile</Label>
              <Input id="mobile" placeholder="Enter your mobile number" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="department">Main Department Membership</Label>
              <Select>
                <SelectTrigger id="department">
                  <SelectValue placeholder="DEFAULT" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="default">DEFAULT</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="language">Language</Label>
              <Select>
                <SelectTrigger id="language">
                  <SelectValue placeholder="English (US)" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en">English (US)</SelectItem>
                  <SelectItem value="es">Spanish</SelectItem>
                  <SelectItem value="fr">French</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="theme">Select a theme</Label>
              <Select>
                <SelectTrigger id="theme">
                  <SelectValue placeholder="Dark" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="light">Light</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="space-y-2">
            <Label>Account Details</Label>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label>Your DID number(s)</Label>
                <Input placeholder="123" />
              </div>
              <div className="space-y-2">
                <Label>Voicemail Number</Label>
                <div className="flex items-center space-x-2">
                  <Input placeholder="9999" />
                  <Button variant="default">Call</Button>
                </div>
              </div>
              <div className="space-y-2">
                <Label>Voicemail PIN</Label>
                <Input type="password" placeholder="****" />
              </div>
              <div className="space-y-2">
                <Label>Talk URL</Label>
                <div className="flex items-center space-x-2">
                  <Input value="https://techbasexapi.3cx.pt/andrsantos" readOnly />
                  <Button variant="outline">
                    <CopyIcon className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              <div className="space-y-2">
                <Label>Meet URL</Label>
                <div className="flex items-center space-x-2">
                  <Input value="https://techbasexapi.3cx.pt/meet/andrsantos" readOnly />
                  <Button variant="outline">
                    <CopyIcon className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
