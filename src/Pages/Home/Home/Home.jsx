import usePageTItle from "../../../hooks/usePageTItle";
import OurService from "../OurService/OurService";
import Partnership from "../Partnarship/Partnership";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructor from "../PopularInstructor/PopularInstructor";


const Home = () => {
    usePageTItle("Home")
    return (
        <div>
             <PopularClasses></PopularClasses>
             <PopularInstructor></PopularInstructor>
             <Partnership></Partnership>
             <OurService></OurService>
        </div>
    );
};

export default Home;