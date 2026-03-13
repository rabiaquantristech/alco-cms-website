"use client"
import React, { useEffect, useState } from "react"
import Button from "./button"
import { BenefitsData } from "@/type/benefits"

import Benefit1 from '@/assets/Benefits/Benefit1.webp';
import Benefit2 from '@/assets/Benefits/Benefit2.webp';
import Benefit3 from '@/assets/Benefits/Benefit3.webp';
import Benefit4 from '@/assets/Benefits/Benefit4.webp';
import Benefit5 from '@/assets/Benefits/Benefit5.webp';
import Benefit6 from '@/assets/Benefits/Benefit6.webp';
import BenefitsCarousel from "./benefits-carousel/benefitsCarousel"

const benefitsData: BenefitsData = {
  title: "Benefits Of Neuro-Linguistic Programming",

  description:
    "The life you envision is within your reach. Take the first step toward becoming the best version of yourself.",

  slides: [
    {
      title: "Emotional Mastery",
      description: "Learn how to manage stress, anxiety, and overwhelming emotions to stay balanced and in control.",
      image: {
        src: Benefit1.src,
        alt: "Emotional Mastery"
      }
    },
    {
      title: "Career Advancement",
      description: "Identify clear career goals, develop leadership skills, and accelerate your professional growth.",
      image: {
        src: Benefit2.src,
        alt: "Career Advancement"
      }
    },
    {
      title: "Communication Mastery",
      description: "Express yourself clearly and connect deeply with others while influencing confidently and positively.",
      image: {
        src: Benefit3.src,
        alt: "Communication Mastery"
      }
    },
    {
      title: "Relationship Management",
      description: "Build meaningful connections, resolve conflicts, and strengthen personal and professional relationships.",
      image: {
        src: Benefit4.src,
        alt: "Relationship Management"
      }
    },
    {
      title: "Decision Making",
      description: "Master the art of making confident, effective decisions that align with your goals and values.",
      image: {
        src: Benefit5.src,
        alt: "Decision Making"
      }
    },
    {
      title: "Breaking Bad Habits",
      description: "Replace unproductive behaviors with positive habits that align with your personal and professional goals.",
      image: {
        src: Benefit6.src,
        alt: "Breaking Bad Habits"
      }
    }
  ]
}

export default function Benefits() {
  const data = benefitsData

  const [axis, setAxis] = useState<"x" | "y">("y")

  useEffect(() => {
    const checkScreen = () => {
      if (window.innerWidth <= 1023) {
        setAxis("x") // lg → horizontal
      } else {
        setAxis("y") // mobile → vertical
      }
    }

    checkScreen()
    window.addEventListener("resize", checkScreen)

    return () => window.removeEventListener("resize", checkScreen)
  }, [])

  return (
    <section className="px-4 bg-medium-neutral bg-left-top bg-cover w-full">

      <div className="container mx-auto grid grid-cols-12 gap-6">

        {/* Left Content */}
        <div className="col-span-12 lg:col-span-5 flex flex-col gap-6 py-16 ">

          <h3 className="h3 text-black">{data.title}</h3>

          <p className="custom-text-1 text-black">
            {data.description}
          </p>
          <div>
            <Button
              variant="secondary"
              size="medium"
              text="Explore More"
              href="#"
            />
          </div>



        </div>

        {/* Right Carousel */}
        <div className="col-span-12 lg:col-span-7">
          <div className="flex flex-col lg:flex-row gap-6">

            {/* Normal scroll */}
            <BenefitsCarousel
              slides={data.slides}
              direction="forward"
              options={{
                axis: axis,
                align: "start",
                loop: true
              }}
            />

            {/* Reverse scroll */}
            <BenefitsCarousel
              slides={data.slides}
              direction="backward"
              options={{
                axis: axis,
                align: "end",
                loop: true
              }}
            />

          </div>


        </div>

      </div>

    </section>
  )
}