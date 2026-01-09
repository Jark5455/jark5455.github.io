import "../../blog/posts";

import fs from "fs";

import Background from "../../particles-bg";

export default async function Post({ params }) {
  const { slug } = await params;
  const { default: Post } = await import(`../../blog/posts/${slug}.mdx`);

  return (
    <div className="m-auto p-[15px] md:p-[25px]">
      <div className="w-full h-full">
        <div className="max-w-[1240px] mx-auto min-h-[80vh] p-10 md:p-20 items-center rounded-3xl bg-darkergrey">
          <Post />
        </div>
      </div>
    </div>
  );
}

export function generateStaticParams() {
  const index_data = fs.readFileSync(process.cwd() + "/src/app/blog/posts/index.json", "utf-8");
  const index = JSON.parse(index_data);

  var id_list = [];

  for (const [year, list] of Object.entries(index)) {
    for (const listing of list) {
      id_list.push(listing["id"]);
    }
  }

  const slug_list = id_list.map((idx) => ({
    slug: idx,
  }));

  return slug_list;
}

export async function generateMetadata({ params }) {
  const { slug } = await params;

  return {
    title: searchForTitle(slug),
  };
}

function searchForTitle(id) {
  const index_data = fs.readFileSync(process.cwd() + "/src/app/blog/posts/index.json", "utf-8");
  const index = JSON.parse(index_data);

  for (const [year, list] of Object.entries(index)) {
    for (const listing of list) {
      if (listing["id"] == id) {
        return listing["title"];
      }
    }
  }

  throw RangeError("id does not exist");
}

export const dynamicParams = false;
