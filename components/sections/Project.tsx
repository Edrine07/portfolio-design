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
              url="immaculate.vercel.app"
              className="size-full"
              src="https://fluffy-guacamole-azure.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpr.ab8fe3a9.png&w=1080&q=75"
            />
          </Link>
        </div>
        <div className="py-4 max-w-4xl">
          <h1 className="text-xl font-semibold mb-2 ">
            Clinic Management System
          </h1>
          <p className="text-muted-foreground mb-4">
            Developed a clinic management system that streamlines appointment
            scheduling, patient records, and featuring secure
            role-based access control and an intuitive dashboard for enhanced
            user experience.
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
          <Link
            className="relative shadow-sm"
            target="_blank"
            href={"https://next0-xi.vercel.app/"}
          >
            <Safari
              src="https://fluffy-guacamole-azure.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FScreenshot%202024-10-17%20190514.0697c2f9.png&w=1920&q=75"
              url="next0-xi.vercel.app"
              className="size-full"
            />
          </Link>
        </div>
        <div className="py-4 max-w-4xl">
          <h1 className="text-xl font-semibold mb-2 ">Next0</h1>
          <p className="text-muted-foreground mb-4">
            Designed and developed the Next0 CRM landing page, showcasing
            expertise in crafting user-centered, flexible, and data-driven
            interfaces.
          </p>
          <div className="flex space-x-2">
            <div>
              <StackIcon
                name="nextjs2"
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
                name="framer"
                className="size-12 hover:bg-slate-50/10 transition border p-2 rounded-lg border-gray-50/30 hover:border-gray-50/50 cursor-pointer"
              />
            </div>
            <div>
              <StackIcon
                name="figma"
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
            Online Course Learning Platform | Mobile App Design
          </h1>
          <p className="text-muted-foreground mb-4">
          Designed a mobile app for an online course learning platform, emphasizing intuitive navigation and a visually engaging interface to enhance user engagement and learning outcomes.
          </p>
          <div className="flex space-x-2">
            <div>
              <StackIcon
                name="figma"
                className="size-12 hover:bg-slate-50/10 transition border p-2 rounded-lg border-gray-50/30 hover:border-gray-50/50 cursor-pointer"
              />
            </div>
            <div className="flex-grow"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
