import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "../Pages/shared/Navbar";
import Footer from "../Pages/shared/Footer";

const Main = () => {
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