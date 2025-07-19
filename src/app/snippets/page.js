import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Snippets() {
  const snippets = require("@/data/snippets.json");

  return (
    <div>
      <h1 className="text-4xl text-black font-bold dark:text-white mb-4">
        Snippets
      </h1>
      <p>
        Reusable code snippets that can be easily integrated in your application
        🧩. The page contains functions and code snippets which can be used on
        your webpage.
      </p>

      <div className="grid md:grid-cols-2 gap-4 mt-8">
        {snippets.map((snippet) => (
          <Link href={snippet.link} key={snippet.id}>
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="my-2">{snippet.name}</CardTitle>
                <CardDescription>{snippet.desc}</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src={snippet.logo}
                  width={200}
                  height={200}
                  alt="logo"
                  className="h-30 w-auto object-cover"
                />
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Snippets;
