import { BsX } from 'react-icons/bs';

type NavigationScreenProps = {
  toggleMenu: () => void;
};

const NavigationScreen: React.FC<NavigationScreenProps> = ({ toggleMenu }) => {
  return (
    <div className="NavigationScreen z-20">
      <div className="px-auto absolute h-[60px] w-[92vw] py-[1dvh]">
        <button
          className="NavigationScreenCross transition duration-500 hover:scale-110 hover:text-theme-main"
          onClick={toggleMenu}
        >
          <BsX className="BsX" size="4rem" />
        </button>
      </div>
      <nav>
        <ul className="NavList">
          <li>
            <a
              href="/#home"
              className="NavigationScreenItem font-extrabold text-theme-main transition duration-500 hover:scale-110 hover:underline"
              onClick={toggleMenu}
            >
              HOME
            </a>
          </li>
          <li>
            <a
              className="NavigationScreenItem font-extrabold text-theme-main transition duration-500 hover:scale-110 hover:underline"
              href="/#about"
              onClick={toggleMenu}
            >
              ABOUT
            </a>
          </li>
          <li>
            <a
              className="NavigationScreenItem font-extrabold text-theme-main transition duration-500 hover:scale-110 hover:underline"
              href="/#showcase"
              onClick={toggleMenu}
            >
              SHOWCASE
            </a>
          </li>
          <li>
            <a
              className="NavigationScreenItem font-extrabold text-theme-main transition duration-500 hover:scale-110 hover:underline"
              href="/#resume"
              onClick={toggleMenu}
            >
              RESUME
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavigationScreen;
