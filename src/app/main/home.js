import { Roboto_Mono } from "next/font/google"

const roboto = Roboto_Mono({
  weight: '500',
  subsets: ['latin'],
})

export default function HomePage() {
  return (
    <div className="w-full h-[85vh] text-center">
        <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center rounded-3xl bg-darkergrey">
            <div>
              <p className={`${roboto.className} uppercase text-sm tracking-widest text-teal`}>Hi, my name is Jark</p>
              <h1 className={`${roboto.className} py-4 text-lightgrey`}>Welcome to <span className="text-yellow">The Banan Project</span></h1>
            </div>
        </div>
    </div>
  )
}