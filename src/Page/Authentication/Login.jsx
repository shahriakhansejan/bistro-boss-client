import loginImg from "../../assets/others/authentication2.png";
import loginBg from "../../assets/others/authentication.png";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import useAuth from "../../hooks/useAuth";
import SocialMedia from "./SocialMedia";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import Swal from "sweetalert2";

const Login = () => {
  const { loginEmail } = useAuth();
  const [disabled, setDisabled] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleValidateCaptcha = (event) => {
    event.preventDefault();
    const user_captcha = event.target.value;
    if (validateCaptcha(user_captcha)) {
      setDisabled(false);
    } else {
      return [setDisabled(true), alert("Did not validated")];
    }
  };

  const handleSubmit = (event) => {
    setErrorMessage("");
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);
    loginEmail(email, password)
      .then((result) => {
        // console.log(result.user);
        if (result.user) {
          Swal.fire("Successfully Sign In!");
          navigate(from, { replace: true });
        }
      })
      .catch((error) => {
        console.error(error);
        setErrorMessage(error.message);
      });
  };
  return (
    <>
      <Helmet>
        <title>Bistro | LogIn</title>
      </Helmet>
      <div
        style={{ backgroundImage: `url("${loginBg}")` }}
        className="flex px-4 md:px-16 gap-4 md:gap-12 py-8 md:min-h-screen my-12 rounded shadow-2xl flex-col lg:flex-row justify-between items-center"
      >
        <div className="w-full lg:w-1/2">
          <img src={loginImg} alt="" />
        </div>
        <div className="w-full lg:w-1/2">
          <form onSubmit={handleSubmit}>
            <h1 className="text-center my-6 font-bold text-4xl">Login</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <div className="flex items-center">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="password"
                  className="input input-bordered w-full"
                  required
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
            </div>

            <div className="form-control">
              <label className="label font-semibold">
                <LoadCanvasTemplate />
              </label>
              <input
                onBlur={handleValidateCaptcha}
                type="text"
                name="captcha"
                placeholder="Type the captcha"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control mt-6">
              <input
                disabled={disabled}
                className="btn btn-primary border-0 bg-[#daae6d] hover:bg-[#d6a04f] text-white"
                type="submit"
                value="Sign In"
              />
            </div>
          </form>
          <p className="text-red-500 mt-1 ml-2">{errorMessage}</p>
          <p className="text-[#daae6d] text-lg text-center mt-12 font-semibold">
            New here? Crate a{" "}
            <Link className="font-bold text-blue-700" to="/signup">
              New account
            </Link>
          </p>
          <div>
            <p className="dark2 text-lg font-medium text-center mt-6">
              Or Sign in With,
            </p>
            <SocialMedia></SocialMedia>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
