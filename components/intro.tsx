"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Intro = () => {
  return (
    <section
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
      id="home"
    >
      <div className="flex items-center justify-center w-full h-full mt-3">
        <motion.div
          className="relative cursor-pointer"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "tween",
            duration: 0.25,
          }}
        >
          <Image
            src={"/me.jpg"}
            alt="al"
            width={192}
            height={192}
            quality={95}
            className="w-28 h-28 rounded-full border-white border-[0.35rem] object-cover shadow-xl"
          />

          <span className="absolute right-1 bottom-3 text-3xl">👋</span>
        </motion.div>
      </div>
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm AlYaman Aliesh.</span> I'm a{" "}
        <span className="font-bold">full-stack engineer </span> with{" "}
        <span className="font-bold">one and half year </span> of experience. I
        enjoy building{" "}
        <span className="italic">performant webapps and web services</span>
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.1,
        }}
        className="flex items-center justify-center gap-2 px-3"
      >
        <Link
          href={"#contact"}
          className="flex items-center bg-gray-900  dark:bg-white/10 text-yellow-50 rounded-full px-7 py-3 gap-4 hover:scale-110 hover:mr-2"
        >
          Contact to
          <BsArrowRight />
        </Link>

        <a
          href={"https://github.com/yamanaliesh92"}
          target="_blank"
          className=" flex items-center bg-white text-gray-900  dark:text-white/60 rounded-full  dark:bg-white/10  p-4 gap-2"
        >
          <AiFillGithub />
        </a>
      </motion.div>
    </section>
  );
};

export default Intro;
