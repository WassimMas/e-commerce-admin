// lib/stripe.ts

import Stripe from "stripe";

const latestSupportedVersion = "2023-10-16"; // Replace with the actual latest version

// @ts-ignore
export const stripe = new Stripe(process.env.STRIPE_API_KEY!, {
  apiVersion: latestSupportedVersion,
  typescript: true,
});
