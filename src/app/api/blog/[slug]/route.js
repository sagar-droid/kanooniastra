import { NextResponse } from "next/server";
import { connectToDb } from "../../../../utils/connectToDb";
import { Post } from "../../../../utils/models";

export const GET = async (request, { params }) => {
  const { slug } = params;
  try {
    connectToDb();
    const post = await Post.findOne({ slug });
    return NextResponse.json(post);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch post");
  }
};

export const DELETE = async (request, { params }) => {
  const { slug } = params;
  try {
    connectToDb();
    const post = await Post.deleteOne({ slug });
    return NextResponse.json("Post Deleted");
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete post");
  }
};
