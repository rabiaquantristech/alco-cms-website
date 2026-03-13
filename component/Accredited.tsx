"use client";

import React from "react";
import { accreditedType } from "@/type/accreditedTypes";
// images
import accreditedBrands from '@/assets/accredited/accredited-brands.webp';



const accreditedTitle: accreditedType = {
  title: "Accredited By Leading Global Organizations",
  image: {
    src: accreditedBrands.src,
    alt: "Accredited Brands"
  }
};

export default function Accredited() {
  return (
    <section className="py-6 md:py-8 lg:py-12 xl:py-16 bg-medium-primary bg-cover bg-top-left w-full">
      <div className="container mx-auto sm:px-8 ">
        <h2 className="h2 text-center text-white mb-12">
          {accreditedTitle.title}
        </h2>
        <div className="flex flex-col justify-center">
        <img
          src={accreditedTitle.image.src ?? accreditedBrands.src}
          alt={accreditedTitle.image.alt ?? "Accredited Brands"}
          className="w-full h-[90px] sm:h-[120px] md:h-[150px] lg:h-[200px] object-contain "
        />
        </div>
      </div>
    </section>
  );
}