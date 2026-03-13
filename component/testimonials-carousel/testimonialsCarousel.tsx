import React from "react"
import { EmblaOptionsType } from "embla-carousel"
import { DotButton, useDotButton } from "../emblaCarouselDot"
import useEmblaCarousel from "embla-carousel-react"
import Button from "@/component/button";
import "@/component/testimonials-carousel/testimonialsCarousel.css"
import { TestimonialsPost } from "@/type/testimonialsTypes"
// images
// import testimonialsSlide1 from "@/assets/testimonials/testimonials_slide1.webp";

type PropType = {
  slides: TestimonialsPost[]
  options?: EmblaOptionsType
  onEditSlide?: (slide: TestimonialsPost) => void
}

const TestimonialsCarousel = ({ slides, options, onEditSlide }: PropType) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options)
  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi)
  console.log(slides)
  return (
    <section className="testimonials_embla py-16 " 
    // style={{
    //   background: `linear-gradient(90.5deg, #000000 -3.72%, rgba(0, 0, 0, 0) 104.47%), url(${testimonialsSlide1.src})`,
    //   backgroundSize: "cover",
    //   backgroundPosition: "center",
    // }}
    >
      <div className="testimonials_embla__viewport container mx-auto" ref={emblaRef}>
        <div className="testimonials_embla__container">
          {slides.map((slide) => (
            <div className="testimonials_embla__slide" key={slide?._id}>
              <div className="testimonials_embla__slide__content mb-4 rounded-md relative">
                {/* <h1 className="h1 text-white">{slide?.title?.line1}</h1>
                <h1 className="h1 text-secondary">{slide?.title?.line2}</h1> */}
                {/* <p className="custom-text1 my-4 font-normal">{slide?.description}</p> */}
                {/* <div className="mt-4 flex gap-2">
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
                </div> */}
                <div className="flex flex-col md:flex-row gap-4 items-center p-6 bg-white rounded-lg shadow-md">
                  <img
                    src={slide.thumbnail}
                    alt={slide.name}
                    className="w-32 h-32 object-cover rounded-md"
                  />
                  <div className="flex-1">
                    <p className="text-black mb-2">{slide.description}</p>
                    <h5 className="font-semibold text-lg">{slide.name}</h5>
                    <p className="text-sm text-gray-600">{slide.designation}</p>
                    <div className="flex items-center mt-2 gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <span key={i} className={`text-yellow-400 ${i >= slide.rating ? "text-gray-300" : ""}`}>
                          ★
                        </span>
                      ))}
                    </div>
                    <Button
                      text="Read More"
                      variant="primary"
                      size="small"
                      className="mt-2"
                    />
                  </div>
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

      {/* Dots */}
      <div className="testimonials_embla__controls  container mx-auto ">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => onDotButtonClick(index)}
            className={`testimonials_embla__dot ${index === selectedIndex ? "testimonials_embla__dot--selected" : ""}`}
          />
        ))}
      </div>
    </section>
  )
}

export default TestimonialsCarousel