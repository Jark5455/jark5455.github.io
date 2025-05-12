"use client";

import React from "react";

import Content from "./about.mdx";

import Background from "../particles-bg";

export default function About() {
  return (
    <>
      <Background />
      <main className="relative grow items-center justify-between">
        <div className="m-auto p-[25px]">
          <div className="w-full h-full">
            <div className="max-w-[1240px] mx-auto min-h-[80vh] p-20 items-center rounded-3xl bg-darkergrey">
              <Content />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
