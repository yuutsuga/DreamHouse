"use client";

import Image from "next/image";

export default function Product() {
  return (
    <div className="flex border-2 border-gray-500 gap-6 p-2 w-[1200px] rounded-md ml-2 mt-2 mb-2">
      <Image
        src={"/casa.png"}
        alt="casa"
        width={320}
        height={320}
        className="p-1"
      />
      <h2 className="font-bold absolute ml-[370px] mt-[20px] text-xl">
        Casa com 1 quarto, 1 banheiro e 1 cozinha, 80m²
      </h2>
      <p className="relative ml-6 mt-[150px]">R$1.050 mensal</p>
    </div>
  );
}
