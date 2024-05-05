"use client";

import Caroucell from "./components/caroucell/caroucell_img";
import Footer from "./components/footer/footer";
import TopNav from "./components/navbar/TopNav";

export default function Home() {
  return (
    <div>
      <TopNav />
      <div>
        <Caroucell />
      </div>
      <Footer />
    </div>
  );
}
