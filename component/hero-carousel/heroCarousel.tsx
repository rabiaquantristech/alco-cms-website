import React from "react"
import { EmblaOptionsType } from "embla-carousel"
import { DotButton, useDotButton } from "../emblaCarouselDot"
import useEmblaCarousel from "embla-carousel-react"
import Button from "@/component/button";
import "@/component/hero-carousel/heroCarousel.css"
import { HeroPost } from "@/type/heroTypes"
// images
import heroSlide1 from "@/assets/hero/hero_slide1.webp";

type PropType = {
  slides: HeroPost[]
  options?: EmblaOptionsType
  onEditSlide?: (slide: HeroPost) => void
}

const HeroCarousel = ({ slides, options, onEditSlide }: PropType) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options)
  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi)
  console.log(slides)
  return (
    <section className="hero_embla py-16 " style={{
      background: `linear-gradient(90.5deg, #000000 -3.72%, rgba(0, 0, 0, 0) 104.47%), url(${heroSlide1.src})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}>
      {/* <div className="max-w-screen-xl mx-auto border px-4 2xl:px-0 "> */}
      <div className="container mx-auto border px-4 2xl:px-0 ">
        <div className="hero_embla__viewport " ref={emblaRef}>
          <div className="hero_embla__container">
            {slides.map((slide) => (
              <div className="hero_embla__slide" key={slide?._id}>
                <div className="hero_embla__slide__content mb-4 rounded-md text-white relative">
                  <h1 className="h1 text-white overflow-hidden">{slide?.title?.line1}</h1>
                  <h1 className="h1 text-secondary overflow-hidden">{slide?.title?.line2}</h1>
                  <p className="custom-text1 my-4 font-light max-w-[700px] w-full">{slide?.description}</p>
                  <div className="mt-4 flex gap-2">
                    {slide.button1?.text && (
                      <Button
                        text={slide.button1.text}
                        href={slide.button1.link}
                        variant="secondary"
                      // iconLeft={<svg>...</svg>}
                      />
                    )}
                    {slide.button2?.text && (
                      <Button
                        text={slide.button2.text}
                        href={slide.button2.link}
                        variant="white"
                      // iconLeft={<svg>...</svg>}
                      />
                    )}
                  </div>

                  {/* {onEditSlide && (
                  <button
                    className="absolute top-2 right-2 bg-white text-blue-500 px-2 py-1 rounded"
                    onClick={() => onEditSlide(slide)}
                  >
                    Edit
                  </button>
                )} */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Dots */}
      <div className="hero_embla__controls  max-w-screen-xl mx-auto ">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => onDotButtonClick(index)}
            className={`hero_embla__dot ${index === selectedIndex ? "hero_embla__dot--selected" : ""}`}
          />
        ))}
      </div>
    </section>
  )
}

export default HeroCarousel