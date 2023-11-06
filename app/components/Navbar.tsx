import { BsList } from 'react-icons/bs';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useState } from 'react';

type BurgerNavbarProps = {
  toggleMenu: () => void;
  isScrolled: boolean;
};

gsap.registerPlugin(ScrollTrigger);

const BurgerNavbar: React.FC<BurgerNavbarProps> = ({ toggleMenu, isScrolled }) => {
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={`${isScrolled ? 'NavbarScrolled' : 'Navbar'} bottom-1`}>
      <nav className={`z-1 absolute flex h-[60px] w-screen px-[4vw]`}>
        {screenSize.width < 500 ? (
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
    </div>
  );
};
export default BurgerNavbar;
