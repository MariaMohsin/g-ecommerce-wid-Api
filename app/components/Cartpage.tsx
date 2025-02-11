

'use client';
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

interface CartItem {
  _id: string;
  image: string;
  title: string;
  price: number;
  quantity: number;
  size?: string;
  color?: string;
}

const CartPage = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await fetch("/api/cart");
        if (!response.ok) {
          throw new Error("Failed to fetch cart items");
        }
        const data = await response.json();
        if (data.success) {
          setCartItems(data.cartItems);
        }
      } catch (err) {
        setError("Error fetching cart. Please try again.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCart();
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold">Your Cart</h2>

      {/* Show loading state */}
      {loading && <p>Loading cart items...</p>}

      {/* Show error message if fetch fails */}
      {error && <p className="text-red-500">{error}</p>}

      {/* Show empty cart message */}
      {!loading && !error && cartItems.length === 0 && (
        <div className="text-center py-10">
          <p className="text-gray-500">Your cart is empty.</p>
          <Link href="/shop" className="text-blue-500 underline">Continue Shopping</Link>
        </div>
      )}

      {/* Render cart items */}
      {!loading && !error && cartItems.length > 0 && (
        <div>
          {cartItems.map((item) => (
            <div key={item._id} className="border p-4 my-2 flex justify-between items-center">
              <Image
                src={item.image}
                alt={item.title}
                width={80} 
                height={80} 
                className="w-20 h-20 object-cover"
              />
              <div>
                <h3 className="font-semibold">{item.title}</h3>
                <p>Price: ${item.price}</p>
                <p>Quantity: {item.quantity}</p>
                {item.size && <p>Size: {item.size}</p>}
                {item.color && <p>Color: {item.color}</p>}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CartPage;
