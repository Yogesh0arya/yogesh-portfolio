import React from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

function Projects() {
  const projects = require("@/data/projects.json");

  return (
    <section className="mb-12 flex flex-col">
      <h1 className="text-black text-3xl font-bold dark:text-white mb-6">
        Projects
      </h1>

      <div className="grid md:grid-cols-2 gap-4">
        {projects
          .filter((p) => p.isDone)
          .map((project) => (
            <Link href={project.link} key={project.id}>
              <Card className="relative cursor-pointer hover:shadow-lg transition-all duration-400  hover:bg-gradient-to-r hover:from-violet-600/5 hover:to-orange-600/5 ">
                <CardHeader>
                  <CardTitle className="p-2 w-fit dark:bg-white rounded-full">
                    <Image
                      src={project.logo}
                      width={100}
                      height={100}
                      alt="logo"
                      className="h-8 w-auto"
                    />
                  </CardTitle>
                  <CardDescription className="text-xl font-bold text-black dark:text-white">
                    {project.desc}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-gray-600 dark:text-gray-300">
                  <p>{project.content}</p>
                </CardContent>
                <CardFooter className="flex gap-2 italic text-sm flex-wrap">
                  {project.tools.map((tool, i) => (
                    <p
                      key={i}
                      className="bg-gray-100 dark:bg-gray-800 rounded-full px-1.5"
                    >
                      {tool}
                    </p>
                  ))}
                </CardFooter>

                {/* Shine bottom */}
                <div className="absolute w-[40%] -bottom-px right-px h-px bg-gradient-to-r from-blue-500/0 via-blue-500/40 to-blue-500/0 dark:from-blue-400/0 dark:via-blue-400/40 dark:to-blue-400/0" />

                {/* Shine left */}
                <div className="absolute w-px -left-px top-[50%] h-[40%] bg-gradient-to-b from-blue-500/0 via-blue-500/40 to-blue-500/0 dark:from-blue-400/0 dark:via-blue-400/40 dark:to-blue-400/0" />
              </Card>
            </Link>
          ))}
      </div>
    </section>
  );
}

export default Projects;
