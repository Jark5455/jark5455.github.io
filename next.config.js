/** @type {import('next').NextConfig} */

import createMDX from "@next/mdx";

import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeStarryNight from "rehype-starry-night";
import rehypeStringify from "rehype-stringify";

const nextConfig = {
  /**
   * Enable static exports for the App Router.
   *
   * @see https://nextjs.org/docs/pages/building-your-application/deploying/static-exports
   */
  output: "export",

  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],

  /**
   * Set base path. This is usually the slug of your repository.
   *
   * @see https://nextjs.org/docs/app/api-reference/next-config-js/basePath
   */
  basePath: "",

  /**
   * Disable server-based image optimization. Next.js does not support
   * dynamic features with static exports.
   *
   * @see https://nextjs.org/docs/pages/api-reference/components/image#unoptimized
   */
  images: {
    unoptimized: true,
  },
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired

  options: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex, rehypeStarryNight, rehypeStringify],
  },
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
