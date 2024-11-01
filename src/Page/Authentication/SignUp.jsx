import loginImg from "../../assets/others/authentication2.png";
import loginBg from "../../assets/others/authentication.png";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useState } from "react";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";

const SignUp = () => {
  const { createUser, updateUserProfile } = useAuth();
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then((result) => {
        // console.log(result.user);
        if (result.user) {
          updateUserProfile(data.name, data.photo)
            .then(() => {
              const user = {
                name: data.name,
                email: data.email,
              };
              axiosPublic.post("/users", user).then((res) => {
                // console.log(res.data);
                if (res.data.insertedId) {
                  reset();
                  Swal.fire("User created Successfully!");
                  navigate("/");
                }
              });
            })
            .catch((error) => {
              console.error(error);
            });
        }
      })
      .catch((error) => console.error(error));

    // console.log(data);
  };

  return (
    <>
      <Helmet>
        <title>Bistro | SignUp</title>
      </Helmet>
      <div
        style={{ backgroundImage: `url("${loginBg}")` }}
        className="flex px-4 md:px-16 gap-4 md:gap-12 py-8 md:min-h-screen my-12 rounded shadow-2xl flex-col lg:flex-row-reverse justify-between items-center"
      >
        <div className="w-full lg:w-1/2">
          <img src={loginImg} alt="" />
        </div>
        <div className="w-full lg:w-1/2">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h1 className="text-center my-6 font-bold text-4xl">Sign Up</h1>

            {/* Name Field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <input
                type="text"
                name="name"
                {...register("name", { required: true })}
                placeholder="Enter your Name"
                className="input input-bordered"
              />
              {errors.name && <p className="text-red-500">Name is required</p>}
            </div>

            {/* Email Field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Email</span>
              </label>
              <input
                type="email"
                name="email"
                {...register("email", { required: true })}
                placeholder="Enter your Email"
                className="input input-bordered"
              />
              {errors.email && (
                <p className="text-red-500">Email is required</p>
              )}
            </div>

            {/* photo Field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                name="photo"
                {...register("photo", { required: true })}
                placeholder="Enter Photo URL"
                className="input input-bordered"
              />
              {errors.photo && (
                <p className="text-red-500">Photo is required</p>
              )}
            </div>

            {/* Password Field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <div className="flex items-center">
                <input
                  type={showPassword ? "text" : "password"}
                  {...register("password", {
                    required: true,
                    maxLength: 20,
                    minLength: 6,
                    pattern:
                      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/,
                  })}
                  name="password"
                  placeholder="Password"
                  className="input input-bordered w-full"
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="-ml-8 text-xl"
                >
                  {showPassword ? (
                    <IoIosEyeOff></IoIosEyeOff>
                  ) : (
                    <IoIosEye></IoIosEye>
                  )}
                </span>
              </div>
              {errors.password?.type === "required" && (
                <p className="text-red-500">Password is required</p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-red-500">
                  Password must be at least 6 characters
                </p>
              )}
              {errors.password?.type === "maxLength" && (
                <p className="text-red-500">
                  Password must not exceed 20 characters
                </p>
              )}
              {errors.password?.type === "pattern" && (
                <p className="text-red-500">
                  Password must contain letters, numbers, and special characters
                </p>
              )}
            </div>

            <div className="form-control mt-6">
              <input
                className="btn btn-primary border-0 bg-[#daae6d] hover:bg-[#d6a04f] text-white"
                type="submit"
                value="Sign Up"
              />
            </div>
          </form>
          <p className="text-[#daae6d] text-lg text-center mt-8 font-semibold">
            Already Registered? Go to{" "}
            <Link className="font-bold text-green-600" to="/login">
              Log In
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignUp;
