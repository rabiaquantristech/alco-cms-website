"use client";

import React from "react";
import Button from "./button";
import { ALCOCenterData } from "@/type/aLCOCenter";

const aLCOCenterData: ALCOCenterData = {
  title: "Why Train with Arslan Larik & Company (AL&CO)?",

  description:
    "Train with Arslan Larik & Company (AL&CO) to gain proven strategies, expert guidance, and personalized support that help you achieve breakthrough results and sustainable growth.",
  button1: {
    text: "Learn More",
    link: "/why-train-with-alco"
  },
  button2: {
    text: "Get Started",
    link: "/get-started"
  }
};

export default function ALCOCenter() {
  const data = aLCOCenterData;

  return (
    <section className="py-6 md:py-8 lg:py-12 xl:py-16 px-4 bg-image-alco-center bg-cover bg-top-left w-full">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 my-8">
          <div className="flex flex-col justify-start ">
            <h3 className="h3 text-white text-start ">
              {data.title}
            </h3>
            <p className="custom-text-1 font-light text-white text-start my-4">
              {data.description}
            </p>
            <div className="mt-4 flex gap-4">
              <Button variant="secondaryBlack" size="medium" text={data.button1.text} href={data.button1.link} className='my-auto' />
              <Button variant="white" size="medium" text={data.button2.text} href={data.button2.link} className='my-auto' />
            </div>
          </div>
          <div className="flex flex-col justify-center pt-1">
            
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-4 my-8">

          
        </div>
      </div>
    </section>
  );
}
