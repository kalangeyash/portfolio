"use client";

import Silk from "./components/Silk";
import LiquidChrome from "@/components/liquid-chrome";
import { motion } from "framer-motion";
import Image from 'next/image';
import Skill from "./components/skill/Skill";
import { SKILLS_DATA } from "./data/skills";
import { PROJECTS } from "./data/projects";
import { RippleButton } from "../components/magicui/ripple-button";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div
        id="home"
        className="flex  relative h-screen w-full overflow-hidden p-36"
      >
        <div className="absolute inset-0 z-0">
          <Silk />
        </div>
        <motion.div  initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center justify-center h-full w-full">
          <div className="text-white text-4xl font-bold">
            Yash Kalange | Computer Engineer
          </div>
          <div className="text-gray-400 text-xl font-bold w-2xl h-max mt-10">
          I’m a software developer focused on building scalable, user-friendly web applications. Skilled in ReactJS, NextJS, TypeScript, and Node.js, with strong expertise in JavaScript, HTML, CSS, and databases like MongoDB and PostgreSQL. I enjoy crafting clean, efficient code and delivering responsive, full-stack solutions.
          </div>
        </motion.div>
      </div>
      {/* Skills Section with Silk background */}
      <div className="relative w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Silk />
        </div>
        <div className="relative z-10">
          <Skill skills={SKILLS_DATA}/>
        </div>
      </div>
      {/* My Projects Section with Liquid Chrome Component */}
      <motion.div
        id="my-projects"
        className="h-lvh w-full bg-black pt-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="flex h-full w-full">
          {/* Left Side - My Projects */}
          <motion.div
            className="flex-1 flex flex-col justify-center px-16"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <div className="text-white text-4xl font-bold mb-8">
              My Projects
            </div>
            <div className="text-gray-400 text-lg leading-relaxed max-w-2xl mb-8">
              <p className="mb-6">
                Here are some of my top projects:
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {PROJECTS.slice(0, 3).map((project) => (
                <div key={project.title} className="bg-zinc-900 rounded-xl p-0 shadow-lg border border-zinc-800 flex flex-col overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.alt}
                    width={600}
                    height={300}
                    className="w-full h-48 object-cover bg-zinc-800 rounded-t-xl"
                  />
                  <div className="p-6 flex flex-col flex-1">
                    <div className="text-white text-2xl font-semibold mb-2">{project.title}</div>
                    <div className="text-gray-400 mb-4">{project.description}</div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span key={tech} className="bg-blue-900 text-blue-300 px-2 py-1 rounded text-xs font-medium">{tech}</span>
                      ))}
                    </div>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline mt-auto">View Project</a>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-8">
              <a href="/project" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded transition-colors shadow-md">More Projects</a>
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



      {/* Contact Section */}
      <motion.div
        id="contact"
        className="h-screen w-full bg-black"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="flex flex-col items-center justify-center h-full w-full px-8">
          <div className="text-blue-400 text-lg font-semibold mb-2 tracking-wide uppercase">Get in Touch</div>
          <div className="text-white text-4xl font-bold mb-2">Contact</div>
          <div className="text-gray-400 text-center mb-8 max-w-xl">
            I’m always open to discussing new opportunities, collaborations, or just chatting about tech. Fill out the form below or connect with me directly.
          </div>
          <div className="bg-zinc-900 rounded-2xl p-10 shadow-2xl border border-zinc-800 max-w-lg w-full">
            {/* Success message placeholder */}
            {/* <div className="bg-green-600 text-white rounded p-3 mb-4 text-center">Thank you for reaching out! I'll get back to you soon.</div> */}
            <form className="flex flex-col gap-6">
              <div className="flex flex-col gap-1">
                <label htmlFor="name" className="text-gray-300 text-sm font-medium">Name</label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your Name"
                  className="bg-zinc-800 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all border border-zinc-700 focus:border-blue-400"
                  required
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="email" className="text-gray-300 text-sm font-medium">Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="Your Email"
                  className="bg-zinc-800 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all border border-zinc-700 focus:border-blue-400"
                  required
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="message" className="text-gray-300 text-sm font-medium">Message</label>
                <textarea
                  id="message"
                  placeholder="Your Message"
                  className="bg-zinc-800 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all border border-zinc-700 focus:border-blue-400"
                  rows={4}
                  required
                />
              </div>
              <RippleButton
                type="submit"
                className="bg-black-800 hover:bg-grey-600 text-white font-normal py-2 rounded transition-colors shadow-md mt-2"
                rippleColor="#fff"
              >
                Send Message
              </RippleButton>
            </form>
            <div className="text-gray-400 text-center mt-8 mb-2">
              Or email me at <a href="mailto:yashkalange@gmail.com" className="text-blue-400 hover:underline">yashkalange@gmail.com</a>
            </div>
            <motion.div>
                
            </motion.div>
            
          </div>
        </div>
      </motion.div>
        
    </div>
  );
}
 