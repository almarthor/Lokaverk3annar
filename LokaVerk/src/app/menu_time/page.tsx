"use client";
import React, { useEffect, useRef } from "react";
import { useOrder } from "../../context/OrderContext";
import { useRouter } from "next/navigation";

export default function TimeChooser() {
  const { setSelectedDate } = useOrder();
  const dateTimePickerRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    const dateTimePicker = dateTimePickerRef.current;

    if (dateTimePicker) {
      const currentDate = new Date();
      const formattedDate = currentDate.toISOString().slice(0, 16); // YYYY-MM-DDTHH:MM

      dateTimePicker.min = formattedDate;
    }
  }, []);

  const handleSubmit = () => {
    if (dateTimePickerRef.current) {
      setSelectedDate(dateTimePickerRef.current.value);
      console.log("Selected Date:", dateTimePickerRef.current.value);
      setTimeout(() => {
        router.push("/menu_sum");
      }, 100);
    }
  };

  return (
    <div className="bg-[url('/background.jpg')] bg-cover bg-fixed min-h-screen">
      <div className="grid grid-cols-4 grid-rows-4 p-6">
        <div className="col-span-4 row-span-1 bg-slate-500 text-center h-auto w-full">
          <h1 className="text-4xl text-white pt-10">
            When do you want to pick it up?
          </h1>
        </div>
        <div className="grid sm:col-start-2 sm:col-span-2 col-span-4 text-center bg-slate-400 w-full p-6 h-[150px] mt-5">
          <input
            type="datetime-local"
            ref={dateTimePickerRef}
            className="px-3 py-1 m-2"
          />
          <button
            className="bg-white text-center mx-28 p-2 rounded-md font-bold"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
