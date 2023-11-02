import { Swiper, SwiperSlide } from 'swiper/react';

import { HiOutlineArrowLongLeft, HiOutlineArrowLongRight } from 'react-icons/hi2'

import banner1 from '../../assets/Banner/banner1.png'
import banner2 from '../../assets/Banner/banner2.png'
import banner3 from '../../assets/Banner/banner3.png'
import banner4 from '../../assets/Banner/banner4.png'


import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const Banner = () => {

    const photos = [banner1, banner2, banner3, banner4]

    return (
        <section className='banner lg:pt-64 pt-44 relative'>
            <div className='my-container'>
                <h1 className='font-lora z-50 text-white text-center font-bold md:text-8xl text-6xl md:leading-[108px]'>DHAKA COLLEGE <br></br> SCIENCE CLUB</h1>
            </div>
            <div className='swiper-wrapper relative'>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={3}
                    loop={true}
                    navigation={{
                        nextEl: ".button-next-banner",
                        prevEl: ".button-prev-banner"
                    }}
                    breakpoints={{
                        1200: {
                            slidesPerView: 3,
                        },
                        800: {
                            slidesPerView: 2,
                        },
                        0: {
                            slidesPerView: 1,
                        },
                    }}
                    modules={[Navigation]}
                    className='mySwiper z-30 mt-32'
                    data-aos="fade-up"
                >
                    {
                        photos.map(ph => <SwiperSlide key={ph} className='min-h-[600px]'>
                            <img src={ph} alt="" className='h-[500px] w-full object-cover rounded-lg' />
                        </SwiperSlide>)
                    }

                </Swiper>
                <div className='button-next-banner text-white w-[93px] h-[53px] absolute rounded-lg border border-white lg:right-16 right-1 top-1/2 flex justify-center items-center z-40 cursor-pointer text-4xl'>
                    <HiOutlineArrowLongRight />
                </div>
                <div className='button-prev-banner text-white w-[93px] h-[53px] absolute rounded-lg border border-white lg:left-16 left-1 top-1/2 flex justify-center items-center z-40 cursor-pointer text-4xl'>
                    <HiOutlineArrowLongLeft />
                </div>
            </div>
            <div className='gradient h-[80%] w-[70%] absolute top-0 left-0'></div>
            {/* ============gradinet div======= */}

        </ section>
    );
};

export default Banner;