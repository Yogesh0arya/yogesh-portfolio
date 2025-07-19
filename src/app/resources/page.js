import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Resources() {
  const resources = require("@/data/resources.json");

  return (
    <div>
      <h1 className="text-4xl text-black font-bold dark:text-white mb-4">
        Resources
      </h1>
      <p>
        Helpful websites that I have been using for years that have helped me in
        developing applications and much more.
      </p>

      {/* Frontend */}
      <section className="my-8">
        <h1 className="text-2xl font-semibold mb-4">
          🎨 Front-End Development
        </h1>
        <div className="grid md:grid-cols-2 gap-4">
          {resources
            .filter((resource) => resource.cat === "frontend")
            .map((resource) => (
              <Link href={resource.link} key={resource.id}>
                <Card className="relative cursor-pointer hover:shadow-lg transition-all duration-400  hover:bg-gradient-to-r hover:from-violet-600/5 hover:to-orange-600/5 h-full">
                  <CardHeader>
                    <CardTitle>
                      {resource.link && (
                        <Image
                          className="h-16 w-auto"
                          src={resource.logo}
                          width={100}
                          height={100}
                          alt="logo"
                        />
                      )}
                    </CardTitle>
                    <CardDescription className="text-black dark:text-white text-lg">
                      {resource.name}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-gray-600 dark:text-gray-400 text-sm md:text-base">
                    {resource.desc}
                  </CardContent>

                  {/* Shine bottom */}
                  <div className="absolute w-[40%] -bottom-px right-px h-px bg-gradient-to-r from-blue-500/0 via-blue-500/40 to-blue-500/0 dark:from-blue-400/0 dark:via-blue-400/40 dark:to-blue-400/0" />

                  {/* Shine left */}
                  <div className="absolute w-px -left-px top-[50%] h-[40%] bg-gradient-to-b from-blue-500/0 via-blue-500/40 to-blue-500/0 dark:from-blue-400/0 dark:via-blue-400/40 dark:to-blue-400/0" />
                </Card>
              </Link>
            ))}
        </div>
      </section>

      {/* UI Design */}
      <section className="my-8">
        <h1 className="text-2xl font-semibold mb-4">🖼️ UI Design</h1>
        <div className="grid md:grid-cols-2 gap-4">
          {resources
            .filter(
              (resource) => resource.cat === "ui" || resource.cat === "css"
            )
            .map((resource) => (
              <Link href={resource.link} key={resource.id}>
                <Card className="relative cursor-pointer hover:shadow-lg transition-all duration-400  hover:bg-gradient-to-r hover:from-violet-600/5 hover:to-orange-600/5 h-full">
                  <CardHeader>
                    <CardTitle>
                      {resource.link && (
                        <Image
                          className="h-16 w-auto"
                          src={resource.logo}
                          width={100}
                          height={100}
                          alt="logo"
                        />
                      )}
                    </CardTitle>
                    <CardDescription className="text-black dark:text-white text-lg">
                      {resource.name}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-gray-600 dark:text-gray-400 text-sm md:text-base">
                    {resource.desc}
                  </CardContent>

                  {/* Shine bottom */}
                  <div className="absolute w-[40%] -bottom-px right-px h-px bg-gradient-to-r from-blue-500/0 via-blue-500/40 to-blue-500/0 dark:from-blue-400/0 dark:via-blue-400/40 dark:to-blue-400/0" />

                  {/* Shine left */}
                  <div className="absolute w-px -left-px top-[50%] h-[40%] bg-gradient-to-b from-blue-500/0 via-blue-500/40 to-blue-500/0 dark:from-blue-400/0 dark:via-blue-400/40 dark:to-blue-400/0" />
                </Card>
              </Link>
            ))}
        </div>
      </section>

      {/* Backend */}
      <section className="my-8">
        <h1 className="text-2xl font-semibold mb-4">🖥️ Back-End Development</h1>
        <div className="grid md:grid-cols-2 gap-4">
          {resources
            .filter((resource) => resource.cat === "backend")
            .map((resource) => (
              <Link href={resource.link} key={resource.id}>
                <Card className="relative cursor-pointer hover:shadow-lg transition-all duration-400  hover:bg-gradient-to-r hover:from-violet-600/5 hover:to-orange-600/5 h-full">
                  <CardHeader>
                    <CardTitle>
                      {resource.link && (
                        <Image
                          className="h-16 w-auto"
                          src={resource.logo}
                          width={100}
                          height={100}
                          alt="logo"
                        />
                      )}
                    </CardTitle>
                    <CardDescription className="text-black dark:text-white text-lg">
                      {resource.name}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-gray-600 dark:text-gray-400 text-sm md:text-base">
                    {resource.desc}
                  </CardContent>

                  {/* Shine bottom */}
                  <div className="absolute w-[40%] -bottom-px right-px h-px bg-gradient-to-r from-blue-500/0 via-blue-500/40 to-blue-500/0 dark:from-blue-400/0 dark:via-blue-400/40 dark:to-blue-400/0" />

                  {/* Shine left */}
                  <div className="absolute w-px -left-px top-[50%] h-[40%] bg-gradient-to-b from-blue-500/0 via-blue-500/40 to-blue-500/0 dark:from-blue-400/0 dark:via-blue-400/40 dark:to-blue-400/0" />
                </Card>
              </Link>
            ))}
        </div>
      </section>

      {/* Databases */}
      <section className="my-8">
        <h1 className="text-2xl font-semibold mb-4">📃 Databases</h1>
        <div className="grid md:grid-cols-2 gap-4">
          {resources
            .filter((resource) => resource.cat === "database")
            .map((resource) => (
              <Link href={resource.link} key={resource.id}>
                <Card className="relative cursor-pointer hover:shadow-lg transition-all duration-400  hover:bg-gradient-to-r hover:from-violet-600/5 hover:to-orange-600/5 h-full">
                  <CardHeader>
                    <CardTitle>
                      {resource.link && (
                        <Image
                          className="h-16 w-auto"
                          src={resource.logo}
                          width={100}
                          height={100}
                          alt="logo"
                        />
                      )}
                    </CardTitle>
                    <CardDescription className="text-black dark:text-white text-lg">
                      {resource.name}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-gray-600 dark:text-gray-400 text-sm md:text-base">
                    {resource.desc}
                  </CardContent>

                  {/* Shine bottom */}
                  <div className="absolute w-[40%] -bottom-px right-px h-px bg-gradient-to-r from-blue-500/0 via-blue-500/40 to-blue-500/0 dark:from-blue-400/0 dark:via-blue-400/40 dark:to-blue-400/0" />

                  {/* Shine left */}
                  <div className="absolute w-px -left-px top-[50%] h-[40%] bg-gradient-to-b from-blue-500/0 via-blue-500/40 to-blue-500/0 dark:from-blue-400/0 dark:via-blue-400/40 dark:to-blue-400/0" />
                </Card>
              </Link>
            ))}
        </div>
      </section>

      {/* Hosting */}
      <section className="my-8">
        <h1 className="text-2xl font-semibold mb-4">🛜 Hosting</h1>
        <div className="grid md:grid-cols-2 gap-4">
          {resources
            .filter((resource) => resource.cat === "hosting")
            .map((resource) => (
              <Link href={resource.link} key={resource.id}>
                <Card className="relative cursor-pointer hover:shadow-lg transition-all duration-400  hover:bg-gradient-to-r hover:from-violet-600/5 hover:to-orange-600/5 h-full">
                  <CardHeader>
                    <CardTitle>
                      {resource.link && (
                        <Image
                          className="h-16 w-auto"
                          src={resource.logo}
                          width={100}
                          height={100}
                          alt="logo"
                        />
                      )}
                    </CardTitle>
                    <CardDescription className="text-black dark:text-white text-lg">
                      {resource.name}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-gray-600 dark:text-gray-400 text-sm md:text-base">
                    {resource.desc}
                  </CardContent>

                  {/* Shine bottom */}
                  <div className="absolute w-[40%] -bottom-px right-px h-px bg-gradient-to-r from-blue-500/0 via-blue-500/40 to-blue-500/0 dark:from-blue-400/0 dark:via-blue-400/40 dark:to-blue-400/0" />

                  {/* Shine left */}
                  <div className="absolute w-px -left-px top-[50%] h-[40%] bg-gradient-to-b from-blue-500/0 via-blue-500/40 to-blue-500/0 dark:from-blue-400/0 dark:via-blue-400/40 dark:to-blue-400/0" />
                </Card>
              </Link>
            ))}
        </div>
      </section>

      {/* Testing */}
      <section className="my-8">
        <h1 className="text-2xl font-semibold mb-4">🧪 Testing</h1>
        <div className="grid md:grid-cols-2 gap-4">
          {resources
            .filter((resource) => resource.cat === "testing")
            .map((resource) => (
              <Link href={resource.link} key={resource.id}>
                <Card className="relative cursor-pointer hover:shadow-lg transition-all duration-400  hover:bg-gradient-to-r hover:from-violet-600/5 hover:to-orange-600/5 h-full">
                  <CardHeader>
                    <CardTitle>
                      {resource.link && (
                        <Image
                          className="h-16 w-auto"
                          src={resource.logo}
                          width={100}
                          height={100}
                          alt="logo"
                        />
                      )}
                    </CardTitle>
                    <CardDescription className="text-black dark:text-white text-lg">
                      {resource.name}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-gray-600 dark:text-gray-400 text-sm md:text-base">
                    {resource.desc}
                  </CardContent>

                  {/* Shine bottom */}
                  <div className="absolute w-[40%] -bottom-px right-px h-px bg-gradient-to-r from-blue-500/0 via-blue-500/40 to-blue-500/0 dark:from-blue-400/0 dark:via-blue-400/40 dark:to-blue-400/0" />

                  {/* Shine left */}
                  <div className="absolute w-px -left-px top-[50%] h-[40%] bg-gradient-to-b from-blue-500/0 via-blue-500/40 to-blue-500/0 dark:from-blue-400/0 dark:via-blue-400/40 dark:to-blue-400/0" />
                </Card>
              </Link>
            ))}
        </div>
      </section>

      {/* Full stack */}
      <section className="my-8">
        <h1 className="text-2xl font-semibold mb-4">⚙️ Full-Stack</h1>
        <div className="grid md:grid-cols-2 gap-4">
          {resources
            .filter((resource) => resource.cat === "full stack")
            .map((resource) => (
              <Link href={resource.link} key={resource.id}>
                <Card className="relative cursor-pointer hover:shadow-lg transition-all duration-400  hover:bg-gradient-to-r hover:from-violet-600/5 hover:to-orange-600/5 h-full">
                  <CardHeader>
                    <CardTitle>
                      {resource.link && (
                        <Image
                          className="h-16 w-auto"
                          src={resource.logo}
                          width={100}
                          height={100}
                          alt="logo"
                        />
                      )}
                    </CardTitle>
                    <CardDescription className="text-black dark:text-white text-lg">
                      {resource.name}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-gray-600 dark:text-gray-400 text-sm md:text-base">
                    {resource.desc}
                  </CardContent>

                  {/* Shine bottom */}
                  <div className="absolute w-[40%] -bottom-px right-px h-px bg-gradient-to-r from-blue-500/0 via-blue-500/40 to-blue-500/0 dark:from-blue-400/0 dark:via-blue-400/40 dark:to-blue-400/0" />

                  {/* Shine left */}
                  <div className="absolute w-px -left-px top-[50%] h-[40%] bg-gradient-to-b from-blue-500/0 via-blue-500/40 to-blue-500/0 dark:from-blue-400/0 dark:via-blue-400/40 dark:to-blue-400/0" />
                </Card>
              </Link>
            ))}
        </div>
      </section>

      {/* Other */}
      <section className="my-8">
        <h1 className="text-2xl font-semibold mb-4">🧰 Other</h1>
        <div className="grid md:grid-cols-2 gap-4">
          {resources
            .filter(
              (resource) =>
                resource.cat === "API" || resource.cat === "state management"
            )
            .map((resource) => (
              <Link href={resource.link} key={resource.id}>
                <Card className="relative cursor-pointer hover:shadow-lg transition-all duration-400  hover:bg-gradient-to-r hover:from-violet-600/5 hover:to-orange-600/5 h-full">
                  <CardHeader>
                    <CardTitle>
                      {resource.link && (
                        <Image
                          className="h-16 w-auto"
                          src={resource.logo}
                          width={100}
                          height={100}
                          alt="logo"
                        />
                      )}
                    </CardTitle>
                    <CardDescription className="text-black dark:text-white text-lg">
                      {resource.name}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-gray-600 dark:text-gray-400 text-sm md:text-base">
                    {resource.desc}
                  </CardContent>

                  {/* Shine bottom */}
                  <div className="absolute w-[40%] -bottom-px right-px h-px bg-gradient-to-r from-blue-500/0 via-blue-500/40 to-blue-500/0 dark:from-blue-400/0 dark:via-blue-400/40 dark:to-blue-400/0" />

                  {/* Shine left */}
                  <div className="absolute w-px -left-px top-[50%] h-[40%] bg-gradient-to-b from-blue-500/0 via-blue-500/40 to-blue-500/0 dark:from-blue-400/0 dark:via-blue-400/40 dark:to-blue-400/0" />
                </Card>
              </Link>
            ))}
        </div>
      </section>
    </div>
  );
}

export default Resources;
