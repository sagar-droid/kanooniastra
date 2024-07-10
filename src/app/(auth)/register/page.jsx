import RegisterForm from "../../../component/registerForm/registerForm";
// import { register } from "@/lib/action";
import React from "react";

const Register = () => {
  return (
    <div className=" text-black flex flex-col justify-center items-center p-24">
      <h1 className=" text-3xl font-bold mb-10">Register</h1>
      <RegisterForm />
    </div>
  );
};

export default Register;
