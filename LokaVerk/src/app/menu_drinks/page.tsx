"use client";
import React, { useState, useEffect } from "react";
import { useOrder } from "../../context/OrderContext";
import { useRouter } from "next/navigation";
import { maxWords } from "../utyls";

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
          throw new Error("Netid er ekki að virka watt");
        }
        return response.json();
      })
      .then((data) => {
        setDrinks(data.drinks);
      })
      .catch((error) => console.error("Ohh veseeeen:", error));
  }, []);

  const handleSelect = (drink: Drink) => {
    const selectedDrink = {
      id: drink.idDrink,
      name: drink.strDrink,
      description: drink.strInstructions,
      imageSource: drink.strDrinkThumb,
    };
    setSelectedDrink(selectedDrink);
    setTimeout(() => {
      router.push("/menu_time");
    }, 100);
  };

  return (
    <div className="bg-[url('/background.jpg')] bg-cover bg-fixed min-h-screen">
      <div className="lg:px-72 md:px-36 sm:px-10 px-5 pt-5">
        <div className="text-center">
          {drinks.map((drink) => (
            <div
              key={drink.idDrink}
              className="flex justify-between mb-5 p-5 rounded-md bg-[#3E6053] bg-opacity-90 hover:bg-[#C16757] hover:cursor-pointer sm:h-[300px]"
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
                <p className="text-white mt-2">
                  {drink ? maxWords(drink.strInstructions, 35) : "loading"}{" "}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
