import about from '../../assets/About/about.png';
import { useState } from 'react';

const About = () => {
    const [activeButton, setActiveButton] = useState('about')

    return (
        <div className="min-h-[800px] lg:py-28 py-14 relative">

            {/* gradient div */}
            <div className="gradient h-[70%] absolute w-[60%] top-0 right-0"></div>

            <div className='grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-5 md:gap-5 lg:gap-0 relative z-10 my-container items-center justify-center'>
                <div className='text-white space-y-10 flex flex-col items-center lg:items-start max-w-[512px]'>
                    <h1 className='font-lora text-5xl font-bold'>DCSC</h1>
                    <div className='bg-white px-5 py-2 rounded-2xl inline-block w-full'>
                        <div className='flex flex-col lg:flex-row justify-between w-full text-2xl text-black font-lora font-bold'>
                            <button onClick={() => setActiveButton("about")} className={`px-6 py-2 ${activeButton === 'about' ? 'btn-pri' : ''}`}>About</button>
                            <button onClick={() => setActiveButton("intro")} className={`px-6 py-2 ${activeButton === 'intro' ? 'btn-pri' : ''}`}>Intro</button>
                            <button onClick={() => setActiveButton("wwd")} className={`px-6 py-2 ${activeButton === 'wwd' ? 'btn-pri text-2xl' : ''}`}>what we do</button>
                        </div>
                    </div>
                    <p className='text-lg text-center lg:text-start'>Dhaka College Science Club, established in 1996, is a pioneering institution dedicated to fostering scientific curiosity and exploration. With over two decades of nurturing young minds, our club has been a hub for students to delve into various scientific disciplines. Through engaging activities, lectures, and experiments, we empower members to develop critical thinking skills and a profound appreciation for the world of science. Our enduring legacy continues to inspire the next generation of scientists and innovators in Dhaka and beyond.</p>
                </div>
                <div className=''>
                    <img src={about} className='z-30 w-full' alt="" />
                </div>
            </div>
        </div>
    );
};

export default About;
