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
          x: -200,
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
    <main className="page flex min-h-screen flex-col items-center justify-between text-white overflow-hidden">
      <BurgerNavbar toggleMenu={toggleMenu} isScrolled={isScrolled} />
      <NavigationScreen toggleMenu={toggleMenu} />
      <section id="home" className="min-h-screen flex">
        <div
          ref={titleref}
          className="titlediv flex flex-col fixed top-1/3 text-[12vw] sm:text-6xl md:text-8xl right-4 max-w-[80vw] sm:w-screen text-left text-[#eff876] z-[2]"
        >
          <h1 className="main-title">PORTFOLIO</h1>
          <h1 className="main-title">JOEL WICKSTRÖM</h1>
        </div>
        <div ref={pointref} id="threeSceneDiv" className="w-[120vw] h-[120vh] fixed left-0 sm:left-[-200px] z-0">
          <ThreeScene parent="threeSceneDiv" />
        </div>
      </section>
      <section
        id="aboutsection"
        className="min-h-screen w-full p-6 flex items-center justify-center bg-[#1d1d1d] rounded-t-2xl sm:rounded-none shadow-[-1px_-1px_10px_0px_rgba(0,0,0,0.88);] z-10"
      >
        <About />
      </section>
      <section
        id="projects"
        className="min-h-screen flex p-6 bg-gradient-to-b bg-[#181818] w-full items-center justify-center text-[#eff876] z-10"
      >
        <Projects />
      </section>
      <section
        id="resume"
        className="min-h-screen flex p-6 bg-[#1d1d1d] w-full items-center justify-center z-10 text-white"
      >
        <Resume />
      </section>
      <footer className="flex flex-row items-center justify-center w-full h-[100px] sm:h-[180px] bg-[#eff876] z-10 text-black">
        <a href="https://www.linkedin.com/in/joelwickstrom/" target="_blank" className="m-4">
          <BsLinkedin className="w-10 h-10" />
        </a>
        <a href="https://github.com/Eljowe" target="_blank" className="m-4">
          <BsGithub className="w-10 h-10" />
        </a>
      </footer>
    </main>
  );
}
