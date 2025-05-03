import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="text-base my-12">
      <section className="grid grid-cols-2 md:grid-cols-3 mb-10">
        <div className="flex flex-col gap-2 ">
          <Link href="/">Home</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/">Dashboard</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/">Links</Link>
        </div>
        <div className="flex flex-col gap-2 ">
          <Link href="https://github.com/Yogesh0arya">Github</Link>
          <Link href="https://www.linkedin.com/in/Yogesh08arya">LinkedIn</Link>
          <Link href="https://x.com/Yogesh0arya">Twitter</Link>
          <Link href="https://www.instagram.com/pogu_ogu/">Instagram</Link>
          <Link href="https://api.whatsapp.com/send/?phone=918770852087&text=Hey,+I+just+show+your+portfolio.+I+want+to+talk+with+you&type=phone_number&app_absent=0">
            Freelancing
          </Link>
        </div>
        <div className="flex flex-col gap-2 ">
          <Link href="/snippets">Snippets</Link>
          <Link href="https://x.com/Yogesh0arya">Tweets</Link>
          <Link href="/resources">Resources</Link>
          <Link href="/">Live Demos</Link>
          <Link href="/">Box Shadow</Link>
        </div>
      </section>

      <section>
        <p>Made with ❤️ Yogesh Arya </p>
        <p>Portfolio inspired by Lee Rob and Manu arora</p>
      </section>
    </footer>
  );
}

export default Footer;
