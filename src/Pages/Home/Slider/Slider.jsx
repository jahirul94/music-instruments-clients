import { Swiper, SwiperSlide } from "swiper/react";
import "./Slider.css"
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper";
const Slider = () => {
    return (
        <div className="h-[550px] mx-4">
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide><img src="https://static.toiimg.com/photo/81950517.cms" className="rounded-xl" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://static.toiimg.com/photo/81950517.cms" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://static.toiimg.com/photo/81950517.cms" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://static.toiimg.com/photo/81950517.cms" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://static.toiimg.com/photo/81950517.cms" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://static.toiimg.com/photo/81950517.cms" alt="" /></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;