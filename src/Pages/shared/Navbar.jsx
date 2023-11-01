import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="absolute top-0 left-0 w-full z-20">
            <div className="my-container py-11 flex justify-between items-center">
                <img src="./logo.png" className="h-28" alt="" />
                <ul className="font-poppins font-semibold flex gap-10 text-white text-lg">
                    <NavLink className={({ isActive }) => isActive ? 'color-nav' : ''} to={'/'}>home</NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'color-nav' : ''} to={'/all-event'}>all event</NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'color-nav' : ''} to={'/committee'}>committee</NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'color-nav' : ''} to={'gallery'}>gallery</NavLink>
                </ul>
                <div>
                    <button className="btn-pri text-lg">
                        Ongoing event
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;