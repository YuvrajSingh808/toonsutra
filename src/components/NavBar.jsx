import Logo from '../assets/logo.svg';
import { NavLink } from './NavLink';

export function NavBar({ currentPage }) {
    return (
        <div className="py-5 w-full flex px-16 items-center justify-between">
            <div className="flex items-center">
                <img src={Logo} alt="logo" className="" />
                <NavLink text="Home" href="/" page={currentPage} />
                <NavLink text="Library" href="/library" />
                <NavLink text="Privacy Policy" href="/privacy-policy" />
            </div>
            <div className=" bg-gradient-to-r to-[#DA6732] from-[#D93B47] py-2 px-11 rounded-full hover:scale-105 transition-all hover:shadow-md">
                <p className=' text-backgroundPrimary font-medium'>Download App</p>
            </div>
        </div>
    );
}
