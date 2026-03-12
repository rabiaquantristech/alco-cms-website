"use client";

import React from "react";
import Button from "./button";
import { AralanLarikIntroData } from "@/type/aralanLarikIntro";
import ArsalanLarik from "@/assets/intro-arsalan-larik/arsalan-larik.webp";


const aralanLarikIntroData: AralanLarikIntroData = {
  title: "What Is Neuro-Linguistic Programming?",

  description:
    "What if you could master your thoughts, emotions, and behaviors to create a life of purpose and freedom? NLP is a transformative system of tools and techniques that empowers you to master your thoughts, emotions, and behaviors.",

  name: "Arslan Larik",

  designation: "Founder of Arslan Larik",

  specification: `
  <p>Are you ready to learn from someone who has already transformed over <strong>500,000 lives?</strong></p>

  <p><strong>Arslan Larik</strong>, Pakistan’s first Certified Master Trainer of Neuro-Linguistic Programming and Hypnotherapy via The American Board of Neuro-Linguistic Programming and Hypnotherapy (ABNLP-ABH), is a visionary leader who transforms lives globally.</p>

  <p>As the Master Trainer and Managing Director of AL&CO, he has impacted thousands through coaching, training and leadership. His expertise includes <strong>NLP, Hypnotherapy, Timeline Therapy Techniques, NLP Coaching, and Behavioral Re-engineering.</strong></p>
  `,
}

export default function AralanLarikIntro() {
  const data = aralanLarikIntroData;

  return (
    <section className="py-16 px-4 bg-light-neutral bg-cover bg-top-left w-full">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 my-8">
          <div className="flex flex-col justify-center">
            <h3 className="h3 text-black text-start">
              {data.title}
            </h3>
          </div>
          <div className="flex flex-col justify-center pt-1">
            <p className="custom-text-1 font-light text-black text-start mb-8">
              {data.description}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-12 lg:grid-cols-2 gap-4 lg:gap-2 my-8">
          <div className="flex flex-col justify-center md:justify-end order-last md:order-none col-span-12 md:col-span-7 lg:col-span-1">
            <h4 className="h4 font-semibold text-primary text-start">
              {data.name}
            </h4>
            <h5 className="h5 font-medium text-black text-start">
              {data.designation}
            </h5>
            <div
              className="custom-text-1 font-light text-black space-y-4"
              dangerouslySetInnerHTML={{ __html: data.specification }}
            />
          </div>
          <div className="flex justify-center md:justify-end col-span-12 md:col-span-5 lg:col-span-1">
            <img
              src={data.image?.src ?? ArsalanLarik.src}
              alt={data.image?.alt ?? "Arslan Larik"}
              className="w-full max-w-md object-cover rounded-xl"
            />

          </div>
        </div>
      </div>
    </section>
  );
}
