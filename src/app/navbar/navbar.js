"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import NavItem from "./navbar-item.js";

const MENU_LIST = [
    { text: "Home", href: "/" },
    { text: "Banan Engine", href: "/" },
    { text: "The Profit Taker", href: "/" },
    { text: "Philosophy", href: "/" },
    { text: "Blog", href: "/" }
  ];

export default function NavBar() {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <header id="navbar" className="z-30 top-0 shadow-md sticky w-full">
      <nav className="flex p-[16px] justify-between items-center bg-darkergrey min-h-fit">
        <Link legacyBehavior href={"/"}>
          <a className="no-underline text-lg text-inherit">
            <Image className="p-[12px]" width={120} height={120} src="/svg/banan-full-yellow.svg" alt="Banan"/>
          </a>
        </Link>
        <div onClick={() => setNavActive(!navActive)} className="flex flex-col gap-y-[6px] cursor-pointer md:hidden">
          <div className="w-[40px] h-[4px] bg-lightgrey rounded-sm"></div>
          <div className="w-[40px] h-[4px] bg-lightgrey rounded-sm"></div>
          <div className="w-[40px] h-[4px] bg-lightgrey rounded-sm"></div>
        </div>
        <div className={`${navActive ? "right-0" : ""} flex flex-col fixed top-[84px] width-[288px] gap-y-[24px] -right-[288px] px-[24px] py-[16px] transition-all duration-200 min-h-[calc(100vh-60px)] bg-darkergrey md:position-unset md:flex-row md:min-h-fit md:w-fit md:gap-x-[24px] md:items-center`}>
          {MENU_LIST.map((menu, idx) => (
            <div
              onClick={() => {
                setActiveIdx(idx);
                setNavActive(false);
              }}
              key={menu.text}
            >
              <NavItem active={activeIdx === idx} {...menu} />
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};
