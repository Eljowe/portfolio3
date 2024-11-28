import { getProjects } from '@/sanity/lib/query';
import type { ProjectType } from '@/types';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { PortableText } from '@portabletext/react';

export default function Project() {
  const [projects, setProjects] = useState<ProjectType[]>();

  useEffect(() => {
    getProjects().then(response => setProjects(response));
  }, []);

  return (
    <div className="max-w-[1200px] pt-10 text-justify font-extralight sm:pt-0 sm:text-xl">
      <div className="">
        <h1 className="mb-6 text-2xl font-normal text-theme-main">Projects</h1>
      </div>

      <div className="group mb-12 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        {projects
          ? projects.map(
              project => (
                console.log(project.description),
                (
                  <a
                    href={`/projects/${project.slug}`}
                    key={project._id}
                    className="flex min-h-[140px] flex-row items-center gap-x-4 rounded-lg border border-transparent bg-neutral-800 p-4 transition duration-500 ease-in-out hover:scale-105 hover:border-theme-second hover:!opacity-100 group-hover:opacity-50"
                  >
                    <div className="">
                      <div className="flex flex-row justify-between">
                        <div>
                          <h2 className="mb-1 text-white">{project.name}</h2>
                          <div className="text-sm text-theme-second">{project.tagline}</div>
                        </div>
                        <div className="relative ml-2 h-[60px] w-[60px] rounded-md ">
                          <Image
                            src={project.logo}
                            alt={project.name}
                            className="rounded-md object-cover shadow-md"
                            width={512}
                            height={512}
                          />
                        </div>
                      </div>
                      <div className="relative mt-2 max-h-[5em] overflow-hidden text-base text-neutral-400">
                        <PortableText
                          value={project.description}
                          components={{
                            types: {},
                          }}
                        />
                        <div className="absolute bottom-0 left-0 h-12 w-full bg-gradient-to-t from-neutral-800 to-transparent"></div>
                      </div>
                    </div>
                  </a>
                )
              )
            )
          : 'Loading...'}
      </div>
    </div>
  );
}
