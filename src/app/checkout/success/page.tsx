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
import { CheckCircle2, Download, FileText, Play } from "lucide-react";

export default function CheckoutSuccessPage() {
  // Mock order details
  const orderDetails = {
    orderNumber: "ORD-12345-67890",
    date: "June 15, 2023",
    total: 14.99,
    email: "john@example.com",
    course: "Complete Web Development Bootcamp",
  };

  return (
    <div className="container py-12">
      <div className="max-w-2xl mx-auto text-center space-y-4">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 mb-4">
          <CheckCircle2 className="h-10 w-10 text-green-600" />
        </div>

        <h1 className="text-3xl font-bold">Thank You for Your Purchase!</h1>
        <p className="text-muted-foreground">
          Your order has been successfully processed and confirmed.
        </p>

        <Card className="mt-8 text-left">
          <CardHeader>
            <CardTitle>Order Confirmation</CardTitle>
            <CardDescription>Order #{orderDetails.orderNumber}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-muted-foreground">Order Date</p>
                <p className="font-medium">{orderDetails.date}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Total Amount</p>
                <p className="font-medium">${orderDetails.total.toFixed(2)}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Email</p>
                <p className="font-medium">{orderDetails.email}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Payment Method</p>
                <p className="font-medium">Credit Card (•••• 4242)</p>
              </div>
            </div>

            <div className="border rounded-md p-4 mt-4">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-medium">{orderDetails.course}</h3>
                  <p className="text-sm text-muted-foreground">
                    Lifetime Access
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-bold">${orderDetails.total.toFixed(2)}</p>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full">
              <Button className="bg-orange-500 hover:bg-orange-600" asChild>
                <Link href="/course-player/1">
                  <Play className="mr-2 h-4 w-4" />
                  Start Learning
                </Link>
              </Button>
              <Button variant="outline">
                <Download className="mr-2 h-4 w-4" />
                Download Receipt
              </Button>
              <Button variant="outline">
                <FileText className="mr-2 h-4 w-4" />
                View Invoice
              </Button>
            </div>
          </CardFooter>
        </Card>

        <div className="space-y-4 mt-8">
          <h2 className="text-xl font-semibold">What's Next?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
            <div className="space-y-2">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto">
                <Play className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-medium">Start Learning</h3>
              <p className="text-sm text-muted-foreground">
                Access your course immediately and begin your learning journey
              </p>
            </div>
            <div className="space-y-2">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-medium">Explore Resources</h3>
              <p className="text-sm text-muted-foreground">
                Download course materials and supplementary resources
              </p>
            </div>
            <div className="space-y-2">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-medium">Track Progress</h3>
              <p className="text-sm text-muted-foreground">
                Monitor your learning progress and complete assignments
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
          <Button asChild>
            <Link href="/dashboard">Go to Dashboard</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/courses">Browse More Courses</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
