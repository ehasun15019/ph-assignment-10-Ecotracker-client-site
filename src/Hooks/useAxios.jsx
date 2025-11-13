import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://eco-tracker-rho.vercel.app",
});

const useAxios = () => {
  return axiosInstance;
};

export default useAxios;
