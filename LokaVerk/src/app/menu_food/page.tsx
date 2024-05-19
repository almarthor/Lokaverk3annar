"use client";
import React, { useEffect, useState } from "react";

interface Meal {
  id: string;
  photo: string;
  title: string;
  description: string;
}

export default function Food() {
  const [meal, setMeal] = useState<Meal | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const MAX_WORDS = 150;

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
          id: mealData.idMeal,
          photo: mealData.strMealThumb,
          title: mealData.strMeal,
          description: mealData.strInstructions,
        });
        setLoading(false);
      } catch (error) {
        setError("Error fetching the meal data");
        setLoading(false);
      }
    };

    fetchMeal();
  }, []);

  const handleRefresh = () => {
    setLoading(true);
    setError(null);
    setMeal(null);
    window.location.reload();
  };

  const maxWordsDesc = (description: string, maxWords: number) => {
    const words = description.split(" ");
    return words.length > maxWords
      ? words.slice(0, maxWords).join(" ") + "..."
      : description;
  };

  return (
    <div className="bg-[url('/background.jpg')] bg-cover bg-center min-h-screen">
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
              src={meal?.photo}
              alt={meal?.title}
              className="sm:w-[572px] sm:h-[572px] rounded-lg"
            />
          )}
        </div>
        <div className="col-start-3 col-span-2 row-span-2 border-2 border-black rounded-lg bg-[#c2a517] sm:w-[572px] sm:h-[572px] flex flex-col justify-between p-4">
          <div>
            <h1 className="font-bold text-xl">
              {meal ? meal.title : "Loading..."}
            </h1>
            <p>
              {meal ? maxWordsDesc(meal.description, MAX_WORDS) : "Loading..."}
            </p>
          </div>
          <div className="flex space-x-4">
            <button
              className="bg-red-500 text-white p-2 rounded-md"
              onClick={() => (window.location.href = "/menu_drinks")}
            >
              I WANT THAT
            </button>
            <button
              onClick={handleRefresh}
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
