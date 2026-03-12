"use client";

import React from "react";
import Button from "./button";
import ArsalanLarik from "@/assets/intro-arsalan-larik/arsalan-larik.webp";
import { WhyTrainWithALData } from "@/type/whyTrainWithAL";
// images
import Train1 from '@/assets/whyTrainWithAL/Train1.webp';
import Train2 from '@/assets/whyTrainWithAL/Train2.webp';
import Train3 from '@/assets/whyTrainWithAL/Train3.webp';
import Train4 from '@/assets/whyTrainWithAL/Train4.webp';
import Train5 from '@/assets/whyTrainWithAL/Train5.webp';
import Train6 from '@/assets/whyTrainWithAL/Train6.webp';

const whyTrainWithALData: WhyTrainWithALData = {
  title: "Why Train with Arslan Larik & Company (AL&CO)?",

  description:
    "Train with Arslan Larik & Company (AL&CO) to gain proven strategies, expert guidance, and personalized support that help you achieve breakthrough results and sustainable growth.",
  points: [
    {
      title: "Train with Pakistan’s 1st Master Trainer",
      image: {
        src: Train1.src,
        alt: "Train with Pakistan’s 1st Master Trainer"
      },
    },
    {
      title: "Pioneers in Online NLP Trainings",
      image: {
        src: Train2.src,
        alt: "Pioneers in Online NLP Trainings"
      },
    },
    {
      title: "Unlimited Revise & Revisit Opportunities",
      image: {
        src: Train3.src,
        alt: "Unlimited Revise & Revisit Opportunities"
      },
    },
    {
      title: "Advanced Self-Study Resources",
      image: {
        src: Train4.src,
        alt: "Advanced Self-Study Resources"
      },
    },
    {
      title: "Expand Your Global Network",
      image: {
        src: Train5.src,
        alt: "Expand Your Global Network"
      },
    },
    {
      title: "Lifetime Support from Experts",
      image: {
        src: Train6.src,
        alt: "Lifetime Support from Experts"
      },
    }
  ]
}

export default function WhyTrainWithAL() {
  const data = whyTrainWithALData;

  return (
    <section className="py-16 px-4 bg-light-neutral bg-cover bg-top-left w-full">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 my-8">
          <div className="flex flex-col justify-start ">
            <h3 className="h3 text-black text-start">
              {data.title}
            </h3>
          </div>
          <div className="flex flex-col justify-center pt-1">
            <p className="custom-text-1 font-light text-black text-start ">
              {data.description}
            </p>
            <div className="mt-4">
              <Button variant="primary" size="medium" text="Learn More" className='my-auto' />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 my-12">

          {data.points.map((point, index) => (
            <div key={index} className="flex items-center text-center gap-4 p-6 border rounded-lg shadow-md">
              <img src={point.image.src} alt={point.image.alt} className="w-16 h-16 object-cover " />
              <p className="text-md lg:text-lg font-medium text-black/85 text-start">
                {point.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
