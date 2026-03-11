// import React, { useEffect } from 'react';
// import useEmblaCarousel from 'embla-carousel-react';
// import '@/component/brand-carousel/brandCarousel.css';
// import { brandType } from '@/type/brandTypes';

// export type BrandCarouselProps = {
//   images: brandType[];
// };

// const BrandCarousel = ({ images }: BrandCarouselProps) => {
//   const [emblaRef, emblaApi] = useEmblaCarousel({
//     loop: true,
//     align: 'start',
//     draggable: true,
//   });

//   // Smooth continuous scroll
// //   useEffect(() => {
// //     if (!emblaApi) return;
// //     let animationFrameId: number;

// //     const scroll = () => {
// //       emblaApi.scrollNext(0.8); // scroll by small fraction
// //       animationFrameId = requestAnimationFrame(scroll);
// //     };

// //     scroll();

// //     return () => cancelAnimationFrame(animationFrameId);
// //   }, [emblaApi]);
// useEffect(() => {
//   if (!emblaApi) return;

//   const speed = 0.05; // adjust this for scroll speed
//   let animationFrameId: number;

//   const scroll = () => {
//     emblaApi.scrollNext(speed as any);
//     animationFrameId = requestAnimationFrame(scroll);
//   };

//   scroll();

//   return () => cancelAnimationFrame(animationFrameId);
// }, [emblaApi]);

//   return (
//     <div className="embla">
//       <div className="embla__viewport" ref={emblaRef}>
//         <div className="embla__container">
//           {images.map((image: brandType) => (
//             <div className="embla__slide" key={image._id}>
//               <img
//                 src={image.image.src}
//                 alt={image.alt}
//                 className="embla__slide__img"
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';
import '@/component/brand-carousel/brandCarousel.css';
import { brandType } from '@/type/brandTypes';

export type BrandCarouselProps = {
    images: brandType[];
};

const BrandCarousel = ({ images }: BrandCarouselProps) => {
    const [emblaRef] = useEmblaCarousel(
        { loop: true, align: 'start', dragFree: true },
        [AutoScroll({ speed: 1, stopOnInteraction: false, startDelay: 0 })]
    );

    // Duplicate images for seamless infinite scroll
    const duplicatedImages = [...images, ...images];

    return (
        <div className="brand_embla">
            <div className="brand_embla__viewport" ref={emblaRef}>
                <div className="brand_embla__container">
                    {duplicatedImages.map((image: brandType, index: number) => (
                        <div className="brand_embla__slide" key={`${image._id}-${index}`}>
                            <img
                                src={image.image.src}
                                alt={image.alt}
                                className="brand_embla__slide__img"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BrandCarousel;