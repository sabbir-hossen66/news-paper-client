import { useContext } from "react";
import useAdmin from "../hooks/useAdmin";
import { AuthContext } from "../Providers/AuthProviders";
import { Navigate, useLocation } from "react-router-dom";


const AdminRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  const [isAdmin, isAdminLoading] = useAdmin();


  if (loading || isAdminLoading) {
    return <>
      <div className="w-full max-w-md mx-auto animate-pulse p-9">
        <h1 className="h-2 bg-gray-300 rounded-lg w-52 dark:bg-gray-600"></h1>
        <p className="w-48 h-2 mt-6 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
        <p className="w-full h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
        <p className="w-64 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
        <p className="w-4/5 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
      </div>

    </>
  }

  if (user && isAdmin) {
    return children
  }
  return <Navigate to="/" state={{ from: location }} replace></Navigate>


};

export default AdminRoute;