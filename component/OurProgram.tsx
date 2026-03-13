"use client";

import React from "react";
import Button from "./button";
import Level1 from "@/assets/our-program/level1_image.webp";
import { OurProgramData } from "@/type/ourProgram";
import OurProgramCarousel from "./our-program-carousel/ourProgramCarousel";


const ourProgramData: OurProgramData = {
  title: "Our Programs",

  description:
    "Our program is designed to help you break through limiting beliefs, build a powerful mindset, and create lasting transformation in your personal and professional life.",
  slides: [
    {
      title: "NLP Practitioner Certification",
      description: "Three Certifications. One Transformational Experience.",
      button: {
        text: "Learn More",
        link: "#"
      },
      image: {
        src: Level1.src,
        alt: "Arslan Larik"
      }
    },
    {
      title: "NLP Practitioner Certification",
      description: "Three Certifications. One Transformational Experience.",
      button: {
        text: "Learn More",
        link: "#"
      },
      image: {
        src: Level1.src,
        alt: "Arslan Larik"
      }
    },
    {
      title: "NLP Practitioner Certification",
      description: "Three Certifications. One Transformational Experience.",
      button: {
        text: "Learn More",
        link: "#"
      },
      image: {
        src: Level1.src,
        alt: "Arslan Larik"
      }
    },
    {
      title: "NLP Practitioner Certification",
      description: "Three Certifications. One Transformational Experience.",
      button: {
        text: "Learn More",
        link: "#"
      },
      image: {
        src: Level1.src,
        alt: "Arslan Larik"
      }
    }
  ]
}

export default function OurProgram() {
  const data = ourProgramData;

  return (
    <section className="py-16 bg-dark-primary bg-cover bg-top-left w-full">
      <div className="container mx-auto px-8 ">
        <div className="grid grid-cols-1 lg:grid-cols-12  gap-2 my-8">
          <div className="flex flex-col justify-start col-span-5">
            <h3 className="h3 text-white text-start">
              {data.title}
            </h3>
          </div>
          <div className="flex flex-col justify-center col-span-7 pt-1">
            <p className="custom-text-1 font-light text-white text-start mb-8">
              {data.description}
            </p>
          </div>
        </div>
      </div>
      <div>
        <OurProgramCarousel slides={data.slides || []} />
      </div>
    </section>
  );
}
