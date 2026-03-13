"use client"

import React from "react"
import { EmblaOptionsType } from "embla-carousel"
import AutoScroll from "embla-carousel-auto-scroll"
import useEmblaCarousel from "embla-carousel-react"
import { BenefitsData } from "@/type/benefits"
import '@/component/benefits-carousel/benefitsCarousel.css'

type PropType = {
  slides: BenefitsData["slides"]
  options?: EmblaOptionsType
  direction?: "forward" | "backward"
}

const BenefitsCarousel = ({ slides, options, direction = "forward" }: PropType) => {
  const [emblaRef] = useEmblaCarousel(options, [
    AutoScroll({
      speed: 0.6,
      direction,
      stopOnInteraction: false,
      stopOnMouseEnter: true
    })
  ])

  return (
    <section className="benefits_embla">
      <div className="benefits_embla__viewport" ref={emblaRef}>
        <div className="benefits_embla__container ">

          {slides.map((slide, index) => (
            <div className="benefits_embla__slide" key={index}>

              <div className="flex flex-col gap-4 p-6 border rounded-lg shadow-md bg-white">
                <div className="flex items-center gap-4 border-b pb-4">
                  <img
                    src={slide.image.src}
                    alt={slide.image.alt}
                    className="w-14 h-14 object-contain"
                  />
                  <h5 className="font-medium text-lg text-black">
                    {slide.title}
                  </h5>
                </div>
                <div>
                  <p className="text-sm text-black/70">
                    {slide.description}
                  </p>
                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}

export default BenefitsCarousel
