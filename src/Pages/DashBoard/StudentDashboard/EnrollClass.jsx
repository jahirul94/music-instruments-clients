import useEnrolledClass from "../../../hooks/useEnrolledClass";


const EnrollClass = () => {
    const [enrolledClasses] = useEnrolledClass();
    
    return (
        <div className="grid gap-4 px-6 py-10 sm:grid-cols-1 md:grid-cols-3">
            {
                enrolledClasses?.map(c => <div key={c._id} className="card bg-base-100 shadow-xl">
                <figure><img className="w-full h-3/4" src={c.image} alt="class image" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Class Name : {c.className}</h2>
                    <p>Price : ${c.price}</p>
                    <p>Instructor  : {c.instructorName}</p>
                    <p>instructorEmail : {c.instructorEmail}</p>
                </div>
            </div>)
            }
        </div>
    );
};

export default EnrollClass;