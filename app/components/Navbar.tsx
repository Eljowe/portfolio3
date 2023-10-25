import { BsList } from 'react-icons/bs';

type BurgerNavbarProps = {
  toggleMenu: () => void;
  isScrolled: boolean;
};

const BurgerNavbar: React.FC<BurgerNavbarProps> = ({ toggleMenu, isScrolled }) => {
  return (
    <div className={`z-100 ${isScrolled ? 'NavbarScrolled' : 'Navbar'}`}>
      <nav>
        <a
          className="crossIconButton z-100 fixed top-0 transition duration-500 hover:scale-110 hover:text-[#eff876]"
          onClick={toggleMenu}
        >
          {' '}
          <BsList className="crossIcon" size="40px" />
        </a>
      </nav>
    </div>
  );
};
export default BurgerNavbar;
