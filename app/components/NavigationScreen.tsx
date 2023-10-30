import { BsX } from 'react-icons/bs';

type NavigationScreenProps = {
  toggleMenu: () => void;
};

const NavigationScreen: React.FC<NavigationScreenProps> = ({ toggleMenu }) => {
  return (
    <div className="NavigationScreen z-20">
      <a
        className="NavigationScreenCross transition duration-500 hover:scale-110 hover:text-[#eff876]"
        onClick={toggleMenu}
      >
        <BsX className="BsX" size="4rem" />
      </a>
      <nav>
        <ul className="NavList">
          <li>
            <a
              className="NavigationScreenItem font-extrabold text-[#eff876] transition duration-500 hover:scale-110 hover:underline"
              href="/#home"
              onClick={toggleMenu}
            >
              HOME
            </a>
          </li>
          <li>
            <a
              className="NavigationScreenItem font-extrabold text-[#eff876] transition duration-500 hover:scale-110 hover:underline"
              href="/#aboutsection"
              onClick={toggleMenu}
            >
              ABOUT
            </a>
          </li>
          <li>
            <a
              className="NavigationScreenItem font-extrabold text-[#eff876] transition duration-500 hover:scale-110 hover:underline"
              href="/#projects"
              onClick={toggleMenu}
            >
              PROJECTS
            </a>
          </li>
          <li>
            <a
              className="NavigationScreenItem font-extrabold text-[#eff876] transition duration-500 hover:scale-110 hover:underline"
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
