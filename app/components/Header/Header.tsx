"use client";

import Image from "next/image";
import Link from "next/link";
import Login from "../login/page";

export default function Header() {
  return (
    <header className="bg-gray-800 w-full h-full p-6 flex items-start rounded-sm">
      <Image
        src="/logo.png"
        alt="logo"
        width={100}
        height={100}
        className="p-4 rounded-full"
      />
      <h1 className="bg-gray-800 text-white font-bold text-2xl p-10 mb-2">
        Dream House, a imobiliária que combina com você!
      </h1>
      <div className="flex items-center mx-auto text-2xl font-bold mr-4 mt-4">
        <ul className="p-4 bg-gray-800 text-white hover:underline cursor-pointer">
          Login
        </ul>
      
      </div>
    </header>
  );
}
