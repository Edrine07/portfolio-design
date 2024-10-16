import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Linkedin,
  FileText,
  Github,
  Twitter,
  Mail,
  MessageCircle,
} from "lucide-react";
import StackIcon from "tech-stack-icons";

export default function About() {
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
      <h1 className="text-4xl font-bold mb-8">About me</h1>
      <div className="flex flex-col md:flex-row gap-8 mb-12">
        <div className="flex-1">
          <h2 className="text-xl font-semibold mb-4">A few words about me</h2>
          <p className="text-muted-foreground mb-4">
            <span className="text-white">I’m Edrine Hagosojos,</span> a
            passionate <span className="text-white">Software Developer</span>{" "}
            and <span className="text-white">UI/UX Designer</span> focused on
            crafting intuitive,user-centered digital experiences. I specialize
            in building responsive applications that effectively tackle complex
            challenges and elevate user satisfaction.
          </p>
          <p className="text-muted-foreground mb-4">
            With a keen eye for detail, I strive to deliver visually engaging
            and accessible products. I thrive in dynamic environments that
            foster creativity and continuous learning, always aiming for
            excellence in my work.
          </p>
          <a href="https://drive.google.com/file/d/13CYSzhVn9Fa_z-tiS25hOx-gHYxbKL8b/view?usp=sharing">
            <Button className="border border-gray-50/50 mb-4 ">
              <FileText className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
          </a>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">Experience</h2>
        {experiences.map((exp, index) => (
          <div key={index} className="mb-6 last:mb-0">
            <h3 className="text-lg font-medium">
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
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4 flex">Tech stack </h2>
        <div className="flex space-x-2 mb-4">
          <div>
            <StackIcon
              name="python"
              className="size-12 grayscale hover:bg-slate-50/10 transition border p-2 rounded-lg border-gray-50/30 hover:border-gray-50/50 cursor-pointer"
            />
          </div>
          <div>
            <StackIcon
              name="php"
              className="size-12 grayscale hover:bg-slate-50/10 transition border p-2 rounded-lg border-gray-50/30 hover:border-gray-50/50 cursor-pointer"
            />
          </div>
          <div>
            <StackIcon
              name="postgresql"
              className="size-12 grayscale hover:bg-slate-50/10 transition border p-2 rounded-lg border-gray-50/30 hover:border-gray-50/50 cursor-pointer"
            />
          </div>
          <div>
            <StackIcon
              name="js"
              className="size-12 grayscale hover:bg-slate-50/10 transition border p-2 rounded-lg border-gray-50/30 hover:border-gray-50/50 cursor-pointer"
            />
          </div>

          <div>
            <StackIcon
              name="html5"
              className="size-12 grayscale hover:bg-slate-50/10 transition border p-2 rounded-lg border-gray-50/30 hover:border-gray-50/50 cursor-pointer"
            />
          </div>

          <div>
            <StackIcon
              name="css3"
              className="size-12 grayscale hover:bg-slate-50/10 transition border p-2 rounded-lg border-gray-50/30 hover:border-gray-50/50 cursor-pointer"
            />
          </div>
          <div className="flex-grow"></div>
        </div>
        <div className="flex space-x-2 mb-4">
          <div>
            <StackIcon
              name="laravel"
              className="size-12 grayscale hover:bg-slate-50/10 transition border p-2 rounded-lg border-gray-50/30 hover:border-gray-50/50 cursor-pointer"
            />
          </div>

          <div>
            <StackIcon
              name="django"
              className="size-12 grayscale hover:bg-slate-50/10 transition border p-2 rounded-lg border-gray-50/30 hover:border-gray-50/50 cursor-pointer"
            />
          </div>

          <div>
            <StackIcon
              name="reactjs"
              className="size-12 grayscale hover:bg-slate-50/10 transition border p-2 rounded-lg border-gray-50/30 hover:border-gray-50/50 cursor-pointer"
            />
          </div>

          <div>
            <StackIcon
              name="tailwindcss"
              className="size-12 grayscale hover:bg-slate-50/10 transition border p-2 rounded-lg border-gray-50/30 hover:border-gray-50/50 cursor-pointer"
            />
          </div>

          <div>
            <StackIcon
              name="typescript"
              className="size-12 grayscale hover:bg-slate-50/10 transition border p-2 rounded-lg border-gray-50/30 hover:border-gray-50/50 cursor-pointer"
            />
          </div>

          <div className="flex-grow"></div>
        </div>
        <div className="flex space-x-2">
        <div>
            <StackIcon
              name="git"
              className="size-12 grayscale hover:bg-slate-50/10 transition border p-2 rounded-lg border-gray-50/30 hover:border-gray-50/50 cursor-pointer"
            />
          </div>

          <div>
            <StackIcon
              name="postman"
              className="size-12 grayscale hover:bg-slate-50/10 transition border p-2 rounded-lg border-gray-50/30 hover:border-gray-50/50 cursor-pointer"
            />
          </div>
          <div>
            <StackIcon
              name="figma"
              className="size-12 grayscale hover:bg-slate-50/10 transition border p-2 rounded-lg border-gray-50/30 hover:border-gray-50/50 cursor-pointer"
            />
          </div>

          <div>
            <StackIcon
              name="aws"
              className="size-12 grayscale hover:bg-slate-50/10 transition border p-2 rounded-lg border-gray-50/30 hover:border-gray-50/50 cursor-pointer"
            />
          </div>

          <div className="flex-grow"></div>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Network</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          <Card className="bg-inherit border p-2 rounded-lg transition border-gray-50/30 hover:border-gray-50/50">
            <CardContent className="p-2">
              <h3 className="font-semibold mb-2 text-gray-50">Socials</h3>
              <div className="space-y-2">
                <a
                  href="https://www.linkedin.com/in/edrine-hagosojos/"
                  className="flex items-center text-muted-foreground hover:text-gray-50/70 transition"
                >
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </a>
                <a
                  href="https://drive.google.com/file/d/13CYSzhVn9Fa_z-tiS25hOx-gHYxbKL8b/view?usp=sharing"
                  className="flex items-center text-muted-foreground hover:text-gray-50/70 transition"
                >
                  <FileText className="mr-2 h-4 w-4" />
                  Read.cv
                </a>
                <a
                  href="https://github.com/Edrine07"
                  className="flex items-center text-muted-foreground hover:text-gray-50/70 transition"
                >
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </a>
                <a
                  href="#"
                  className="flex items-center text-muted-foreground hover:text-gray-50/70 transition"
                >
                  <Twitter className="mr-2 h-4 w-4" />
                  X.com
                </a>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-inherit border p-2 rounded-lg transition border-gray-50/30 hover:border-gray-50/50">
            <CardContent className="p-2">
              <h3 className="font-semibold mb-2 text-gray-50">Contact</h3>
              <div className="space-y-2">
                <a
                  href="edhagosojos@gmail.com"
                  className="flex items-center text-muted-foreground hover:text-gray-50/70 transition"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Email
                </a>
                <a
                  href="#"
                  className="flex items-center text-muted-foreground hover:text-gray-50/70 transition"
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  iMessage
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
