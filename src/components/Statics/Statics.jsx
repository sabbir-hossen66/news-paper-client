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
      <div className="flex flex-col items-center justify-center h-96 bg-gray-50">
        <h2 className="text-4xl text-center text-[#54ADF8] my-6">All Types Of Users:<span className="text-yellow-500">{users.length}</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white shadow-md rounded-lg p-6 text-center transform transition-transform hover:scale-105 hover:shadow-xl">
            <h2 className="text-2xl font-bold mb-2 text-blue-600">All Users</h2>
            <p className="text-gray-700 text-lg">{users.length}</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 text-center transform transition-transform hover:scale-105 hover:shadow-xl">
            <h2 className="text-2xl font-bold mb-2 text-green-600">Genarel Users</h2>
            <p className="text-gray-700 text-lg">{users.length}</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 text-center transform transition-transform hover:scale-105 hover:shadow-xl relative">
            <h2 className="text-2xl font-bold mb-2 text-yellow-600">
              Premium Users
              <svg className="inline-block mb-8 w-6 h-6 ml-2 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.171 3.604a1 1 0 00.95.69h3.764c.969 0 1.371 1.24.588 1.81l-3.045 2.21a1 1 0 00-.364 1.118l1.171 3.604c.3.921-.755 1.688-1.538 1.118l-3.045-2.21a1 1 0 00-1.175 0l-3.045 2.21c-.783.57-1.838-.197-1.538-1.118l1.171-3.604a1 1 0 00-.364-1.118L2.636 9.031c-.783-.57-.381-1.81.588-1.81h3.764a1 1 0 00.95-.69l1.171-3.604z" />
              </svg>
            </h2>
            <p className="text-gray-700 text-lg">0</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statics;