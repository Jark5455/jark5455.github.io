import "./globals.css";

import NavBar from "./navbar/navbar";

export const metadata = {
  title: "The Banan Project",
  description: "This is the official website for the banan project",
  author: "Yash Rachamalla",
};

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        <head>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex/dist/katex.min.css" />
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/gh/wooorm/starry-night/style/dark.css"
          />
        </head>
        <body className="p-0 m-0 min-h-screen relative flex flex-col">
          <NavBar />
          {children}
        </body>
      </html>
    </>
  );
}
