import Image from "next/image";
import React from "react";
import { axiosClient } from "../../../../utils/axios/axiosClient";
import PostUser from "@/component/postUser/postUser";
import { getPost } from "../../../../utils/data";
import { Suspense } from "react";

// const getPost = async (slug) => {
//   const post = await axiosClient.get(`/posts/${slug}`);
//   return post.data;
// };

const getData = async () => {
  try {
    const res = await axios.get(
      `https://main--kanooniastra.netlify.app/api/blog/${slug}`
      // `http://localhost:3000/api/blog/${slug}`
    );
    return res.data;
  } catch (error) {
    console.error("Failed to fetch data:", error);
    throw error;
  }
};

export const generateMetadata = async ({ params }) => {
  const { slug } = params;
  const post = await getPost(slug);
  return {
    title: post?.title,
    description: post?.desc,
  };
};

const SinglePostPage = async ({ params }) => {
  const { slug } = params;

  const post = await getPost(slug);
  // console.log(post);
  return (
    <div className=" flex flex-col md:flex-row gap-24 p-24">
      <div className="">
        <Image
          src={post?.img}
          alt="image"
          width={300}
          height={400}
          className=" w-[700px] h-[500px] object-cover"
        />
      </div>
      <div className=" flex-1 flex-col gap-12">
        <h1 className=" text-5xl mb-6">{post?.title}</h1>
        <div className=" flex gap-6 items-center mb-6">
          {post && (
            <Suspense fallback={<div>Name...</div>}>
              <PostUser userId={post?.userId} />
            </Suspense>
          )}
          <div className=" flex flex-col gap-3">
            <span className=" text-gray-400">Published</span>
            <span>{post?.createdAt?.toString().slice(4, 16)}</span>
          </div>
        </div>
        <div className=" text-justify text-xl">{post?.desc}</div>
      </div>
    </div>
  );
};

export default SinglePostPage;
