"use client";

import Hero from "@/component/Hero";
import { HeroPost } from "@/type/heroTypes";
import { useEffect, useState } from "react";

const localData: HeroPost[] = [
  { _id: "1", title: "Post One", description: "Content One" },
  { _id: "2", title: "Post Two", description: "Content Two" },
];

export default function Home() {
  const [hero, setHero] = useState<HeroPost[]>([]);

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
    <div className="">
      <Hero slides={hero} setSlides={setHero} />
    </div>
  );
}