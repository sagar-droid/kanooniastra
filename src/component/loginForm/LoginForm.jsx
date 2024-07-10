"use client";

import { useFormState } from "react-dom";
import Link from "next/link";
import { login } from "../../lib/action";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
const LoginForm = () => {
  const [state, formAction] = useFormState(login, undefined);
  const router = useRouter();

  useEffect(() => {
    if (state?.success) {
      router.push("/");
    }
  }, [state, router]);

  return (
    <div className=" flex justify-center items-center">
      <form
        className=" flex flex-col text-center gap-8 max-w-[900px]"
        action={formAction}>
        <input
          type="text"
          placeholder="username"
          name="username"
          className=" p-5 bg-white text-black border-none rounded"
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          className=" p-5 bg-white text-black border-none rounded"
        />
        <button className=" p-5 cursor-pointer bg-[var(--btn)] font-bold border-none rounded">
          Login
        </button>
        <div className=" flex flex-col gap-4 text-white">
          {state?.error && <p>{state.error}</p>}
          <Link href="/register">
            {"Don't have an account?"} <b>Register</b>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
