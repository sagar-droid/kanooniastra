"use client";
import React from "react";

// export const metadata = {
//   title: "Contact Us",
//   description: "Contact Us",
// };

const ContactPage = () => {
  console.log("Contact Page works");
  return (
    <div className=" p-24 flex flex-col gap-5">
      <div>
        <h1 className=" text-3xl font-bold flex justify-center">Contact Us</h1>
      </div>
      <div className=" flex justify-center">
        <form action="" className=" flex flex-col gap-5 max-w-[700px]">
          <input
            type="text"
            className=" p-5 rounded text-black border-none outline-none bg-slate-100"
            placeholder="Name"
          />
          <input
            type="text"
            className=" p-5 rounded text-black border-none outline-none bg-slate-100"
            placeholder="Email"
          />
          <input
            type="text"
            className=" p-5 rounded text-black border-none outline-none bg-slate-100"
            placeholder="Phone Number"
          />
          <textarea
            name=""
            id=""
            cols={30}
            rows={10}
            placeholder="Message"
            className=" p-5 rounded text-black border-none outline-none  bg-slate-100"></textarea>
          <button
            onClick={() => alert("message sent")}
            className="bg-red-600 py-1 px-2 rounded">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
