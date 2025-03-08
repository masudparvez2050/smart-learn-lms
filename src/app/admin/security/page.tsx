"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
  Shield,
  Lock,
  Key,
  UserCheck,
  AlertTriangle,
  Eye,
  EyeOff,
  Save,
  RefreshCw,
  FileText,
  ShieldAlert,
  ShieldCheck,
  Users,
} from "lucide-react";

export default function SecurityPage() {
  const [showApiKey, setShowApiKey] = useState(false);
  const [securitySettings, setSecuritySettings] = useState({
    twoFactorAuth: true,
    passwordPolicy: true,
    loginAttempts: true,
    sessionTimeout: true,
    ipRestriction: false,
    dataEncryption: true,
  });

  // Sample security logs
  const securityLogs = [
    {
      id: 1,
      event: "Login Attempt",
      user: "admin@example.com",
      status: "Success",
      ip: "192.168.1.1",
      location: "New York, USA",
      date: "2023-07-15 10:30:45",
    },
    {
      id: 2,
      event: "Password Change",
      user: "john@example.com",
      status: "Success",
      ip: "192.168.1.2",
      location: "Los Angeles, USA",
      date: "2023-07-15 09:15:22",
    },
    {
      id: 3,
      event: "Login Attempt",
      user: "unknown@example.com",
      status: "Failed",
      ip: "203.0.113.1",
      location: "Beijing, China",
      date: "2023-07-14 22:45:10",
    },
    {
      id: 4,
      event: "API Key Generated",
      user: "admin@example.com",
      status: "Success",
      ip: "192.168.1.1",
      location: "New York, USA",
      date: "2023-07-14 16:20:33",
    },
    {
      id: 5,
      event: "User Role Change",
      user: "sarah@example.com",
      status: "Success",
      ip: "192.168.1.5",
      location: "Chicago, USA",
      date: "2023-07-14 14:10:05",
    },
    {
      id: 6,
      event: "Login Attempt",
      user: "michael@example.com",
      status: "Failed",
      ip: "198.51.100.1",
      location: "London, UK",
      date: "2023-07-13 08:55:17",
    },
    {
      id: 7,
      event: "2FA Enabled",
      user: "david@example.com",
      status: "Success",
      ip: "192.168.1.10",
      location: "Toronto, Canada",
      date: "2023-07-13 11:30:42",
    },
    {
      id: 8,
      event: "Password Reset Request",
      user: "emma@example.com",
      status: "Success",
      ip: "192.168.1.15",
      location: "Sydney, Australia",
      date: "2023-07-12 19:25:30",
    },
  ];

  const handleSettingChange = (setting: string, checked: boolean) => {
    setSecuritySettings((prev) => ({ ...prev, [setting]: checked }));
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold">Security Settings</h1>
          <p className="text-muted-foreground">
            Manage platform security and access controls
          </p>
        </div>
        <Button className="bg-orange-500 hover:bg-orange-600">
          <Shield className="mr-2 h-4 w-4" />
          Security Audit
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Security Controls</CardTitle>
            <CardDescription>
              Configure platform-wide security settings
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-start gap-3">
                <Lock className="h-5 w-5 mt-0.5 text-orange-500" />
                <div>
                  <Label className="text-base">Two-Factor Authentication</Label>
                  <p className="text-sm text-muted-foreground">
                    Require 2FA for all administrator accounts
                  </p>
                </div>
              </div>
              <Switch
                checked={securitySettings.twoFactorAuth}
                onCheckedChange={(checked) =>
                  handleSettingChange("twoFactorAuth", checked)
                }
              />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div className="flex items-start gap-3">
                <Key className="h-5 w-5 mt-0.5 text-orange-500" />
                <div>
                  <Label className="text-base">Strong Password Policy</Label>
                  <p className="text-sm text-muted-foreground">
                    Enforce complex passwords with minimum requirements
                  </p>
                </div>
              </div>
              <Switch
                checked={securitySettings.passwordPolicy}
                onCheckedChange={(checked) =>
                  handleSettingChange("passwordPolicy", checked)
                }
              />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 mt-0.5 text-orange-500" />
                <div>
                  <Label className="text-base">Login Attempt Limits</Label>
                  <p className="text-sm text-muted-foreground">
                    Lock accounts after 5 failed login attempts
                  </p>
                </div>
              </div>
              <Switch
                checked={securitySettings.loginAttempts}
                onCheckedChange={(checked) =>
                  handleSettingChange("loginAttempts", checked)
                }
              />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div className="flex items-start gap-3">
                <RefreshCw className="h-5 w-5 mt-0.5 text-orange-500" />
                <div>
                  <Label className="text-base">Session Timeout</Label>
                  <p className="text-sm text-muted-foreground">
                    Automatically log out inactive users after 30 minutes
                  </p>
                </div>
              </div>
              <Switch
                checked={securitySettings.sessionTimeout}
                onCheckedChange={(checked) =>
                  handleSettingChange("sessionTimeout", checked)
                }
              />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div className="flex items-start gap-3">
                <UserCheck className="h-5 w-5 mt-0.5 text-orange-500" />
                <div>
                  <Label className="text-base">IP Restriction</Label>
                  <p className="text-sm text-muted-foreground">
                    Limit admin access to specific IP addresses
                  </p>
                </div>
              </div>
              <Switch
                checked={securitySettings.ipRestriction}
                onCheckedChange={(checked) =>
                  handleSettingChange("ipRestriction", checked)
                }
              />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div className="flex items-start gap-3">
                <ShieldCheck className="h-5 w-5 mt-0.5 text-orange-500" />
                <div>
                  <Label className="text-base">Data Encryption</Label>
                  <p className="text-sm text-muted-foreground">
                    Enable end-to-end encryption for sensitive data
                  </p>
                </div>
              </div>
              <Switch
                checked={securitySettings.dataEncryption}
                onCheckedChange={(checked) =>
                  handleSettingChange("dataEncryption", checked)
                }
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button className="ml-auto bg-orange-500 hover:bg-orange-600">
              <Save className="mr-2 h-4 w-4" />
              Save Settings
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Security Status</CardTitle>
            <CardDescription>
              Current security health and recommendations
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-start gap-3">
              <ShieldCheck className="h-5 w-5 text-green-500 mt-0.5" />
              <div>
                <h3 className="font-medium text-green-700">
                  Security Status: Good
                </h3>
                <p className="text-sm text-green-600">
                  Most security controls are enabled
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="font-medium">Recommendations</h3>
              <div className="flex items-start gap-2">
                <AlertTriangle className="h-4 w-4 text-amber-500 mt-0.5" />
                <p className="text-sm">
                  Enable IP restriction for admin accounts
                </p>
              </div>
              <div className="flex items-start gap-2">
                <AlertTriangle className="h-4 w-4 text-amber-500 mt-0.5" />
                <p className="text-sm">
                  Review user permissions and access levels
                </p>
              </div>
              <div className="flex items-start gap-2">
                <AlertTriangle className="h-4 w-4 text-amber-500 mt-0.5" />
                <p className="text-sm">Schedule regular security audits</p>
              </div>
            </div>

            <div className="pt-2">
              <Button variant="outline" className="w-full">
                <ShieldAlert className="mr-2 h-4 w-4" />
                Run Security Scan
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>API Security</CardTitle>
          <CardDescription>Manage API keys and access controls</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <h3 className="font-medium">API Key</h3>
            <div className="flex items-center gap-2">
              <Input
                value={
                  showApiKey
                    ? "sk_live_51JHu74KG6Hs"
                    : "••••••••••••••••••••••••"
                }
                readOnly
                className="font-mono"
              />
              <Button
                variant="outline"
                size="icon"
                onClick={() => setShowApiKey(!showApiKey)}
              >
                {showApiKey ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </Button>
              <Button variant="outline">
                <RefreshCw className="mr-2 h-4 w-4" />
                Regenerate
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              This API key has full access to your account. Keep it secure and
              never share it publicly.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-medium">API Access Controls</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label>Allowed Origins</Label>
                <Button variant="outline" size="sm">
                  Edit
                </Button>
              </div>
              <Input
                value="https://smartlearn.com, https://admin.smartlearn.com"
                readOnly
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label>Rate Limiting</Label>
                <Select defaultValue="medium">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select rate limit" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Low (100 req/min)</SelectItem>
                    <SelectItem value="medium">Medium (500 req/min)</SelectItem>
                    <SelectItem value="high">High (1000 req/min)</SelectItem>
                    <SelectItem value="unlimited">Unlimited</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="ml-auto bg-orange-500 hover:bg-orange-600">
            <Save className="mr-2 h-4 w-4" />
            Save API Settings
          </Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Security Logs</CardTitle>
            <CardDescription>
              Recent security events and activities
            </CardDescription>
          </div>
          <Button variant="outline" className="flex items-center gap-2">
            <FileText className="h-4 w-4" />
            <span>Export Logs</span>
          </Button>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Event</TableHead>
                  <TableHead>User</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>IP Address</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Date & Time</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {securityLogs.map((log) => (
                  <TableRow key={log.id}>
                    <TableCell className="font-medium">{log.event}</TableCell>
                    <TableCell>{log.user}</TableCell>
                    <TableCell>
                      <Badge
                        className={`${log.status === "Success" ? "bg-green-500" : "bg-red-500"}`}
                      >
                        {log.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{log.ip}</TableCell>
                    <TableCell>{log.location}</TableCell>
                    <TableCell>{log.date}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <div className="flex justify-between items-center mt-4">
            <div className="text-sm text-muted-foreground">
              Showing recent 8 of 256 security events
            </div>
            <div className="flex items-center gap-1">
              <Button variant="outline" size="sm">
                View All Logs
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
