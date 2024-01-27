import { NextApiRequest } from "next";
import { Stripe } from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET ?? "");

export async function GET(req: NextApiRequest) {
  const paymentIntent = await stripe.paymentIntents.list({ limit: 3 });

  console.log(paymentIntent);
  console.log(req);

  return Response.json(paymentIntent);
}

export async function POST(req: NextApiRequest) {
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 1000,
    currency: "jpy",
    payment_method_types: ["card"],
  });

  console.log(paymentIntent);
  console.log(req);

  return Response.json(paymentIntent);
}
