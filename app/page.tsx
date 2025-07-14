"use client";

import Silk from "./components/Silk";
import LiquidChrome from "@/components/liquid-chrome";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div>
      <div
        id="home"
        className="relative h-screen w-full overflow-hidden"
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
        className="h-screen w-full bg-black"
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
      {/* Projects Section */}
      <motion.div
        id="projects"
        className="h-screen w-full bg-black"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="flex h-full w-full">
          <motion.div
            className="flex-1 flex flex-col justify-center px-16"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          >
            <div className="text-white text-4xl font-bold mb-8">
              Projects  
            </div>
            <div className="text-gray-400 text-lg leading-relaxed max-w-2xl mb-8">
              <p className="mb-6">
                Here are some of the projects I've worked on:
              </p>
            </div>
            {/* Project Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Project 1 */}
              <div className="bg-zinc-900 rounded-xl p-6 shadow-lg border border-zinc-800">
                <div className="text-white text-2xl font-semibold mb-2">AI Planner</div>
                <div className="text-gray-400 mb-4">AI-powered daily planning tool that helps users organize tasks and optimize productivity. Built with Next.js, TypeScript, and OpenAI API.</div>
                <a href="#" className="text-blue-400 hover:underline">View Project</a>
              </div>
              {/* Project 2 */}
              <div className="bg-zinc-900 rounded-xl p-6 shadow-lg border border-zinc-800">
                <div className="text-white text-2xl font-semibold mb-2">Realtime Collab</div>
                <div className="text-gray-400 mb-4">A real-time collaborative platform for teams to edit documents together. Uses React, Node.js, WebSockets, and MongoDB.</div>
                <a href="#" className="text-blue-400 hover:underline">View Project</a>
              </div>
              {/* Project 3 */}
              <div className="bg-zinc-900 rounded-xl p-6 shadow-lg border border-zinc-800">
                <div className="text-white text-2xl font-semibold mb-2">Portfolio Website</div>
                <div className="text-gray-400 mb-4">Personal portfolio built with Next.js, Framer Motion, and Three.js, showcasing projects and skills with interactive UI.</div>
                <a href="#" className="text-blue-400 hover:underline">View Project</a>
              </div>
              {/* Project 4 */}
              <div className="bg-zinc-900 rounded-xl p-6 shadow-lg border border-zinc-800">
                <div className="text-white text-2xl font-semibold mb-2">E-commerce Platform</div>
                <div className="text-gray-400 mb-4">Full-stack e-commerce app with product catalog, cart, and checkout. Built using React, Node.js, and PostgreSQL.</div>
                <a href="#" className="text-blue-400 hover:underline">View Project</a>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
      {/* Skills Section */}
      <motion.div
        id="skills"
        className="h-screen w-full bg-black"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="flex flex-col items-center justify-center h-full w-full px-8">
          <div className="text-white text-4xl font-bold mb-8">Skills</div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl w-full">
            <div className="flex flex-col items-center">
              <span className="text-white text-2xl font-semibold mb-2">React</span>
              <span className="text-gray-400">Frontend Library</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-white text-2xl font-semibold mb-2">Next.js</span>
              <span className="text-gray-400">React Framework</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-white text-2xl font-semibold mb-2">TypeScript</span>
              <span className="text-gray-400">Typed JavaScript</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-white text-2xl font-semibold mb-2">Node.js</span>
              <span className="text-gray-400">Backend Runtime</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-white text-2xl font-semibold mb-2">MongoDB</span>
              <span className="text-gray-400">NoSQL Database</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-white text-2xl font-semibold mb-2">PostgreSQL</span>
              <span className="text-gray-400">SQL Database</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-white text-2xl font-semibold mb-2">Framer Motion</span>
              <span className="text-gray-400">Animation Library</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-white text-2xl font-semibold mb-2">Three.js</span>
              <span className="text-gray-400">3D Graphics</span>
            </div>
          </div>
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
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded transition-colors shadow-md mt-2"
              >
                Send Message
              </button>
            </form>
            <div className="text-gray-400 text-center mt-8 mb-2">
              Or email me at <a href="mailto:yashkalange@gmail.com" className="text-blue-400 hover:underline">yashkalange@gmail.com</a>
            </div>
            
          </div>
        </div>
      </motion.div>
        
    </div>
  );
}
