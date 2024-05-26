"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface Dish {
  id: string;
  name: string;
  description: string;
  imageSource: string;
}

interface Drink {
  id: string;
  name: string;
  description: string;
  imageSource: string;
}

interface OrderContextType {
  selectedFood: Dish | null;
  setSelectedFood: (food: Dish) => void;
  selectedDrink: Drink | null;
  setSelectedDrink: (drink: Drink) => void;
  selectedDate: string;
  setSelectedDate: (date: string) => void;
}

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export const useOrder = () => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error("useOrder must be used within an OrderProvider");
  }
  return context;
};

export const OrderProvider = ({ children }: { children: ReactNode }) => {
  const [selectedFood, setSelectedFood] = useState<Dish | null>(null);
  const [selectedDrink, setSelectedDrink] = useState<Drink | null>(null);
  const [selectedDate, setSelectedDate] = useState<string>("");

  return (
    <OrderContext.Provider
      value={{
        selectedFood,
        setSelectedFood,
        selectedDrink,
        setSelectedDrink,
        selectedDate,
        setSelectedDate,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};
