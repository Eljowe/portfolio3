import { getProjects } from "@/sanity/lib/query";
import Image from "next/image";
import Link from "next/link";
import type { ProjectType } from "@/types";
import { useState, useEffect } from "react";

export default function Project() {
    const [projects, setProjects] = useState<ProjectType[]>();

    useEffect(() => {
        getProjects().then((response) => setProjects(response))
    }, [])
    
  
    return (
      <div className="max-w-[800px] text-justify pt-10 sm:pt-0 sm:text-xl font-extralight">
        <div className="">
          <h1 className="text-2xl font-normal mb-4 text-[#eff876]">
            Random stuff I&apos;ve built and tinkered with
          </h1>
          <p className="text-white mb-4">
            Here are some small projects I have spent my time with over the years.
          </p>
        </div>
  
        <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mb-12">
          {projects ? projects.map((project) => (
            <Link
              href={`/projects/${project.slug}`}
              key={project._id}
              className="flex items-center gap-x-4 bg-[#1d1d20] border border-transparent hover:border-zinc-700 p-4 rounded-lg ease-in-out"
            >
              <Image
                src={project.logo}
                width={60}
                height={60}
                alt={project.name}
                className="bg-zinc-800 rounded-md shadow-md"
              />
              <div>
                <h2 className="font-semibold mb-1">{project.name}</h2>
                <div className="text-sm text-zinc-400">{project.tagline}</div>
              </div>
            </Link>
          )): null}
        </div>
      </div>
    );
  }