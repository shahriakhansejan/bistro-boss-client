import Title from "../../Shared/Title/Title";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../hooks/useAxiosPublic"
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useLoaderData, useNavigate } from "react-router-dom";
import { GrUpdate } from "react-icons/gr";

const imgBB_API = import.meta.env.VITE_imgBB_API;
const img_hosting_api = `https://api.imgbb.com/1/upload?key=${imgBB_API}`


const UpdateItem = () => {
    const {name,recipe,category,price,_id} = useLoaderData();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const { register, handleSubmit, reset } = useForm();
    const navigate = useNavigate();

  const onSubmit = async(data) => {
    // console.log(data)
    const imgFile = {image: data.image[0]}
    const res = await axiosPublic.post(img_hosting_api, imgFile, {
        headers: {
            'content-type': 'multipart/form-data'
        }
    })
    if(res.data.success){
        const menuItem = {
            name:data.name,
            recipe:data.details,
            image:res.data.data.display_url,
            category:data.category,
            price:parseFloat(data.price)
        }
        const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem)
        // console.log(menuRes.data)
        if(menuRes.data.modifiedCount > 0){
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `Successfully Updated ${data.name}`,
                showConfirmButton: false,
                timer: 1500
              });
              reset();
              navigate('/dashboard/manageItems')
        }
    }
    // console.log(res.data)
};
    return (
        <div className="mx-2">
            <Title title='UPDATE AN ITEM' subTitle="What's Update??"></Title>
            <div className="bg-[#f3f3f3] px-4 md:px-12 py-12 rounded mt-16">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label className="form-control dark2 w-full">
                        <div className="label">
                            <span className="font-semibold">Recipe Name? <span className="text-red-600">*</span></span>
                        </div>
                        <input {...register("name", {required: true})} defaultValue={name}  name="name" type="text" placeholder="Type Recipe Name" className="input input-bordered w-full" />
                    </label>

                    <div className="flex gap-6">
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="font-semibold">Category <span className="text-red-600">*</span></span>
                            </div>
                            <select defaultValue={category} {...register("category", {required: true})} name="category" className="select select-bordered">
                                
                                <option disabled value='default'>Default</option>
                                <option value='salad'>Salad</option>
                                <option value='pizza'>Pizza</option>
                                <option value='soup'>Soups</option>
                                <option value='dessert'>Desserts</option>
                                <option value='drinks'>Drinks</option>
                            </select>
                        
                        </label>

                        <label className="form-control dark2 w-full">
                            <div className="label">
                                <span className="font-semibold">Price <span className="text-red-600">*</span></span>
                            </div>
                            <input {...register("price", {required: true})} defaultValue={price} name="price" type="text" placeholder="Type Recipe Name" className="input input-bordered w-full" />
                        </label>
                    </div>

                    <label className="form-control">
                        <div className="label">
                            <span className="font-semibold">Recipe Details <span className="text-red-600">*</span></span>
                        </div>
                        <textarea {...register("details", {required: true})} defaultValue={recipe} name="details" className="textarea textarea-bordered h-24" placeholder="Recipe Details..."></textarea>
                    </label>

                    <div className="my-5">
                    <input {...register("image", {required: true})} name="image" type="file" className="file-input file-input-bordered w-full max-w-xs" />
                    </div>
                    <button className="flex items-center gap-2 text-xl text-white font-bold px-7 py-4 hover:from-[#B58130] hover:to-[#835D23] bg-gradient-to-r from-[#835D23] to-[#B58130]">Update Item <GrUpdate/> </button>
                </form>
            </div>

        </div>
    );
};

export default UpdateItem;