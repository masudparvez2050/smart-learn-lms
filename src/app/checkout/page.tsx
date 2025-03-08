"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle2, CreditCard, Lock, ShieldCheck } from "lucide-react";

export default function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] = useState("credit-card");
  const [couponCode, setCouponCode] = useState("");
  const [isApplyingCoupon, setIsApplyingCoupon] = useState(false);
  const [couponApplied, setCouponApplied] = useState(false);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  // Mock cart data
  const cartItems = [
    {
      id: 1,
      title: "Complete Web Development Bootcamp",
      instructor: "Sarah Johnson",
      price: 94.99,
      discountPrice: 14.99,
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&q=80",
    },
  ];

  // Order summary calculations
  const subtotal = cartItems.reduce(
    (total, item) => total + item.discountPrice,
    0,
  );
  const discount = cartItems.reduce(
    (total, item) => total + (item.price - item.discountPrice),
    0,
  );
  const couponDiscount = couponApplied ? 5 : 0;
  const total = subtotal - couponDiscount;

  const handleApplyCoupon = () => {
    if (!couponCode) return;

    setIsApplyingCoupon(true);

    // Simulate API call
    setTimeout(() => {
      setCouponApplied(true);
      setIsApplyingCoupon(false);
    }, 1000);
  };

  const handlePayment = () => {
    setIsProcessingPayment(true);

    // Simulate payment processing
    setTimeout(() => {
      window.location.href = "/checkout/success";
    }, 2000);
  };

  return (
    <div className="container py-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Checkout Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Cart Items */}
            <Card>
              <CardHeader>
                <CardTitle>Your Cart</CardTitle>
                <CardDescription>
                  Review your items before checkout
                </CardDescription>
              </CardHeader>
              <CardContent>
                {cartItems.map((item) => (
                  <div key={item.id} className="flex space-x-4">
                    <div className="relative w-24 h-16 overflow-hidden rounded">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        By {item.instructor}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="font-bold">
                        ${item.discountPrice.toFixed(2)}
                      </div>
                      <div className="text-sm text-muted-foreground line-through">
                        ${item.price.toFixed(2)}
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Payment Methods */}
            <Card>
              <CardHeader>
                <CardTitle>Payment Method</CardTitle>
                <CardDescription>
                  Select your preferred payment method
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="card" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="card">Credit Card</TabsTrigger>
                    <TabsTrigger value="paypal">PayPal</TabsTrigger>
                    <TabsTrigger value="other">Other Methods</TabsTrigger>
                  </TabsList>

                  <TabsContent value="card" className="space-y-4 mt-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="col-span-2 space-y-2">
                        <Label htmlFor="cardNumber">Card Number</Label>
                        <div className="relative">
                          <Input
                            id="cardNumber"
                            placeholder="1234 5678 9012 3456"
                          />
                          <CreditCard className="absolute right-3 top-2.5 h-5 w-5 text-muted-foreground" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="expiryDate">Expiry Date</Label>
                        <Input id="expiryDate" placeholder="MM/YY" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cvv">CVV</Label>
                        <div className="relative">
                          <Input id="cvv" placeholder="123" />
                          <Lock className="absolute right-3 top-2.5 h-4 w-4 text-muted-foreground" />
                        </div>
                      </div>
                      <div className="col-span-2 space-y-2">
                        <Label htmlFor="nameOnCard">Name on Card</Label>
                        <Input id="nameOnCard" placeholder="John Smith" />
                      </div>
                    </div>

                    <div className="flex items-center space-x-2 text-sm">
                      <ShieldCheck className="h-4 w-4 text-green-500" />
                      <span>
                        Your payment information is secure and encrypted
                      </span>
                    </div>
                  </TabsContent>

                  <TabsContent value="paypal" className="mt-4">
                    <div className="text-center py-8 space-y-4">
                      <div className="text-2xl font-bold text-blue-600">
                        PayPal
                      </div>
                      <p className="text-muted-foreground">
                        Click the button below to pay with PayPal
                      </p>
                      <Button className="bg-blue-600 hover:bg-blue-700">
                        Continue with PayPal
                      </Button>
                    </div>
                  </TabsContent>

                  <TabsContent value="other" className="mt-4">
                    <RadioGroup defaultValue="apple-pay">
                      <div className="flex items-center space-x-2 border rounded-md p-3 mb-3">
                        <RadioGroupItem value="apple-pay" id="apple-pay" />
                        <Label
                          htmlFor="apple-pay"
                          className="flex-1 cursor-pointer"
                        >
                          Apple Pay
                        </Label>
                        <div className="text-xl font-bold">Apple Pay</div>
                      </div>
                      <div className="flex items-center space-x-2 border rounded-md p-3 mb-3">
                        <RadioGroupItem value="google-pay" id="google-pay" />
                        <Label
                          htmlFor="google-pay"
                          className="flex-1 cursor-pointer"
                        >
                          Google Pay
                        </Label>
                        <div className="text-xl font-bold">Google Pay</div>
                      </div>
                      <div className="flex items-center space-x-2 border rounded-md p-3">
                        <RadioGroupItem
                          value="bank-transfer"
                          id="bank-transfer"
                        />
                        <Label
                          htmlFor="bank-transfer"
                          className="flex-1 cursor-pointer"
                        >
                          Bank Transfer
                        </Label>
                        <div className="text-xl font-bold">Bank</div>
                      </div>
                    </RadioGroup>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            {/* Billing Information */}
            <Card>
              <CardHeader>
                <CardTitle>Billing Information</CardTitle>
                <CardDescription>Enter your billing details</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Smith" />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="address">Address</Label>
                    <Input id="address" placeholder="123 Main St" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="city">City</Label>
                    <Input id="city" placeholder="New York" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="zipCode">Zip Code</Label>
                    <Input id="zipCode" placeholder="10001" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="country">Country</Label>
                    <Input id="country" placeholder="United States" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="state">State</Label>
                    <Input id="state" placeholder="NY" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div>
            <Card className="sticky top-20">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-green-600">
                    <span>Discount</span>
                    <span>-${discount.toFixed(2)}</span>
                  </div>
                  {couponApplied && (
                    <div className="flex justify-between text-green-600">
                      <span>Coupon (SAVE5)</span>
                      <span>-${couponDiscount.toFixed(2)}</span>
                    </div>
                  )}
                </div>

                <Separator />

                <div className="flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>

                <div className="pt-2">
                  <div className="flex space-x-2">
                    <Input
                      placeholder="Enter coupon code"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      disabled={couponApplied}
                    />
                    <Button
                      variant="outline"
                      onClick={handleApplyCoupon}
                      disabled={
                        !couponCode || isApplyingCoupon || couponApplied
                      }
                    >
                      {isApplyingCoupon
                        ? "Applying..."
                        : couponApplied
                          ? "Applied"
                          : "Apply"}
                    </Button>
                  </div>
                  {couponApplied && (
                    <div className="flex items-center text-green-600 text-sm mt-2">
                      <CheckCircle2 className="h-4 w-4 mr-1" />
                      Coupon applied successfully!
                    </div>
                  )}
                </div>

                <Button
                  className="w-full bg-orange-500 hover:bg-orange-600 py-6 text-lg"
                  onClick={handlePayment}
                  disabled={isProcessingPayment}
                >
                  {isProcessingPayment ? "Processing..." : "Complete Payment"}
                </Button>

                <div className="text-center text-sm text-muted-foreground">
                  By completing your purchase, you agree to our{" "}
                  <Link href="/terms" className="text-primary hover:underline">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/privacy"
                    className="text-primary hover:underline"
                  >
                    Privacy Policy
                  </Link>
                  .
                </div>

                <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Lock className="h-4 w-4 mr-1" />
                    Secure Payment
                  </div>
                  <div className="flex items-center">
                    <ShieldCheck className="h-4 w-4 mr-1" />
                    30-Day Guarantee
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
