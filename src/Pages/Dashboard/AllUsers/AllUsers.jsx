import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";


const AllUsers = () => {
  // TODO:USE AXIOS SECURE AT AXIOS PUBLIC
  const axiosPublic = useAxiosPublic();
  const { data: users = [] } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await axiosPublic.get('/users');
      return res.data
    }
  })


  const handleMakeAdmin = (id) => {
    // Logic to make the user an admin
    console.log(`Making user with id ${id} an admin`);
  };


  return (
    <div>
      <div className="flex justify-evenly my-4">
        <h2 className="text-3xl font-semibold">All Users</h2>
        <div className="text-3xl font-semibold">Total Users:{users.length}</div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b-2 border-gray-300 text-left text-xs lg:text-sm text-blue-500 tracking-wider">Name</th>
              <th className="px-4 py-2 border-b-2 border-gray-300 text-left text-xs lg:text-sm text-blue-500 tracking-wider">Email</th>
              <th className="px-4 py-2 border-b-2 border-gray-300 text-left text-xs lg:text-sm text-blue-500 tracking-wider">Profile Picture</th>
              <th className="px-4 py-2 border-b-2 border-gray-300 text-left text-xs lg:text-sm text-blue-500 tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="text-xs lg:text-sm">
                <td className="px-4 py-2 whitespace-nowrap border-b border-gray-500">{user.name}</td>
                <td className="px-4 py-2 whitespace-nowrap border-b border-gray-500">{user.email}</td>
                <td className="px-4 py-2 whitespace-nowrap border-b border-gray-500">
                  <img src={user.photoURL} alt="Profile" className="w-10 h-10 rounded-full mx-auto lg:mx-0" />
                </td>
                <td className="px-4 py-2 whitespace-nowrap border-b border-gray-500">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 lg:py-2 lg:px-4 rounded text-xs lg:text-sm"
                    onClick={() => handleMakeAdmin(user.id)}
                  >
                    Make Admin
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;