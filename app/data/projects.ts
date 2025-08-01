import pencilpath from '@/public/projects/pencilpath.png'
import devsCanvas from '@/public/projects/devsCanvas.png'
import planner from '@/public/projects/planner.png'
import sentinalbank from '@/public/projects/sentinal-bank.png'
import zx from '@/public/projects/zx.png'

export const PROJECTS = [
  {
    title: "AI Planner",
    image: planner,
    alt: "AI Planner Preview",
    description: "AI-powered daily planning tool that helps users organize tasks and optimize productivity.",
    tech: ["React", "TypeScript", "OpenAI API" ,"NodeJs", "MongoDB"],
    link: "https://project-planner-ten-mu.vercel.app/",
  },
  {
    title: "DevsCanvas",
    image: devsCanvas,
    alt: "Realtime Code Editor",
    description: "A real-time collaborative platform for writing and testing codes in different programming languages",
    tech: ["React","TypeScript" ,"Node.js", "Socket.Io" ],
    link: "https://devs-canvas.vercel.app/",
  },
  {
    title: "Metaverse Gaming Website ZX",
    image: zx,
    alt: "Metaverse Website Preview",
    description: "Metaverse gaming website with interactive UI and smooth animations and smooth transitions",
    tech: ["React", "GSAP", "Tailwind CSS"],
    link: "https://zap-x.vercel.app/",
  },
  {
    title: "Pencil Path ",
    image: pencilpath,
    alt: "Pencil Path ",
    description: "Pencil Path is a blogging website where users can write and share their thoughts and ideas.",
    tech: ["React", "Hono.js", "PostgreSQL" , "Cloudflare Worker"],
    link: "https://pencil-path-henna.vercel.app/",
  },
  {
    title: "Sentinal Bank",
    image: sentinalbank,
    alt: "Sentinal Bank",
    description: "Sentinal Bank is a banking website where users can do transactions with other users.",
    tech: ["React", "Node.js", "MongoDB"],
    link: "https://sentinal-bank-6ku5.vercel.app/",
  },
]; 