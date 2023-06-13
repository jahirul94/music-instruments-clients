import usePageTItle from "../../../hooks/usePageTItle";
import OurService from "../OurService/OurService";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructor from "../PopularInstructor/PopularInstructor";
import Slider from "../Slider/Slider";

const Home = () => {
    usePageTItle("Home")
    return (
        <div>
             <Slider></Slider>
             <PopularClasses></PopularClasses>
             <PopularInstructor></PopularInstructor>
             <OurService></OurService>
        </div>
    );
};

export default Home;