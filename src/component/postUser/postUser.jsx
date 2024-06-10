import React from "react";
import { axiosClient } from "../../../utils/axios/axiosClient";
import { getUser } from "../../../utils/data";
import Image from "next/image";
// const getUser = async (userId) => {
//   const user = await axiosClient.get(`/users/${userId}`);
//   return user;
// };
const PostUser = async ({ userId }) => {
  const user = await getUser(userId);
  // console.log(user);
  return (
    <div className=" flex justify-center items-center gap-4 ">
      <div className="w-[40px] h-[40px] overflow-hidden rounded-full flex items-center justify-center">
        <Image
          src={user?.img ? user?.img : "/images/noavatar.png"}
          alt="image"
          width={40}
          height={40}
          className="object-cover rounded-full"
        />
      </div>
      <div className=" flex flex-col gap-3">
        <span className=" font-medium text-gray-400">Author</span>
        <span>{user?.username}</span>
      </div>
    </div>
  );
};

export default PostUser;
