import { Roboto_Mono } from "next/font/google";

import Link from "next/link";

import fs from "fs";

import Background from "../particles-bg";

const roboto_bold = Roboto_Mono({
  weight: "500",
  subsets: ["latin"],
});

const roboto = Roboto_Mono({
  weight: "300",
  subsets: ["latin"],
});

export default function Blog() {
  const index_data = fs.readFileSync(process.cwd() + "/src/app/blog/posts/index.json", "utf-8");
  const index = JSON.parse(index_data);

  return (
    <>
      <Background />
      <main className="relative grow items-center justify-between">
        <div className="m-auto p-[15px] md:p-[25px]">
          <div className="w-full h-full">
            <div className="max-w-[1240px] mx-auto min-h-[80vh] p-10 md:p-20 items-center rounded-3xl bg-darkergrey">
              <h1 className={`${roboto_bold.className} py-4 text-yellow`}>Posts</h1>
              {Object.entries(index)
                .sort((a, b) => parseInt(b[0]) - parseInt(a[0]))
                .map((posts) => (
                  <div key={posts[0]} className="flex py-8">
                    <h2 className={`${roboto_bold.className} mr-4 md:mr-12 text-lightgrey`}>
                      {posts[0]}
                    </h2>

                    <ul className="grow">
                      {posts[1]
                        .sort((a, b) => new Date(b["date"]) - new Date(a["date"]))
                        .map((post) => (
                          <li
                            className="pb-4 mb-4 border-b-2 border-dashed border-b-lightgrey"
                            key={post["id"]}
                          >
                            <Link
                              className="flex justify-between align-baseline"
                              href={`/blog/${post["id"]}`}
                            >
                              <h3 className={`${roboto_bold.className} text-lightgrey`}>
                                {post["title"]}
                              </h3>
                              <div className="flex items-center">
                                <span
                                  className={`${roboto.className} mx-2 min-w-[80px] text-right text-lightgrey`}
                                >
                                  {post["date"]}
                                </span>
                              </div>
                            </Link>
                          </li>
                        ))}
                    </ul>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
