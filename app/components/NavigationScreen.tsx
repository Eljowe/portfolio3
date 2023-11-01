import { BsX } from 'react-icons/bs';
import { Link } from 'react-scroll';

type NavigationScreenProps = {
  toggleMenu: () => void;
};

const NavigationScreen: React.FC<NavigationScreenProps> = ({ toggleMenu }) => {
  return (
    <div className="NavigationScreen z-20">
      <button
        className="NavigationScreenCross transition duration-500 hover:scale-110 hover:text-[#eff876]"
        onClick={toggleMenu}
      >
        <BsX className="BsX" size="4rem" />
      </button>
      <nav>
        <ul className="NavList">
          <li>
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="NavigationScreenItem font-extrabold text-[#eff876] transition duration-500 hover:scale-110 hover:underline"
              onClick={toggleMenu}
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              className="NavigationScreenItem font-extrabold text-[#eff876] transition duration-500 hover:scale-110 hover:underline"
              to="aboutsection"
              smooth={true}
              duration={500}
              onClick={toggleMenu}
            >
              ABOUT
            </Link>
          </li>
          <li>
            <Link
              className="NavigationScreenItem font-extrabold text-[#eff876] transition duration-500 hover:scale-110 hover:underline"
              to="projects"
              smooth={true}
              duration={500}
              onClick={toggleMenu}
            >
              PROJECTS
            </Link>
          </li>
          <li>
            <Link
              className="NavigationScreenItem font-extrabold text-[#eff876] transition duration-500 hover:scale-110 hover:underline"
              to="resume"
              smooth={true}
              duration={500}
              onClick={toggleMenu}
            >
              RESUME
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavigationScreen;
