"use client";

import { useState, useEffect } from "react";
import Loader from "@/components/ui/loader";
import { LenisProvider } from "@/components/ui/lenis-provider";
import { FloatingDockDesktop } from "@/components/ui/floating-dock";
import { IconBrandGithub, IconBrandLinkedin, IconBrandX, IconExchange, IconHome, IconNewSection } from "@tabler/icons-react";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#home",
    },
    // {
    //   title: "About",
    //   icon: (
    //     <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    //   ),
    //   href: "#about",
    // },
    {
      title: "Projects",
      icon: (
        <IconNewSection className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#my-projects",
    },
    {
      title: "Contact",
      icon: (
        <IconExchange className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#contact",
    },
    {
      title: "Xr",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://x.com/yash_kalange",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/kalangeyash",
    },
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/yash-kalange/",
    },
  ];

  return loading ? (
    <Loader />
  ) : (
    <LenisProvider>
      {children}
      <FloatingDockDesktop items={links} />
    </LenisProvider>
  );
} 