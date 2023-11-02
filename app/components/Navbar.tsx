import { BsList } from 'react-icons/bs';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

type BurgerNavbarProps = {
  toggleMenu: () => void;
  isScrolled: boolean;
};

const BurgerNavbar: React.FC<BurgerNavbarProps> = ({ toggleMenu, isScrolled }) => {
  const borderref = useRef(null);
  const navref = useRef(null);

  useEffect(() => {
    gsap.timeline().fromTo(
      borderref.current,
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
  }, []);

  return (
    <div ref={navref} className={`${isScrolled ? 'NavbarScrolled' : 'Navbar'} bottom-1`}>
      <nav className={`z-1 absolute mx-[4vw] flex h-[60px] w-screen`}>
        <button
          className="crossIconButton fixed top-0 z-10 transition duration-500 hover:scale-110"
          onClick={toggleMenu}
        >
          {' '}
          <BsList className="crossIcon text-[#eff876]" size="40px" />
        </button>
      </nav>
      <div
        ref={borderref}
        className={`z-1 relative mx-[4vw] flex h-[60px] w-screen  ${
          isScrolled ? 'border-none' : 'border-b border-[#eff876]'
        }`}
      ></div>
    </div>
  );
};
export default BurgerNavbar;
