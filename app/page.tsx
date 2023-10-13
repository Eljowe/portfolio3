'use client';
import Sphere from './components/Sphere';
import { gsap } from 'gsap';
import { useRef, useState, useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import NavigationScreen from './components/NavigationScreen';
import BurgerNavbar from './components/Navbar';
import About from './sections/About';
import Projects from './sections/Projects';
import Resume from './sections/Resume';
import { BsLinkedin, BsGithub } from 'react-icons/bs';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [menuOpen, setMenuOpen] = useState('closed');
  const [isScrolled, setIsScrolled] = useState(false);
  const [gsapMenu, setGsapMenu] = useState(false);
  const sphere1 = useRef(null);
  const sphere2 = useRef(null);
  const sphere3 = useRef(null);
  const titleref = useRef(null);

  useEffect(() => {
    if (sphere1.current && sphere2.current && sphere3.current && titleref.current) {
      const tl1 = gsap.timeline({
        defaults: { ease: 'rough.inOut', duration: 1.5 },
      });
      const tl2 = gsap.timeline({
        defaults: { ease: 'rough.inOut', duration: 1.5 },
      });
      const tl3 = gsap.timeline({
        defaults: { ease: 'rough.inOut', duration: 1.5 },
      });
      const tl4 = gsap.timeline({
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
      tl1.fromTo(
        sphere1.current,
        { x: window.innerWidth / 2, opacity: 0 },
        { x: 0, y: 0, opacity: 0.7, delay: 0.15, ease: 'power4.inOut' }
      );
      tl2.fromTo(
        sphere2.current,
        { y: -window.innerHeight / 2, opacity: 0 },
        { x: 0, y: 0, opacity: 0.6, delay: 0.15, ease: 'power4.inOut' }
      );
      tl3.fromTo(
        sphere3.current,
        { y: window.innerHeight / 2, opacity: 0 },
        { x: 0, y: 0, opacity: 0.6, delay: 0.15, ease: 'power4.inOut' }
      );
      tl4
        .fromTo(
          titleref.current,
          { x: -window.innerWidth / 2, opacity: 0 },
          { x: 0, y: 0, opacity: 1, delay: 0.15, ease: 'power4.inOut' }
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
          gsap.to(sphere1.current, {
            duration: 1,
            x: -moveX,
            y: -moveY,
            ease: 'slow',
            stagger: 0.008,
            overwrite: true,
          });
          gsap.to(sphere2.current, {
            duration: 1,
            x: -moveX * 2,
            y: -moveY * 1,
            ease: 'slow',
            stagger: 0.008,
            overwrite: true,
          });
          gsap.to(sphere3.current, {
            duration: 0.5,
            x: -moveX * 0.2,
            y: -moveY * 0.2,
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
  }, [sphere1, sphere2, sphere3, titleref]);

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
        sphere1.current,
        { opacity: 0.7, x: 0, y: 0 },
        {
          scrollTrigger: {
            trigger: '.page',
            start: '+=50',
            end: '+=105%',
            scrub: true,
            invalidateOnRefresh: true,
          },
          opacity: 0,
          zIndex: 0,
          x: 300,
        }
      )
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
        sphere2.current,
        { opacity: 0.6, x: 0, y: 0 },
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
          y: -200,
        }
      )
      .fromTo(
        sphere3.current,
        { opacity: 0.5, x: 0, y: 0 },
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
          y: 200,
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
        <div
          ref={sphere1}
          id="spherediv"
          className="fixed pointer-events-none top-1/2 left-[70%] w-[70vh] h-[70vh] sm:left-[70%] sm:w-[80vh] sm:h-[80vh] transform -translate-y-1/2 opacity-70 z-0"
        >
          <Sphere parent="spherediv" />
        </div>
        <div
          ref={sphere2}
          id="spherediv2"
          className="fixed pointer-events-none top-1/4 right-[30%] w-[35vh] h-[35vh] sm:right-[45%] sm:w-[30vh] sm:h-[30vh] transform -translate-y-1/2 opacity-70 z-0"
        >
          <Sphere parent="spherediv2" />
        </div>
        <div
          ref={sphere3}
          id="spherediv3"
          className="fixed pointer-events-none top-2/3 right-[40%] w-[90vh] h-[90vh] sm:right-[50%] sm:w-[60vh] sm:h-[60vh] sm:top-[90vh] transform -translate-y-1/2 opacity-60 z-0"
        >
          <Sphere parent="spherediv3" />
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
