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
    description: "AI-powered daily planning tool that helps users organize tasks and optimize productivity. Built with Next.js, TypeScript, and OpenAI API.",
    tech: ["Next.js", "TypeScript", "OpenAI API"],
    link: "https://project-planner-ten-mu.vercel.app/",
  },
  {
    title: "Realtime Collab",
    image: devsCanvas,
    alt: "Realtime Collab Preview",
    description: "A real-time collaborative platform for teams to edit documents together. Uses React, Node.js, WebSockets, and MongoDB.",
    tech: ["React", "Node.js", "WebSockets", "MongoDB"],
    link: "https://realtimecollab.yashkalange.com",
  },
  {
    title: "Portfolio Website",
    image: zx,
    alt: "Portfolio Website Preview",
    description: "Personal portfolio built with Next.js, Framer Motion, and Three.js, showcasing projects and skills with interactive UI.",
    tech: ["Next.js", "Framer Motion", "Three.js"],
    link: "https://yashkalange.com",
  },
  {
    title: "E-commerce Platform",
    image: pencilpath,
    alt: "E-commerce Platform Preview",
    description: "Full-stack e-commerce app with product catalog, cart, and checkout. Built using React, Node.js, and PostgreSQL.",
    tech: ["React", "Node.js", "PostgreSQL"],
    link: "https://ecommerce.yashkalange.com",
  },
  {
    title: "Sentinal Bank",
    image: sentinalbank,
    alt: "E-commerce Platform Preview",
    description: "Full-stack e-commerce app with product catalog, cart, and checkout. Built using React, Node.js, and PostgreSQL.",
    tech: ["React", "Node.js", "PostgreSQL"],
    link: "https://ecommerce.yashkalange.com",
  },
]; 