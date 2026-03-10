"use client"

import React, { useState } from "react"
import HeroCarousel from "./hero-carousel/heroCarousel"
import HeroEditorModal from "./modal/hero/[id]/HeroEditorModal"
import { HeroPost } from "@/type/heroTypes"

type PropType = {
  slides: HeroPost[]
  setSlides: (slides: HeroPost[]) => void
}
export default function Hero({ slides, setSlides }: PropType) {
  const [editingSlide, setEditingSlide] = useState<HeroPost | null>(null)

  console.log(`-------------? slides + ${slides}`)
  const handleUpdate = async (updatedSlide: HeroPost) => {

    const newSlides = slides.map((s) =>
      s._id === updatedSlide?._id ? updatedSlide : s
    )

    setSlides(newSlides)

    // await fetch(`/api/hero/${updatedSlide?._id}`, {
    //   method: "PUT",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(updatedSlide),
    // })
    await fetch(`/api/hero/${updatedSlide._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: updatedSlide.title,
        description: updatedSlide.description
      }),
    });
  }

  return (
    <section className="relative">
      <HeroCarousel
        slides={slides}
        onEditSlide={(slide) => setEditingSlide(slide)}
      />

      {editingSlide && (
        <HeroEditorModal
          slide={editingSlide}
          onClose={() => setEditingSlide(null)}
          onUpdate={handleUpdate}
        />
      )}
    </section>
  )
}