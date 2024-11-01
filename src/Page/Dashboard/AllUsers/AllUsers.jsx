import { MdDeleteForever } from "react-icons/md";
import Title from "../../Shared/Title/Title";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";


const AllUsers = () => {
    const axiosSecure = useAxiosSecure();

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    })

    const handleDelete = user => {
        Swal.fire({
            title: "Are you sure?",
            text: `Remove ${user.name}???`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, remove !"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/users/${user._id}`)
                    .then(res => {
                        // console.log(res.data)
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Removed",
                                text: `Successfully removed ${user.name}`,
                                icon: "success",
                            });
                        }
                    })
            }
        });
    }

    const handleMakeAdmin = user => {
        // console.log(user)
        Swal.fire({
            title: `Make ${user.name} as Admin?`,
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes !"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/users/admin/${user?._id}`)
                    .then(res => {
                        // console.log(res.data)
                        if (res.data.modifiedCount) {
                            refetch();
                            Swal.fire({
                                title: "Done!",
                                text: `${user.name} added as Admin`,
                                icon: "success",
                            });
                        }
                    })
            }
        });

    }

    return (
        <>
            <Title title="MANAGE ALL USERS" subTitle="How Many??"></Title>
            <div className="my-12 bg-white px-0 md:px-12 py-12 rounded-md">
                <div className="">
                    <h2 className="text-4xl font-bold cinzel">
                        Total Users: {users.length}
                    </h2>

                </div>

                <div className="my-8 overflow-x-scroll">
                    <table className="table w-full">
                        <thead className="font-semibold text-white bg-[#D1A054] rounded-lg">
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        {users.map((user, index) => (
                            <tbody key={user._id}>
                                <tr>
                                    <th>{index + 1}. </th>
                                    <td>
                                        <div className="font-bold">{user.name}</div>
                                    </td>
                                    <td>
                                        <div className="font-bold">{user.email}</div>
                                    </td>
                                    <td>
                                        {
                                            user.role === 'admin'? <p className="text-green-600 text-lg font-bold">Admin</p>
                                            :
                                            <button onClick={() => handleMakeAdmin(user)} className="text-2xl hover:bg-[#996d2a] text-white bg-[#D1A054] p-1 rounded"><FaUsers /></button>
                                        }
                                    </td>
                                    <th>
                                        <button
                                            onClick={() => handleDelete(user)}
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

AllUsers.propTypes = {

};

export default AllUsers;