import React from "react";

import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

import { Roboto_Mono } from "next/font/google";

import Link from "next/link";

import Background from "./particles-bg";

const roboto = Roboto_Mono({
  weight: "500",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Background />
      <main className="relative grow items-center justify-between">
        <div className="m-auto p-[15px] md:p-[25px]">
          <div className="w-full h-full text-center">
            <div className="max-w-[1240px] mx-auto min-h-[80vh] p-10 md:p-20 flex justify-center items-center rounded-3xl bg-darkergrey">
              <div>
                <h4 className={`${roboto.className} py-2 text-sm tracking-widest text-white`}>
                  Hi, my name is Yash
                </h4>
                <h1 className={`${roboto.className} py-4 text-lightgrey`}>
                  Welcome to <span className="text-yellow">The Banan Project</span>
                </h1>
                <h4 className={`${roboto.className} py-4 text-white`}>
                  I do machine learning, physics, computing, and other stuff
                </h4>
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
    </>
  );
}
