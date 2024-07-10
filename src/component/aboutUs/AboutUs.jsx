import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdArrowRightAlt } from "react-icons/md";

const AboutUs = () => {
  return (
    <section className=" px-8 md:pl-24 py-24 flex flex-col md:flex-row gap-6">
      <div>
        <h1
          className=" uppercase text-3xl font-semibold mb-4"
          data-aos="fade-up"
          data-aos-once="true">
          About Us
        </h1>
        <p data-aos="fade-up" data-aos-once="true">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam eos
          reprehenderit officia perferendis ratione error eum ea assumenda quis
          iusto et maiores, delectus accusantium quasi. Quo harum at eveniet
          nisi!
        </p>
        <Link href="/about">
          <button
            className=" hover:text-red-600 mt-10 flex gap-4 justify-center items-center"
            data-aos="fade-right"
            data-aos-once="true">
            Read More{" "}
            <span className="text-xl">
              <MdArrowRightAlt />
            </span>
          </button>
        </Link>
      </div>
      <div
        className=" w-[100%] md:min-w-[500px]"
        data-aos="fade-left"
        data-aos-once="true">
        <Image
          src="https://images.unsplash.com/photo-1445294812422-0bb9cb94c286?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="about_img"
          width={800}
          height={200}
          objectFit="cover"
          className=" w-[600px] md:h-[400px] object-cover rounded md:rounded-s-lg"
        />
      </div>
    </section>
  );
};

export default AboutUs;
