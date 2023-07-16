import Link from "next/link";
import Image from "next/image";

export default function NavItemImage({ src, href, active }) {
  return (
    <Link legacyBehavior href={href}>
      <Image className={`nav__item ${active ? "active" : ""}`} src={src}/>
    </Link>
  );
};