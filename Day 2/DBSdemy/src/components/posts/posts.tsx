import React, { useEffect, useState } from "react";
import axios from "axios";

type PostModel = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

const Posts: React.FC = () => {
  const [posts, setPosts] = useState<PostModel[]>([]);
  useEffect(() => {
    axios
      .get("http://localhost:3500/posts")
      .then(function (response) {
        // handle success
        // console.log(response.data);
        setPosts(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
    // console.log("Done !");
  }, []);
  return (
    <div>
      <header>
        <h1>All Posts</h1>
      </header>
      <main>
        <ul>
          {posts.map((p: PostModel) => (
            <li key={p.id}>{p.title}</li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default Posts;
