import { Outlet } from "react-router-dom";
import Navbar from "../Pages/shared/Navbar";

const Main = () => {
    return (
        <div className="bg-navy">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;