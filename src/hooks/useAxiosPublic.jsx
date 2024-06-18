import axios from "axios";


const axiosPublic = axios.create({
  baseURL: 'https://morning-star-two.vercel.app'
})
const useAxiosPublic = () => {
  return axiosPublic;
}

export default useAxiosPublic;