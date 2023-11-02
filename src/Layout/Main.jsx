import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "../Pages/shared/Navbar";
import Footer from "../Pages/shared/Footer";

import 'aos/dist/aos.css';
import { useEffect } from "react";
import Aos from "aos";

const Main = () => {

    useEffect(() => {
        Aos.init({
            duration: 1000,
            once: true
        })
    }, [])

    return (
        <div className="bg-navy">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            <ScrollRestoration></ScrollRestoration>
        </div>
    );
};

export default Main;