import { BsList } from 'react-icons/bs';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useState } from 'react';
import { BsLinkedin, BsGithub } from 'react-icons/bs';

type BurgerNavbarProps = {
  toggleMenu: () => void;
  isScrolled: boolean;
};

interface Size {
  width: number;
  height: number;
}

gsap.registerPlugin(ScrollTrigger);

const BurgerNavbar: React.FC<BurgerNavbarProps> = ({ toggleMenu, isScrolled }) => {
  const [size, setSize] = useState<Size>({ width: 0, height: 0 });

  const resizeHandler = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    setSize({
      width: width,
      height: height,
    });
  };

  useEffect(() => {
    resizeHandler();
    window.addEventListener('resize', resizeHandler);
    window.addEventListener('scroll', scrollFunction);

    return () => {
      window.removeEventListener('resize', resizeHandler);
      window.removeEventListener('scroll', scrollFunction);
    };
  }, []);

  function scrollFunction() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    if (document.getElementById('myBar') != null) {
      document.getElementById('myBar')!.style.width = scrolled + '%';
    }
  }

  return (
    <div className={`${isScrolled ? 'NavbarScrolled' : 'Navbar'} bottom-1`}>
      <nav className={`z-1 absolute flex h-[60px] w-screen flex-col px-[4vw]`}>
        {size!.width < 500 ? (
          <button
            className="crossIconButton fixed top-0 z-10 transition duration-500 hover:scale-110"
            onClick={toggleMenu}
          >
            <BsList className="crossIcon text-theme-main" size="40px" />
          </button>
        ) : (
          <div className="flex flex-row justify-between">
            <ul className="flex w-full flex-row justify-start space-x-10 pt-4 text-xl">
              <li>
                <a href="/#home" className=" text-theme-main transition duration-500 hover:scale-110 hover:underline">
                  HOME
                </a>
              </li>
              <li>
                <a className=" text-theme-main transition duration-500 hover:scale-110 hover:underline" href="/#about">
                  ABOUT
                </a>
              </li>
              <li>
                <a
                  className=" text-theme-main transition duration-500 hover:scale-110 hover:underline"
                  href="/#showcase"
                >
                  SHOWCASE
                </a>
              </li>
              <li>
                <a className=" text-theme-main transition duration-500 hover:scale-110 hover:underline" href="/#resume">
                  RESUME
                </a>
              </li>
            </ul>
            <div className="flex text-theme-main">
              <a
                href="https://www.linkedin.com/in/joelwickstrom/"
                target="_blank"
                className="m-4 ml-10 transition duration-500 hover:scale-110"
              >
                <BsLinkedin className="h-7 w-7" />
              </a>
              <a
                href="https://github.com/Eljowe"
                target="_blank"
                className="m-4 transition duration-500 hover:scale-110"
              >
                <BsGithub className="h-7 w-7" />
              </a>
            </div>
          </div>
        )}
      </nav>
      <div className="absolute left-[4vw] top-[60px] z-10 mx-auto block h-[1px] w-[92vw] items-start bg-[#a6ad38] opacity-100">
        <div className="z-10 block h-[1px] w-0 bg-theme-main opacity-100" id="myBar"></div>
      </div>
    </div>
  );
};
export default BurgerNavbar;
