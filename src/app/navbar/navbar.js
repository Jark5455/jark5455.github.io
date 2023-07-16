"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import NavItemText from "./navbar-item-text";
import NavItemImage from "./navbar-item-image";
import './css/navbar.css'

const MENU_LIST = [
    { text: "The Banan Project", href: "/" },
  ];

export default function NavBar() {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <header>
      <nav className={`nav`}>
        <Link legacyBehavior href={"/"}>
          <a>
            <Image width={100} height={100} src="/svg/banan-full-yellow.svg" alt="Banan"/>
          </a>
        </Link>
        <div
          onClick={() => setNavActive(!navActive)}
          className={`nav__menu-bar`}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={`${navActive ? "active" : ""} nav__menu-list`}>
          {MENU_LIST.map((menu, idx) => (
            <div
              onClick={() => {
                setActiveIdx(idx);
                setNavActive(false);
              }}
              key={menu.text}
            >
              <NavItemText active={activeIdx === idx} {...menu} />
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};
