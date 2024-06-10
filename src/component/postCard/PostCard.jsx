import Image from "next/image";
import Link from "next/link";
import React from "react";

const PostCard = ({ post }) => {
  return (
    <div className="flex flex-col gap-5 mb-5 p-20 overflow-hidden">
      <div className="flex ">
        <div className="w-[80%] h-[350px] flex">
          {post.img && (
            <Image
              src={post?.img}
              alt="image"
              width={300}
              height={600}
              className=" relative min-w-[200px] object-cover items-center justify-center flex h-[350px]"
            />
          )}
          <span className="text-[12px] -rotate-90 flex items-center justify-center">
            {post?.createdAt?.toString().slice(4, 16)}
          </span>
        </div>
      </div>
      <div className=" flex flex-col">
        <h1 className=" text-xl mb-5">{post?.title}</h1>
        <p className=" font-[300] text-gray-300 mb-5 text-justify">
          {post?.desc}
        </p>
        <Link href={`/blog/${post.slug}`} className=" underline">
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
