import { MdDeleteForever } from "react-icons/md";
import Title from "../../Shared/Title/Title";
import { FaEdit } from "react-icons/fa";
import useMenu from "../../../hooks/useMenu";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";


const ManageItem = () => {
    const [menu, , refetch] = useMenu();
    const axiosSecure = useAxiosSecure();

    const handleDelete = item => {
        Swal.fire({
            title: "Are you sure?",
            text: `Delete ${item.name} item??`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete !"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/menu/${item._id}`)
                    .then(res => {
                        // console.log(res.data)
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted",
                                text: `Successfully deleted ${item.name}`,
                                icon: "success",
                            });
                        }
                    })
            }
        });
    }

    return (
        <>
            <Title title="MANAGE ALL ITEMS" subTitle="Hurry Up!"></Title>
            <div className="my-12 bg-white px-0 md:px-12 py-12 rounded-md">
                <div className="">
                    <h2 className="text-4xl font-bold cinzel">
                        Total Item: {menu.length}
                    </h2>

                </div>

                <div className="my-8 overflow-x-scroll">
                    <table className="table w-full">
                        <thead className="font-semibold text-white bg-[#D1A054] rounded-lg">
                            <tr>
                                <th>#</th>
                                <th>Item Image</th>
                                <th>Item Name</th>
                                <th>Category</th>
                                <th>Price</th>
                                <th>Edit Item</th>
                                <th>Remove Item</th>
                            </tr>
                        </thead>

                        {menu.map((item, index) => (
                            <tbody key={item._id}>
                                <tr>
                                    <th>{index + 1}.</th>
                                    <td>
                                        <div className="mask mask-squircle h-16 w-16 avatar">
                                            <img
                                                src={item.image}
                                                alt="Avatar" />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="font-bold">{item.name}</div>
                                    </td>
                                    <td>
                                        <div className="font-bold uppercase">{item.category}</div>
                                    </td>
                                    <td>
                                        <div className="font-bold uppercase">${item.price}</div>
                                    </td>
                                    <td>
                                        <Link to={`/dashboard/menu/${item._id}`}><button className="text-xl hover:bg-[#996d2a] text-white bg-[#D1A054] p-1 rounded"><FaEdit /></button></Link>
                                    </td>
                                    <th>
                                        <button
                                            onClick={() => handleDelete(item)}
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


export default ManageItem;