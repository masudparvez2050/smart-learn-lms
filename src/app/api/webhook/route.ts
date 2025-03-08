import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "");
// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {
//   apiVersion: "2023-10-16",
// });

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET || "";

export async function POST(req: Request) {
  const body = await req.text();
  const signature = req.headers.get("stripe-signature") || "";

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
  } catch (err: any) {
    console.error(`Webhook signature verification failed: ${err.message}`);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  // Handle the event
  switch (event.type) {
    case "checkout.session.completed":
      const session = event.data.object as Stripe.Checkout.Session;
      // Handle successful payment
      await handleSuccessfulPayment(session);
      break;
    case "payment_intent.succeeded":
      const paymentIntent = event.data.object as Stripe.PaymentIntent;
      // Handle successful payment intent
      console.log(`PaymentIntent for ${paymentIntent.amount} was successful!`);
      break;
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  return NextResponse.json({ received: true });
}

async function handleSuccessfulPayment(session: Stripe.Checkout.Session) {
  // Extract metadata
  const courseId = session.metadata?.courseId;
  const userId = session.metadata?.userId;

  if (!courseId || !userId) {
    console.error("Missing metadata in session");
    return;
  }

  try {
    // In a real application, you would:
    // 1. Update your database to record the purchase
    // 2. Grant access to the course for the user
    // 3. Send confirmation email
    // 4. Update analytics

    console.log(`User ${userId} purchased course ${courseId}`);

    // Example database update (pseudo-code)
    // await db.enrollments.create({
    //   data: {
    //     userId,
    //     courseId,
    //     purchasedAt: new Date(),
    //     paymentId: session.id,
    //     amount: session.amount_total / 100, // Convert from cents
    //   },
    // });
  } catch (error) {
    console.error("Error processing successful payment:", error);
  }
}
