import { Helmet } from "react-helmet-async";
import About from "./About";
import Banner from "./Banner";
import Committee from "./Committee";
import Event from "./Event";
import Gallery from "./Gallery";
import Help from "./Help";
import './Homepage.css'

const Home = () => {
    return (
        <div className="max-w-[1920px] mx-auto">
            <Helmet>
                <title>Home - DCSC</title>
            </Helmet>
            <Banner></Banner>
            <About></About>
            <Event></Event>
            <Gallery></Gallery>
            <Committee></Committee>
            <Help></Help>
        </div>
    );
};

export default Home;