import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";



const Slider = () => {

    return (
        <div>
            <Carousel autoPlay infiniteLoop >
                <div>
                    <img className="h-[800px] grayscale" src="https://cdn.mos.cms.futurecdn.net/gD3ojQis57J4wJWbeUCgwe.jpg" alt="" />
                    <p className="legend"><span className="font-semibold">Discover the power of melody, rhythm, and harmony as you learn to play your favorite instrument. Our expert instructors and comprehensive curriculum will guide you on a musical journey like no other.From beginners to seasoned musicians, our classes cater to all skill levels. Whether you aspire to strum the guitar, tickle the ivories of a piano, or create mesmerizing beats on the drums, our dedicated team is here to help you achieve your musical goals.</span></p>
                </div>
                <div>
                    <img className="h-[800px]" src="https://www.musicnotes.com/blog/content/images/2023/03/Acoustic-Guitar-Songs-Beginners.jpg" alt="" />
                    <p className="legend"><span className="font-semibold">Harmonize Your Journey</span></p>
                </div>
                <div>
                    <img className="h-[800px]" src="https://cdn.mos.cms.futurecdn.net/gD3ojQis57J4wJWbeUCgwe.jpg" alt="" />
                    <p className="legend"><span className="font-semibold">Discover the power of melody, rhythm, and harmony as you learn to play your favorite instrument. Our expert instructors and comprehensive curriculum will guide you on a musical journey like no other.From beginners to seasoned musicians, our classes cater to all skill levels. Whether you aspire to strum the guitar, tickle the ivories of a piano, or create mesmerizing beats on the drums, our dedicated team is here to help you achieve your musical goals.</span></p>
                </div>
            </Carousel>
        </div>
    );
};

export default Slider;