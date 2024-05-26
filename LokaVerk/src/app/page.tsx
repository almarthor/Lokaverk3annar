"use client";
import Caroucell from "./components/caroucell/caroucell_img";
import FindOrder from "./components/find_order/find_order";

export default function Home() {
  return (
    <div className=" font-serif">
      <div className="lg:grid grid-cols-6 lg:px-56 md:px-32 pt-14 content-center justify-center">
        <div className="col-span-2 row row-span-2 border-2 border-black rounded-md m-5 bg-[#C16757]">
          <h1 className="p-4 text-white font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            praesentium culpa, aliquid tempora exercitationem nostrum alias
            nesciunt a facere. Sint consectetur expedita eaque officiis quae
            molestiae accusantium, vitae non magnam.
          </h1>
        </div>
        <div className="lg:grid grid-cols-6 col-span-4 col-start-3 border-2 border-black rounded-md m-5 bg-[#3E6053]">
          <div className="col-span-4 row-span-3 p-10 ">
            <Caroucell />
          </div>
          <div className=" text-center font-bold text-xl text-white p-5 col-span-2 col-start-5 row-start-2">
            <h1>OUR COOKS</h1>
          </div>
        </div>
        <div className="lg:grid grid-cols-4 border-2 border-black rounded-md col-span-2 m-5 bg-[#3E6053] hover:bg-[#C16757]">
          <a href="/menu_food" className=" col-span-4 row-span-2">
            <div className="col-span-4 text-center md:mt-10 font-bold text-xl text-white p-5">
              <h1>CLICK HERE TO ORDER</h1>
            </div>
          </a>
        </div>
        <div className="col-span-2 border-2 border-black rounded-md m-5 bg-[#3E6053]">
          <FindOrder />
        </div>
      </div>
    </div>
  );
}
