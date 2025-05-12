"use client";

import Giscus from "@giscus/react";

export default function PostLayout({ children }) {
  return (
    <>
      <main className="relative grow items-center justify-between">
        {children}
        <div className="m-auto p-[25px]">
          <div className="w-full h-full">
            <div className="max-w-[1240px] mx-auto p-20 items-center rounded-3xl bg-darkergrey">
              <Giscus
                id="comments"
                repo="jark5455/jark5455.github.io"
                repoId="R_kgDOJ79oIw"
                category="General"
                categoryId="DIC_kwDOJ79oI84CqBvB"
                mapping="title"
                term="Welcome to Banan Discussions"
                reactionsEnabled="1"
                emitMetadata="0"
                inputPosition="top"
                theme="http://localhost:3000/giscus.css"
                lang="en"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
