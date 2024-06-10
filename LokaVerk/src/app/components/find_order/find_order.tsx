"use client";
import React, { useState } from "react";
import { useOrder } from "../../../context/OrderContext";
import { useRouter } from "next/navigation";

const FindOrder = () => {
  const [email, setEmail] = useState<string>("");
  const {
    setSelectedFood,
    setSelectedDrink,
    setSelectedDate,
    setOrderFetchedByEmail,
  } = useOrder();
  const router = useRouter();

  const handleFindOrder = async () => {
    try {
      const response = await fetch(
        `/api/create-order?email=${encodeURIComponent(email)}`
      );
      const data = await response.json();

      if (response.ok) {
        setSelectedFood(data.dish);
        setSelectedDrink(data.drinks[0]);
        setSelectedDate(data.date);
        setOrderFetchedByEmail(true);
        router.push("/menu_sum");
      } else {
        alert(data.error || "Error fetching order");
      }
    } catch (error) {
      console.error("Error fetching order:", error);
      alert("An error occurred while fetching the order.");
    }
  };

  return (
    <div className="p-3">
      <h1 className="font-bold text-white p-2">DID YOU ORDER ALREADY?</h1>
      <p className="mb-6 text-white">
        You can find your bitsy order by giving us your email address
      </p>
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="p-2 mr-2 rounded-xl"
      />
      <button
        className="rounded-md bg-slate-100 p-2 mt-2"
        onClick={handleFindOrder}
      >
        Find Order
      </button>
    </div>
  );
};

export default FindOrder;
