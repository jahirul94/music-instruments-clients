import { useLoaderData } from "react-router-dom";

const Instructor = () => {
  const instructors = useLoaderData();
  // console.log(instructors);
  return (
    <div className="mx-8 min-h-screen">
      <div className="grid my-8 gap-4 sm:grid-cols-1 md:grid-cols-3">
        {
          instructors?.map(instructor => <div key={instructor._id} className="card card-compact bg-[#592bc5] shadow-xl text-white">
            <figure><img className="h-80 w-72" src={instructor.image} alt="Instructors Image" /></figure>
            <div className="card-body">
              <h2 className="card-title">{instructor.name}</h2>
              <p>Email : {instructor.email}</p>
            </div>
          </div>)
        }
      </div>
    </div>
  );
};

export default Instructor;