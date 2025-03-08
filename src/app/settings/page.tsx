"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("account");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  
  // Mock user settings
  const settings = {
    account: {
      email: "john.doe@example.com",
      name: "John Doe",
      language: "english",
      timezone: "America/New_York"
    },
    notifications: {
      email: true,
      browser: true,
      mobile: false,
      marketing: false,
      updates: true
    },
    privacy: {
      profileVisibility: "public",
      activityVisibility: "friends",
      searchable: true,
      dataSharing: false
    },
    appearance: {
      theme: "system",
      fontSize: "medium",
      reducedMotion: false,
      highContrast: false
    },
    billing: {
      plan: "Free",
      paymentMethod: "None",
      billingCycle: "Monthly"
    }
  };

  const handlePasswordChange = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (newPassword !== confirmPassword) {
      alert("New passwords do not match");
      return;
    }
    
    // In a real app, you would call an API to change the password
    console.log("Changing password");
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
    alert("Password changed successfully");
  };

  const handleDeleteAccount = () => {
    // In a real app, you would call an API to delete the account
    console.log("Deleting account");
  };

  return (
    <div className="container py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Settings</h1>
        
        <Tabs defaultValue="account" onValueChange={setActiveTab} className="space-y-8">
          <TabsList className="w-full grid grid-cols-5">
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="privacy">Privacy</TabsTrigger>
            <TabsTrigger value="appearance">Appearance</TabsTrigger>
            <TabsTrigger value="billing">Billing</TabsTrigger>
          </TabsList>
          
          {/* Account Settings */}
          <TabsContent value="account" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Account Information</CardTitle>
                <CardDescription>Update your account details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" defaultValue={settings.account.name} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" defaultValue={settings.account.email} />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="language">Language</Label>
                    <Select defaultValue={settings.account.language}>
                      <SelectTrigger id="language">
                        <SelectValue placeholder="Select language" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="english">English</SelectItem>
                        <SelectItem value="spanish">Spanish</SelectItem>
                        <SelectItem value="french">French</SelectItem>
                        <SelectItem value="german">German</SelectItem>
                        <SelectItem value="chinese">Chinese</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="timezone">Timezone</Label>
                    <Select defaultValue={settings.account.timezone}>
                      <SelectTrigger id="timezone">
                        <SelectValue placeholder="Select timezone" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="America/New_York">Eastern Time (ET)</SelectItem>
                        <SelectItem value="America/Chicago">Central Time (CT)</SelectItem>
                        <SelectItem value="America/Denver">Mountain Time (MT)</SelectItem>
                        <SelectItem value="America/Los_Angeles">Pacific Time (PT)</SelectItem>
                        <SelectItem value="Europe/London">Greenwich Mean Time (GMT)</SelectItem>
                        <SelectItem value="Europe/Paris">Central European Time (CET)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button className="bg-orange-500 hover:bg-orange-600">Save Changes</Button>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Change Password</CardTitle>
                <CardDescription>Update your password to keep your account secure</CardDescription>
              </CardHeader>
              <form onSubmit={handlePasswordChange}>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="current-password">Current Password</Label>
                    <Input 
                      id="current-password" 
                      type="password" 
                      value={currentPassword}
                      onChange={(e) => setCurrentPassword(e.target.value)}
                      required
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="new-password">New Password</Label>
                      <Input 
                        id="new-password" 
                        type="password" 
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirm-password">Confirm New Password</Label>
                      <Input 
                        id="confirm-password" 
                        type="password" 
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button type="submit" className="bg-orange-500 hover:bg-orange-600">
                    Update Password
                  </Button>
                </CardFooter>
              </form>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Danger Zone</CardTitle>
                <CardDescription>Irreversible account actions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="border border-red-200 rounded-md p-4 bg-red-50">
                  <h3 className="text-lg font-medium text-red-800 mb-2">Delete Account</h3>
                  <p className="text-red-600 mb-4">Once you delete your account, there is no going back. This action is permanent.</p>
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button variant="destructive">Delete Account</Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                          This action cannot be undone. This will permanently delete your account and remove your data from our servers.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={handleDeleteAccount} className="bg-red-500 hover:bg-red-600">
                          Delete Account
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Notification Settings */}
          <TabsContent value="notifications" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Notification Preferences</CardTitle>
                <CardDescription>Manage how you receive notifications</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Notification Channels</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Email Notifications</h4>
                        <p className="text-sm text-muted-foreground">Receive notifications via email</p>
                      </div>
                      <Switch defaultChecked={settings.notifications.email} />
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Browser Notifications</h4>
                        <p className="text-sm text-muted-foreground">Receive notifications in your browser</p>
                      </div>
                      <Switch defaultChecked={settings.notifications.browser} />
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Mobile Push Notifications</h4>
                        <p className="text-sm text-muted-foreground">Receive notifications on your mobile device</p>
                      </div>
                      <Switch defaultChecked={settings.notifications.mobile} />
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Notification Types</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Course Updates</h4>
                        <p className="text-sm text-muted-foreground">Updates from instructors for enrolled courses</p>
                      </div>
                      <Switch defaultChecked={settings.notifications.updates} />
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Marketing & Promotions</h4>
                        <p className="text-sm text-muted-foreground">Promotional offers and discounts</p>
                      </div>
                      <Switch defaultChecked={settings.notifications.marketing} />
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button className="bg-orange-500 hover:bg-orange-600">Save Preferences</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          {/* Privacy Settings */}
          <TabsContent value="privacy" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Privacy Settings</CardTitle>
                <CardDescription>Control your privacy and data sharing preferences</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Profile Visibility</h3>
                  <div className="space-y-2">
                    <Label htmlFor="profile-visibility">Who can see your profile</Label>
                    <Select defaultValue={settings.privacy.profileVisibility}>
                      <SelectTrigger id="profile-visibility">
                        <SelectValue placeholder="Select visibility" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="public">Public - Anyone can view your profile</SelectItem>
                        <SelectItem value="friends">Friends Only - Only your connections can view your profile</SelectItem>
                        <SelectItem value="private">Private - Only you can view your profile</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Activity Visibility</h3>
                  <div className="space-y-2">
                    <Label htmlFor="activity-visibility">Who can see your learning activity</Label>
                    <Select defaultValue={settings.privacy.activityVisibility}>
                      <SelectTrigger id="activity-visibility">
                        <SelectValue placeholder="Select visibility" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="public">Public - Anyone can see your activity</SelectItem>
                        <SelectItem value="friends">Friends Only - Only your connections can see your activity</SelectItem>
                        <SelectItem value="private">Private - Only you can see your activity</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Search & Discovery</h3>
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Profile Discoverability</h4>
                      <p className="text-sm text-muted-foreground">Allow others to find your profile through search</p>
                    </div>
                    <Switch defaultChecked={settings.privacy.searchable} />
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Data Usage</h3>
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Data Sharing for Personalization</h4>
                      <p className="text-sm text-muted-foreground">Allow us to use your learning data to personalize your experience</p>
                    </div>
                    <Switch defaultChecked={settings.privacy.dataSharing} />
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button className="bg-orange-500 hover:bg-orange-600">Save Privacy Settings</Button>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Data & Privacy</CardTitle>
                <CardDescription>Manage your personal data</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-medium">Download Your Data</h3>
                    <p className="text-sm text-muted-foreground">Get a copy of your personal data</p>
                  </div>
                  <Button variant="outline">Request Data</Button>
                </div>
                <Separator />
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-medium">Cookie Preferences</h3>
                    <p className="text-sm text-muted-foreground">Manage your cookie settings</p>
                  </div>
                  <Button variant="outline">Manage Cookies</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Appearance Settings */}
          <TabsContent value="appearance" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Appearance Settings</CardTitle>
                <CardDescription>Customize how SmartLearn looks for you</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Theme</h3>
                  <div className="grid grid-cols-3 gap-4">
                    <div className={`border rounded-md p-4 cursor-pointer ${settings.appearance.theme === 'light' ? 'border-orange-500 bg-orange-50' : ''}`}>
                      <div className="h-20 bg-white border rounded-md mb-2"></div>
                      <p className="text-center font-medium">Light</p>
                    </div>
                    <div className={`border rounded-md p-4 cursor-pointer ${settings.appearance.theme === 'dark' ? 'border-orange-500 bg-orange-50' : ''}`}>
                      <div className="h-20 bg-gray-900 border rounded-md mb-2"></div>
                      <p className="text-center font-medium">Dark</p>
                    </div>
                    <div className={`border rounded-md p-4 cursor-pointer ${settings.appearance.theme === 'system' ? 'border-orange-500 bg-orange-50' : ''}`}>
                      <div className="h-20 bg-gradient-to-r from-white to-gray-900 border rounded-md mb-2"></div>
                      <p className="text-center font-medium">System</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Font Size</h3>
                  <div className="space-y-2">
                    <Label htmlFor="font-size">Select your preferred font size</Label>
                    <Select defaultValue={settings.appearance.fontSize}>
                      <SelectTrigger id="font-size">
                        <SelectValue placeholder="Select font size" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="small">Small</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="large">Large</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Accessibility</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Reduced Motion</h4>
                        <p className="text-sm text-muted-foreground">Reduce the amount of animations</p>
                      </div>
                      <Switch defaultChecked={settings.appearance.reducedMotion} />
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">High Contrast</h4>
                        <p className="text-sm text-muted-foreground">Increase contrast for better visibility</p>
                      </div>
                      <Switch defaultChecked={settings.appearance.highContrast} />
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button className="bg-orange-500 hover:bg-orange-600">Save Appearance Settings</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          {/* Billing Settings */}
          <TabsContent value="billing" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Subscription Plan</CardTitle>
                <CardDescription>Manage your subscription and billing details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-muted/50 p-4 rounded-md">
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <h3 className="font-medium text-lg">Current Plan: {settings.billing.plan}</h3>
                      <p className="text-sm text-muted-foreground">Basic access to courses and features</p>
                    </div>
                    {settings.billing.plan === "Free" ? (
                      <Button className="bg-orange-500 hover:bg-orange-600">Upgrade Plan</Button>
                    ) : (
                      <Button variant="outline">Manage Plan</Button>
                    )}
                  </div>
                  
                  {settings.billing.plan === "Free" && (
                    <div className="space-y-4">
                      <h4 className="font-medium">Upgrade to Premium for:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <svg className="h-4 w-4 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Unlimited access to all courses
                        </li>
                        <li className="flex items-center">
                          <svg className="h-4 w-4 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Downloadable resources
                        </li>
                        <li className="flex items-center">
                          <svg className="h-4 w-4 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Certificate of completion
                        </li>
                        <li className="flex items-center">
                          <svg className="h-4 w-4 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Direct instructor support
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
                
                {settings.billing.plan !== "Free" && (
                  <>
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Payment Method</h3>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <div className="w-12 h-8 bg-gray-200 rounded mr-3"></div>
                          <div>
                            <p className="font-medium">Visa ending in 4242</p>
                            <p className="text-sm text-muted-foreground">Expires 12/2025</p>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">Change</Button>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Billing Cycle</h3>
                      <div className="space-y-2">
                        <Label htmlFor="billing-cycle">Select your billing cycle</Label>
                        <Select defaultValue={settings.billing.billingCycle}>
                          <SelectTrigger id="billing-cycle">
                            <SelectValue placeholder="Select billing cycle" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Monthly">Monthly - $14.99/month</SelectItem>
                            <SelectItem value="Annual">Annual - $149.99/year (Save 17%)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Billing History</h3>
                      <div className="border rounded-md overflow-hidden">
                        <table className="w-full">
                          <thead className="bg-muted/50">
                            <tr>
                              <th className="text-left py-2 px-4 font-medium">Date</th>
                              <th className="text-left py-2 px-4 font-medium">Amount</th>