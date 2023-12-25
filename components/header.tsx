"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export const links = [
  {
    name: "Velkommen",
    hash: "#velkommen",
  },
  {
    name: "Om os",
    hash: "#om-os",
  },
  {
    name: "Vi tilbyder",
    hash: "#vi-tilbyder",
  },
  {
    name: "Genkender du?",
    hash: "#genkender-du?",
  },
  {
    name: "Priser",
    hash: "#priser",
  },
  {
    name: "Praktisk",
    hash: "#praktisk",
  },
  {
    name: "Kontakt",
    hash: "#kontakt",
  },
] as const;

export default function Header() {
  return (
    <header
      className="z-50 relative w-screen 
     font-mono text-white font-medium "
    >
      <nav className="flex fixed h-12 w-screen bg-black/95 py-6 ">
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