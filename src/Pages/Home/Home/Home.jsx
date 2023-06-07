import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructor from "../PopularInstructor/PopularInstructor";
import Slider from "../Slider/Slider";

const Home = () => {
    return (
        <div>
             <Slider></Slider>
             <PopularClasses></PopularClasses>
             <PopularInstructor></PopularInstructor>
        </div>
    );
};

export default Home;