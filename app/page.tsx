"use client";

import Silk from "./components/Silk";
import LiquidChrome from "@/components/liquid-chrome";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div>
      <div
        id="home"
        className="relative h-screen w-screen overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <Silk />
        </div>
        <motion.div  initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center justify-center h-full w-full">
          <div className="text-white text-4xl font-bold">
            My name is Yash Kalange
          </div>
          <div className="text-gray-400 text-3xl font-bold">
            I am a Computer Engineer Graduate
          </div>
                  </motion.div>
        </div>
      
      {/* About Me Section with 3D Component */}
      <motion.div
        id="about"
        className="h-screen w-screen bg-black"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="flex h-full w-full">
          {/* Left Side - About Me */}
          <motion.div
            className="flex-1 flex flex-col justify-center px-16"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <div className="text-white text-4xl font-bold mb-8">
              About Me
            </div>
            <div className="text-gray-400 text-lg leading-relaxed max-w-2xl">
              <p className="mb-6">
                A Computer Engineering graduate with a strong passion for building modern, scalable, and user-focused web applications. With hands-on experience in technologies like React, Next.js, TypeScript, Node.js, MongoDB, and PostgreSQL, I enjoy bringing ideas to life through clean code and thoughtful design.
              </p>
              <p className="mb-6">
                Throughout my academic and personal projects, I've developed full-stack applications ranging from AI-powered planning tools to real-time collaborative platforms. My approach combines technical problem-solving with a focus on performance, usability, and maintainability.
              </p>
              <p>
                I constantly explore new tools and frameworks to stay updated in this fast-evolving industry. I'm currently looking for opportunities where I can contribute to impactful products, learn from experienced teams, and grow as a software developer.
              </p>
            </div>
          </motion.div>
          {/* Right Side - Liquid Chrome Component */}
          <motion.div
            className="flex-1 h-full"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          >
            <LiquidChrome 
              baseColor={[0.05, 0.05, 0.07]}
              speed={0.3}
              amplitude={0.4}
              frequencyX={2}
              frequencyY={3}
              interactive={true}
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
