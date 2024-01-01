"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { links } from "@/lib/data";

export default function Header() {
  return (
    <div className="w-full absolute h-[50px] top-1   flex items-center justify-center">
      <ul className="flex mt-9  dark:bg-white bg-black rounded-full   items-center  p-4  text-[0.9rem] font-medium text-gray-500 ">
        {links.map((link) => (
          <motion.li
            key={link.hash}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <Link
              className=" px-5 py-5  text-white transition dark:text-gray-500 "
              href={link.hash}
            >
              {link.name}
            </Link>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
