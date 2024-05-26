"use client";
import React, { useState, useEffect } from "react";

interface Drink {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
  strInstructions: string;
}

export default function DrinksMenu(): JSX.Element {
  const [drinks, setDrinks] = useState<Drink[]>([]);
  const MAX_WORDS = 15;

  useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a")
      .then((response) => response.json())
      .then((data) => setDrinks(data.drinks))
      .catch((error) => console.error("Error fetching drinks:", error));
  }, []);

  const maxWordsDesc = (description: string, maxWords: number) => {
    const words = description.split(" ");
    return words.length > maxWords
      ? words.slice(0, maxWords).join(" ") + "..."
      : description;
  };

  return (
    <div className="lg:px-56 md:px-36 sm:px-10">
      <div className="text-center">
        {drinks.map((drink) => (
          <a onClick={() => (window.location.href = "/menu_time")}>
            <div
              key={drink.idDrink}
              className="flex justify-between m-5 p-5 rounded-md bg-[#3E6053] hover:bg-[#C16757] hover:cursor-pointer  sm:h-[300px]"
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
                  {maxWordsDesc(drink.strInstructions, MAX_WORDS)}
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
