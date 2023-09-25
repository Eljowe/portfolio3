import { BsX } from 'react-icons/bs'

type NavigationScreenProps = {
    toggleMenu: () => void;
};

const NavigationScreen: React.FC<NavigationScreenProps> = ({ toggleMenu }) => {
    return(
        <div className='NavigationScreen z-20'>
            <a className='NavigationScreenCross' onClick={toggleMenu}><BsX className='BsX' size='4rem'/></a>
            <nav>
                <ul className='NavList'>
                    <li>
                        <a className='NavigationScreenItem hover:text-[#eff876]' href="#home" onClick={toggleMenu}>Home</a>
                    </li>
                    <li>
                        <a className='NavigationScreenItem hover:text-[#eff876]' href="#about" onClick={toggleMenu}>About</a>
                    </li>
                    <li>
                        <a className='NavigationScreenItem hover:text-[#eff876]' href="#projects" onClick={toggleMenu}>Projects</a>
                    </li>
                    <li>
                        <a className='NavigationScreenItem hover:text-[#eff876]' href="#resume" onClick={toggleMenu}>Resume</a>
                    </li>
                </ul>
            </nav>
        </div>
    )

}

export default NavigationScreen