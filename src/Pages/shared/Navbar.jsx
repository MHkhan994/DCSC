import { Link, NavLink } from "react-router-dom";
import { FaBars } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'
import { useState } from "react";

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="absolute top-0 left-0 w-full z-20">
            <div className="my-container py-11 lg:flex justify-between items-center hidden">
                <img src="./logo.png" className="h-28" alt="" />
                <ul className="font-poppins font-semibold flex gap-10 text-white text-lg">
                    <NavLink className={({ isActive }) => isActive ? 'color-nav' : ''} to={'/'}>home</NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'color-nav' : ''} to={'/all-event'}>all event</NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'color-nav' : ''} to={'/committee'}>committee</NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'color-nav' : ''} to={'gallery'}>gallery</NavLink>
                </ul>
                <div>
                    <Link to={"/all-event"} className="btn-pri text-lg">Ongoing event</Link>
                </div>
            </div>
            {/* ==========mobile nav========= */}
            <div className="lg:hidden my-container flex justify-between py-7">
                <img src="./logo.png" className="h-20" alt="" />
                {
                    !isOpen && <button onClick={() => setIsOpen(true)} className="text-white text-2xl">
                        <FaBars></FaBars>
                    </button>
                }
                {
                    isOpen && <div className="absolute p-4 py-10 top-12 right-1 bg-[#ffffffd3] backdrop-blur-sm rounded-lg">
                        <button onClick={() => setIsOpen(false)} className="text-black text-2xl absolute right-3 top-2">
                            <AiOutlineClose></AiOutlineClose>
                        </button>
                        <ul className="font-poppins font-semibold flex text-center flex-col gap-5 text-black text-lg">
                            <NavLink onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? 'color-nav' : ''} to={'/'}>home</NavLink>
                            <NavLink onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? 'color-nav' : ''} to={'/all-event'}>all event</NavLink>
                            <NavLink onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? 'color-nav' : ''} to={'/committee'}>committee</NavLink>
                            <NavLink onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? 'color-nav' : ''} to={'gallery'}>gallery</NavLink>
                            <div>
                                <Link onClick={() => setIsOpen(false)} to={"/all-event"} className="btn-pri text-lg">Ongoing event</Link>
                            </div>
                        </ul>

                    </div>
                }
            </div>
        </nav>
    );
};

export default Navbar;