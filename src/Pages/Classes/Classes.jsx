import { useLoaderData } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import useAdmin from "../../hooks/useAdmin";
import useInstructors from "../../hooks/useInstructors";

const Classes = () => {
  const { user } = useAuth();
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructors();
  const classes = useLoaderData();
  // console.log(classes);
  const handleEnrollClass = enrollClass => {
    // console.log(enrollClass);
    const { className, image, instructorName, price } = enrollClass;
    const enrolledClass = { email: user?.email, className, image, instructorName, price }
    fetch('http://localhost:5000/classes', {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(enrolledClass)
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Your Classes has been saved On Cart',
            showConfirmButton: false,
            timer: 1500
          })
        }
      })
  }

  return (
    <div className="grid gap-4 px-6 sm:grid-cols-1 lg:grid-cols-3">
      {
        classes.map(singleClass => <div key={singleClass._id} className="card card-compact bg-base-100 shadow-xl">
          <figure><img src={singleClass.image} className="h-96 w-full" alt="class pic" /></figure>
          <div className="card-body">
            <h2 className="card-title">{singleClass.className}</h2>
            <h2 className="text-lg font-semibold">{singleClass.instructorName}</h2>
            <h2 className="text-lg font-semibold">Available Seats : {singleClass.availableSeats}</h2>
            <h2 className="text-lg font-semibold">Price : ${singleClass.price}</h2>
            <div className="card-actions justify-end">
              <button onClick={() => handleEnrollClass(singleClass)} disabled={isInstructor || isAdmin} className="btn btn-primary w-full">Enroll</button>
            </div>
          </div>
        </div>)
      }
    </div>
  );
};

export default Classes;