"use client";

import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    window.location.href = "protocol://dispatch";
  }, []);

  return <main></main>;
}
