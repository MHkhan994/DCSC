import About from "./About";
import Banner from "./Banner";
import Committee from "./Committee";
import Event from "./Event";
import Gallery from "./Gallery";
import './Homepage.css'

const Home = () => {
    return (
        <div className="max-w-[1920px] mx-auto">
            <Banner></Banner>
            <About></About>
            <Event></Event>
            <Gallery></Gallery>
            <Committee></Committee>
        </div>
    );
};

export default Home;