"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export const links = [
  {
    name: "Velkommen",
    hash: "/",
  },
  {
    name: "Om os",
    hash: "/om-os",
  },
  {
    name: "Vi tilbyder",
    hash: "/vi-tilbyder",
  },
  {
    name: "Genkender du?",
    hash: "/genkender-du?",
  },
  {
    name: "Priser",
    hash: "/priser",
  },
  {
    name: "Praktisk",
    hash: "/praktisk",
  },
  {
    name: "Kontakt",
    hash: "/kontakt",
  },
] as const;

export default function Header() {
  const [color, setColor] = useState(false);
  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY > 20) {
        setColor(true);
        console.log("setcoler er skiftet til true");
      } else {
        setColor(false);
        console.log("setcoler er skiftet til false");
      }
    };

    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <header
      className="z-50 relative w-screen 
     font-mono text-white font-medium "
    >
      <nav
        className={
          color
            ? "flex fixed h-12 w-screen bg-black/90 py-6 "
            : "flex fixed h-12 w-screen hover:bg-black/90 py-6"
        }
      >
        <ul className=" flex w-screen flex-wrap items-center justify-center font-medium ">
          {links.map((link) => (
            <motion.li
              className="h-3/4 border sm:border-0 rounded-full px-2  flex items-center justify-center  cursor-pointer hover:text-orange-400 transition-all"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link href={link.hash}>{link.name}</Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
