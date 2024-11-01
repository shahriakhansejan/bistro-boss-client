import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCart from "../../../hooks/useCart";


const ShopCard = ({ item }) => {
    const [, refetch] = useCart();
    const { user } = useAuth();
    const { name, recipe, image, price, _id } = item;
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();

    const handleAddToCart = () =>{
        if(user && user.email){
            const cartItem = {
                menuId : _id,
                email : user.email,
                name,
                image,
                price
            }
            axiosSecure.post('/carts', cartItem)
            .then(res=> {
                // console.log(res.data)
                if(res.data.insertedId){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${name} added to Cart`,
                        showConfirmButton: false,
                        timer: 2000
                      });
                      refetch();
                }
            })

        }
        else{
            Swal.fire({
                title: "You are not Logged In!",
                text: "Please LogIn to add to cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, LogIn"
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate('/login', {state: {from: location}})
                }
              });
        }
    }
    return (
        <div className="bg-[#f3f3f3] card">
            <p className="absolute right-0 bg-black text-white px-2 py-1 mt-3 mr-3 font-semibold">${price}</p>
            <figure className="">
                <img
                    src={image}
                    alt="Shop"
                    className="w-full" />
            </figure>
            
            <div className="flex flex-col justify-between p-9 min-h-[255px]">
                <div>
                    <h2 className="dark1 text-center font-semibold text-2xl">{name}</h2>
                    <p className="dark3 mt-2 mb-6">{recipe}</p>
                </div>
                <div className="text-center">
                    <button onClick={handleAddToCart} className="px-3 py-2 rounded-lg font-semibold bg-[#e6e6e6] border-yellow-600 hover:bg-[#111827] border-b-4 text-yellow-600">ADD TO CART</button>
                </div>
            </div>

        </div>
    );
};

ShopCard.propTypes = {

};

export default ShopCard;