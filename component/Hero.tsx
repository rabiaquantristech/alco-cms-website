"use client"

import React, { useState, useEffect } from "react"
import HeroCarousel from "./hero-carousel/heroCarousel"
import HeroEditorModal from "./modal/hero/[id]/HeroEditorModal"
import { HeroPost } from "@/type/heroTypes"
import HeroAddedModal from "./modal/hero/HeroAddedModal"

// type PropType = {
//   slides: HeroPost[]
//   setHero: (slides: HeroPost[]) => void
// }

// const localData: HeroPost[] = [
//   { _id: "1", title: "Post One", description: "Content One" },
//   { _id: "2", title: "Post Two", description: "Content Two" },
// ];

export default function Hero() {
  const [editingSlide, setEditingSlide] = useState<HeroPost | null>(null)
  const [hero, setHero] = useState<HeroPost[]>([]);

  

  console.log(`-------------? slides + ${hero}`)
  const handleUpdate = async (updatedSlide: HeroPost) => {

    const newSlides = hero.map((s) =>
      s._id === updatedSlide?._id ? updatedSlide : s
    )

    setHero(newSlides)
    await fetch(`/api/hero/${updatedSlide._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: updatedSlide.title,
        description: updatedSlide.description
      }),
    });
  }

  // useEffect(() => {
  //   const fetchHero = async () => {
  //     try {
  //       const res = await fetch("/api/hero");
  //       if (!res.ok) throw new Error("Failed to fetch hero");

  //       const data = await res.json();
  //       console.log(data, "Fetched hero data");
  //       setHero(data?.hero || data || localData);
  //     } catch (err) {
  //       console.error(err);
  //       setHero(localData);
  //     }
  //   };

  //   fetchHero();
  // }, []);
  useEffect(() => {
    const fetchHero = async () => {
      const res = await fetch("/api/hero");
      if (!res.ok) {
        console.log("Failed to fetch hero");
        return;
      }

      const data = await res.json();
      console.log("Fetched hero:", data);
      setHero(data?.hero || []);
    };

    fetchHero();
  }, []);

  return (
    <section className="relative">
      <HeroCarousel
        slides={hero}
        onEditSlide={(slide) => setEditingSlide(slide)}
      />

      {editingSlide && (
        <HeroEditorModal
          slide={editingSlide}
          onClose={() => setEditingSlide(null)}
          onUpdate={handleUpdate}
        />
      )}
      {/* <HeroAddedModal /> */}
    </section>
  )
}