import React from "react";

import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

import { Roboto_Mono } from "next/font/google";

import Link from "next/link";

const roboto = Roboto_Mono({
  weight: "500",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className="relative grow items-center justify-between">
      <div className="m-auto p-[25px]">
        <div className="w-full h-full text-center">
          <div className="max-w-[1240px] mx-auto min-h-[80vh] p-20 flex justify-center items-center rounded-3xl bg-darkergrey">
            <div>
              <p className={`${roboto.className} py-2 text-sm tracking-widest text-white`}>
                Hi, my name is Yash
              </p>
              <h1 className={`${roboto.className} py-4 text-lightgrey`}>
                Welcome to <span className="text-yellow">The Banan Project</span>
              </h1>
              <p className={`${roboto.className} py-4 text-white`}>
                I do machine learning, physics, computing, and other stuff
              </p>
              <div className="flex items-center justify-between max-w-[210px] m-auto py-4">
                <div className="border-2 border-lightgrey rounded-full p-4 hover:cursor-pointer hover:scale-110 ease-in duration-150">
                  <Link href="https://www.linkedin.com/in/yash-rachamalla-90114a2a7/">
                    <FaLinkedinIn />
                  </Link>
                </div>
                <div className="border-2 border-lightgrey rounded-full p-4 hover:cursor-pointer hover:scale-110 ease-in duration-150">
                  <Link href="https://github.com/Jark5455">
                    <FaGithub />
                  </Link>
                </div>
                <div className="border-2 border-lightgrey rounded-full p-4 hover:cursor-pointer hover:scale-110 ease-in duration-150">
                  <Link href="mailto:yash.rachamalla@protonmail.com">
                    <AiOutlineMail />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
