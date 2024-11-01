import { MdDeleteForever } from "react-icons/md";
import useCart from "../../../hooks/useCart";
import Title from "../../Shared/Title/Title";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cart, refetch] = useCart();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  const axiosSecure = useAxiosSecure();

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove it!"
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/carts/${id}`)
        .then(res =>{
          // console.log(res.data)
          if(res.data.deletedCount > 0){
            refetch();
            Swal.fire({
              title: "Removed!",
              text: "Successfully removed from Cart",
              icon: "success",
            });
          }
        })
      }
    });
  };

  return (
    <>
      <Title title="WANNA ADD MORE" subTitle="My Cart"></Title>
      <div className="my-12 bg-white py-10 rounded-md">
        <div className="flex flex-col px-2 md:px-10 md:flex-row justify-evenly items-start gap-2 md:items-center">
          <h2 className="text-3xl lg:text-4xl font-bold cinzel">
            Total Orders: {cart.length}
          </h2>
          <h2 className="text-2xl lg:text-3xl font-bold cinzel">
            Total Price: $ {totalPrice}
          </h2>
          {
            cart.length? <Link to='/dashboard/payment'><button className="cinzel font-semibold px-4 py-2 hover:bg-[#c88829] rounded text-lg bg-[#D1A054] text-white">Pay</button></Link> : 
            <button disabled className="cinzel btn font-semibold px-4 py-2 rounded text-lg">Pay</button>
          }
        </div>

        <div className="my-8 overflow-x-scroll">
          <table className="table text-xs md:text-base w-full">
            <thead className="font-semibold text-white bg-[#D1A054] rounded-lg">
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>

            {cart.map((item, index) => (
              <tbody key={item._id}>
                <tr>
                  <th>{index + 1}.</th>
                  <td>
                    <img
                      className="avatar mask mask-squircle h-12 w-12"
                      src={item.image}
                      alt="item"
                    />
                  </td>
                  <td>
                    <div className="font-bold">{item.name}</div>
                  </td>
                  <td>
                    <p>${item.price}</p>
                  </td>
                  <th>
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="text-2xl text-red-500 hover:text-red-700"
                    >
                      <MdDeleteForever />
                    </button>
                  </th>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </>
  );
};

Cart.propTypes = {};

export default Cart;
