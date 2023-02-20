import { createMutation, createQuery } from "@tanstack/solid-query";

export type Post = {
  id: number;
  title: string;
  body: string;
  userId: number;
};

export const getPosts = () => {
  return createQuery({
    queryKey: () => ["posts"],
    queryFn: async (): Promise<Array<Post>> => {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "GET"
      });
      return response.json();
    }
  });
};

export const createPost = () =>
  createMutation({
    mutationKey: ["posts"],
    mutationFn: async (post: Post): Promise<Post> => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
        method: "POST",
        body: JSON.stringify(post)
      });
      return response.json();
    }
  });
