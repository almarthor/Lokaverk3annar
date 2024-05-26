"use client";
import React, { useState, useEffect } from "react";
import { useOrder } from "../../context/OrderContext";

export default function SumRes() {
  const { selectedFood, selectedDrink, selectedDate } = useOrder();
  const [email, setEmail] = useState<string>("");

  useEffect(() => {
    console.log("Selected Food in SumRes:", selectedFood);
    console.log("Selected Drink in SumRes:", selectedDrink);
    console.log("Selected Date in SumRes:", selectedDate);
  }, [selectedFood, selectedDrink, selectedDate]);

  const handleSubmit = async () => {
    if (!selectedFood || !selectedDrink || !selectedDate || !email) {
      alert("Please ensure all fields are filled out correctly.");
      return;
    }

    const response = await fetch("/api/create-order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        dish: selectedFood,
        drinks: [selectedDrink],
        date: selectedDate,
        count: 1,
      }),
    });

    const data = await response.json();
    if (data.success) {
      alert("Order placed successfully!");
    } else {
      alert("Error placing order: " + data.error);
    }
  };

  return (
    <div>
      <div>
        <h1>Food</h1>
        <p>{selectedFood?.name}</p>
      </div>
      <div>
        <h1>Drink</h1>
        <p>{selectedDrink?.name}</p>
      </div>
      <div>
        <h1>Date</h1>
        <p>{selectedDate}</p>
      </div>
      <h1>Please enter your email</h1>
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
