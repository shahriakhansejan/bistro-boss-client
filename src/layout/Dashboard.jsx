import { BsCartFill, BsHouseExclamationFill } from "react-icons/bs";
import { FaBook, FaCalendarAlt, FaShoppingBag, FaUsers } from "react-icons/fa";
import { ImSpoonKnife } from "react-icons/im";
import { IoHome, IoMenu } from "react-icons/io5";
import { MdPayments, MdRateReview } from "react-icons/md";
import { TbBrandBooking } from "react-icons/tb";
import { TfiMenuAlt } from "react-icons/tfi";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import { RiMenu2Fill } from "react-icons/ri";
const Dashboard = () => {
  const [isAdmin] = useAdmin();


  const adminNav = <>
    <li>
      <NavLink
        className="flex gap-3 items-center"
        to="/dashboard/adminHome"
      >
        <IoHome className="text-2xl" />
        Admin Home
      </NavLink>
    </li>
    <li>
      <NavLink
        className="flex gap-3 items-center"
        to="/dashboard/addItems"
      >
        <ImSpoonKnife className="text-2xl" />
        Add items
      </NavLink>
    </li>
    <li>
      <NavLink
        className="flex gap-3 items-center"
        to="/dashboard/manageItems"
      >
        <TfiMenuAlt className="text-2xl" />
        Manage Items
      </NavLink>
    </li>
    <li>
      <NavLink className="flex gap-3 items-center" to="/dashboard/bookings">
        <FaBook className="text-2xl" /> Manage Bookings
      </NavLink>
    </li>
    <li>
      <NavLink className="flex gap-3 items-center" to="/dashboard/users">
        <FaUsers className="text-2xl" />
        All users
      </NavLink>
    </li>

  </>

  const userNav = <>
    <li>
      <NavLink
        className="flex gap-3 items-center"
        to="/dashboard/userHome"
      >
        <IoHome className="text-2xl" />
        User Home
      </NavLink>
    </li>
    <li>
      <NavLink
        className="flex gap-3 items-center"
        to="/dashboard/reservation"
      >
        <FaCalendarAlt className="text-2xl" />
        Reservation
      </NavLink>
    </li>
    <li>
      <NavLink
        className="flex gap-3 items-center"
        to="/dashboard/paymentHistory"
      >
        <MdPayments className="text-2xl" />
        Payment History
      </NavLink>
    </li>
    <li>
      <NavLink className="flex gap-3 items-center" to="/dashboard/cart">
        <BsCartFill className="text-2xl" /> My Cart
      </NavLink>
    </li>
    <li>
      <NavLink className="flex gap-3 items-center" to="/dashboard/addReview">
        <MdRateReview className="text-2xl" />
        Add Review
      </NavLink>
    </li>
    <li>
      <NavLink
        className="flex gap-3 items-center"
        to="/dashboard/bookings"
      >
        <TbBrandBooking className="text-2xl" />
        My Bookings
      </NavLink>
    </li>
  </>

  const homeNav = <>
    <li>
      <NavLink className="flex gap-3 items-center" to="/">
        <BsHouseExclamationFill className="text-2xl" />
        Home
      </NavLink>
    </li>
    <li>
      <NavLink className="flex gap-3 items-center" to="/menu">
        <IoMenu className="text-2xl" />
        Menu
      </NavLink>
    </li>
    <li>
      <NavLink className="flex gap-3 items-center" to="/shop/salad">
        <FaShoppingBag className="text-2xl" />
        Shop
      </NavLink>
    </li>
  </>


  return (
    <>
      <div className="flex max-w-screen-xl h-screen gap-6 mx-auto bg-[#f9f9f9]">

        <div className="block lg:hidden fixed top-3 left-1 z-50">
          <label htmlFor="my-drawer" className="text-3xl md:text-4xl drawer-button"><RiMenu2Fill /></label></div>

        <div className="hidden lg:block w-64 h-screen overflow-scroll bg-[#D1A054]">
          <div className="dark1 cinzel text-center my-16">
            <h3 className="text-lg md:text-2xl font-semibold md:font-black">
              BISTRO BOSS
            </h3>
            <p className="font-normal md:font-bold text-sm md:text-lg">
              R E S T A U R A N T
            </p>
          </div>
          <ul className="dMenu dark1 font-semibold cinzel flex flex-col gap-6 pl-8">
            {
              isAdmin ? adminNav
                :
                userNav
            }

            <hr />
            {/* Root  */}

            {homeNav}
          </ul>
        </div>

        <div className="flex-1 h-screen overflow-scroll">
          <Outlet></Outlet>
        </div>
      </div>
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />

        <div className="drawer-side">
          <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul onClick={() => document.getElementById('my-drawer').checked = false} className="dMenu dark1 flex flex-col gap-6 font-semibold cinzel text-sm md:text-base bg-[#D1A054] text-base-content min-h-full w-1/2 md:w-1/3 pt-20 md:pt-28 px-2 md:px-6">
            {
              isAdmin ? adminNav
                :
                userNav
            }

            <hr />
            {/* Root  */}

            {homeNav}
          </ul>
        </div>
      </div>
    </>
  );
};

Dashboard.propTypes = {};

export default Dashboard;


/***
 *   <div className="fixed top-2 left-1 z-50"><label htmlFor="my-drawer" className="btn btn-primary drawer-button">Open drawer</label></div>
 * <div className="drawer-content">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem expedita esse quidem suscipit ea quos ad. Odit, quisquam? Repellendus, facere. Possimus numquam, esse officiis quia rem officia odit sunt, cum debitis maiores nobis temporibus ipsa voluptatem cupiditate laboriosam autem itaque asperiores soluta aut quaerat saepe, deleniti totam tempora rerum. Dignissimos?</p>

            </div>
            <div className="drawer">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />

                <div className="drawer-side">
                    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu bg-base-200 text-base-content min-h-full w-1/2 md:w-80 p-4">
                        <li><a>Sidebar Item 1</a></li>
                        <li><a>Sidebar Item 2</a></li>
                    </ul>
                </div>
            </div>
 */