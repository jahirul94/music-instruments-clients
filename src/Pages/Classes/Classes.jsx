import { useLoaderData } from "react-router-dom";

const Classes = () => {
    const classes = useLoaderData();
    const  handleEnrollClass = enrollClass =>{
       console.log(enrollClass);
    }
    
    return (
        <div className="grid gap-4 px-6 sm:grid-cols-1 lg:grid-cols-3">
             {
                classes.map(singleClass =><div key={singleClass._id} className="card card-compact bg-base-100 shadow-xl">
                <figure><img src={singleClass.image} className="h-96 w-full" alt="class pic" /></figure>
                <div className="card-body">
                  <h2 className="card-title">{singleClass.className}</h2>
                  <h2 className="text-lg font-semibold">{singleClass.instructorName}</h2>
                  <h2 className="text-lg font-semibold">Available Seats : {singleClass.availableSeats}</h2>
                  <h2 className="text-lg font-semibold">Price : ${singleClass.price}</h2>
                  <div className="card-actions justify-end">
                    <button onClick={()=>handleEnrollClass(singleClass)} className="btn btn-primary w-full">Enroll</button>
                  </div>
                </div>
              </div> )
             }
        </div>
    );
};

export default Classes;