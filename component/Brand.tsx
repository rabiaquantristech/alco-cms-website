"use client";

import React from "react";
import BrandCarousel from "./brand-carousel/brandCarousel";
import { BrandTitle, brandType } from "@/type/brandTypes";
// images
import brand1 from '@/assets/brand/brand_slide1.webp';
import brand2 from '@/assets/brand/brand_slide2.webp';
import brand3 from '@/assets/brand/brand_slide3.webp';
import brand4 from '@/assets/brand/brand_slide4.webp';
import brand5 from '@/assets/brand/brand_slide5.webp';


// Example image data
const brandImages: brandType[] = [
  { _id: '1', image: brand1, alt: 'Brand 1' },
  { _id: '2', image: brand2, alt: 'Brand 2' },
  { _id: '3', image: brand3, alt: 'Brand 3' },
  { _id: '4', image: brand4, alt: 'Brand 4' },
  { _id: '5', image: brand5, alt: 'Brand 5' },
];
const brandTitle: BrandTitle = "Trusted By Global Organizations";

export default function Brand() {
  return (
    <section className="relative max-w-screen-xl mx-auto py-16 px-4">
        <h2 className="h2 text-center mb-12">
            {brandTitle}
        </h2>
      <BrandCarousel images={brandImages} />
    </section>
  );
}