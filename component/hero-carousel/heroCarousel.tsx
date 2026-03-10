import React from "react"
import { EmblaOptionsType } from "embla-carousel"
import { DotButton, useDotButton } from "./heroCarouselDot"
import useEmblaCarousel from "embla-carousel-react"
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
    <section className="embla" style={{
      background: `linear-gradient(90.5deg, #000000 -3.72%, rgba(0, 0, 0, 0) 104.47%), url(${heroSlide1.src})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}>
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide) => (
            <div className="embla__slide" key={slide?._id}>
              <div className="embla__slide__content p-6 rounded-md text-white relative">
                <h2 className="text-2xl font-bold mb-2">{slide?.title}</h2>
                <p>{slide?.description}</p>

                {onEditSlide && (
                  <button
                    className="absolute top-2 right-2 bg-white text-blue-500 px-2 py-1 rounded"
                    onClick={() => onEditSlide(slide)}
                  >
                    Edit
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="embla__controls">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => onDotButtonClick(index)}
            className={`embla__dot ${index === selectedIndex ? "embla__dot--selected" : ""}`}
          />
        ))}
      </div>
    </section>
  )
}

export default HeroCarousel