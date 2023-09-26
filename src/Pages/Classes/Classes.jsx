import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import useAdmin from "../../hooks/useAdmin";
import useInstructors from "../../hooks/useInstructors";
import { useEffect, useState } from "react";
import useEnrolledClass from "../../hooks/useEnrolledClass";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import usePageTItle from "../../hooks/usePageTItle";
import useTheme from "../../hooks/useTheme";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Classes = () => {
  usePageTItle("Classes")
  const { user } = useAuth();
  const [theme] = useTheme();
  const [isAdmin] = useAdmin();
  const [axiosSecure] = useAxiosSecure();
  const [paymentDetails] = useEnrolledClass();
  const [isInstructor] = useInstructors();
  const [ids, setIds] = useState([]);

  const { data: classes = [] } = useQuery({
    queryKey: ["classes"],
    queryFn: async () => {
      const res = await axios.get("https://music-instrument-server-navy.vercel.app/displayclasses")
      return res.data;
    }
  })

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
    <div className="min-h-screen grid gap-8 px-6 sm:grid-cols-1 lg:grid-cols-3 py-8 mb-14">
      {
        classes?.map(singleClass => <div key={singleClass._id} className={`${singleClass.availableSeats == 0 ? "bg-red-700" : `${theme === "light" ? "text-black" : "text-slate-300"}`} card card-compact shadow-xl`}>

          <figure><img src={singleClass.image} className="h-96 w-full hover:scale-125 transition-transform duration-500" alt="class pic" /></figure>

          <div className="card-body">
            <h2 className="card-title">Class Name : {singleClass.className}</h2>
            <h2 className="text-lg font-semibold">Instructor : {singleClass.instructorName}</h2>
            <h2 className="text-lg font-semibold">Available Seats : {singleClass.availableSeats}</h2>
            <h2 className="text-lg font-semibold">Price : ${singleClass.price}</h2>

            <div className="card-actions justify-end">
              {ids.includes(singleClass._id) ? <button className="btn btn-outline w-full">already enrolled</button> :
                <button onClick={() => handleEnrollClass(singleClass)} disabled={user?.email && isAdmin || isInstructor || singleClass.availableSeats == 0} className={`${theme === "light" ? "text-black" : "text-slate-300"} btn btn-outline w-full`}>Enroll</button>}
            </div>

          </div>
        </div>)
      }
    </div>
  );
};

export default Classes;