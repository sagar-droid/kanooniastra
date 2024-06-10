import React from "react";
import { addPost } from "../../lib/action";

const ServerActionTestPage = () => {
  return (
    <div className=" py-24">
      <form action={addPost} className="flex flex-col gap-5 text-black">
        <input type="text" name="title" placeholder="Title" />
        <input type="text" name="desc" placeholder="Description" />
        <input type="text" name="slug" placeholder="Slug" />
        {/* <input type="text" name="createdAt" placeholder="CreatedAt" /> */}
        <input type="text" name="userId" placeholder="UserId" />
        <button type="submit" className="text-red-600">
          Create
        </button>
      </form>
    </div>
  );
};

export default ServerActionTestPage;
