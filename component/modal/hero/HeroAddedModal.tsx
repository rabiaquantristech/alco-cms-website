"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function HeroAddedModal() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !description) {
      alert("Title and description are required.");
      return;
    }

    const slug = title.toLowerCase().replace(/\s+/g, "-");

    try {
      const res = await fetch("/api/hero", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, description, slug }),
      });

      if (res.ok) {
        router.push("/");
        router.refresh();
      } else {
        throw new Error("Failed to create hero");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 max-w-lg">

      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Hero Title"
      />

      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border border-slate-500 px-8 py-2"
        placeholder="Hero Description"
      />

      <button
        type="submit"
        className="bg-green-600 font-bold text-white py-3 px-6 w-fit"
      >
        Add Hero
      </button>

    </form>
  );
}