import Link from "next/link";

export default function NavItemText({ text, href, active }) {
  return (
    <Link legacyBehavior href={href}>
      <a className={`nav__item ${active ? "active" : ""}`}>
        {text}
      </a>
    </Link>
  );
};