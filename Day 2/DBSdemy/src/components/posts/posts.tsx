import React, { useEffect, useState } from "react";
import axios from "axios";
import { useFetchData } from "../../hooks/useFetchData";

type PostModel = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

const Posts: React.FC = () => {
  const posts: any = useFetchData("http://localhost:3500/posts");
  return (
    <div>
      <header>
        <h1>All Posts</h1>
      </header>
      <main>
        <ul>
          {posts
            ? posts.map((p: PostModel) => <li key={p.id}>{p.title}</li>)
            : "No Posts"}
        </ul>
      </main>
    </div>
  );
};

export default Posts;
