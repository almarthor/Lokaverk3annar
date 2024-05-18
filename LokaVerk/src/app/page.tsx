"use client";
import Caroucell from "./components/caroucell/caroucell_img";
import Footer from "./components/footer/footer";
import TopNav from "./components/navbar/TopNav";

export default function Home() {
  return (
    <div>
      <TopNav />
      <div className="bg-[url('/background.jpg')] bg-cover bg-center">
        <div className="lg:grid grid-cols-4 lg:px-56 md:px-32 pt-14 content-center justify-center">
          <div className="lg:grid grid-cols-4 col-span-3 border-2 border-black rounded-md m-5 bg-[#3E6053]">
            <div className="col-span-3 p-10 ">
              <Caroucell />
            </div>
            <div className="lg:pt-36 lg:border-l-2 text-center font-bold text-xl text-white p-5">
              <h1>OUR COOKS</h1>
            </div>
          </div>
          <div className="lg:grid grid-cols-4 border-2 border-black rounded-md col-span-1 m-5 bg-[#3E6053] hover:bg-[#C16757]">
            <a href="/menu_food" className=" col-span-4 row-span-2">
              <div className="col-span-4 text-center md:mt-10 font-bold text-xl text-white p-5">
                <h1>CLICK HERE TO ORDER</h1>
              </div>
            </a>
          </div>
          <div className="col-span-2 border-2 border-black rounded-md m-5 bg-[#3E6053]">
            <div>HI</div>
          </div>
          <div className="col-span-2 border-2 border-black rounded-md m-5 bg-[#C16757]">
            <h1 className="p-4 text-white font-bold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              praesentium culpa, aliquid tempora exercitationem nostrum alias
              nesciunt a facere. Sint consectetur expedita eaque officiis quae
              molestiae accusantium, vitae non magnam.
            </h1>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
