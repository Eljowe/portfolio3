'use client';
import { gsap } from 'gsap';
import { useRef, useState, useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import NavigationScreen from './components/NavigationScreen';
import BurgerNavbar from './components/Navbar';
import About from './sections/About';
import Projects from './sections/Projects';
import Resume from './sections/Resume';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import ThreeScene from './components/ThreeScene';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [menuOpen, setMenuOpen] = useState('closed');
  const [isScrolled, setIsScrolled] = useState(false);
  const [gsapMenu, setGsapMenu] = useState(false);
  const titleref = useRef(null);
  const pointref = useRef(null);

  useEffect(() => {
    if (titleref.current && pointref.current) {
      const tl1 = gsap.timeline({
        defaults: { ease: 'rough.inOut', duration: 1.5 },
      });
      const tl2 = gsap.timeline({
        defaults: { ease: 'rough.inOut', duration: 1.5 },
      });
      //const anim = gsap.fromTo("#about", {autoAlpha: 0, x: 50}, {duration: 1, autoAlpha: 1, x: 0});
      /*
      ScrollTrigger.create({
        trigger: ".profilepic",
        animation: anim,
        toggleActions: 'play none none none',
        once: true,
      }); */

      tl1
        .fromTo(
          titleref.current,
          { x: -window.innerWidth / 2, opacity: 0 },
          { x: 0, y: 0, opacity: 1, delay: 0.15, ease: 'power4.inOut' }
        )
        .then(() => {
          document.addEventListener('mousemove', mouseMoveFunc);
        });

      tl2
        .fromTo(
          pointref.current,
          { x: window.innerWidth / 2, opacity: 0 },
          { x: 0, y: 0, opacity: 1, delay: 0.1, ease: 'power4.inOut' }
        )
        .then(() => {
          document.addEventListener('mousemove', mouseMoveFunc);
        });

      function mouseMoveFunc(e: MouseEvent) {
        if (!isScrolledDown()) {
          const depth = -15;
          const moveX = (e.pageX - window.innerWidth / 10) / depth;
          const moveY = (e.pageY - window.innerHeight / 10) / depth;

          gsap.to(titleref.current, {
            duration: 1,
            x: moveX,
            y: moveY,
            ease: 'slow',
            stagger: 0.008,
            overwrite: true,
          });
          gsap.to(pointref.current, {
            duration: 1,
            x: -moveX * 0.7,
            y: -moveY * 0.7,
            ease: 'slow',
            stagger: 0.008,
            overwrite: true,
          });
        }
      }

      function isScrolledDown() {
        return window.scrollY > 0;
      }
    }
  }, [titleref]);

  const toggleMenu = () => {
    setMenuOpen(curr => (curr === 'open' ? 'closed' : 'open'));
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

  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > window.innerHeight) {
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

  useEffect(() => {
    if (menuOpen === 'open') {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [menuOpen]);

  useEffect(() => {
    gsap
      .timeline()
      .fromTo(
        titleref.current,
        { opacity: 1, x: 0, y: 0 },
        {
          scrollTrigger: {
            trigger: '.page',
            start: '+=50',
            end: '+=105%',
            scrub: true,
            invalidateOnRefresh: true,
            //markers: true,
          },
          opacity: 0,
          zIndex: 0,
          x: 0 /* Change this to move position when scrolling */,
        }
      )
      .fromTo(
        pointref.current,
        { opacity: 1, x: 0, y: 0 },
        {
          scrollTrigger: {
            trigger: '.page',
            start: '+=50',
            end: '+=105%',
            scrub: true,
            invalidateOnRefresh: true,
            //markers: true,
          },
          opacity: 0,
          zIndex: 0,
          x: 200,
        }
      );
  });

  return (
    <main className="page flex min-h-screen flex-col items-center justify-between overflow-hidden text-white">
      <BurgerNavbar toggleMenu={toggleMenu} isScrolled={isScrolled} />
      <NavigationScreen toggleMenu={toggleMenu} />
      <section id="home" className="flex min-h-screen w-screen">
        <div
          ref={titleref}
          className="titlediv fixed right-4 top-1/4 z-[2] flex max-w-[80vw] flex-col text-left text-[4rem] leading-normal text-[#eff876] sm:w-screen sm:text-[7rem] sm:leading-tight md:text-[8rem] lg:text-[10rem]"
        >
          <h1 className="main-title">PORTFOLIO</h1>
          <h1 className="main-title">JOEL WICKSTRÖM</h1>
        </div>
        <div
          ref={pointref}
          id="threeSceneDiv"
          className="pointer-events-none fixed left-0 z-10 h-[120vh] w-[120vw] sm:left-[-200px]"
        >
          <ThreeScene parent="threeSceneDiv" />
        </div>
        <div className="relative z-0 h-screen w-full bg-black object-fill">
          <Image src="/flow.jpg" fill className="h-screen w-screen object-cover opacity-60" alt="background image" />
        </div>
      </section>
      <section
        id="aboutsection"
        className="z-10 flex min-h-screen w-full items-center justify-center bg-[#1d1d1d] p-6 shadow-[-1px_-1px_10px_0px_rgba(0,0,0,0.88);] sm:rounded-none"
      >
        <About />
      </section>
      <section
        id="projects"
        className="z-10 flex min-h-screen w-full items-center justify-center bg-[#181818] bg-gradient-to-b p-6 text-[#eff876]"
      >
        <Projects />
      </section>
      <section
        id="resume"
        className="z-10 flex min-h-screen w-full items-center justify-center bg-[#1d1d1d] p-6 text-white"
      >
        <Resume />
      </section>
      <footer className="justify-left z-10 flex h-[90px] w-full flex-row items-center bg-[#181818] text-white">
        <a href="https://www.linkedin.com/in/joelwickstrom/" target="_blank" className="m-4 ml-10">
          <BsLinkedin className="h-8 w-8" />
        </a>
        <a href="https://github.com/Eljowe" target="_blank" className="m-4">
          <BsGithub className="h-8 w-8" />
        </a>
      </footer>
    </main>
  );
}
