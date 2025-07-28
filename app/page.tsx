"use client";

import Silk from "./components/Silk";
import LiquidChrome from "@/components/liquid-chrome";
import { motion } from "framer-motion";
import Image from 'next/image';
import Skill from "./components/skill/Skill";
import { SKILLS_DATA } from "./data/skills";
import { PROJECTS } from "./data/projects";
import { RippleButton } from "../components/magicui/ripple-button";
import { ArrowDown, ExternalLink, Mail, Github, Linkedin, Code2, Sparkles } from "lucide-react";
import { circOut } from "framer-motion";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: circOut
      }
    }
  };

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <div
        id="home"
        className="flex relative h-screen w-full overflow-hidden px-4 sm:px-8 md:px-16 lg:px-24 xl:px-36 py-8 sm:py-16 md:py-24 lg:py-36"
      >
        <div className="absolute inset-0 z-0">
          <Silk />
        </div>
        
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 z-5 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.17, 0.67, 0.83, 0.67] }}
          className="relative z-10 flex flex-col items-center justify-center h-full w-full text-center"
        >
          {/* Floating badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white/90 text-sm font-medium flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            Available for new opportunities
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 md:mb-8 lg:mb-10 leading-tight"
          >
            <span className="bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent">
              Yash Kalange
            </span>
            <br />
            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-blue-400 font-light">
              Computer Engineer
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-gray-300 text-base sm:text-lg md:text-xl lg:text-2xl font-light max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-4xl px-4 leading-relaxed mb-8 sm:mb-12"
          >
            I craft scalable, user-friendly web applications with modern technologies. 
            Specializing in <span className="text-blue-400 font-medium">React</span>, <span className="text-blue-400 font-medium">Next.js</span>, and <span className="text-blue-400 font-medium">TypeScript</span> 
              <span> </span>to deliver exceptional digital experiences.
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <RippleButton
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center gap-2"
              rippleColor="#fff"
            >
              <Code2 className="w-5 h-5" />
              View My Work
            </RippleButton>
            <button className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 border border-white/20 hover:border-white/40 flex items-center gap-2">
              <Mail className="w-5 h-5" />
              Get In Touch
            </button>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="text-white/60 flex flex-col items-center gap-2"
            >
              <span className="text-sm font-medium">Scroll to explore</span>
              <ArrowDown className="w-5 h-5" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Skills Section with enhanced design */}
      <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
        </div>
      <div className="relative w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Silk />
        </div>
        <div className="absolute inset-0 z-5 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-106 h-96 bg-blue-500 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-106 h-96 bg-purple-500 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 py-16 sm:py-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Technical <span className="text-blue-400">Expertise</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto px-4">
              Proficient in modern web technologies and frameworks
            </p>
          </motion.div>
          <Skill skills={SKILLS_DATA}/>
        </div>
      </div>

      {/* My Projects Section with enhanced design */}
      <div
        id="my-projects"
        className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-black to-gray-900 pt-8 sm:pt-12 md:pt-16"
      >
        <div className="flex flex-col lg:flex-row h-full w-full items-stretch">
          {/* Left Side - My Projects */}
          <motion.div
            className="flex-1 flex flex-col justify-center px-4 sm:px-8 md:px-12 lg:px-16 pb-8 lg:pb-0"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <div className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 md:mb-8 text-center lg:text-left">
              Featured <span className="text-blue-400">Projects</span>
            </div>
            <div className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-2xl mb-6 sm:mb-8 text-center lg:text-left mx-auto lg:mx-0">
              <p className="mb-4 sm:mb-6">
                A showcase of my latest work, featuring modern web applications built with cutting-edge technologies.
              </p>
            </div>
            
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6 md:gap-8"
            >
              {PROJECTS.slice(0, 4).map((project) => (
                <motion.div 
                  key={project.title} 
                  variants={itemVariants}
                  className="group bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-2xl p-0 shadow-2xl border border-zinc-700 flex flex-col overflow-hidden hover:border-blue-100/50 transition-all duration-500 hover:shadow-blue-500/20 hover:shadow-2xl hover:-translate-y-2"
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.alt}
                      width={600}
                      height={300}
                      className="w-full h-32 sm:h-40 md:h-48 object-cover bg-zinc-800 rounded-t-2xl group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ExternalLink className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="p-4 sm:p-6 flex flex-col flex-1">
                    <div className="text-white text-lg sm:text-xl md:text-2xl font-semibold mb-2 group-hover:text-blue-400 transition-colors duration-300">
                      {project.title}
                    </div>
                    <div className="text-gray-400 text-sm sm:text-base mb-3 sm:mb-4 flex-1 leading-relaxed">
                      {project.description}
                    </div>
                    <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
                      {project.tech.map((tech) => (
                        <span 
                          key={tech} 
                          className="bg-blue-900/50 text-blue-300 px-2 py-1 rounded-full text-xs font-medium border border-blue-800/50 hover:bg-blue-800/50 transition-colors duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-blue-400 hover:text-blue-300 hover:underline mt-auto text-sm sm:text-base font-medium flex items-center gap-2 group-hover:gap-3 transition-all duration-300"
                    >
                      View Project
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex justify-center mt-6 sm:mt-8"
            >
              <a 
                href="/project" 
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 text-sm sm:text-base flex items-center gap-2"
              >
                Explore All Projects
                <ArrowDown className="w-4 h-4 rotate-[-90deg]" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Side - Liquid Chrome Component */}
          <motion.div
            className="flex-1 min-h-[400px] lg:min-h-[600px] relative flex items-center justify-center bg-zinc-900 border border-black"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          >
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-blue-500/5 to-blue-500/10 pointer-events-none" />
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
      </div>

      {/* Contact Section with enhanced design */}
      <div
        id="contact"
        className="min-h-screen w-full bg-gradient-to-br from-black via-gray-900 to-black py-12 sm:py-16 md:py-20 relative overflow-hidden"
      >
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
        </div>

        <div className="flex flex-col items-center justify-center h-full w-full px-4 sm:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 sm:mb-12"
          >
            <div className="text-blue-400 text-sm sm:text-base md:text-lg font-semibold mb-2 tracking-wide uppercase text-center flex items-center justify-center gap-2">
              <Mail className="w-5 h-5" />
              Get in Touch
            </div>
            <div className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-center">
              Lets Create Something <span className="text-blue-400">Amazing</span>
            </div>
            <div className="text-gray-300 text-center mb-6 sm:mb-8 max-w-xs sm:max-w-md md:max-w-xl text-sm sm:text-base px-4 leading-relaxed">
              I am always open to discussing new opportunities, collaborations, or just chatting about tech. 
              Lets bring your ideas to life.
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gradient-to-br from-zinc-900/80 to-zinc-800/80 backdrop-blur-xl rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl border border-zinc-700/50 max-w-sm sm:max-w-md md:max-w-lg w-full mx-4 hover:border-blue-500/30 transition-all duration-500"
          >
            <form className="flex flex-col gap-4 sm:gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-gray-300 text-sm font-medium flex items-center gap-2">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your Name"
                  className="bg-zinc-800/50 backdrop-blur-sm text-white px-3 sm:px-4 py-3 sm:py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all border border-zinc-700/50 focus:border-blue-400 text-sm sm:text-base hover:bg-zinc-700/50"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-gray-300 text-sm font-medium">Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="Your Email"
                  className="bg-zinc-800/50 backdrop-blur-sm text-white px-3 sm:px-4 py-3 sm:py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all border border-zinc-700/50 focus:border-blue-400 text-sm sm:text-base hover:bg-zinc-700/50"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-gray-300 text-sm font-medium">Message</label>
                <textarea
                  id="message"
                  placeholder="Tell me about your project..."
                  className="bg-zinc-800/50 backdrop-blur-sm text-white px-3 sm:px-4 py-3 sm:py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all border border-zinc-700/50 focus:border-blue-400 text-sm sm:text-base resize-vertical min-h-[120px] hover:bg-zinc-700/50"
                  rows={4}
                  required
                />
              </div>
              <RippleButton
                type="submit"
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 sm:py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 mt-2 text-sm sm:text-base flex items-center justify-center gap-2"
                rippleColor="#fff"
              >
                <Mail className="w-5 h-5" />
                Send Message
              </RippleButton>
            </form>
            
            <div className="text-center mt-6 sm:mt-8">
              <div className="text-gray-400 text-sm sm:text-base mb-4">
                Or connect with me directly
              </div>
              <div className="flex justify-center gap-4">
                <a 
                  href="mailto:yashkalange@gmail.com" 
                  className="text-blue-400 hover:text-blue-300 transition-colors duration-200 flex items-center gap-2 text-sm sm:text-base hover:underline"
                >
                  <Mail className="w-4 h-4" />
                  Email
                </a>
                <a 
                  href="#" 
                  className="text-blue-400 hover:text-blue-300 transition-colors duration-200 flex items-center gap-2 text-sm sm:text-base hover:underline"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
                <a 
                  href="#" 
                  className="text-blue-400 hover:text-blue-300 transition-colors duration-200 flex items-center gap-2 text-sm sm:text-base hover:underline"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}