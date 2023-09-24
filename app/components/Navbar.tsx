import { BsList } from 'react-icons/bs'


type BurgerNavbarProps = {
    toggleMenu: () => void;
    isScrolled: Boolean;
};

const BurgerNavbar: React.FC<BurgerNavbarProps> = ({toggleMenu, isScrolled}) => {
    

    return (
        <div className={isScrolled ? 'NavbarScrolled' : 'Navbar'}>
            <nav>
                <a className="crossIconButton" onClick={toggleMenu} > <BsList className='crossIcon' size='40px'/></a>
            </nav>
        </div>
    )
}
export default BurgerNavbar