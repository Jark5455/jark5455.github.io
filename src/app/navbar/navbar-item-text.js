import Link from "next/link";

export default function NavItemText({ text, href, active }) {
  return (
    <Link legacyBehavior href={href}>
      <a className={`${active ? "active" : ""} no-underline text-lg relative text-lightgrey hover:text-teal font-medium hover:font-bold transition-all duration-200
                                               md:hover:before:w-full md:before:content-none md:before:absolute md:before:w-none md:before:h-1.5 md:before:-bottom-16 md:before:left-0`}>
        {text}
      </a>
    </Link>
  );
};