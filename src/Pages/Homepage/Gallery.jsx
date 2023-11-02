
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/navigation';

import gallery1 from '../../assets/Gallery/gallery1.png'
import gallery2 from '../../assets/Gallery/gallery2.png'
import gallery3 from '../../assets/Gallery/gallery3.png'
import gallery4 from '../../assets/Gallery/gallery4.png'
import gallery5 from '../../assets/Gallery/gallery5.png'
import gallery6 from '../../assets/Gallery/gallery6.png'
import gallery7 from '../../assets/Gallery/gallery7.png'
import gallery8 from '../../assets/Gallery/gallery8.png'
import gallery9 from '../../assets/Gallery/gallery9.png'
import gallery10 from '../../assets/Gallery/gallery10.png'


import { Autoplay, Grid, Navigation } from 'swiper/modules';
import { HiOutlineArrowLongLeft, HiOutlineArrowLongRight } from 'react-icons/hi2';
import SectionTop from '../../components/SectionTop';

const gallery = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, gallery7, gallery8, gallery9, gallery10]

const Gallery = () => {
    return (
        <div className="lg:py-40 py-20">
            <SectionTop
                heading={"Gallery"}
                subhaeading={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when"}
            ></SectionTop>
            <div className='swiper-wrapper'>
                <Swiper
                    data-aos="fade-left"
                    data-aos-delay="200"
                    data-aos-duration="1300"
                    slidesPerView={3}
                    grid={{
                        rows: 2,
                    }}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={{
                        nextEl: ".button-next-gallery",
                        prevEl: ".button-prev-gallery"
                    }}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                            grid: {
                                rows: 2,
                            }
                        },
                        // When window width is >= 640px
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                            grid: {
                                rows: 2,
                            }
                        },
                        // When window width is >= 992px
                        992: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                            grid: {
                                rows: 2,
                            }
                        },
                    }}
                    autoplay={{ delay: 2500, disableOnInteraction: false }}
                    modules={[Grid, Navigation, Autoplay]}
                    className="mySwiper my-container lg:h-[90vh] md:h-[50vh] h-[70vh] min-h-[600px] max-h-[800px]"
                >
                    {
                        gallery.map(img => <SwiperSlide key={img}>
                            <div>
                                <img src={img} className='h-full w-full' alt="" />
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
            <div className='flex justify-center gap-10 lg:pt-14 pt-7'>
                <div className='button-next-gallery hover:bg-blue-600 hover:border-transparent text-white w-[93px] h-[53px] rounded-lg border border-white flex justify-center items-center cursor-pointer text-4xl'>
                    <HiOutlineArrowLongLeft />
                </div>
                <div className='button-prev-gallery hover:bg-blue-600 hover:border-transparent text-white w-[93px] h-[53px] rounded-lg border border-white flex justify-center items-center cursor-pointer text-4xl'>
                    <HiOutlineArrowLongRight />
                </div>
            </div>
        </div>
    );
};

export default Gallery;
