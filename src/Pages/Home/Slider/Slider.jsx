import { Swiper, SwiperSlide } from "swiper/react";
import "./Slider.css"
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper";

const Slider = () => {
    const sliderText = <>
        <div className="absolute rounded-xl h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className="lg:pt-[300px] px-14  text-white">
                <h2 className=" text-left sm:text-lg lg:text-4xl">Harmonize Your Journey,</h2>
                <p className="text-left  lg:text-lg">Discover the power of melody, rhythm, and harmony as you learn to play your favorite instrument. Our expert instructors and comprehensive curriculum will guide you on a musical journey like no other.From beginners to seasoned musicians, our classes cater to all skill levels. Whether you aspire to strum the guitar, tickle the ivories of a piano, or create mesmerizing beats on the drums, our dedicated team is here to help you achieve your musical goals.</p>
            </div>
        </div>
    </>
    return (
        <div className="h-[550px] mx-4 rounded-xl">
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide >
                    <div className="h-[550px] rounded-xl" style={{ backgroundImage: `url("https://cdn.mos.cms.futurecdn.net/gD3ojQis57J4wJWbeUCgwe.jpg")`, backgroundRepeat: 'no-repeat' }}>
                        <div>
                            {sliderText}
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="h-[550px] rounded-xl" style={{ backgroundImage: `url("https://www.musicnotes.com/blog/content/images/2023/03/Acoustic-Guitar-Songs-Beginners.jpg")` }}>
                        <div>
                            {sliderText}
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="h-[550px] rounded-xl" style={{ backgroundImage: `url("https://www.parents.com/thmb/ZRneQeGqThv4iV61Nl25zgQMlhQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-96162171-2000-061841fa01cf428bb25fdf405e251907.jpg")` }}>
                        <div>
                            {sliderText}
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;