"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Save, Upload } from "lucide-react";

export default function SettingsPage() {
  const [generalSettings, setGeneralSettings] = useState({
    siteName: "SmartLearn",
    siteDescription:
      "A comprehensive learning platform for students and instructors",
    supportEmail: "support@smartlearn.com",
    contactPhone: "+1 (555) 123-4567",
    address: "123 Learning Street, New York, NY 10001",
    currency: "USD",
    language: "en",
    timezone: "UTC-5",
  });

  const [emailSettings, setEmailSettings] = useState({
    smtpServer: "smtp.example.com",
    smtpPort: "587",
    smtpUsername: "notifications@smartlearn.com",
    smtpPassword: "••••••••••••",
    senderName: "SmartLearn Team",
    senderEmail: "notifications@smartlearn.com",
    enableEmailNotifications: true,
  });

  const [paymentSettings, setPaymentSettings] = useState({
    stripePublicKey: "pk_test_••••••••••••••••••••••••",
    stripeSecretKey: "sk_test_••••••••••••••••••••••••",
    paypalClientId: "client_id_••••••••••••••••••••••••",
    paypalSecret: "secret_••••••••••••••••••••••••",
    enableStripe: true,
    enablePaypal: true,
    testMode: true,
  });

  const handleGeneralChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setGeneralSettings((prev) => ({ ...prev, [name]: value }));
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEmailSettings((prev) => ({ ...prev, [name]: value }));
  };

  const handlePaymentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPaymentSettings((prev) => ({ ...prev, [name]: value }));
  };

  const handleSwitchChange = (
    name: string,
    checked: boolean,
    settingType: string,
  ) => {
    if (settingType === "email") {
      setEmailSettings((prev) => ({ ...prev, [name]: checked }));
    } else if (settingType === "payment") {
      setPaymentSettings((prev) => ({ ...prev, [name]: checked }));
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Settings</h1>
        <p className="text-muted-foreground">
          Manage your platform settings and preferences.
        </p>
      </div>

      <Tabs defaultValue="general" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="email">Email</TabsTrigger>
          <TabsTrigger value="payment">Payment</TabsTrigger>
        </TabsList>

        {/* General Settings */}
        <TabsContent value="general" className="space-y-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle>General Settings</CardTitle>
              <CardDescription>
                Configure the basic settings for your platform.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="siteName">Site Name</Label>
                  <Input
                    id="siteName"
                    name="siteName"
                    value={generalSettings.siteName}
                    onChange={handleGeneralChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="supportEmail">Support Email</Label>
                  <Input
                    id="supportEmail"
                    name="supportEmail"
                    type="email"
                    value={generalSettings.supportEmail}
                    onChange={handleGeneralChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contactPhone">Contact Phone</Label>
                  <Input
                    id="contactPhone"
                    name="contactPhone"
                    value={generalSettings.contactPhone}
                    onChange={handleGeneralChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="currency">Default Currency</Label>
                  <Select
                    value={generalSettings.currency}
                    onValueChange={(value) =>
                      setGeneralSettings((prev) => ({
                        ...prev,
                        currency: value,
                      }))
                    }
                  >
                    <SelectTrigger id="currency">
                      <SelectValue placeholder="Select currency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="USD">USD - US Dollar</SelectItem>
                      <SelectItem value="EUR">EUR - Euro</SelectItem>
                      <SelectItem value="GBP">GBP - British Pound</SelectItem>
                      <SelectItem value="JPY">JPY - Japanese Yen</SelectItem>
                      <SelectItem value="CAD">CAD - Canadian Dollar</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="language">Default Language</Label>
                  <Select
                    value={generalSettings.language}
                    onValueChange={(value) =>
                      setGeneralSettings((prev) => ({
                        ...prev,
                        language: value,
                      }))
                    }
                  >
                    <SelectTrigger id="language">
                      <SelectValue placeholder="Select language" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="es">Spanish</SelectItem>
                      <SelectItem value="fr">French</SelectItem>
                      <SelectItem value="de">German</SelectItem>
                      <SelectItem value="zh">Chinese</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="timezone">Timezone</Label>
                  <Select
                    value={generalSettings.timezone}
                    onValueChange={(value) =>
                      setGeneralSettings((prev) => ({
                        ...prev,
                        timezone: value,
                      }))
                    }
                  >
                    <SelectTrigger id="timezone">
                      <SelectValue placeholder="Select timezone" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="UTC-12">UTC-12:00</SelectItem>
                      <SelectItem value="UTC-8">UTC-08:00</SelectItem>
                      <SelectItem value="UTC-5">UTC-05:00</SelectItem>
                      <SelectItem value="UTC+0">UTC+00:00</SelectItem>
                      <SelectItem value="UTC+1">UTC+01:00</SelectItem>
                      <SelectItem value="UTC+8">UTC+08:00</SelectItem>
                      <SelectItem value="UTC+12">UTC+12:00</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="address">Business Address</Label>
                <Input
                  id="address"
                  name="address"
                  value={generalSettings.address}
                  onChange={handleGeneralChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="siteDescription">Site Description</Label>
                <Textarea
                  id="siteDescription"
                  name="siteDescription"
                  value={generalSettings.siteDescription}
                  onChange={handleGeneralChange}
                  rows={3}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="logo">Site Logo</Label>
                <div className="flex items-center gap-4">
                  <div className="h-16 w-16 bg-muted rounded-md flex items-center justify-center">
                    <span className="text-2xl font-bold text-orange-500">
                      S
                    </span>
                  </div>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Upload className="h-4 w-4" />
                    <span>Upload New Logo</span>
                  </Button>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button className="bg-orange-500 hover:bg-orange-600">
                <Save className="mr-2 h-4 w-4" />
                Save Changes
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        {/* Email Settings */}
        <TabsContent value="email" className="space-y-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Email Settings</CardTitle>
              <CardDescription>
                Configure email settings for notifications and communications.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="smtpServer">SMTP Server</Label>
                  <Input
                    id="smtpServer"
                    name="smtpServer"
                    value={emailSettings.smtpServer}
                    onChange={handleEmailChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="smtpPort">SMTP Port</Label>
                  <Input
                    id="smtpPort"
                    name="smtpPort"
                    value={emailSettings.smtpPort}
                    onChange={handleEmailChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="smtpUsername">SMTP Username</Label>
                  <Input
                    id="smtpUsername"
                    name="smtpUsername"
                    value={emailSettings.smtpUsername}
                    onChange={handleEmailChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="smtpPassword">SMTP Password</Label>
                  <Input
                    id="smtpPassword"
                    name="smtpPassword"
                    type="password"
                    value={emailSettings.smtpPassword}
                    onChange={handleEmailChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="senderName">Sender Name</Label>
                  <Input
                    id="senderName"
                    name="senderName"
                    value={emailSettings.senderName}
                    onChange={handleEmailChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="senderEmail">Sender Email</Label>
                  <Input
                    id="senderEmail"
                    name="senderEmail"
                    type="email"
                    value={emailSettings.senderEmail}
                    onChange={handleEmailChange}
                  />
                </div>
              </div>
              <Separator className="my-4" />
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label
                      htmlFor="enableEmailNotifications"
                      className="text-base"
                    >
                      Enable Email Notifications
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      Send automated emails for user registrations, course
                      enrollments, etc.
                    </p>
                  </div>
                  <Switch
                    id="enableEmailNotifications"
                    checked={emailSettings.enableEmailNotifications}
                    onCheckedChange={(checked) =>
                      handleSwitchChange(
                        "enableEmailNotifications",
                        checked,
                        "email",
                      )
                    }
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button className="bg-orange-500 hover:bg-orange-600">
                <Save className="mr-2 h-4 w-4" />
                Save Changes
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        {/* Payment Settings */}
        <TabsContent value="payment" className="space-y-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Payment Settings</CardTitle>
              <CardDescription>
                Configure payment gateways and transaction settings.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Stripe Configuration</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="stripePublicKey">Stripe Public Key</Label>
                    <Input
                      id="stripePublicKey"
                      name="stripePublicKey"
                      value={paymentSettings.stripePublicKey}
                      onChange={handlePaymentChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="stripeSecretKey">Stripe Secret Key</Label>
                    <Input
                      id="stripeSecretKey"
                      name="stripeSecretKey"
                      type="password"
                      value={paymentSettings.stripeSecretKey}
                      onChange={handlePaymentChange}
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="enableStripe" className="text-base">
                      Enable Stripe
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      Allow payments via Stripe (Credit/Debit cards)
                    </p>
                  </div>
                  <Switch
                    id="enableStripe"
                    checked={paymentSettings.enableStripe}
                    onCheckedChange={(checked) =>
                      handleSwitchChange("enableStripe", checked, "payment")
                    }
                  />
                </div>
              </div>
              <Separator className="my-4" />
              <div className="space-y-4">
                <h3 className="text-lg font-medium">PayPal Configuration</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="paypalClientId">PayPal Client ID</Label>
                    <Input
                      id="paypalClientId"
                      name="paypalClientId"
                      value={paymentSettings.paypalClientId}
                      onChange={handlePaymentChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="paypalSecret">PayPal Secret</Label>
                    <Input
                      id="paypalSecret"
                      name="paypalSecret"
                      type="password"
                      value={paymentSettings.paypalSecret}
                      onChange={handlePaymentChange}
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="enablePaypal" className="text-base">
                      Enable PayPal
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      Allow payments via PayPal
                    </p>
                  </div>
                  <Switch
                    id="enablePaypal"
                    checked={paymentSettings.enablePaypal}
                    onCheckedChange={(checked) =>
                      handleSwitchChange("enablePaypal", checked, "payment")
                    }
                  />
                </div>
              </div>
              <Separator className="my-4" />
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="testMode" className="text-base">
                    Test Mode
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Enable test mode for payment processing (no real
                    transactions)
                  </p>
                </div>
                <Switch
                  id="testMode"
                  checked={paymentSettings.testMode}
                  onCheckedChange={(checked) =>
                    handleSwitchChange("testMode", checked, "payment")
                  }
                />
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button className="bg-orange-500 hover:bg-orange-600">
                <Save className="mr-2 h-4 w-4" />
                Save Changes
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
