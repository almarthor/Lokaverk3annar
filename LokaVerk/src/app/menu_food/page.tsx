"use client";
export default function Food() {
  return (
    <div className="bg-[url('/background.jpg')] bg-cover bg-center">
      <h1 className="font-bold text-3xl text-center pt-5 text-white ">
        FOOD SELECTION
      </h1>
      <div className="lg:grid flex flex-col items-center grid-cols-4 lg:px-56 md:px-32 lg:space-x-10 lg:space-y-10">
        <div className=" col-span-2 row-span-2 border-2 border-black  m-5 rounded-lg bg-[#c2a517]">
          <img src="/logo.png" alt="" />
        </div>
        <div className=" col-start-3 col-span-2 row-span-2 border-2 border-black  m-5 rounded-lg bg-[#c2a517]">
          <div className="p-2">
            <h1 className="p-2">MATUR:</h1>
            <h1 className="p-2">KRÓNUR:</h1>
            <p className="p-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ut
              perferendis ducimus eligendi vero quaerat, reprehenderit officiis
              voluptates quia reiciendis commodi eius nemo dolorem rerum cum
              fugit dolor est? Sunt.
            </p>
          </div>
          <button className="bg-red-500 text-white p-2 rounded-md m-3">
            I WANT THAT
          </button>
        </div>
        <div className=" col-start-1 col-span-2 ">
          <button className=" bg-red-500 text-white p-2 rounded-xl text-2xl font-bold mb-10">
            I DONT WANT THAT
          </button>
        </div>
      </div>
    </div>
  );
}
