"use client";

import Footer from "../components/footer/footer";
import TopNav from "../components/navbar/TopNav";

export default function MenuDrinksLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <TopNav />
      {children}
      <Footer />
    </section>
  );
}
