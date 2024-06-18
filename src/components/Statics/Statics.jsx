import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";



const Statics = () => {
  const axiosSecure = useAxiosSecure()

  const { data: users = [], } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await axiosSecure.get('/users');
      console.log(res);
      return res.data;
    }
  });



  return (
    <div>
      <h2 className="text-4xl text-center text-[#54ADF8]">All Types Of Users:{users.length}</h2>
    </div>
  );
};

export default Statics;