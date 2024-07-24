import React from "react";
import PostCard from "../../component/postCard/PostCard";
import { axiosClient } from "../../../utils/axios/axiosClient";
// import { getPosts } from "../../../utils/data";
import axios from "axios";

const getData = async () => {
  try {
    const res = await axios.get(
      // "https://main--kanooniastra.netlify.app/api/blog"
      "http://localhost:3000/api/blog"
    );
    return res.data;
  } catch (error) {
    console.error("Failed to fetch data:", error);
    throw error;
  }
};

const Blog = async () => {
  const posts = await getData();
  // const posts = await getPosts();
  return (
    <div className=" flex flex-wrap gap-5">
      {posts?.map((post) => (
        <div className=" md:w-[45%] lg:min-w-[30%] w-[100%]" key={post.id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};

export default Blog;
