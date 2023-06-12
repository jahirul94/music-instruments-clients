import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import useAdmin from "../../hooks/useAdmin";
import useInstructors from "../../hooks/useInstructors";
import { useEffect, useState } from "react";
import useEnrolledClass from "../../hooks/useEnrolledClass";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Classes = () => {
  const { user } = useAuth();
  const [isAdmin] = useAdmin();
  const [axiosSecure] = useAxiosSecure();
  const [paymentDetails] = useEnrolledClass();
  const [isInstructor] = useInstructors();
  const [classes, setClasses] = useState([]);
  const [ids, setIds] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/displayclasses')
      .then(res => res.json())
      .then(data => setClasses(data))
  }, [])
  
  useEffect(() => {
    const ids = paymentDetails?.map(p => p.itemId)
    setIds(ids);
  }, [paymentDetails])

  const handleEnrollClass = enrollClass => {
    const { className, image, instructorName, price, _id } = enrollClass;
    const enrolledClass = { email: user?.email, className, image, instructorName, price, itemId: _id }

    axiosSecure.post("/classes", enrolledClass)
      .then(data => {
        if (data.data.insertedId) {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Your Classes has been saved On Cart',
            showConfirmButton: false,
            timer: 1500
          })
        }
        else {
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: `${data.data.message}`,
            showConfirmButton: false,
            timer: 1500
          })
        }
      })
  }
  return (
    <div className="grid gap-4 px-6 sm:grid-cols-1 lg:grid-cols-3">
      {
        classes?.map(singleClass => <div key={singleClass._id} className={singleClass.availableSeats == 0 ? "bg-red-700 card card-compact shadow-xl text-white" : "card card-compact bg-[#592bc5] shadow-xl text-white"}>
          <figure><img src={singleClass.image} className="h-96 w-full" alt="class pic" /></figure>
          <div className="card-body">
            <h2 className="card-title">Class Name : {singleClass.className}</h2>
            <h2 className="text-lg font-semibold">Instructor : {singleClass.instructorName}</h2>
            <h2 className="text-lg font-semibold">Available Seats : {singleClass.availableSeats}</h2>
            <h2 className="text-lg font-semibold">Price : ${singleClass.price}</h2>
            <div className="card-actions justify-end">
              {ids.includes(singleClass._id) ? <button className="btn btn-primary w-full">already enrolled</button> :
                <button onClick={() => handleEnrollClass(singleClass)} disabled={isAdmin || isInstructor || singleClass.availableSeats == 0} className="btn btn-primary w-full">Enroll</button>}
            </div>
          </div>
        </div>)
      }
    </div>
  );
};

export default Classes;