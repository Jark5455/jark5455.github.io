import Link from "next/link";
import { Roboto_Mono } from "next/font/google"

const roboto = Roboto_Mono({
  weight: '500',
  subsets: ['latin'],
})

export default function NavItem({ text, href, active }) {
  return (
    <Link legacyBehavior href={href}>
      <a className={`${active ? "active" : ""} ${roboto.className} no-underline text-lg text-clip whitespace-nowrap relative text-lightgrey hover:text-teal hover:font-bold transition-all duration-200 md:hover:before:w-full md:before:content-none md:before:absolute md:before:w-[0%] md:before:h-1.5 md:before:-bottom-16 md:before:left-0`}>
        {text}
      </a>
    </Link>
  );
};