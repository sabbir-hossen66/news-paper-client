import { useState } from "react";
import { FaUsersLine } from "react-icons/fa6";
import { IoHome } from "react-icons/io5";
import { MdOutlineArticle } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { SiGradleplaypublisher } from "react-icons/si";
import { NavLink, Outlet } from "react-router-dom";
// import useAdmin from "../hooks/useAdmin";


const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);

  // TODO: IS ADMIN VALUE FROM THE DATABASE
  // const [isAdmin] = useAdmin();

  return (

    <div className="flex flex-col md:flex-row h-screen">
      <div
        className={`fixed inset-0 bg-black text-white p-3 w-60 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'
          } transition-transform duration-300 ease-in-out md:relative md:translate-x-0 md:w-1/6`}
      >
        <div className="flex items-center justify-between ">
          <h2>Dashboard</h2>
          <button className="p-2 md:hidden bg-white" onClick={() => setIsOpen(!isOpen)}>
            <span className="w-5 h-5 fill-current dark:text-gray-800"> <RxCross2 /></span>
          </button>
        </div>

        <div className="flex-1 mt-4">
          <ul className="pt-2 pb-4 space-y-1 text-sm">

            <li className="rounded-sm">
              <a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
                <FaUsersLine />
                <NavLink to={'/dashboard/all-users'}><span className="lg:text-lg font-semibold">All Users</span></NavLink>
              </a>
            </li>

            <li className="rounded-sm">
              <a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
                <MdOutlineArticle />
                <NavLink to={'/dashboard/addminAllArticles'}> <span className="lg:text-lg font-semibold">All Article</span></NavLink>
              </a>
            </li>


            <li className="rounded-sm">
              <a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
                <SiGradleplaypublisher />
                <NavLink to={'/dashboard/add-publisher'}><span className="lg:text-lg font-semibold">Add Publisher</span></NavLink>
              </a>
            </li>


            {/* divider is here */}
            <div className="relative flex py-5 items-center">
              <div className="flex-grow border-t border-gray-400"></div>
              <span className="flex-shrink mx-4 text-white">OR</span>
              <div className="flex-grow border-t border-gray-400"></div>
            </div>

            {/* shared NavLinks is below */}

            <li className="rounded-sm">
              <a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
                <IoHome />
                <NavLink to={'/'}><span className="lg:text-lg font-semibold">Home</span></NavLink>
              </a>
            </li>


          </ul>
        </div>
      </div>
      <div className="flex-1 p-4 md:ml-60 md:ml-1/6">
        <button className="p-2 md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current dark:text-gray-800">
            <rect width="352" height="32" x="80" y="96"></rect>
            <rect width="352" height="32" x="80" y="240"></rect>
            <rect width="352" height="32" x="80" y="384"></rect>
          </svg>
        </button>
        {/* <h1 className="text-2xl font-bold text-center">Dashboard Content</h1> */}
        <Outlet></Outlet>
      </div>
    </div>

  );
};

export default Dashboard;