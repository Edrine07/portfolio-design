import React from "react";

import Safari from "../ui/safari";
import StackIcon from "tech-stack-icons";
import Link from "next/link";
import Image from "next/image";
import figma from "@/app/assets/images/Screenshot 2024-10-17 180522.png";

export default function Project() {
  return (
    <div className="mb-5">
      <div className="mb-12 border hover:border-gray-50/50 border-t-gray-50/60 border-gray-50/20 transition bg-zinc-900 p-4 rounded-2xl">
        <div className="border px-12 py-12 rounded-2xl border-gray-50/30 border-t-gray-50/50 bg-zinc-800">
          <Link className="relative shadow-sm" href={""}>
            <Safari
              url="magicui.design"
              className="size-full"
              src="https://www.bypeople.com/wp-content/uploads/2022/06/blockchain-crypto-landing-page-template.png"
            />
          </Link>
        </div>
        <div className="py-4 max-w-4xl">
          <h1 className="text-xl font-semibold mb-2 ">
            Clinic Management System
          </h1>
          <p className="text-muted-foreground mb-4">
            Developed a clinic management system to optimize appointment
            scheduling, patient records, and billing with secure role-based
            access control and a user-friendly dashboard.
          </p>
          <div className="flex space-x-2">
            <div>
              <StackIcon
                name="laravel"
                className="size-12 hover:bg-slate-50/10 transition border p-2 rounded-lg border-gray-50/30 hover:border-gray-50/50 cursor-pointer"
              />
            </div>
            <div>
              <StackIcon
                name="reactjs"
                className="size-12 hover:bg-slate-50/10 transition border p-2 rounded-lg border-gray-50/30 hover:border-gray-50/50 cursor-pointer"
              />
            </div>
            <div>
              <StackIcon
                name="tailwindcss"
                className="size-12 hover:bg-slate-50/10 transition border p-2 rounded-lg border-gray-50/30 hover:border-gray-50/50 cursor-pointer"
              />
            </div>
            <div>
              <StackIcon
                name="postgresql"
                className="size-12 hover:bg-slate-50/10 transition border p-2 rounded-lg border-gray-50/30 hover:border-gray-50/50 cursor-pointer"
              />
            </div>
            <div className="flex-grow"></div>
          </div>
        </div>
      </div>
      <div className="mb-12 border hover:border-gray-50/50 border-t-gray-50/60 border-gray-50/20 transition bg-zinc-900 p-4 rounded-2xl">
        <div className="border px-12 py-12 rounded-2xl border-gray-50/30 border-t-gray-50/50 bg-zinc-800">
          <Link className="relative shadow-sm" href={""}>
            <Image
              src={figma}
              alt="Kupal"
              className="border border-gray-50/50 rounded-lg"
            />
          </Link>
        </div>
        <div className="py-4 max-w-4xl">
          <h1 className="text-xl font-semibold mb-2">
            Clinic Management System
          </h1>
          <p className="text-muted-foreground mb-4">
            Developed a clinic management system to optimize appointment
            scheduling, patient records, and billing with secure role-based
            access control and a user-friendly dashboard.
          </p>
          <div className="flex space-x-2">
            <div>
              <StackIcon
                name="laravel"
                className="size-10 hover:bg-slate-50/10 transition border p-2 rounded-lg border-gray-50/30 hover:border-gray-50/50 cursor-pointer"
              />
            </div>
            <div>
              <StackIcon
                name="reactjs"
                className="size-10 hover:bg-slate-50/10 transition border p-2 rounded-lg border-gray-50/30 hover:border-gray-50/50 cursor-pointer"
              />
            </div>
            <div>
              <StackIcon
                name="tailwindcss"
                className="size-10 hover:bg-slate-50/10 transition border p-2 rounded-lg border-gray-50/30 hover:border-gray-50/50 cursor-pointer"
              />
            </div>
            <div>
              <StackIcon
                name="postgresql"
                className="size-10 hover:bg-slate-50/10 transition border p-2 rounded-lg border-gray-50/30 hover:border-gray-50/50 cursor-pointer"
              />
            </div>
            <div className="flex-grow"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
