import { useLoaderData } from "react-router-dom";
import usePageTItle from "../../hooks/usePageTItle";
import InstructorCard from "../../components/InstructorCard";

const Instructor = () => {
  const instructors = useLoaderData();
  usePageTItle("Instructor")
  return (
    <div className="mx-8 min-h-screen mb-14">
      <div className="grid  my-8 gap-4 sm:grid-cols-1 md:grid-cols-3">
        {
          instructors?.map(instructor => <InstructorCard key={instructor._id} instructor={instructor}></InstructorCard>)
        }
      </div>
    </div>
  );
};

export default Instructor;