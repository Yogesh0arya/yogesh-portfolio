"use client";

import React from "react";
import axios from "axios";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import InfiniteScroll from "react-infinite-scroll-component";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import ImageIK from "../../components/ImageIK";
import { format } from "timeago.js";
import Link from "next/link";

const fetchPosts = async (pageParam, searchParams) => {
  const searchParamsObj = Object.fromEntries([...searchParams]);
  const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/posts`, {
    params: { page: pageParam, limit: 4, ...searchParamsObj },
  });
  return res.data;
};

function Blog() {
  const searchParams = useSearchParams();

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ["posts", searchParams.toString()],
    queryFn: ({ pageParam = 1 }) => fetchPosts(pageParam, searchParams),
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) =>
      lastPage.hasMore ? pages.length + 1 : undefined,
  });

  const allPosts = data?.pages?.flatMap((page) => page.posts) || [];

  if (status === "pending") return <p>Loading...</p>;
  if (status === "error") return <p>Something went wrong: {error.message}</p>;

  return (
    <InfiniteScroll
      dataLength={allPosts.length}
      next={fetchNextPage}
      hasMore={!!hasNextPage}
      loader={<h4>Loading more posts...</h4>}
      endMessage={
        <p>
          <b>All posts loaded!</b>
        </p>
      }
      className="grid gap-4 md:grid-cols-2"
    >
      {allPosts.map((post, i) => (
        <Card
          key={post._id}
          className="p-0 overflow-hidden hover:bg-blue-50 dark:hover:bg-gray-800 hover:shadow-md transition-all duration-150"
        >
          <CardHeader className="p-0">
            <CardTitle>
              <ImageIK
                src={post?.img}
                width="735"
                className="object-cover h-52"
              />
            </CardTitle>
            <CardDescription className="px-3 text-black dark:text-white font-medium text-lg">
              {post.title}
            </CardDescription>
          </CardHeader>
          <CardContent className="text-sm px-3 line-clamp-3">
            {post.desc}
          </CardContent>
          <CardFooter className="flex flex-col items-start px-3 pb-3 mt-auto">
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <p>Written by</p>

              {post.user.username}

              <span>on</span>
              <p className="text-blue-800 dark:text-blue-400">
                {post.category}
              </p>
            </div>
            <div className="w-full flex justify-between pt-1  text-sm">
              <Link
                href={`/blog/${post.slug}`}
                className="text-blue-800 dark:text-blue-400"
              >
                Read More
              </Link>
              <p className="text-gray-600 dark:text-gray-400">
                {format(post.createdAt)}
              </p>
            </div>
          </CardFooter>
        </Card>
      ))}
    </InfiniteScroll>
  );
}

export default Blog;
