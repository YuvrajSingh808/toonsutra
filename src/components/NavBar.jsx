import Logo from '../assets/logo.svg';
import { NavLink } from './NavLink';
import { slide as Menu } from 'react-burger-menu';

export function NavBar({ currentPage }) {
    return (
        <div className="sm:py-5 py-2 w-full flex sm:px-16 items-center justify-between">
            <div className="sm:items-center items-start flex">
                <img src={Logo} alt="logo" className="w-44 sm:w-auto" />
                <NavLink text="Home" href="/" page={currentPage} />
                <NavLink text="Library" href="/library" page={currentPage} />
                <NavLink text="Privacy Policy" href="/privacy-policy" page={currentPage} />
            </div>
            <div className="sm:hidden block bg-red-400" id='nav'>
                <Menu right>
                    <a href='/' className="text-white text-right my-2">Home</a>
                    <a href='/library' className="text-white text-right my-2">Library</a>
                    <a href='/privacy-policy' className="text-white text-right my-2">Privacy Policy</a>
                </Menu>
            </div>
            <div className="sm:block hidden bg-gradient-to-r to-[#DA6732] from-[#D93B47] py-2 px-11 rounded-full hover:scale-105 transition-all hover:shadow-md">
                <p className=' text-backgroundPrimary font-medium'>Download App</p>
            </div>
        </div>
    );
}
