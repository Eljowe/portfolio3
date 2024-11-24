'use client';
import { getSingleProject } from '@/sanity/lib/query';
import type { ProjectType } from '@/types';
import { PortableText } from '@portabletext/react';
import urlBuilder from '@sanity/image-url';
import { client } from '@/sanity/lib/client';
import { useState, useEffect } from 'react';
import { SanityImageAsset, getImageDimensions } from '@sanity/asset-utils';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { vs2015 } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import NavigationScreen from '../../components/NavigationScreen';
import BurgerNavbar from '../../components/Navbar';
import { gsap } from 'gsap';
import { FC } from 'react';
import { BsGithub, BsLink45Deg } from 'react-icons/bs';
import Image from 'next/image';

type Props = {
  params: {
    project: string;
  };
};

interface SampleImageProps {
  value: SanityImageAsset;
}

interface SampleCodeProps {
  value: {
    language?: string;
    code: string;
  };
}

const SampleImageComponent: FC<SampleImageProps> = ({ value }) => {
  const { width, height } = getImageDimensions(value);

  return (
    <img
      src={urlBuilder(client).image(value).width(800).fit('max').auto('format').url()}
      alt={'image'}
      width={2000}
      height={2000}
      loading="lazy"
      style={{
        aspectRatio: width / height,
      }}
    />
  );
};

const SampleCodeComponent: FC<SampleCodeProps> = ({ value }) => {
  const { language, code } = value;

  return (
    <SyntaxHighlighter language={language || 'text'} style={vs2015}>
      {code}
    </SyntaxHighlighter>
  );
};

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
  const [project, setProject] = useState<ProjectType>();
  const [isScrolled, setIsScrolled] = useState(false);
  const [gsapMenu, setGsapMenu] = useState(false);

  useEffect(() => {
    getSingleProject(slug).then(response => setProject(response));
  }, [slug]);

  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', checkScroll);

    return () => {
      window.removeEventListener('scroll', checkScroll);
    };
  }, [isScrolled]);

  if (!project) {
    return <h1>Loading...</h1>;
  }

  const toggleMenu = () => {
    setGsapMenu(curr => !curr);
    if (gsapMenu) {
      gsap.timeline().to('.NavigationScreen', {
        duration: 0.3,
        x: '-100%',
        ease: 'power2.inOut',
      });
    } else {
      gsap.timeline().to('.NavigationScreen', {
        duration: 0.3,
        x: '100vw',
        ease: 'power2.inOut',
      });
    }
  };

  return (
    <main className="project mx-auto min-h-screen w-screen overflow-x-hidden bg-theme-background pb-10 text-white">
      <BurgerNavbar toggleMenu={toggleMenu} isScrolled={isScrolled} />
      <NavigationScreen toggleMenu={toggleMenu} />
      <div className="mx-auto mt-10 flex w-screen max-w-[800px] flex-col items-center px-6">
        <div className="mt-24 flex w-full flex-row items-start">
          <h1 className="mb-4 mt-2 text-left text-3xl font-bold text-[#eff876] lg:text-5xl lg:leading-tight">
            {project.name}
          </h1>
        </div>

        <div className="relative h-[30dvh] max-h-[400px] w-full rounded-xl border border-zinc-800 object-cover">
          <Image
            src={project.coverImage?.image}
            alt={project.coverImage?.alt || project.name}
            fill
            objectFit="cover"
            className="h-max rounded-md shadow-md"
          />
        </div>
        <div className="mt-8 flex w-full flex-col justify-between text-sm sm:text-xl">
          <a
            href="/#projects"
            className="flex flex-row items-center p-1 text-theme-second transition duration-500 hover:underline"
          >
            Back
          </a>
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              rel="noreferrer noopener"
              target="_blank"
              className="flex flex-row items-center p-1 text-theme-second transition duration-500 hover:underline"
            >
              Github repository <BsGithub className="ml-2" />
            </a>
          ) : (
            <span className="flex flex-row items-center p-1 text-zinc-500">
              Github repository <BsGithub className="ml-2" />
            </span>
          )}
          {project.projectUrl ? (
            <a
              href={project.projectUrl}
              rel="noreferrer noopener"
              target="_blank"
              className="flex flex-row items-center p-1 text-theme-second transition duration-500 hover:underline"
            >
              Website <BsLink45Deg className="ml-2" />
            </a>
          ) : (
            <span className=" flex flex-row items-center p-1 text-zinc-500">
              Website <BsLink45Deg className="ml-2" />
            </span>
          )}
        </div>

        <div className="text-segment mx-auto mt-8 flex w-[100%] max-w-[800px] flex-col gap-y-6 text-justify leading-7">
          <PortableText
            value={project.description}
            components={{
              types: {
                image: SampleImageComponent,
                code: SampleCodeComponent,
                blockImage: SampleImageComponent,
              },
            }}
          />
        </div>
      </div>
    </main>
  );
}
