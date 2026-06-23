const config = {
  apiUrl: process.env.NEXT_PUBLIC_API_URL || "",
  stripeKey: process.env.NEXT_PUBLIC_STRIPE_KEY || "",
  bestSellerId: process.env.NEXT_PUBLIC_BEST_SELLER_ID || "",
};

export default config;
