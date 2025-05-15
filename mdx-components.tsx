import type { MDXComponents } from "mdx/types";

import { Roboto_Mono } from "next/font/google";

import Image from "next/image";
import { ImageProps } from "next/image";

const roboto_bold = Roboto_Mono({
  weight: "500",
  subsets: ["latin"],
});

const roboto = Roboto_Mono({
  weight: "400",
  subsets: ["latin"],
});

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including inline styles,
// components from other libraries, and more.

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    h1: ({ children }) => (
      <h1 className={`${roboto_bold.className} text-yellow py-4`}>{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className={`${roboto_bold.className} text-yellow py-4`}>{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className={`${roboto_bold.className} text-yellow py-2`}>{children}</h3>
    ),
    p: ({ children }) => (
      <p className={`${roboto.className} text-lg text-lightgrey py-2`}>{children}</p>
    ),

    // code block
    pre: ({ children }) => (
      <pre className={"bg-black overflow-auto rounded-lg m-4 p-2"}>{children}</pre>
    ),

    code: ({ children }) => (
      <code className={`${roboto.className} text-sm text-lightgrey`}>{children}</code>
    ),
  };
}
