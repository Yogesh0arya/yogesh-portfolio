"use client";

import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { BadgeCheck, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "../components/ui/button";
import { useEffect, useState } from "react";
import { format } from "timeago.js";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";
import { toast } from "sonner";

export default function Home() {
  const [posts, setPosts] = useState(null);
  const [viewMore, setviewMore] = useState({
    open: false,
    limit: 2,
  });

  const [state, handleSubmit] = useForm("xblogaqj");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const isDisabled = state.submitting || !email.trim() || !message.trim();

  useEffect(() => {
    if (state.succeeded) {
      setEmail("");
      setMessage("");
      toast.success("Message sent successfully");
    }
  }, [state.succeeded]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://blog-kak5.onrender.com/posts?featured=true&limit=2&sort=newest"
        );
        if (!response.ok) {
          console.log(response.status);
        }
        const result = await response.json();
        setPosts(result.posts);
      } catch (err) {
        console.log(err.message);
      }
    };

    fetchData();
  }, []);

  const lifeLogs = require("../data/lifeLogs.json");
  const projects = require("../data/projects.json");

  return (
    <div>
      {/* Intro */}
      <section className="flex flex-col gap-6 sm:flex sm:flex-row-reverse justify-between mb-12">
        <Image
          src="/profilePhoto.jpg"
          width={80}
          height={80}
          alt="image"
          className="w-32 h-32"
        />
        <div>
          <h1 className="text-black text-3xl font-bold dark:text-white mb-1">
            Yogesh Arya
          </h1>
          <p className="mb-5 text-base text-gray-500 dark:text-gray-300">
            Mtech from IIT Madras, Btech from NIT Bhopal
          </p>
          <p className="max-w-[480px] dark:text-gray-400">
            Software Engineer building SaaS products and web apps. Find me on
            <a
              className="inline font-medium dark:text-white"
              href="https://www.linkedin.com/in/Yogesh08arya"
            >
              {" "}
              Linkedin{" "}
            </a>
            for tech updates
          </p>
        </div>
      </section>

      {/* Recent Blogs */}
      <section className="mb-12">
        <h1 className="text-black text-3xl font-bold dark:text-white mb-6">
          Recent Blogs
        </h1>
        <div className="flex flex-col gap-4">
          {!posts
            ? "Loading..."
            : posts?.slice(0, 2).map((post) => (
                <Card key={post._id} className="bg-gray-100 dark:bg-gray-900">
                  <CardContent className="">
                    <p className="font-bold">{post.title}</p>
                  </CardContent>
                  <CardFooter className="text-sm text-gray-500  flex justify-between">
                    <Link
                      className="dark:text-gray-400 cursor-pointer"
                      href={`/blog/${post.slug}`}
                    >
                      Read more
                    </Link>
                    <p>{format(post.createdAt)}</p>
                  </CardFooter>
                </Card>
              ))}

          <Link href="/blog" className="mx-auto text-md cursor-pointer">
            See All Blogs <ChevronDown className="inline" />
          </Link>
        </div>
      </section>

      {/* Projects */}
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
        <Link href="/projects" className="mx-auto text-md cursor-pointer mt-4">
          See All Projects <ChevronDown className="inline" />
        </Link>
      </section>

      {/* Upcomming Projects */}
      <section className="mb-12">
        <h1 className="text-black text-3xl font-bold dark:text-white mb-6">
          Upcomming Projects
        </h1>
        <div className="grid md:grid-cols-2 gap-4">
          {projects
            .filter((p) => !p.isDone)
            .map((project) => (
              <Card
                key={project.id}
                className="relative cursor-pointer hover:shadow-lg transition-all duration-400  hover:bg-gradient-to-r hover:from-violet-600/5 hover:to-orange-600/5 "
              >
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
            ))}

          {/* More project on this area */}
          <Card className="relative cursor-pointer hover:shadow-lg transition-all duration-400  hover:bg-gradient-to-r hover:from-violet-600/5 hover:to-orange-600/5 ">
            <CardHeader>
              <CardDescription className="text-xl font-bold dark:text-white">
                More projects coming soon..
              </CardDescription>
            </CardHeader>
            <CardContent className="text-gray-600 dark:text-gray-300">
              <p>
                I get ideas all day 🙄, All of them are updated here as soon as
                I start working on them.
              </p>
            </CardContent>

            {/* Shine bottom */}
            <div className="absolute w-[40%] -bottom-px right-px h-px bg-gradient-to-r from-blue-500/0 via-blue-500/40 to-blue-500/0 dark:from-blue-400/0 dark:via-blue-400/40 dark:to-blue-400/0" />

            {/* Shine left */}
            <div className="absolute w-px -left-px top-[50%] h-[40%] bg-gradient-to-b from-blue-500/0 via-blue-500/40 to-blue-500/0 dark:from-blue-400/0 dark:via-blue-400/40 dark:to-blue-400/0" />
          </Card>
        </div>
      </section>

      {/* Life Changelog and Updates */}
      <section className="mb-12">
        <h1 className="text-black text-3xl font-bold dark:text-white mb-6">
          Life Changelog and Updates
        </h1>
        <AnimatePresence>
          {lifeLogs.slice(0, viewMore.limit).map((lifeLog) => (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              key={lifeLog.year}
              className="origin-top border-b pb-10 dark:border-gray-500 mt-10"
            >
              <h1 className="text-black font-bold text-xl dark:text-white mb-4">
                {lifeLog.year}
              </h1>
              {lifeLog.logs.map((log) => (
                <div key={log.name} className="mb-4">
                  <div className="flex gap-4 items-center">
                    <BadgeCheck
                      fill="#FF3333"
                      className="mt-1 text-white dark:text-black"
                    />
                    <h1 className="text-black dark:text-gray-100">
                      {log.name}
                    </h1>
                  </div>
                  <p className="px-10">{log.desc}</p>
                </div>
              ))}
            </motion.div>
          ))}
          <div className="mx-auto text-md cursor-pointer mt-4">
            {!viewMore.open ? (
              <p onClick={() => setviewMore({ open: true, limit: 100 })}>
                View More <ChevronDown className="inline" />
              </p>
            ) : (
              <p onClick={() => setviewMore({ open: false, limit: 2 })}>
                View Less <ChevronUp className="inline" />
              </p>
            )}
          </div>
        </AnimatePresence>
      </section>

      {/* Hire me */}
      <section className="mb-12">
        <Card className="bg-orange-50 dark:bg-blue-950">
          <CardHeader>
            <CardTitle className="text-black text-3xl font-bold dark:text-white ">
              Want to hire me as a freelancer? Let us discuss
            </CardTitle>
            <CardDescription>
              <div>
                <p className="text-lg mb-2">
                  Drop your message and let us discuss about your project.
                </p>
                <Link href="https://api.whatsapp.com/send/?phone=918770852087&text=Hey,+I+just+show+your+portfolio.+You+are+the+number+1+developer+in+the+world.+I+want+to+talk+with+you&type=phone_number&app_absent=0">
                  <Button
                    className="bg-green-500 dark:bg-green-500 text-white"
                    variant="outline"
                  >
                    Chat on WhatsApp
                  </Button>
                </Link>
              </div>
            </CardDescription>
          </CardHeader>
          <CardContent className="border-t py-6">
            <form onSubmit={handleSubmit}>
              <p>Drop in your email ID and I will get back to you.</p>
              <div className="relative">
                <input
                  id="email"
                  type="email"
                  name="email"
                  className="mt-2 w-full p-2 bg-white dark:bg-gray-800 dark:text-white rounded-lg"
                  placeholder="email@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Button
                  className="absolute right-1 top-3"
                  type="submit"
                  disabled={isDisabled}
                >
                  Send
                </Button>
              </div>
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
              <textarea
                id="message"
                name="message"
                className="bg-white dark:bg-gray-800 dark:text-white mt-2 rounded-lg w-full p-2 text-base"
                placeholder="Hey yogesh, you are the number 1 developer in the world.."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </form>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
