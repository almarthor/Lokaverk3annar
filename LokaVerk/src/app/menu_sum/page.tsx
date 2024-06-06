"use client";
import React, { useState, useEffect } from "react";
import { useOrder } from "../../context/OrderContext";
import { maxWords } from "../utyls";

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

    const orderData = {
      email,
      dish: selectedFood,
      drinks: [selectedDrink],
      date: new Date(selectedDate).toISOString(),
      count: 1,
    };

    try {
      const response = await fetch("/api/create-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });

      const data = await response.json();

      if (data.success) {
        alert("Order placed successfully!");
      } else {
        alert("Error placing order: " + data.error);
      }
    } catch (error) {
      console.error("Error submitting order:", error);
      alert("An error occurred while placing the order.");
    }
  };

  return (
    <div className="bg-[url('/background.jpg')] bg-cover bg-fixed min-h-screen">
      <div className="grid grid-cols-5 px-10 pb-10 items-center text-center text-white h-fit">
        <div className="col-span-3 col-start-2">
          <h1 className="font-bold text-4xl text-[#c2a517] m-8">YOUR ORDER</h1>
        </div>
        <div className="bg-[#3E6053] row-start-2 col-start-2 col-span-3 border-b-2 border-b-[#C16757] rounded-t-lg p-3">
          <h1 className="font-bold text-2xl">Food</h1>
          <div className="lg:grid grid-cols-5">
            <div className="row-start-3 col-span-2">
              <img
                src={selectedFood?.imageSource}
                className="h-32 w-32 rounded-xl"
                alt=""
              />
            </div>
            <div className="col-start-4 col-span-2 row-start-3">
              <p className="font-bold text-2xl">{selectedFood?.name}</p>
              <p>
                {selectedFood ? maxWords(selectedFood.description, 30) : ""}
              </p>
            </div>
          </div>
        </div>

        <div className="row-start-3 col-start-2 col-span-3 bg-[#3E6053] border-b-2 border-b-[#C16757] p-3">
          <h1 className="font-bold text-2xl">Drink</h1>
          <div className="lg:grid grid-cols-5">
            <div className="row-start-2 col-span-2">
              <img
                src={selectedDrink?.imageSource}
                className="h-32 w-32 rounded-xl"
                alt=""
              />
            </div>
            <div className="col-start-4 col-span-2 row-start-2">
              <p className="font-bold text-2xl">{selectedDrink?.name}</p>
              <p>
                {selectedDrink ? maxWords(selectedDrink.description, 30) : ""}
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#3E6053] row-start-4 col-start-2 col-span-3 border-b-2 border-b-[#C16757] p-3">
          <h1 className="font-bold text-2xl">Date</h1>
          <p>{selectedDate}</p>
        </div>
        <div className="bg-[#3E6053] row-start-5 h-full col-start-2 col-span-3 rounded-b-lg p-3">
          <h1 className="font-bold text-2xl">Please enter your information</h1>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="text-black text-center p-1 mt-2"
          />
          <button className="p-1 bg-[#c2a517] md:ml-3" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
