import banner from '../../assets/Banner/banner.png'
import gradient from '../../assets/gradient.png'

const Banner = () => {
    return (
        <div className='min-h-screen banner pt-64 relative'>
            <img src={gradient} className='absolute lg:h-fit z-10 lg:w-screen h-screen w-fit top-0 left-0' alt="" />
            <div className='my-container z-20'>
                <h1 className='font-lora text-white text-center font-bold text-8xl leading-[108px]'>DHAKA COLLEGE <br></br> SCIENCE CLUB</h1>
            </div>
        </div>
    );
};

export default Banner;