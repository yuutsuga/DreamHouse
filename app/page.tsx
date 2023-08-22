"use client";

import Image from "next/image";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";

export default function Home() {
  return (
    <main>
      <div>
        <Products />
      </div>
    </main>
  );
}
