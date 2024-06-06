"use client";
import React, { useEffect, useState } from "react";
import { useOrder } from "../../context/OrderContext";
import { useRouter } from "next/navigation";
import { maxWords } from "../utyls";

interface Meal {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strInstructions: string;
}

export default function Food() {
  const { setSelectedFood } = useOrder();
  const [meal, setMeal] = useState<Meal | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchMeal = async () => {
      try {
        const response = await fetch(
          "https://themealdb.com/api/json/v1/1/random.php"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        const mealData = data.meals[0];
        setMeal({
          idMeal: mealData.idMeal,
          strMeal: mealData.strMeal,
          strMealThumb: mealData.strMealThumb,
          strInstructions: mealData.strInstructions,
        });
        setLoading(false);
      } catch (error) {
        setError("Error fetching the meal data");
        setLoading(false);
      }
    };

    fetchMeal();
  }, []);

  const handleSelect = () => {
    if (meal) {
      const selectedDish = {
        id: meal.idMeal,
        name: meal.strMeal,
        description: meal.strInstructions,
        imageSource: meal.strMealThumb,
      };
      setSelectedFood(selectedDish);
      console.log("Selected Food:", selectedDish);
      setTimeout(() => {
        router.push("/menu_drinks");
      }, 100);
    }
  };

  return (
    <div className="bg-[url('/background.jpg')] bg-cover bg-fixed min-h-screen">
      <h1 className="font-bold text-3xl text-center pt-5 text-white">
        FOOD SELECTION
      </h1>
      <div className="lg:grid flex flex-col items-center grid-cols-4 lg:px-56 md:px-32 lg:space-x-10">
        <div className="col-span-2 row-span-2 border-2 border-black m-5 rounded-lg bg-[#c2a517] flex justify-center items-center">
          {loading ? (
            <p className="w-[572px] h-[572px] flex items-center justify-center">
              Loading...
            </p>
          ) : error ? (
            <p className="w-[572px] h-[572px] flex items-center justify-center">
              {error}
            </p>
          ) : (
            <img
              src={meal?.strMealThumb}
              alt={meal?.strMeal}
              className="sm:w-[572px] sm:h-[572px] rounded-lg"
            />
          )}
        </div>
        <div className="col-start-3 col-span-2 row-span-2 border-2 border-black rounded-lg bg-[#c2a517] sm:w-[572px] sm:h-[572px] flex flex-col justify-between p-4">
          <div>
            <h1 className="font-bold text-xl">
              {meal ? meal.strMeal : "Loading..."}
            </h1>
            <p>{meal ? maxWords(meal.strInstructions, 100) : "Loading..."}</p>
          </div>
          <div className="flex space-x-4">
            <button
              className="bg-red-500 text-white p-2 rounded-md"
              onClick={handleSelect}
            >
              I WANT THAT
            </button>
            <button
              onClick={() => window.location.reload()}
              className="bg-red-500 text-white p-2 rounded-md"
            >
              I DON'T WANT THAT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
