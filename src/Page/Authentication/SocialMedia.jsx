import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const SocialMedia = () => {
  const { googleLogin } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosPublic = useAxiosPublic();

  const from = location.state?.from?.pathname || "/";

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        // console.log(result.user)
        const user = {
          name: result.user?.displayName,
          email: result.user?.email,
        };
        axiosPublic.post("/users", user).then((res) => {
          // console.log(res.data)
          if (res.data) {
            navigate(from, { replace: true });
          }
        });
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="text-center my-8">
      <button
        onClick={handleGoogleLogin}
        className="border p-2 border-[#151515] hover:bg-white rounded-full text-2xl"
      >
        <FcGoogle />
      </button>
    </div>
  );
};

SocialMedia.propTypes = {};

export default SocialMedia;
