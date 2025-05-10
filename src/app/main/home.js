import { Roboto_Mono } from "next/font/google";

const roboto = Roboto_Mono({
  weight: "500",
  subsets: ["latin"],
});

export default function HomePage() {
  return (
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
        </div>
      </div>
    </div>
  );
}
