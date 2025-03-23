"use client";

import React from "react";

import Content from "./about.mdx";

export default function About() {
  return (
    <main className="relative flex-grow items-center justify-between">
      <div className="m-auto p-[25px]">
        <div className="w-full h-[80vh]">
          <div className="max-w-[1240px] w-full h-full mx-auto p-20 items-center rounded-3xl bg-darkergrey">
            <Content />
          </div>
        </div>
      </div>
    </main>
  );
}
