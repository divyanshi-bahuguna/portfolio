"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-20">
      <div className="grid grid-cols-1 sm:grid-cols-12 items-center">

        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="col-span-8 text-center sm:text-left"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-7xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I am
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                1200,
                "Java & React Developer",
                1200,
                "DSA Enthusiast",
                1200,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>

          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl max-w-xl">
            I love building web applications, solving algorithmic problems, and
            exploring new technologies. Currently focused on strengthening my
            full-stack development and problem-solving skills.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/#contact"
              className="px-6 py-3 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 text-white text-center"
            >
              Hire Me
            </Link>

            <Link
              href="https://drive.google.com/file/d/1i4Ggb1hs19MhnPvdLwgl01CECpscNg06/view?usp=sharing"
              target="_blank"
              className="px-6 py-3 rounded-full border border-pink-500 text-white hover:bg-pink-500 transition text-center"
            >
              Download CV
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 mt-6 justify-center sm:justify-start">
            <Link href="https://github.com/divyanshi-bahuguna" target="_blank">
              <img src="/github-icon.svg" className="w-7 hover:scale-110 transition" />
            </Link>

            <Link href="https://www.linkedin.com/in/divyanshi-bahuguna-207198322/" target="_blank">
              <img src="/linkedin-icon.svg" className="w-7 hover:scale-110 transition" />
            </Link>
          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="col-span-4 place-self-center mt-8 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[260px] h-[260px] lg:w-[380px] lg:h-[380px] relative overflow-hidden">
            <Image
              src="/images/memoji.png"
              alt="hero image"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;