import useEnrolledClass from "../../../hooks/useEnrolledClass";
import moment from 'moment';
import usePageTItle from "../../../hooks/usePageTItle";
import useTheme from "../../../hooks/useTheme";

const PaymentHistory = () => {
    usePageTItle("Payment History")
    const [theme] = useTheme();

    const [paymentDetails] = useEnrolledClass();
    return (
        <div className="overflow-x-auto my-8 mx-4">
            <table className="table">
                <thead className={theme === "light" ? "text-black" : "text-slate-300"}>
                    <tr>
                        <th className="text-lg">#</th>
                        <th className="text-lg">Class Image</th>
                        <th className="text-lg">Class Name</th>
                        <th className="text-lg">Quantity</th>
                        <th className="text-lg">Total Price</th>
                        <th className="text-lg text-center">Date</th>
                        <th className="text-lg">TransactionId</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        paymentDetails?.map((p, i) => <tr key={p._id}>
                            <td>{i + 1}</td>
                            <td>
                                <img className="w-16 h-16 rounded-2xl" src={p.image} />
                            </td>
                            <td>
                                <p>{p.itemName}</p>
                            </td>
                            <td className="text-center">
                                {p.quantity}
                            </td>
                            <td className="text-center">${p.price}</td>
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