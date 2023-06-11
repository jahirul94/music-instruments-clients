import useEnrolledClass from "../../../hooks/useEnrolledClass";
import moment from 'moment';

const PaymentHistory = () => { 
    const [ , paymentDetails] = useEnrolledClass();
    return (
        <div className="overflow-x-auto my-8">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th className="text-lg">#</th>
                        <th className="text-lg">Class Image</th>
                        <th className="text-lg">Class Name</th>
                        <th className="text-lg">Quantity</th>
                        <th className="text-lg">Total Price</th>
                        <th className="text-lg">Date</th>
                        <th className="text-lg">TransactionId</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        paymentDetails?.map((p, i) => <tr key={p._id}>
                            <td>{i + 1 }</td>
                            <td>
                                <div className="flex">
                                    {
                                        p.image?.map((i , index) => <img className="w-16 h-16 rounded-2xl" key={index} src={i} />)
                                    }
                                </div>
                            </td>
                            <td>
                                {p.itemName?.map((n , i) => <p key={i}>{i + 1}. {n}</p>)}
                            </td>
                            <td>
                               {p.quantity} 
                            </td>
                            <td>${p.price}</td>
                            <td>{moment(p.date).format('MMMM Do YYYY, h:mm:ss a')}</td>
                            <td>{p.transactionId}</td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default PaymentHistory;