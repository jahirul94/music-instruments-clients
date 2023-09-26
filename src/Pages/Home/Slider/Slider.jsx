// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Slider = () => {

    return (
        <div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
                >
                <SwiperSlide>
                    <div className="relative">
                        <img className="max-h-[800px] w-full" src="https://cdn.mos.cms.futurecdn.net/gD3ojQis57J4wJWbeUCgwe.jpg" alt="" />
                        <p className="absolute bottom-10 bg-[#493E45] text-white px-4 rounded-2xl py-2 
                        font-semibold w-[90%] text-center mx-auto left-[5%]">Harmonize Your Journey</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative">
                        <img className="max-h-[800px] w-full" src="https://www.musicnotes.com/blog/content/images/2023/03/Acoustic-Guitar-Songs-Beginners.jpg" alt="" />
                        <p className="absolute bottom-10 bg-[#D5D9E3] text-[#493E45] px-4 
                        rounded-2xl py-2 font-semibold  w-[90%] text-center mx-auto left-[5%]">Harmonize Your Journey</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative">
                        <img className="max-h-[800px] w-full" src="https://cdn.mos.cms.futurecdn.net/gD3ojQis57J4wJWbeUCgwe.jpg" alt="" />
                        <p className="absolute bottom-10 bg-[#493E45] text-white px-4 rounded-2xl py-2 
                        font-semibold w-[90%] text-center mx-auto left-[5%]">Harmonize Your Journey</p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;