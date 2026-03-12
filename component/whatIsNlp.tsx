"use client";

import React from "react";
import Button from "./button";
import { WhatIsNlpData } from "@/type/whatIsNlp";
// import NlpVideo from "/videos/What-is-NLP.mp4";

const whatIsNlpData: WhatIsNlpData = {
  title: "What Is Neuro-Linguistic Programming?",
  video: "https://arslanlarik.com/wp-content/uploads/2025/03/What-is-NLP.mp4",
  description:
    "What if you could master your thoughts, emotions, and behaviors to create a life of purpose and freedom? NLP is a transformative system of tools and techniques that empowers you to master your thoughts, emotions, and behaviors. Imagine having the ability to take full control of your life—reprogramming your mind to break free from limitations, achieve clarity, and create unstoppable momentum toward your goals.",
  button: {
    text: "Enroll Now",
    link: "https://arslanlarik.com/enroll-now/",
  },
}

export default function WhatIsNlp() {
  const data = whatIsNlpData;

  return (
    <section className="py-16 px-4 bg-dark-primary bg-cover bg-top-left w-full">
      <div className="container mx-auto px-4">

        <h3 className="h3 text-white text-start">
          {data.title}
        </h3>

        <div className="my-8">
          {/* <video
            controls
            width="100%"
            height="100%"
            preload="none"
            aria-label="Video player"
            className="h-[450px]"
          > */}
          <video
            controls
            preload="metadata"
            className="w-full h-[450px] object-cover rounded-lg"
          >
            <source src={data?.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <p className="custom-text-1 font-light text-white text-start mb-8">
          {data.description}
        </p>

        <Button
          text={data.button.text}
          href={data.button.link}
          variant="secondary"
        />

      </div>
    </section>
  );
}