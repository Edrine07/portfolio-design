import StackIcon from "tech-stack-icons";
import { useEffect, useState } from "react";
import * as React from "react"
import CarouselCard from "./CarouselCard";
import BucketList from "./BucketList";


export default function About() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  const experiences = [
    {
      company: "DepEd School Division Office of Sorsogon ",
      role: "Intern",
      period: "February 2024 - May 2024",
      description:
        "During my internship at the DepEd School Division Office of Sorsogon, I encoded tracking slips using the Document Tracking System (DTS), which streamlined document flow and improved processing times, ultimately enhancing the team’s efficiency and providing exceptional support to teachers.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="text-white flex items-center mb-10 space-x-2">
        <div className="relative">
          <div className="w-3 h-3 bg-white rounded-full"></div>
          <div className="absolute top-0 left-0 w-3 h-3 bg-white rounded-full animate-ping"></div>
        </div>
        <span className="text-2xl font-bold pl-1">About me</span>
      </div>
      <div className="flex flex-col md:flex-row gap-8 mb-12">
        <div className="flex-1">
          <h2 className="text-xl font-semibold mb-4">a few words about me</h2>
          <p className="text-muted-foreground">
            I’m a <span className="text-gray-50/60 ">Software Developer</span>{" "}
            and <span className="text-gray-50/60 ">UI/UX Designer</span> who
            likes to make nice things for people to use everyday. I am
            passionate about technology, consumer products, and video games.
          </p>
        </div>
      </div>
      <div className="mb-12">
        <h2 className="text-xl font-semibold mb-4">information</h2>
        <a
          href="mailto:edhagosojos@gmail.com"
          className="underline transition underline-offset-4 text-gray-50/60 hover:text-gray-50/90"
        >
          contact@edrine.works
        </a>
        <p className="text-muted-foreground">
          Available for freelance opportunities
        </p>
      </div>
      <div className="mb-12">
        <h2 className="text-xl font-semibold mb-4">experience</h2>
        {experiences.map((exp, index) => (
          <div key={index} className="mb-6 last:mb-0">
            <h3 className="text-md text-gray-50/60 hover:text-gray-50/90 transition">
              Intern at{" "}
              <a href="#" className="font-medium">
                {exp.company}
              </a>
            </h3>
            <p className="text-muted-foreground mb-2 text-sm">{exp.period}</p>
            <p className="text-muted-foreground">{exp.description}</p>
          </div>
        ))}
      </div>
      <div className="mb-12">
        <h2 className="text-xl font-semibold mb-6 flex">tech stack </h2>
        <div className="flex space-x-2 mb-4">
          <div>
            <StackIcon
              name="python"
              className="size-12 hover:bg-slate-50/10 transition border p-2 rounded-lg border-gray-50/30 hover:border-gray-50/50 cursor-pointer"
            />
          </div>
          <div>
            <StackIcon
              name="php"
              className="size-12 hover:bg-slate-50/10 transition border p-2 rounded-lg border-gray-50/30 hover:border-gray-50/50 cursor-pointer"
            />
          </div>
          <div>
            <StackIcon
              name="postgresql"
              className="size-12 hover:bg-slate-50/10 transition border p-2 rounded-lg border-gray-50/30 hover:border-gray-50/50 cursor-pointer"
            />
          </div>
          <div>
            <StackIcon
              name="js"
              className="size-12 hover:bg-slate-50/10 transition border p-2 rounded-lg border-gray-50/30 hover:border-gray-50/50 cursor-pointer"
            />
          </div>

          <div>
            <StackIcon
              name="html5"
              className="size-12 hover:bg-slate-50/10 transition border p-2 rounded-lg border-gray-50/30 hover:border-gray-50/50 cursor-pointer"
            />
          </div>

          <div>
            <StackIcon
              name="css3"
              className="size-12 hover:bg-slate-50/10 transition border p-2 rounded-lg border-gray-50/30 hover:border-gray-50/50 cursor-pointer"
            />
          </div>
          <div className="flex-grow"></div>
        </div>
        <div className="flex space-x-2 mb-4">
          <div>
            <StackIcon
              name="laravel"
              className="size-12 hover:bg-slate-50/10 transition border p-2 rounded-lg border-gray-50/30 hover:border-gray-50/50 cursor-pointer"
            />
          </div>

          <div>
            <StackIcon
              name="django"
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
              name="typescript"
              className="size-12 hover:bg-slate-50/10 transition border p-2 rounded-lg border-gray-50/30 hover:border-gray-50/50 cursor-pointer"
            />
          </div>

          <div className="flex-grow"></div>
        </div>
        <div className="flex space-x-2">
          <div>
            <StackIcon
              name="git"
              className="size-12 hover:bg-slate-50/10 transition border p-2 rounded-lg border-gray-50/30 hover:border-gray-50/50 cursor-pointer"
            />
          </div>

          <div>
            <StackIcon
              name="postman"
              className="size-12 hover:bg-slate-50/10 transition border p-2 rounded-lg border-gray-50/30 hover:border-gray-50/50 cursor-pointer"
            />
          </div>
          <div>
            <StackIcon
              name="figma"
              className="size-12 hover:bg-slate-50/10 transition border p-2 rounded-lg border-gray-50/30 hover:border-gray-50/50 cursor-pointer"
            />
          </div>

          <div>
            <StackIcon
              name="aws"
              className="size-12 hover:bg-slate-50/10 transition border p-2 rounded-lg border-gray-50/30 hover:border-gray-50/50 cursor-pointer"
            />
          </div>

          <div className="flex-grow"></div>
        </div>
      </div>

      <div className="my-20">
        <h5 className="font-semibold"> In case you don't want to read through the boring stuff, I treat the
        following sections as something like a personal library.</h5>
      </div>

      <div className="mb-12">
        <h2 className="text-xl font-semibold mb-4">photo</h2>
        <CarouselCard/>
      </div>

      <div className="mb-12">
        <BucketList/>
      </div>
    </div>
  );
}
