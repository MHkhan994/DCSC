import About from "./About";
import Banner from "./Banner";
import Event from "./Event";
import './Homepage.css'

const Home = () => {
    return (
        <div className="max-w-[1920px] mx-auto">
            <Banner></Banner>
            <About></About>
            <Event></Event>
        </div>
    );
};

export default Home;