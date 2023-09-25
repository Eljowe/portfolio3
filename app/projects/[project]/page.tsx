'use client'

import Image from "next/image";
import { Metadata } from "next";
import { getSingleProject } from "@/sanity/lib/query";
import type { ProjectType } from "@/types";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import urlBuilder from '@sanity/image-url'
import {client} from "@/sanity/lib/client"
import { useState, useEffect } from "react"
import imageUrlBuilder from '@sanity/image-url'
import {getImageDimensions} from '@sanity/asset-utils'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { vs2015 } from 'react-syntax-highlighter/dist/esm/styles/hljs';

type Props = {
    params: {
      project: string;
    };
  };

  const builder = imageUrlBuilder(client)

  const SampleImageComponent = ({value}) => {
    const {width, height} = getImageDimensions(value)
    return (
      <img
        src={urlBuilder(client).image(value).width(800).fit('max').auto('format').url()}
        alt={value.alt || ' '}
        loading="lazy"
        style={{
          aspectRatio: width / height,
        }}
      />
    )
  }

  const SampleCodeComponent = ({value}) => {
  const {language, code} = value 
  return (
    <SyntaxHighlighter language={language || 'text'} style={vs2015}>
      {code}
    </SyntaxHighlighter>
  )
  }
  
  // Dynamic metadata for SEO
  /*
  export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const slug = params.project;
    const project: ProjectType = await getSingleProject(slug);
  
    return {
      title: `${project.name} | Project`,
      description: project.tagline,
      openGraph: {
        images: project.coverImage?.image || "/bg.jpg",
        title: project.name,
        description: project.tagline,
      },
    };
  }
  */
  export default function Project({ params }: Props) {
    const slug = params.project;
    //const project: ProjectType = getSingleProject(slug);
    const [project, setProject] = useState<ProjectType>()

    useEffect(() => {
      getSingleProject(slug).then((response) => setProject(response))
    }, [slug])

    if (!project) {
      return <h1>Loading...</h1>
    }
    
  
    return (
      <main className="project w-screen min-h-screen text-white mx-auto lg:px-16 px-8 bg-[#1d1d1d] pt-10 pb-10 overflow-x-hidden">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
              <div className="flex flex-row items-start w-full">
                  <h1 className="font-bold text-[#eff876] lg:text-5xl text-3xl lg:leading-tight my-4">
                  {project.name}
                  </h1>
              </div>
              <Image
                  className="rounded-xl border border-zinc-800 object-cover max-h-[400px]"
                  width={900}
                  height={460}
                  src={project.coverImage?.image}
                  alt={project.coverImage?.alt || project.name}
              />
              <div className="flex flex-row justify-between w-full mt-8">
                  <Link href={'/#projects'} className="text-white border-b border-[#eff876] p-1 hover:text-[#eff876]">Back</Link>
                  <a
                    href={project.projectUrl}
                    rel="noreferrer noopener"
                    className="text-white border-b border-[#eff876] p-1 hover:text-[#eff876]"
                    >
                    Open project website
                  </a>
              </div>
              <div className="flex flex-col gap-y-6 mt-8 leading-7 text-justify">
                  <PortableText 
                      value={project.description} 
                      components={{
                        types: {
                          image: SampleImageComponent,
                          code: SampleCodeComponent,
                        },
                      }}
                      />
              </div>
            </div>
      </main>
    );
  }