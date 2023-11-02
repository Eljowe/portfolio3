import { BsList } from 'react-icons/bs';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

type BurgerNavbarProps = {
  toggleMenu: () => void;
  isScrolled: boolean;
};

gsap.registerPlugin(ScrollTrigger);

const BurgerNavbar: React.FC<BurgerNavbarProps> = ({ toggleMenu, isScrolled }) => {
  return (
    <div className={`${isScrolled ? 'NavbarScrolled' : 'Navbar'} bottom-1`}>
      <nav className={`z-1 absolute mx-[4vw] flex h-[60px] w-screen`}>
        <button
          className="crossIconButton fixed top-0 z-10 transition duration-500 hover:scale-110"
          onClick={toggleMenu}
        >
          {' '}
          <BsList className="crossIcon text-[#eff876]" size="40px" />
        </button>
      </nav>
    </div>
  );
};
export default BurgerNavbar;
