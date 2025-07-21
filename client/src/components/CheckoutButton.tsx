// components/CheckoutButton.tsx
import { loadStripe } from "@stripe/stripe-js";
import { useAppSelector } from "@/app/hooks";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY!);

export const CheckoutButton = () => {
  const items = useAppSelector((state) => state.cart.items);
  const restaurantId = useAppSelector((state) => state.cart.restaurant?._id);

  const {getAccessTokenSilently}=useAuth0();
  const handleCheckout = async () => {
    const authToken=await getAccessTokenSilently();

    const res = await fetch(`${import.meta.env.VITE_ORDER_BASE_URL}/payment/create-checkout-session`, {
      method: "POST",
      headers: { "Content-Type": "application/json",
Authorization:  `Bearer ${authToken}`
       },
      credentials: "include",
      body: JSON.stringify({ items, restaurantId,}),
    });

    const data = await res.json();
    const stripe = await stripePromise;
    await stripe?.redirectToCheckout({ sessionId: data.id });
  };

  return (
    <Button
      onClick={handleCheckout}
      className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 mt-4 rounded animate-bounce"
    >
      Place Order
    </Button>
  );
};
