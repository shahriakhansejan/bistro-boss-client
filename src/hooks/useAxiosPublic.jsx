import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://bistro-boss-server-psi-ruddy.vercel.app",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

useAxiosPublic.propTypes = {};

export default useAxiosPublic;
