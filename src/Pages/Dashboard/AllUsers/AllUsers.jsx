// import { useQuery } from "@tanstack/react-query";
// import Swal from "sweetalert2";
// import useAxiosSecure from "../../../hooks/useAxiosSecure";


// const AllUsers = () => {

//   const axiosSecure = useAxiosSecure()
//   const { data: users = [], refetch } = useQuery({
//     queryKey: ['users'],
//     queryFn: async () => {
//       const res = await axiosSecure.get('/users');
//       return res.data
//     }
//   })
//   console.log(users);

//   const handleMakeAdmin = (user) => {
//     axiosSecure.patch(`/users/admin/${user._id}`)
//       .then(res => {
//         if (res.data.modifiedCount > 0) {
//           refetch()
//           Swal.fire({
//             position: "top-end",
//             icon: "success",
//             title: `${user?.name} is an admin now`,
//             showConfirmButton: false,
//             timer: 1500
//           });
//         }
//       })
//   };
//   return (
//     <div>
//       <div className="flex justify-evenly my-4">
//         <h2 className="text-3xl font-semibold">All Users</h2>
//         <div className="text-3xl font-semibold">Total Users:{users.length}</div>
//       </div>
//       <div className="overflow-x-auto">
//         <table className="min-w-full bg-white border border-gray-300">
//           <thead>
//             <tr>
//               <th className="px-4 py-2 border-b-2 border-gray-300 text-left text-xs lg:text-sm text-blue-500 tracking-wider">Name</th>
//               <th className="px-4 py-2 border-b-2 border-gray-300 text-left text-xs lg:text-sm text-blue-500 tracking-wider">Email</th>
//               <th className="px-4 py-2 border-b-2 border-gray-300 text-left text-xs lg:text-sm text-blue-500 tracking-wider">Profile Picture</th>
//               <th className="px-4 py-2 border-b-2 border-gray-300 text-left text-xs lg:text-sm text-blue-500 tracking-wider">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {users.map((user) => (
//               <tr key={user.id} className="text-xs lg:text-sm">
//                 <td className="px-4 py-2 whitespace-nowrap border-b border-gray-500">{user.name}</td>
//                 <td className="px-4 py-2 whitespace-nowrap border-b border-gray-500">{user.email}</td>
//                 <td className="px-4 py-2 whitespace-nowrap border-b border-gray-500">
//                   <img src={user.photoURL} alt="Profile" className="w-10 h-10 rounded-full mx-auto lg:mx-0" />
//                 </td>
//                 <td className="px-4 py-2 whitespace-nowrap border-b border-gray-500">

//                   {
//                     user?.role === 'admin' ? 'Admin' :
//                       <button
//                         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 lg:py-2 lg:px-4 rounded text-xs lg:text-sm"
//                         onClick={() => handleMakeAdmin(user)} >
//                         Make Admin
//                       </button>
//                   }

//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default AllUsers;
















/* added new things */

import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await axiosSecure.get('/users');
      return res.data;
    }
  });

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(10);

  // Calculate total pages
  const totalPages = Math.ceil(users.length / usersPerPage);

  // Get current users
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const handleMakeAdmin = (user) => {
    axiosSecure.patch(`/users/admin/${user._id}`)
      .then(res => {
        if (res.data.modifiedCount > 0) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user?.name} is an admin now`,
            showConfirmButton: false,
            timer: 1500
          });
        }
      });
  };

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <div className="flex justify-evenly my-4">
        <h2 className="text-3xl font-semibold">All Users</h2>
        <div className="text-3xl font-semibold">Total Users: {users.length}</div>
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
            {currentUsers.map((user) => (
              <tr key={user._id} className="text-xs lg:text-sm">
                <td className="px-4 py-2 whitespace-nowrap border-b border-gray-500">{user.name}</td>
                <td className="px-4 py-2 whitespace-nowrap border-b border-gray-500">{user.email}</td>
                <td className="px-4 py-2 whitespace-nowrap border-b border-gray-500">
                  <img src={user.photoURL} alt="Profile" className="w-10 h-10 rounded-full mx-auto lg:mx-0" />
                </td>
                <td className="px-4 py-2 whitespace-nowrap border-b border-gray-500">
                  {user?.role === 'admin' ? 'Admin' : (
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 lg:py-2 lg:px-4 rounded text-xs lg:text-sm"
                      onClick={() => handleMakeAdmin(user)}
                    >
                      Make Admin
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center mt-4">
        <nav>
          <ul className="inline-flex items-center -space-x-px">
            {[...Array(totalPages).keys()].map(pageNumber => (
              <li key={pageNumber} className="page-item">
                <button
                  onClick={() => handleClick(pageNumber + 1)}
                  className={`px-3 py-2 leading-tight ${currentPage === pageNumber + 1 ? 'bg-blue-500 text-white' : 'bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700'} transition-colors duration-150`}
                >
                  {pageNumber + 1}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default AllUsers;
