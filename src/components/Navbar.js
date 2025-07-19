"use client";

import { Menu, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import React, { useRef, useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });
  const [open, setOpen] = useState(false);

  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const linksVar = {
    initial: {
      y: "30vh",
      transition: {
        duration: 0.5,
        ease: [0.37, 0, 0.63, 1],
      },
    },
    open: {
      y: 0,
      transition: {
        ease: [0, 0.55, 0.45, 1],
        duration: 0.7,
      },
    },
  };

  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };

  return (
    <header className="z-10 sticky top-0 h-20 p-2 bg-white/80 dark:bg-black/80 ">
      <div className="flex items-center justify-between max-w-4xl mx-auto h-full">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full shadow-sm"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          <Moon
            fill="black"
            className="absolute h-10 w-10 rotate-0 scale-100 dark:-rotate-90 dark:scale-0"
          />
          <Sun
            fill="#FF3333"
            className="absolute text-[#FF3333] h-10 w-10 scale-0 rotate-90 dark:-rotate-0 dark:scale-100"
          />
        </Button>

        <nav
          onMouseLeave={() => setPosition((prev) => ({ ...prev, opacity: 0 }))}
          className="hidden z-10 relative sm:flex gap-4 py-2 px-6 border-1 rounded-full shadow-sm bg-white dark:bg-black text-gray-700 dark:text-gray-50 font-medium"
        >
          <Tab setPosition={setPosition} path="/">
            Home
          </Tab>
          <Tab setPosition={setPosition} path="/blog">
            Blog
          </Tab>
          <Tab setPosition={setPosition} path="/snippets">
            Snippets
          </Tab>
          <Tab setPosition={setPosition} path="/resources">
            Resources
          </Tab>
          <Tab setPosition={setPosition} path="/projects">
            Projects
          </Tab>
          {/* <Tab setPosition={setPosition} path="/templates">
            Templates
          </Tab> */}

          <Cursor position={position} />
        </nav>

        {/* Mobile View */}
        <div className="flex gap-4 items-center sm:hidden font-medium">
          <nav className="flex gap-4">
            <Link href="/">Home</Link>
            <Link href="/projects">Project</Link>
            <Link href="/templates">Templates</Link>
          </nav>

          <Button onClick={() => setOpen(!open)} variant="outline">
            <Menu />
          </Button>

          <AnimatePresence>
            {open && (
              <motion.div
                variants={menuVars}
                initial="initial"
                animate="animate"
                exit="exit"
                className="fixed left-0 top-20 w-full origin-top h-screen p-10 bg-orange-500"
              >
                <motion.div
                  variants={containerVars}
                  initial="initial"
                  animate="open"
                  exit="initial"
                  className="flex flex-col gap-4 text-2xl text-white"
                >
                  <div className="overflow-hidden">
                    <motion.div variants={linksVar}>
                      <Link onClick={() => setOpen(!open)} href="/blog">
                        Blog
                      </Link>
                    </motion.div>
                  </div>
                  <div className="overflow-hidden">
                    <motion.div variants={linksVar}>
                      <Link onClick={() => setOpen(!open)} href="/snippets">
                        Snippets
                      </Link>
                    </motion.div>
                  </div>
                  <div className="overflow-hidden">
                    <motion.div variants={linksVar}>
                      <Link onClick={() => setOpen(!open)} href="/resources">
                        Resources
                      </Link>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Shine bottom */}
      <div className="absolute w-[30%] -bottom-px right-px h-px bg-gradient-to-r from-blue-500/0 via-blue-500/40 to-blue-500/0 dark:from-blue-400/0 dark:via-blue-400/40 dark:to-blue-400/0" />
    </header>
  );
};

const Cursor = ({ position }) => {
  return (
    <motion.div
      animate={position}
      className="absolute -z-10 h-8 top-1 w-16 rounded-full bg-black dark:bg-white"
    />
  );
};

const Tab = ({ children, setPosition, path }) => {
  const ref = useRef(null);
  const pathname = usePathname();

  const handleCursor = () => {
    if (!ref.current) return;

    const { width } = ref.current.getBoundingClientRect();

    setPosition({
      width: width + 20,
      opacity: 1,
      left: ref.current.offsetLeft - 10,
    });
  };

  return (
    <Link
      ref={ref}
      onMouseEnter={handleCursor}
      className={`${
        pathname === path
          ? "text-orange-500"
          : "text-white mix-blend-difference"
      } test-sm`}
      href={path}
    >
      {children}
    </Link>
  );
};
