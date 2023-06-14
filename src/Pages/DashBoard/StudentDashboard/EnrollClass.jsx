import useEnrolledClass from "../../../hooks/useEnrolledClass";
import usePageTItle from "../../../hooks/usePageTItle";


const EnrollClass = () => {
    usePageTItle("My Enrolled Class")
    const [paymentDetails] = useEnrolledClass();
    return (
        <div className="grid gap-4 px-6 py-10 sm:grid-cols-1 md:grid-cols-3">
            {
                paymentDetails?.map(pd => <div key={pd._id} className="card bg-base-100 shadow-xl">
                    <figure><img className="w-full h-80" src={pd.image} alt="class image" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Class Name : {pd.itemName}</h2>
                        <p>Price : ${pd.price}</p>
                        <p>Instructor  : {pd.instructorName}</p>
                        <p>instructorEmail : {pd.instructorEmail}</p>
                    </div>
                </div>)
            }
        </div>
    );
};

export default EnrollClass;