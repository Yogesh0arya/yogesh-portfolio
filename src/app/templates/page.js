import Image from "next/image";
import Link from "next/link";
import React from "react";

function Templates() {
  const templates = require("@/data/templates.json");

  return (
    <section>
      <h1 className="text-4xl text-black font-bold dark:text-white mb-4">
        Website Templates
      </h1>
      <p>
        Discover our range of fully customizable email, admin, landing page, and
        website templates. Created by web pros, these responsive designs are
        perfect for building your online presence.
      </p>

      <div className="grid md:grid-cols-2 gap-2 mt-8">
        {templates.map((template) => (
          <div
            key={template.id}
            className="hover:scale-110 transition-all hover:shadow-md relative group"
          >
            <div className="absolute hidden p-2 group-hover:flex justify-between w-full text-white bg-black/80">
              <h1>{template.name}</h1>
              <p>Price ${template.price}</p>
            </div>
            <Image
              src={template.image}
              width={200}
              height={200}
              alt="logo"
              className="w-full"
            />
            <Link
              href={`https://api.whatsapp.com/send/?phone=918770852087&text=Hey Yogesh,+I+want+to+buy+${template.name}+template+at+$+${template.price}&type=phone_number&app_absent=0 `}
              className="absolute hidden group-hover:inline-block bottom-0  text-white cursor-pointer m-2 px-3 py-1 bg-[#FF3333] rounded-full text-sm"
            >
              Buy
            </Link>

            <Link
              href={template.link}
              className="absolute hidden group-hover:inline-block bottom-0 right-0  text-black cursor-pointer m-2 px-3 py-1 bg-white rounded-full text-sm"
            >
              Demo
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Templates;
