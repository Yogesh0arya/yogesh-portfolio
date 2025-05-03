"use client";

import ImageIK from "@/components/ImageIK";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { format } from "timeago.js";
import Parser from "html-react-parser";

const fetchPost = async (slug) => {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/posts/${slug}`
  );
  return res.data;
};

const options = {
  replace: (domNode) => {
    if (domNode.type === "tag") {
      // Remove inline styles that interfere with Tailwind
      if (domNode.attribs?.style) {
        delete domNode.attribs.style;
      }

      // Add Tailwind classes to specific tags
      if (domNode.name === "p") {
        domNode.attribs.class = `${
          domNode.attribs.class || ""
        } my-4 text-gray-800 dark:text-gray-100`.trim();
      }

      if (domNode.name === "h1") {
        domNode.attribs.class = `${
          domNode.attribs.class || ""
        } text-2xl font-bold mt-8 mb-4 dark:text-white`.trim();
      }

      if (domNode.name === "h4") {
        domNode.attribs.class = `${
          domNode.attribs.class || ""
        } text-lg font-semibold mt-6 dark:text-white`.trim();
      }

      if (domNode.name === "img") {
        domNode.attribs.class = `${
          domNode.attribs.class || ""
        } rounded-xl shadow-md my-6`.trim();
      }

      if (domNode.name === "li") {
        domNode.attribs.class = `${
          domNode.attribs.class || ""
        } list-disc ml-6 my-2 dark:text-gray-100`.trim();
      }

      if (domNode.name === "em" || domNode.name === "strong") {
        domNode.attribs.class = `${
          domNode.attribs.class || ""
        } dark:text-white`.trim();
      }
    }
  },
};

function SingleBlog({ params }) {
  const { slug } = React.use(params); // ✅ unwrap the params Promise

  const { data, error, isPending } = useQuery({
    queryKey: ["post", slug],
    queryFn: () => fetchPost(slug),
    enabled: !!slug,
  });

  if (isPending) return "Loading...";
  if (error) return "Something went wrong! " + error.message;
  if (!data) return "Post not found!";

  return (
    <section>
      <div>
        <h1 className="text-2xl md:text-4xl font-bold text-black dark:text-white pb-4">
          {data.title}
        </h1>
        <p className="text-base">
          Written by{" "}
          <span className="text-blue-800 dark:text-blue-400">
            {data.user.username}
          </span>{" "}
          on{" "}
          <span className="text-blue-800 dark:text-blue-400">
            {data.category}
          </span>{" "}
          {format(data.createdAt)}
        </p>
      </div>

      <ImageIK src={data.img} width="600" className="rounded-2xl py-12" />

      <p className="text-base">{data.desc}</p>

      <div className="dark:text-white">{Parser(data.content, options)}</div>
    </section>
  );
}

export default SingleBlog;
