"use client";

import { useEffect, useState } from "react";

interface Post {
  _id: string;
  title: string;
  content: string;
  slug: string;
}

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch("/api/posts")
      .then((res) => res.json())
      .then(setPosts);
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6">Welcome to ALCO CMS</h1>
      {posts.map((post) => (
        <div key={post._id} className="mb-4 p-4 border rounded">
          <h2 className="text-2xl font-semibold">{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}