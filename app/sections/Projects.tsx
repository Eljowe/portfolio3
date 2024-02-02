import { getProjects } from '@/sanity/lib/query';
import type { ProjectType } from '@/types';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Project() {
  const [projects, setProjects] = useState<ProjectType[]>();

  useEffect(() => {
    getProjects().then(response => setProjects(response));
  }, []);

  return (
    <div className="max-w-[1200px] pt-10 text-justify font-extralight sm:pt-0 sm:text-xl">
      <div className="">
        <h1 className="mb-4 text-left text-2xl font-normal text-[#eff876]">Projects</h1>
        <p className="mb-4 text-white">Some stuff I&apos;ve spent my time with in the past.</p>
      </div>

      <div className="group mb-12 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        {projects
          ? projects.map(project => (
              <a
                href={`/projects/${project.slug}`}
                key={project._id}
                className="flex min-h-[120px] flex-row items-center gap-x-4 rounded-lg border border-transparent bg-[#1d1d20] p-4 transition duration-500 ease-in-out hover:scale-110 hover:border-[#eff876] hover:!opacity-100 group-hover:opacity-50"
              >
                <div className="relative h-[60px] w-[60px] rounded-md bg-zinc-800">
                  <Image
                    src={project.logo}
                    alt={project.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-md shadow-md"
                  />
                </div>
                <div>
                  <h2 className="mb-1">{project.name}</h2>
                  <div className="text-sm text-zinc-400">{project.tagline}</div>
                </div>
              </a>
            ))
          : 'Loading...'}
      </div>
    </div>
  );
}
