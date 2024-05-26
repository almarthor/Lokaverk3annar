"use client";

import Footer from "../components/footer/footer";
import TopNav from "../components/navbar/TopNav";

export default function MenuDrinksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
