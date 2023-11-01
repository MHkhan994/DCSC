import eventCardbg from '../../assets/event/evetCard.png'

import { BsArrowUpRight } from 'react-icons/bs'

import 'swiper/css';
import 'swiper/css/effect-coverflow'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { Swiper, SwiperSlide } from 'swiper/react';

import { EffectCoverflow, Autoplay, Navigation } from 'swiper/modules'
import { HiOutlineArrowLongLeft, HiOutlineArrowLongRight } from 'react-icons/hi2';

const Event = () => {

    const slides = ['slide1', 'slide2', 'slide3', 'slide4', 'slide5', 'slide6']

    return (
        <div className='event-container py-40'>
            <div className='my-cotainer text-center text-white'>
                <h1 className='font-lora font-bold text-5xl'>DCSC EVENT FEST-2023</h1>
                <p className='pt-10 pb-16'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br></br> Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when</p>
            </div>
            <div className='swipper-wrapper relative'>
                <Swiper
                    data-aos='zoom-in' data-aos-duration='1300'
                    effect={'coverflow'}
                    grabCursor={true}
                    spaceBetween={80}
                    centeredSlides={true}
                    pagination={{
                        clickable: true,
                    }
                    }
                    loop={true}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    slidesPerView={"auto"}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 90,
                        modifier: 2.5
                    }}
                    navigation={{
                        nextEl: ".button-next-event",
                        prevEl: ".button-prev-event"
                    }}
                    breakpoints={{
                        320: {
                            spaceBetween: 20,
                        },
                        // When window width is >= 640px
                        640: {
                            spaceBetween: 50,
                        },
                        // When window width is >= 992px
                        992: {
                            spaceBetween: 80,
                        },
                    }}
                    modules={[Autoplay, Navigation, EffectCoverflow]}
                    style={{ height: 'auto' }}
                    className='mySwiper h-full'
                >
                    {
                        slides.map(s => <SwiperSlide className='img-slider' key={s}>
                            <div className='bg-[#1C2069] rounded-2xl p-[24px]'>
                                <img src={eventCardbg} alt="" />
                                <h1 className='font-lora pt-8 pb-3 text-[#FFD707] font-bold text-2xl'>DCSC Event Photography Program</h1>
                                <div className='flex justify-between items-end pb-3'>
                                    <p className='text-lg font-md text-white'>18-10-2023 to 20-10-2023</p>
                                    <button className='h-10 w-10 bg-blue-600 flex justify-center items-center'>
                                        <BsArrowUpRight className='text-white text-xl'></BsArrowUpRight>
                                    </button>
                                </div>
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
                <div className='flex justify-center gap-10'>
                    <div className='button-next-event hover:bg-blue-600 hover:border-transparent text-white w-[93px] h-[53px] rounded-lg border border-white flex justify-center items-center cursor-pointer text-4xl'>
                        <HiOutlineArrowLongLeft />
                    </div>
                    <div className='button-prev-event hover:bg-blue-600 hover:border-transparent text-white w-[93px] h-[53px] rounded-lg border border-white flex justify-center items-center cursor-pointer text-4xl'>
                        <HiOutlineArrowLongRight />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Event;