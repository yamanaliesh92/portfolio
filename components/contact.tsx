"use client";

import React from "react";

import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.section
      id="contact"
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center scroll-mt-28"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <h3 className=" mb-8 text-2xl font-semibold">Contact me</h3>

      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:example@gmail.com">
          yaman9892xxx@gmail.com
        </a>{" "}
        or through this form.
      </p>
    </motion.section>
  );
};

export default Contact;
