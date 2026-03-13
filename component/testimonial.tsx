"use client";


import React, { useState } from "react";
import TestimonialsCarousel from "./testimonials-carousel/testimonialsCarousel";
import Button from "./button";
import { TestimonialsPost } from "@/type/testimonialsTypes";
import StudentReviewCarousel from "./student-review-carousel/studentReviewCarousel";

import Train3 from '@/assets/whyTrainWithAL/Train3.webp';
// Example testimonial data
const testimonialsData: TestimonialsPost[] = [
    {
        _id: "1",
        thumbnail: "/assets/testimonials/testimonials_slide1.webp",
        videoUrl: "",
        name: "Adam Jones",
        designation: "Teacher",
        rating: 4,
        description:
            "My name is Adam. I’m proud and excited to announce that I recently got certified as an NLP Coach. My training experience was empowering and absolutely awesome.",
    },
    {
        _id: "2",
        thumbnail: "/assets/testimonials/testimonials_slide2.webp",
        videoUrl: "",
        name: "Joan Smith",
        designation: "Student",
        rating: 5,
        description:
            "Joan here. The NLP course completely transformed my approach to communication and self-growth. Highly recommended!",
    },
    {
        _id: "3",
        thumbnail: "/assets/testimonials/testimonials_slide3.webp",
        videoUrl: "",
        name: "Michael Lee",
        designation: "Entrepreneur",
        rating: 4,
        description:
            "Amazing training and insights. My professional skills improved significantly thanks to this course.",
    },
];

const studentReviews: TestimonialsPost[] = [
  {
    _id: "1",
    thumbnail: Train3.src,
    name: "Adam Jones",
    designation: "Student",
    rating: 5,
    description: "Amazing course! Helped me improve communication and confidence.",
  },
  {
    _id: "2",
    thumbnail: Train3.src,
    name: "Joan Smith",
    designation: "Student",
    rating: 4,
    description: "Highly recommended NLP training!",
  },
  {
    _id: "3",
    thumbnail: Train3.src,
    name: "Michael Lee",
    designation: "Entrepreneur",
    rating: 5,
    description: "The course was excellent and very insightful.",
  },
  {
    _id: "4",
    thumbnail: Train3.src,
    name: "Joan Smith",
    designation: "Student",
    rating: 4,
    description: "Highly recommended NLP training!",
  },
  {
    _id: "5",
    thumbnail: Train3.src,
    name: "Michael Lee",
    designation: "Entrepreneur",
    rating: 5,
    description: "The course was excellent and very insightful.",
  },
]

export default function Testimonials() {
    const [activeTab, setActiveTab] = useState<"testimonials" | "dummy">("testimonials");
    return (
        <section className="pt-6 md:pt-8 lg:pt-12 xl:pt-16  px-4 bg-light-neutral bg-cover bg-top-left w-full">
            <div className="container mx-auto ">

                {/* <section className="max-w-screen-xl mx-auto px-4 py-16 w-full"> */}
                {/* Tabs navigation */}
                <div className="flex  mb-8 justify-center">
                    <button
                        onClick={() => setActiveTab("testimonials")}
                        className={`px-4 py-2 font-outfit font-semibold text-lg border-b-2 -mb-px transition-colors ${activeTab === "testimonials"
                                ? "border-primary text-primary"
                                : "border-transparent text-gray-600 hover:text-primary"
                            }`}
                        aria-selected={activeTab === "testimonials"}
                        role="tab"
                    >
                        Testimonials
                    </button>

                    <button
                        onClick={() => setActiveTab("dummy")}
                        className={`px-4 py-2 font-outfit font-semibold text-lg border-b-2 -mb-px transition-colors ${activeTab === "dummy"
                                ? "border-primary text-primary"
                                : "border-transparent text-gray-600 hover:text-primary"
                            }`}
                        aria-selected={activeTab === "dummy"}
                        role="tab"
                    >
                        Another Tab
                    </button>
                </div>
                <div role="tabpanel" aria-labelledby={activeTab} className="max-w-6xl mx-auto ">
                    {activeTab === "testimonials" && 
                    <TestimonialsCarousel
                        slides={testimonialsData}
                        options={{
                            loop: true,
                            align: "start",
                            skipSnaps: false,
                        }}
                        onEditSlide={(slide) => alert(`Edit ${slide.name}`)}
                    />
                    }
                    {activeTab === "dummy" && 
                    <StudentReviewCarousel
                        slides={studentReviews}
                        options={{
                            loop: true,
                            align: "start",
                            skipSnaps: false,
                        }}
                    />}

                </div>


            </div>
        </section>
    );
}