import HeroComponent from "../../component/home/heroComponent/HeroComponent";
import Image from "next/image";
import React from "react";
import Team1 from "../../../public/images/team1.jpg";
import Team2 from "../../../public/images/team2.jpg";
import Team3 from "../../../public/images/team3.jpg";

export const metadata = {
  title: "About Us",
  description: "About Us",
};

const TeamData = [
  {
    img: Team1,
    name: "John",
    role: "CEO",
  },
  {
    img: Team2,
    name: "Jane",
    role: "CFO",
  },
  {
    img: Team3,
    name: "Bob",
    role: "CTO",
  },
];

const AboutPage = () => {
  return (
    <div className=" overflow-x-hidden">
      <HeroComponent title={"About Us"} desc={""} />
      <div className=" flex flex-col md:flex-row gap-10 p-24 ">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
          culpa sit commodi voluptas nihil odio aspernatur numquam quisquam. At
          id est commodi facilis labore numquam repellendus non quis praesentium
          impedit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
          ut inventore velit, dolorum maiores dicta vero vel minus! Placeat
          magni aliquam sed earum repudiandae alias eveniet necessitatibus dicta
          nihil commodi!
        </p>
        <div className=" w-[100%] md:min-w-[500px]">
          <Image
            src="https://images.unsplash.com/photo-1445294812422-0bb9cb94c286?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="about_img"
            width={800}
            height={200}
            objectFit="cover"
            className=" w-[600px] md:h-[400px] object-cover rounded md:rounded-s-lg"
          />
        </div>
      </div>
      <div className="p-24 pb-24 bg-gray-800">
        <h1 className="text-3xl font-bold mb-12 text-center">Our Team</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TeamData.map((data, index) => (
            <div key={index} className="text-center">
              <div className="mb-4 overflow-hidden rounded-full w-52 h-52 mx-auto">
                <Image
                  src={data.img}
                  alt={`${data.name} image`}
                  width={200}
                  height={200}
                  className="object-cover object-top w-full h-full"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{data.name}</h3>
              <p className="text-gray-600">{data.role}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56516.27776845179!2d85.28493294943873!3d27.709030241905573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198a307baabf%3A0xb5137c1bf18db1ea!2sKathmandu%2044600!5e0!3m2!1sen!2snp!4v1719670183871!5m2!1sen!2snp"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  );
};

export default AboutPage;
