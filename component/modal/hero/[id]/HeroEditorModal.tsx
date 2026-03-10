"use client";

import { HeroPost } from "@/type/heroTypes";
import { useState } from "react";

type PropType = {
  slide: HeroPost;
  onClose: () => void;
  onUpdate: (updatedSlide: HeroPost) => void;
};

export default function HeroEditorModal({ slide, onClose, onUpdate }: PropType) {
  const [title, setTitle] = useState(slide.title);
  const [description, setDescription] = useState(slide.description);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !description) {
      alert("Title and description are required.");
      return;
    }

    const slug = title.toLowerCase().replace(/\s+/g, "-");

    const updatedSlide: HeroPost = {
      ...slide,
      title,
      description,
      // slug,
    };

    onUpdate(updatedSlide);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-md w-96">

        <h2 className="text-xl font-bold mb-4">Edit Hero</h2>

        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border border-slate-500 px-4 py-2 mb-3"
          placeholder="Hero Title"
        />

        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border border-slate-500 px-4 py-2 mb-3"
          placeholder="Hero Description"
        />

        <div className="flex justify-end gap-2">
          <button type="button" onClick={onClose} className="border px-4 py-2">
            Cancel
          </button>

          <button type="submit" className="bg-blue-600 text-white px-4 py-2">
            Update
          </button>
        </div>

      </form>
    </div>
  );
}