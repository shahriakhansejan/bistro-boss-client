import Title from "../../Shared/Title/Title";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { useState } from "react";
import { IoRocket } from "react-icons/io5";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";


const AddReview = () => {
    const {user} = useAuth();
    const [starRating, setStarRating] = useState(1);
    const axiosSecure = useAxiosSecure();

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const details = form.details.value;
        const rating = starRating;
        const review = { name, details, rating, email: user?.email }

        axiosSecure.post('/reviews',review)
        .then(res =>{
            // console.log(res.data)
            if(res.data.insertedId){
                form.reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Successfully post your Review",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })

        // console.log(review);
    }
    return (
        <div className="mx-2">
            <Title title="GIVE A REVIEW" subTitle="Sharing is Caring"></Title>

            <div className="bg-[#f1f1f1] px-6 md:px-12 lg:px-20 py-20 mx-0 md:mx-16 my-16 rounded">
                <h1 className="text-center cinzel font-semibold dark2 text-4xl">Rate Us!</h1>
                <span className="flex justify-center my-8"><Rating style={{ maxWidth: 225 }} value={starRating} onChange={setStarRating} /></span>
                <form onSubmit={handleSubmit}>
                <label className="form-control">
                        <div className="label">
                        <span className="dark3 font-semibold">Your Name</span>
                        </div>
                        <input type="text" name="name" defaultValue={user?.displayName} placeholder="Type your name" className="input input-bordered w-full required:" />
                    </label>

                    <label className="form-control mt-3">
                        <div className="label">
                            <span className="dark3 font-semibold">Kindly express your care in a short way</span>
                        </div>
                        <textarea className="textarea textarea-bordered h-24" name="details" placeholder="Review your experience" required></textarea>
                    </label>

                    <div className="mt-2">
                        <button className="flex text-sm text-white font-medium items-center gap-2 bg-gradient-to-r from-[#835D23] to-[#B58130] px-3 py-2">Send a Review <IoRocket className="text-xl"/> </button>
                    </div>
                </form>
            </div>
        </div>
    );
};



export default AddReview;