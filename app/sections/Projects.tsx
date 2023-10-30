import { getProjects } from '@/sanity/lib/query';
import type { ProjectType } from '@/types';
import { useState, useEffect } from 'react';

export default function Project() {
  const [projects, setProjects] = useState<ProjectType[]>();

  useEffect(() => {
    getProjects().then(response => setProjects(response));
  }, []);

  return (
    <div className="max-w-[1200px] pt-10 text-justify font-extralight sm:pt-0 sm:text-xl">
      <div className="">
        <h1 className="mb-4 text-left text-2xl font-normal text-[#eff876]">Projects</h1>
        <p className="mb-4 text-white">Random stuff I&apos;ve built and tinkered with over the years.</p>
      </div>

      <div className="mb-12 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        {projects
          ? projects.map(project => (
              <a
                href={`/projects/${project.slug}`}
                key={project._id}
                className="flex min-h-[120px] flex-row items-center gap-x-4 rounded-lg border border-transparent bg-[#1d1d20] p-4 transition duration-500 ease-in-out hover:scale-110 hover:border-[#eff876]"
              >
                <img
                  src={project.logo}
                  width={100}
                  height={100}
                  alt={project.name}
                  className="h-[60px] max-w-[60px] rounded-md bg-zinc-800 object-fill shadow-md"
                />
                <div>
                  <h2 className="mb-1 font-semibold">{project.name}</h2>
                  <div className="text-sm text-zinc-400">{project.tagline}</div>
                </div>
              </a>
            ))
          : null}
      </div>
    </div>
  );
}
