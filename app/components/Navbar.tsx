import { BsList } from 'react-icons/bs';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useState } from 'react';

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

    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);

  return (
    <div className={`${isScrolled ? 'NavbarScrolled' : 'Navbar'} bottom-1`}>
      <nav className={`z-1 absolute flex h-[60px] w-screen flex-col px-[4vw]`}>
        {size!.width < 500 ? (
          <button
            className="crossIconButton fixed top-0 z-10 transition duration-500 hover:scale-110"
            onClick={toggleMenu}
          >
            <BsList className="crossIcon text-[#eff876]" size="40px" />
          </button>
        ) : (
          <ul className="flex w-full flex-row justify-center space-x-10 pt-4 text-xl">
            <li>
              <a href="/#home" className=" text-[#eff876] transition duration-500 hover:scale-110 hover:underline">
                HOME
              </a>
            </li>
            <li>
              <a
                className=" text-[#eff876] transition duration-500 hover:scale-110 hover:underline"
                href="/#aboutsection"
              >
                ABOUT
              </a>
            </li>
            <li>
              <a className=" text-[#eff876] transition duration-500 hover:scale-110 hover:underline" href="/#projects">
                PROJECTS
              </a>
            </li>
            <li>
              <a className=" text-[#eff876] transition duration-500 hover:scale-110 hover:underline" href="/#resume">
                RESUME
              </a>
            </li>
          </ul>
        )}
      </nav>
      <span className="absolute left-[4vw] top-[60px] z-10 mx-auto h-[1px] w-[92vw] bg-[#eff876] opacity-100"></span>
    </div>
  );
};
export default BurgerNavbar;
