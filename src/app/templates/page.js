import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
            className="shadow-md rounded-lg overflow-hidden bg-black"
          >
            <Image
              src={template.image}
              width={200}
              height={200}
              alt="logo"
              className="w-full p-2 hover:scale-105 transition-all"
            />

            <div className="p-2 rounded-lg bg-white dark:bg-gray-800">
              <h1 className="text-2xl">{template.name}</h1>
              <Link
                className="py-1 px-3 bg-black dark:bg-white dark:text-black  rounded-full text-white text-sm"
                href={template.link}
              >
                DEMO
              </Link>
              <div className="grid grid-cols-3 justify-between items-center mt-6">
                <div>
                  <p className="text-sm">PRICE</p>
                  <p className="text-black dark:text-white font-bold">
                    ${template.price}
                  </p>
                </div>

                <Link
                  className="col-span-2 text-center p-2 bg-green-700 rounded-sm text-white text-sm"
                  href={`https://api.whatsapp.com/send/?phone=918770852087&text=Hey Yogesh,+I+want+to+buy+${template.name}+template+at+$+${template.price}&type=phone_number&app_absent=0 `}
                >
                  BUY
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Templates;
