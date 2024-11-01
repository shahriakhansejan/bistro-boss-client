import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "./../../../hooks/useAxiosSecure";
import Title from "../../Shared/Title/Title";

const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: payments = [] } = useQuery({
    queryKey: ["payments", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/${user.email}`);
      return res.data;
    },
  });
  return (
    <div>
      <Title title="PAYMENT HISTORY" subTitle="At a Glace"></Title>
      <div className="my-12 bg-white px-0 md:px-10 py-10 rounded-lg">
        <h3 className="text-2xl md:text-3xl font-bold cinzel mb-4">
          Payment History: {payments.length}
        </h3>
        <div className="my-8 overflow-x-scroll">
          <table className="table w-full">
            <thead className="font-semibold text-white bg-[#D1A054] rounded-lg">
              <tr>
                <th>#</th>
                <th>Transaction Id</th>
                <th>Email</th>
                <th>Price</th>
                <th>Status</th>
              </tr>
            </thead>

            {payments.map((item, index) => (
              <tbody className="font-medium text-sm md:text-base dark2" key={item._id}>
                <tr>
                  <th>{index + 1}.</th>
                  <td>
                    <p>{item.transactionId}</p>
                  </td>
                  <td>
                    <p>{item.email}</p>
                  </td>
                  <td>${item.price}</td>
                  <td className="capitalize text-blue-500 font-bold">
                    {item.status}
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;
