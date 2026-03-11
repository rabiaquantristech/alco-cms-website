import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import { DotButton, useDotButton } from "../emblaCarouselDot"
import Level1 from "@/assets/our-program/level1_image.webp";
import useEmblaCarousel from 'embla-carousel-react'
import { OurProgramSlideType } from '@/type/ourProgram'
import Button from '../button'
import "@/component/our-program-carousel/ourProgramCarousel.css"


type PropType = {
  slides: OurProgramSlideType[]
  options?: EmblaOptionsType
}

const OurProgramCarousel = ({ slides, options }: PropType) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    // loop: true
  })

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

  return (
    <section className="our_program_embla">
      <div className="our_program_embla__viewport" ref={emblaRef}>
        <div className="our_program_embla__container">
          {slides.map((slide, index) => (
            <div
              className={`our_program_embla__slide ${index === selectedIndex ? "is-selected" : ""
                }`}
              key={index}
            >
              <div className="our_program_embla__slide__box bg-gradient-secondary-primary grid grid-cols-12  gap-2 rounded-lg">
                <div className="flex flex-col justify-start col-span-9">
                  <h6 className='text-md md:text-lg lg:text-xl text-white'>Level {index + 1}</h6>
                  <h5 className="h5 text-white text-start">
                    {slide.title}
                  </h5>
                  <p className="custom-text-1 font-light text-white text-start ">
                    {slide.description}
                  </p>
                </div>
                <div className="flex flex-col justify-center col-span-3">
                  <Button variant="primary" size="medium" text="Learn More" className='my-auto' />
                </div>
                <div className="flex flex-col justify-center col-span-12 mt-4">
                  <img
                    src={slide.image?.src ?? Level1.src}
                    alt={slide.image?.alt ?? "Arslan Larik"}
                    className="w-full h-auto object-cover rounded-xl"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Dots */}
      <div className="our_program_embla__controls mt-8 flex justify-center">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => onDotButtonClick(index)}
            className={`our_program_embla__dot ${index === selectedIndex ? "our_program_embla__dot--selected" : ""}`}
          />
        ))}
      </div>
    </section>
  )
}

export default OurProgramCarousel