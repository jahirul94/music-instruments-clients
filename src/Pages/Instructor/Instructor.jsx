import { useLoaderData } from "react-router-dom";

const Instructor = () => {
   const instructors = useLoaderData();
    return (
        <div className="mx-8 grid gap-4 sm:grid-cols-1 md:grid-cols-3">
            {
            instructors.map(instructor => <div key={instructor._id} className="card card-compact bg-base-100 shadow-xl">
            <figure><img src={instructor.image} alt="Instructors Image" /></figure>
            <div className="card-body">
              <h2 className="card-title">{instructor.instructorName}</h2>
               <p>Email : {instructor.email}</p>
            </div>
          </div>)
            }
        </div>
    );
};

export default Instructor;