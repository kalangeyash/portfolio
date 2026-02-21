"use client";

import { useRef, useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Silk from "./components/Silk";
import { motion } from "framer-motion";
import Image from 'next/image';
import Skill from "./components/skill/Skill";
import { SKILLS_DATA } from "./data/skills";
import { PROJECTS } from "./data/projects";
import { RippleButton } from "../components/magicui/ripple-button";
import { ArrowDown, ExternalLink, Mail, Code2, Sparkles } from "lucide-react";
import { circOut } from "framer-motion";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "./components/icons";
import { useForm, ValidationError } from "@formspree/react";

const LiquidChrome = dynamic(
  () => import("@/components/liquid-chrome").then((m) => m.LiquidChrome),
  { ssr: false }
);



export default function Home() {
  const [state, handleSubmit] = useForm("xnjbgjll"); // <-- YOUR FORM ID
  const liquidChromeRef = useRef<HTMLDivElement>(null);
  const [showLiquidChrome, setShowLiquidChrome] = useState(false);

  useEffect(() => {
    const el = liquidChromeRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => setShowLiquidChrome(e.isIntersecting),
      { rootMargin: "100px", threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  if (state.succeeded) {
    return (
      <div className="text-center text-white py-10">
        <h2 className="text-xl font-semibold">✅ Message Sent Successfully!</h2>
        <p className="text-gray-400 mt-2">
          Thank you for contacting me. I’ll get back to you soon.
        </p>
      </div>
    );
  }
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
        className="flex relative h-screen w-full overflow-hidden px-3 sm:px-6 md:px-12 lg:px-16 xl:px-24 2xl:px-32 py-4 sm:py-8 md:py-12 lg:py-16 xl:py-20"
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
            className="mb-4 sm:mb-6 md:mb-8 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white/90 text-xs sm:text-sm md:text-base font-medium flex items-center gap-1.5 sm:gap-2"
          >
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="hidden xs:inline">Available for new opportunities</span>
            <span className="xs:hidden">Open to opportunities</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-3 sm:mb-4 md:mb-6 lg:mb-8 xl:mb-10 leading-tight px-2"
          >
            <span className="bg-gradient-to-r from-white via-[#F5E8D8] to-[#E0E0E0] bg-clip-text text-transparent">
              Yash Kalange
            </span>
            <br />
            <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-[#76ABAE] font-light">
              Computer Engineer
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-light max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl 2xl:max-w-4xl px-3 sm:px-4 leading-relaxed mb-6 sm:mb-8 md:mb-10 lg:mb-12"
          >
            I craft scalable, user-friendly web applications with modern technologies. 
            Specializing in <span className="text-[#76ABAE] font-medium">React</span>, <span className="text-[#76ABAE] font-medium">Next.js</span>, and <span className="text-[#76ABAE] font-medium">TypeScript</span> 
              <span> </span>to deliver exceptional digital experiences.
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-10 md:mb-12 w-full max-w-sm sm:max-w-md md:max-w-lg"
          >
            <a href="/project" className="w-full sm:w-auto"> 
              <RippleButton
                className="w-full sm:w-auto bg-[#76ABAE] hover:bg-[#5A8A8D] text-white font-semibold py-2.5 sm:py-3 px-6 sm:px-8 md:px-10 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 gap-2 text-sm sm:text-base"
                rippleColor="#fff"
              >
                <div className="flex gap-1 sm:gap-2 items-center justify-center">
                  <Code2 className="w-4 h-4 sm:w-5 sm:h-5" />
                  View My Work
                </div>
              </RippleButton>
            </a>
            <a href="#contact">
            <button className="w-full sm:w-auto bg-white/10 backdrop-blur-md hover:bg-white/20 text-white font-semibold py-2.5 sm:py-3 px-6 sm:px-8 md:px-10 rounded-full transition-all duration-300 border border-white/20 hover:border-white/40 flex items-center justify-center gap-2 text-sm sm:text-base">
              <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              Get In Touch
            </button>
            </a>
          </motion.div>

          {/* Scroll indicator - CSS animation to avoid Framer Motion tick every frame */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <div className="text-white/60 flex flex-col items-center gap-1 sm:gap-2 animate-bounce-subtle">
              <span className="text-xs sm:text-sm font-medium">Scroll to explore</span>
              <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Skills Section with enhanced design - CSS gradient instead of second WebGL for performance */}
      <div className="relative w-full overflow-hidden bg-[#23222A]">
        <div className="absolute inset-0 opacity-10 z-5 bg-gradient-to-tl from-[#76ABAE] via-[#5A8A8D] to-slate-900" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-[#76ABAE] rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-[#F5E8D8] rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 py-12 sm:py-16 md:py-20 lg:py-24 px-3 sm:px-6 md:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16 md:mb-20"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 md:mb-6">
              Technical <span className="text-[#76ABAE]">Expertise</span>
            </h2>
            <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-xs sm:max-w-sm md:max-w-md lg:max-w-2xl mx-auto px-3 sm:px-4">
              Proficient in modern web technologies and frameworks
            </p>
          </motion.div>
          <Skill skills={SKILLS_DATA}/>
        </div>
      </div>

      {/* My Projects Section with enhanced design */}
      <div
        id="my-projects"
        className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-black to-gray-900 pt-8 sm:pt-12 md:pt-16 lg:pt-20 px-3 sm:px-6 md:px-8 lg:px-12"
      >
        <div className="flex flex-col lg:flex-row h-full w-full items-stretch gap-8 lg:gap-12">
          {/* Left Side - My Projects */}
          <motion.div
            className="flex-1 flex flex-col justify-center pb-8 lg:pb-0"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <div className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 md:mb-8 text-center lg:text-left">
              Featured <span className="text-[#76ABAE]">Projects</span>
            </div>
            <div className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-xs sm:max-w-sm md:max-w-md lg:max-w-2xl mb-6 sm:mb-8 text-center lg:text-left mx-auto lg:mx-0">
              <p className="mb-4 sm:mb-6">
                A showcase of my latest work, featuring modern web applications built with cutting-edge technologies.
              </p>
            </div>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-3 sm:gap-4 md:gap-6 lg:gap-8"
            >
              {PROJECTS.slice(0, 4).map((project) => (
                <motion.div 
                  key={project.title} 
                  variants={itemVariants}
                  className="group bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-xl sm:rounded-2xl p-0 shadow-2xl border border-zinc-700 flex flex-col overflow-hidden hover:border-[#F5E8D8]/50 transition-all duration-500 hover:shadow-[#76ABAE]/20 hover:shadow-2xl hover:-translate-y-2"
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.alt}
                      width={600}
                      height={300}
                      className="w-full h-24 sm:h-32 md:h-40 lg:h-48 object-cover bg-zinc-800 rounded-t-xl sm:rounded-t-2xl group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-3 sm:p-4 md:p-6 flex flex-col flex-1">
                    <div className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-semibold mb-2 group-hover:text-[#F5E8D8] transition-colors duration-300">
                      {project.title}
                    </div>
                    <div className="text-gray-400 text-xs sm:text-sm md:text-base mb-3 sm:mb-4 flex-1 leading-relaxed">
                      {project.description}
                    </div>
                    <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
                      {project.tech.map((tech) => (
                        <span 
                          key={tech} 
                          className="bg-[#F5E8D8]/20 text-[#F5E8D8] px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full text-xs font-medium border border-[#F5E8D8]/30 hover:bg-[#F5E8D8]/30 transition-colors duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-[#F5E8D8] hover:text-[#E0E0E0] hover:underline mt-auto text-xs sm:text-sm md:text-base font-medium flex items-center gap-1 sm:gap-2 group-hover:gap-2 sm:group-hover:gap-3 transition-all duration-300"
                    >
                      View Project
                      <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
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
              className="flex justify-center mt-6 sm:mt-8 md:mt-10"
            >
              <a 
                href="/project" 
                className="bg-gradient-to-r from-[#F5E8D8] to-[#E0E0E0] hover:from-[#E0E0E0] hover:to-[#F5E8D8] text-gray-800 font-semibold py-2.5 sm:py-3 px-6 sm:px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 text-sm sm:text-base flex items-center gap-2"
              >
                Explore All Projects
                <ArrowDown className="w-3 h-3 sm:w-4 sm:h-4 rotate-[-90deg]" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Side - Liquid Chrome (only mounts when in view to avoid lag) */}
          <motion.div
            ref={liquidChromeRef}
            className="flex-1 min-h-[300px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[600px] relative flex items-center justify-center bg-zinc-900 border border-black rounded-xl sm:rounded-2xl overflow-hidden"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          >
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#F5E8D8]/5 to-[#F5E8D8]/10 pointer-events-none" />
            {showLiquidChrome && (
              <LiquidChrome
                baseColor={[0.05, 0.05, 0.07]}
                speed={0.3}
                amplitude={0.4}
                frequencyX={2}
                frequencyY={3}
                interactive={true}
              />
            )}
          </motion.div>
        </div>
      </div>

      {/* Contact Section with enhanced design */}
      <div
        id="contact"
        className="min-h-screen w-full bg-gradient-to-br from-black via-gray-900 to-black py-8 sm:py-12 md:py-16 lg:py-20 relative overflow-hidden px-3 sm:px-6 md:px-8 lg:px-12"
      >
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-[#F5E8D8] rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-[#76ABAE] rounded-full blur-3xl" />
        </div>

        <div className="flex flex-col items-center justify-center h-full w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-6 sm:mb-8 md:mb-12"
          >
            <div className="text-[#F5E8D8] text-xs sm:text-sm md:text-base lg:text-lg font-semibold mb-2 tracking-wide uppercase text-center flex items-center justify-center gap-1.5 sm:gap-2">
              <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              Get in Touch
            </div>
            <div className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 text-center">
              Lets Create Something <span className="text-[#F5E8D8]">Amazing</span>
            </div>
            <div className="text-gray-300 text-center mb-6 sm:mb-8 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl text-xs sm:text-sm md:text-base px-3 sm:px-4 leading-relaxed">
              I am always open to discussing new opportunities, collaborations, or just chatting about tech. Lets bring your ideas to life.
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gradient-to-br from-zinc-900/80 to-zinc-800/80 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 shadow-2xl border border-zinc-700/50 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg w-full mx-3 sm:mx-4 hover:border-[#F5E8D8]/30 transition-all duration-500"
          >
            <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 sm:gap-4 md:gap-6"
    >
      {/* Name */}
      <div className="flex flex-col gap-1.5 sm:gap-2">
        <label
          htmlFor="name"
          className="text-gray-300 text-xs sm:text-sm font-medium"
        >
          Name
        </label>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="bg-zinc-800/50 backdrop-blur-sm text-white px-3 sm:px-4 py-2.5 sm:py-3 md:py-4 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F5E8D8] transition-all border border-zinc-700/50 focus:border-[#F5E8D8] text-sm sm:text-base hover:bg-zinc-700/50"
        />
      </div>

      {/* Email */}
      <div className="flex flex-col gap-1.5 sm:gap-2">
        <label
          htmlFor="email"
          className="text-gray-300 text-xs sm:text-sm font-medium"
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="bg-zinc-800/50 backdrop-blur-sm text-white px-3 sm:px-4 py-2.5 sm:py-3 md:py-4 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F5E8D8] transition-all border border-zinc-700/50 focus:border-[#F5E8D8] text-sm sm:text-base hover:bg-zinc-700/50"
        />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
          className="text-red-400 text-xs"
        />
      </div>

      {/* Message */}
      <div className="flex flex-col gap-1.5 sm:gap-2">
        <label
          htmlFor="message"
          className="text-gray-300 text-xs sm:text-sm font-medium"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Feel free to leave a message..."
          required
          className="bg-zinc-800/50 backdrop-blur-sm text-white px-3 sm:px-4 py-2.5 sm:py-3 md:py-4 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F5E8D8] transition-all border border-zinc-700/50 focus:border-[#F5E8D8] text-sm sm:text-base resize-vertical min-h-[100px] sm:min-h-[120px] hover:bg-zinc-700/50"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
          className="text-red-400 text-xs"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={state.submitting}
        className="bg-gradient-to-r from-[#F5E8D8] to-[#E0E0E0] hover:from-[#E0E0E0] hover:to-[#F5E8D8] text-gray-800 font-semibold py-2.5 sm:py-3 md:py-4 rounded-lg sm:rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 mt-2 text-sm sm:text-base flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
        {state.submitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
            
            <div className="text-center mt-4 sm:mt-6 md:mt-8">
              <div className="text-gray-400 text-xs sm:text-sm md:text-base mb-3 sm:mb-4">
                Or connect with me directly
              </div>
              <div className="flex justify-center gap-3 sm:gap-4 flex-wrap">
                <a 
                  href="mailto:yashkalange127@gmail.com" 
                  className="text-[#F5E8D8] hover:text-[#E0E0E0] transition-colors duration-200 flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm md:text-base hover:underline"
                >
                  <Mail className="w-3 h-3 sm:w-4 sm:h-4" />
                  Email
                </a>
                <a 
                  href="https://github.com/kalangeyash/" 
                  className="text-[#F5E8D8] hover:text-[#E0E0E0] transition-colors duration-200 flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm md:text-base hover:underline"
                >
                  <GithubIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                  GitHub
                </a>
                <a 
                  href="https://www.linkedin.com/in/yash-kalange/" 
                  className="text-[#F5E8D8] hover:text-[#E0E0E0] transition-colors duration-200 flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm md:text-base hover:underline"
                >
                  <LinkedinIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                  LinkedIn
                </a>
                <a 
                  href="https://www.linkedin.com/in/yash-kalange/" 
                  className="text-[#F5E8D8] hover:text-[#E0E0E0] transition-colors duration-200 flex items-center gap-1.5 sm:gap-2 text-xs sm:text-base hover:underline"
                >
                  <TwitterIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                  Twitter (X)
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}