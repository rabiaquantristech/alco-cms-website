// "use client";

// import React from "react";
// import Button from "./button";
// import ArsalanLarik from "@/assets/intro-arsalan-larik/arsalan-larik.webp";
// import { BenefitsData } from "@/type/benefits";
// import BenefitsCarousel from "./benefits-carousel/benefitsCarousel";

// // // images
// // import Benefit1 from '@/assets/benefits/Benefit1.webp';
// // import Benefit2 from '@/assets/benefits/Benefit2.webp';
// // import Benefit3 from '@/assets/benefits/Benefit3.webp';
// // import Benefit4 from '@/assets/benefits/Benefit4.webp';
// // import Benefit5 from '@/assets/benefits/Benefit5.webp';
// // import Benefit6 from '@/assets/benefits/Benefit6.webp';

// const benefitsData: BenefitsData = {
//   title: "Benefits Of Neuro-Linguistic Programming",

//   description:
//     "The life you envision is within your reach. Take the first step toward becoming the best version of yourself.",
// //   points: [
// //     {
// //       title: "Benefit with Pakistan’s 1st Master Benefiter",
// //       image: {
// //         src: Benefit1.src,
// //         alt: "Benefit with Pakistan’s 1st Master Benefiter"
// //       },
// //     },
// //     {
// //       title: "Pioneers in Online NLP Benefitings",
// //       image: {
// //         src: Benefit2.src,
// //         alt: "Pioneers in Online NLP Benefitings"
// //       },
// //     },
// //     {
// //       title: "Unlimited Revise & Revisit Opportunities",
// //       image: {
// //         src: Benefit3.src,
// //         alt: "Unlimited Revise & Revisit Opportunities"
// //       },
// //     },
// //     {
// //       title: "Advanced Self-Study Resources",
// //       image: {
// //         src: Benefit4.src,
// //         alt: "Advanced Self-Study Resources"
// //       },
// //     },
// //     {
// //       title: "Expand Your Global Network",
// //       image: {
// //         src: Benefit5.src,
// //         alt: "Expand Your Global Network"
// //       },
// //     },
// //     {
// //       title: "Lifetime Support from Experts",
// //       image: {
// //         src: Benefit6.src,
// //         alt: "Lifetime Support from Experts"
// //       },
// //     }
// //   ]
// }

// export default function Benefits() {
//   const data = benefitsData;

//   return (
//     <section className="py-16 px-4 bg-medium-neutral bg-cover bg-top-left w-full">
//       <div className="max-w-screen-xl mx-auto px-4">
//         <div className="grid grid-cols-12 gap-2 my-8">
//           <div className="flex flex-col justify-start cols-span-12 md:col-span-5 gap-6">
//             <h3 className="h3 text-black text-start">
//               {data.title}
//             </h3>
//             <p className="custom-text-1 font-light text-black text-start ">
//               {data.description}
//             </p>
//             <div className="mt-4">
//               <Button variant="primary" size="medium" text="Explore More" className='my-auto' />
//             </div>
//           </div>
//           <div className="flex flex-col justify-center pt-1">
//             <BenefitsCarousel slides={[0, 1, 2, 3, 4, 5]} options={{ axis: 'y', align: 'start', loop: true }} />
//           </div>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 my-12">

//           {/* {data.points.map((point, index) => (
//             <div key={index} className="flex items-center text-center gap-4 p-6 border rounded-lg shadow-md">
//               <img src={point.image.src} alt={point.image.alt} className="w-16 h-16 object-cover " />
//               <p className="text-md lg:text-lg font-medium text-black/85 text-start">
//                 {point.title}
//               </p>
//             </div>
//           ))} */}
//         </div>
//       </div>
//     </section>
//   );
// }
"use client"

import React from "react"
import Button from "./button"
import { BenefitsData } from "@/type/benefits"

import Benefit1 from '@/assets/benefits/Benefit1.webp';
import Benefit2 from '@/assets/benefits/Benefit2.webp';
import Benefit3 from '@/assets/benefits/Benefit3.webp';
import Benefit4 from '@/assets/benefits/Benefit4.webp';
import Benefit5 from '@/assets/benefits/Benefit5.webp';
import Benefit6 from '@/assets/benefits/Benefit6.webp';
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

  return (
    <section className="px-4 bg-medium-neutral bg-left-top bg-cover w-full">

      <div className="max-w-screen-xl mx-auto grid grid-cols-12 gap-6">

        {/* Left Content */}
        <div className="col-span-12 md:col-span-5 flex flex-col gap-6 py-16 ">

          <h3 className="h3 text-black">{data.title}</h3>

          <p className="custom-text-1 text-black">
            {data.description}
          </p>

          <Button
            variant="primary"
            size="medium"
            text="Explore More"
          />

        </div>

        {/* Right Carousel */}
        <div className="col-span-12 md:col-span-7">
          <div className="flex gap-6">

            {/* Normal scroll */}
            <BenefitsCarousel
              slides={data.slides}
              direction="forward"
              options={{
                axis: "y",
                align: "start",
                loop: true
              }}
            />

            {/* Reverse scroll */}
            <BenefitsCarousel
              slides={data.slides}
              direction="backward"
              options={{
                axis: "y",
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