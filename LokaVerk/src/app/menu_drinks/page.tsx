"use client";
import React, { useState, useEffect } from "react";
import { useOrder } from "../../context/OrderContext";
import { useRouter } from "next/navigation";

interface Drink {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
  strInstructions: string;
}

export default function DrinksMenu(): JSX.Element {
  const { setSelectedDrink } = useOrder();
  const [drinks, setDrinks] = useState<Drink[]>([]);
  const router = useRouter();

  useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setDrinks(data.drinks);
      })
      .catch((error) => console.error("Error fetching drinks:", error));
  }, []);

  const handleSelect = (drink: Drink) => {
    const selectedDrink = {
      id: drink.idDrink,
      name: drink.strDrink,
      description: drink.strInstructions,
      imageSource: drink.strDrinkThumb,
    };
    setSelectedDrink(selectedDrink);
    console.log("Selected Drink:", selectedDrink);
    setTimeout(() => {
      router.push("/menu_time");
    }, 100);
  };

  return (
    <div className="lg:px-56 md:px-36 sm:px-10">
      <div className="text-center">
        {drinks.map((drink) => (
          <div
            key={drink.idDrink}
            className="flex justify-between m-5 p-5 rounded-md bg-[#3E6053] hover:bg-[#C16757] hover:cursor-pointer sm:h-[300px]"
            onClick={() => handleSelect(drink)}
          >
            <img
              src={drink.strDrinkThumb}
              alt={drink.strDrink}
              className="border-2 border-black rounded-xl sm:w-auto sm:h-auto h-32 w-32"
            />
            <div className="w-[300px]">
              <h1 className="text-center text-white font-bold mt-5">
                {drink.strDrink}
              </h1>
              <p className="text-white mt-2">{drink.strInstructions}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
