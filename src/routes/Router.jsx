import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Page/Home/Home";
import Menus from "../Page/MenuPage/Menus/Menus";
import Shop from "../Page/Shop/Shop";
import Login from "../Page/Authentication/Login";
import SignUp from "../Page/Authentication/SignUp";
import Dashboard from "../layout/Dashboard";
import Cart from "../Page/Dashboard/Cart/Cart";
import PrivateRoute from "../routes/PrivateRoute";
import AllUsers from "../Page/Dashboard/AllUsers/AllUsers";
import PrivateAdmin from "./PrivateAdmin";
import AddItems from "../Page/Dashboard/AddItems/AddItems";
import ManageItem from "../Page/Dashboard/MangeItem/ManageItem";
import UpdateItem from "../Page/Dashboard/UpdateItem/UpdateItem";
import Payment from "../Page/Dashboard/Payment/Payment";
import AdminHome from "../Page/Dashboard/DashboardHome/AdminHome";
import UserHome from "../Page/Dashboard/DashboardHome/UserHome";
import PaymentHistory from "../Page/Dashboard/Payment/PaymentHistory";
import AddReview from "../Page/Dashboard/AddReview/AddReview";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/menu",
        element: <Menus></Menus>,
      },
      {
        path: "/shop/:category",
        element: <Shop></Shop>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      // Users
      {
        path: "userHome",
        element: (
          <PrivateRoute>
            <UserHome></UserHome>
          </PrivateRoute>
        ),
      },
      {
        path: "cart",
        element: (
          <PrivateRoute>
            <Cart></Cart>
          </PrivateRoute>
        ),
      },
      {
        path: "payment",
        element: <Payment></Payment>,
      },
      {
        path: "paymentHistory",
        element: <PaymentHistory></PaymentHistory>,
      },
      {
        path: "addReview",
        element: <AddReview></AddReview>,
      },

      // Admin
      {
        path: "adminHome",
        element: (
          <PrivateAdmin>
            <AdminHome></AdminHome>
          </PrivateAdmin>
        ),
      },
      {
        path: "users",
        element: (
          <PrivateAdmin>
            <AllUsers></AllUsers>
          </PrivateAdmin>
        ),
      },
      {
        path: "addItems",
        element: (
          <PrivateAdmin>
            <AddItems></AddItems>
          </PrivateAdmin>
        ),
      },
      {
        path: "manageItems",
        element: (
          <PrivateAdmin>
            <ManageItem></ManageItem>
          </PrivateAdmin>
        ),
      },
      {
        path: "menu/:id",
        element: (
          <PrivateAdmin>
            <UpdateItem></UpdateItem>
          </PrivateAdmin>
        ),
        loader: ({ params }) =>
          fetch(
            `https://bistro-boss-server-psi-ruddy.vercel.app/menu/${params.id}`
          ),
      },
    ],
  },
]);

export default router;
