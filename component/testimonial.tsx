"use client";


import React, { useState } from "react";
import TestimonialsCarousel from "./testimonials-carousel/testimonialsCarousel";
import Button from "./button";
import { TestimonialsPost } from "@/type/testimonialsTypes";

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

export default function Testimonials() {
    const [activeTab, setActiveTab] = useState<"testimonials" | "dummy">("testimonials");
    return (
        <section className="px-4 py-16 bg-gray-50 w-full">
            <div className="container mx-auto">

                {/* <section className="max-w-screen-xl mx-auto px-4 py-16 w-full"> */}
                {/* Tabs navigation */}
                <div className="flex border-b border-gray-300 mb-8">
                    <button
                        onClick={() => setActiveTab("testimonials")}
                        className={`px-4 py-2 font-semibold text-lg border-b-2 -mb-px transition-colors ${activeTab === "testimonials"
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
                        className={`px-4 py-2 font-semibold text-lg border-b-2 -mb-px transition-colors ${activeTab === "dummy"
                                ? "border-primary text-primary"
                                : "border-transparent text-gray-600 hover:text-primary"
                            }`}
                        aria-selected={activeTab === "dummy"}
                        role="tab"
                    >
                        Another Tab
                    </button>
                </div>
                <div role="tabpanel" aria-labelledby={activeTab}>
                    {activeTab === "testimonials" && <TestimonialsCarousel
                        slides={testimonialsData}
                        options={{
                            loop: true,
                            align: "start",
                            skipSnaps: false,
                        }}
                        onEditSlide={(slide) => alert(`Edit ${slide.name}`)}
                    />}
                    {activeTab === "dummy" && <div></div>}
                </div>


            </div>
        </section>
    );
}