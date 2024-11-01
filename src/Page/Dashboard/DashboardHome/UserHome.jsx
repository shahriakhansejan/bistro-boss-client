import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { GiWallet } from "react-icons/gi";
import { FaShop } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";
import useAuth from "../../../hooks/useAuth";
import { Helmet } from "react-helmet-async";

const UserHome = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const { data: stats = [] } = useQuery({
    queryKey: ["user-stats", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/user-stats?email=${user.email}`);
      return res.data;
    },
  });
  return (
    <>
    <Helmet>
        <title>Bistro | Dashboard</title>
      </Helmet>

      <div className="my-16 px-2">
        <h1 className="text-3xl font-semibold cinzel">Hi, Welcome Back!</h1>
        <div className="text-white grid grid-cols-1 max-h-screen md:grid-cols-3 w-3/5 gap-2 md:w-full mx-auto md:flex-row  my-6">
          {/* item1 */}
          <div className="flex bg-gradient-to-r mx-auto from-purple-600 to-purple-300 px-10 py-5 rounded-md items-center gap-4">
            <GiWallet className="text-5xl" />
            <span>
              <h1 className="text-4xl font-extrabold">{stats.menuCount}</h1>
              <p className="text-lg font-medium">Menu</p>
            </span>
          </div>
          {/* item2*/}
          <div className="flex bg-gradient-to-r from-[#D3A256] mx-auto to-[#ecdabf] px-10 py-5 rounded-md items-center gap-4">
            <FaShop className="text-5xl" />
            <span>
              <h1 className="text-4xl font-extrabold">103</h1>
              <p className="text-lg font-medium">Shop</p>
            </span>
          </div>
          {/* item3 */}
          <div className="flex bg-gradient-to-r from-red-600 mx-auto to-red-300 px-10 py-5 rounded-md items-center gap-4">
            <FiPhoneCall className="text-5xl" />
            <span>
              <h1 className="text-4xl font-extrabold">3</h1>
              <p className="text-lg font-medium">Contract</p>
            </span>
          </div>
        </div>
        <div className="flex justify-center flex-col md:flex-row items-stretch">
          <div className="w-full md:w-1/2 border-b-4 md:border-b-0 md:border-r-4 flex flex-col justify-center py-24 bg-[#FFEDD5] items-center border-[#D1A054]">
            <img
              className="w-[200px] h-[200px] rounded-full"
              src={user?.photoURL}
              alt=""
            />
            <h2 className="mt-12 cinzel font-semibold dark1 text-2xl">
              {user?.displayName}
            </h2>
          </div>

          <div className="w-full md:w-1/2 cinzel bg-[#FEF9C3] py-24 flex-col justify-center items-center pl-8">
            <div>
              <h1 className="font-semibold dark1 text-4xl mb-8">
                Your Activities
              </h1>
              <span className="font-semibold text-2xl pt-8">
                <p className="text-blue-500">Orders : {stats.orders}</p>
                <p className="text-green-500 my-2">Reviews : {stats.review}</p>
                <p className="text-red-500">Payments : {stats.payment}</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

UserHome.propTypes = {};

export default UserHome;
