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
  setSelectedFood: (food: Dish | null) => void;
  selectedDrink: Drink | null;
  setSelectedDrink: (drink: Drink | null) => void;
  selectedDate: string;
  setSelectedDate: (date: string) => void;
  orderFetchedByEmail: boolean;
  setOrderFetchedByEmail: (value: boolean) => void;
}

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export const useOrder = () => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error("wadd that a ad vera context");
  }
  return context;
};

export const OrderProvider = ({ children }: { children: ReactNode }) => {
  const [selectedFood, setSelectedFood] = useState<Dish | null>(null);
  const [selectedDrink, setSelectedDrink] = useState<Drink | null>(null);
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [orderFetchedByEmail, setOrderFetchedByEmail] =
    useState<boolean>(false);

  return (
    <OrderContext.Provider
      value={{
        selectedFood,
        setSelectedFood,
        selectedDrink,
        setSelectedDrink,
        selectedDate,
        setSelectedDate,
        orderFetchedByEmail,
        setOrderFetchedByEmail,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};
