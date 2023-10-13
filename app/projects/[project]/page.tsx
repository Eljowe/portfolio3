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
    <main className="project w-screen min-h-screen text-white mx-auto lg:px-16 px-8 bg-[#1d1d1d] pb-10 overflow-x-hidden">
      <BurgerNavbar toggleMenu={toggleMenu} isScrolled={isScrolled} />
      <NavigationScreen toggleMenu={toggleMenu} />
      <div className="max-w-[800px] mx-auto flex flex-col items-center mt-10">
        <div className="flex flex-row items-start w-full">
          <h1 className="font-bold text-[#eff876] lg:text-5xl text-3xl lg:leading-tight my-4 text-left">
            {project.name}
          </h1>
        </div>
        <img
          className="rounded-xl border border-zinc-800 object-cover max-h-[400px]"
          width={900}
          height={460}
          src={project.coverImage?.image}
          alt={project.coverImage?.alt || project.name}
        />
        <div className="flex flex-row justify-evenly w-full mt-8">
          <a href="/#projects" className="text-white border-b border-[#eff876] p-1 hover:text-[#eff876]">
            Go Back
          </a>
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              rel="noreferrer noopener"
              target="_blank"
              className="text-white border-b border-[#eff876] p-1 hover:text-[#eff876]"
            >
              Github repository
            </a>
          ) : (
            <span className="border-b border-zinc-500 text-zinc-500 p-1">Github repository</span>
          )}
          {project.projectUrl ? (
            <a
              href={project.projectUrl}
              rel="noreferrer noopener"
              target="_blank"
              className="text-white border-b border-[#eff876] p-1 hover:text-[#eff876]"
            >
              Project website
            </a>
          ) : (
            <span className="border-b border-zinc-500 text-zinc-500 p-1">Project website</span>
          )}
        </div>
        <div className="text-segment flex flex-col max-w-[800px] w-[100%] mx-auto gap-y-6 mt-8 leading-7 text-justify">
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
