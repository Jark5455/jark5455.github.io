"use client";

import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    window.location.href = "mailto://rshailu.yash@gmail.com";
  }, []);

  return <main></main>;
}
