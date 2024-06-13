import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (

    <div className="flex flex-col md:flex-row h-screen">
      <div
        className={`fixed inset-0 bg-black text-white p-3 w-60 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'
          } transition-transform duration-300 ease-in-out md:relative md:translate-x-0 md:w-1/6`}
      >
        <div className="flex items-center justify-between ">
          <h2>Dashboard</h2>
          <button className="p-2 md:hidden bg-white" onClick={() => setIsOpen(!isOpen)}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current dark:text-gray-800">
              <rect width="352" height="32" x="80" y="96"></rect>
              <rect width="352" height="32" x="80" y="240"></rect>
              <rect width="352" height="32" x="80" y="384"></rect>
            </svg>
          </button>
        </div>
        <div className="relative mt-4">
          <span className="absolute inset-y-0 left-0 flex items-center py-4">
            <button type="submit" className="p-2 focus:outline-none focus:ring">
              <svg fill="currentColor" viewBox="0 0 512 512" className="w-5 h-5 dark:text-gray-600">
                <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
              </svg>
            </button>
          </span>
          <input type="search" name="Search" placeholder="Search..." className="w-full py-2 pl-10 text-sm dark:border- rounded-md focus:outline-none dark:bg-gray-100 dark:text-gray-800 focus:dark:bg-gray-50" />
        </div>
        <div className="flex-1 mt-4">
          <ul className="pt-2 pb-4 space-y-1 text-sm">
            <li className="rounded-sm">
              <a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current dark:text-gray-600">
                  <path d="M469.666,216.45,271.078,33.749a34,34,0,0,0-47.062.98L41.373,217.373,32,226.745V496H208V328h96V496H480V225.958ZM248.038,56.771c.282,0,.108.061-.013.18C247.9,56.832,247.756,56.771,248.038,56.771ZM448,464H336V328a32,32,0,0,0-32-32H208a32,32,0,0,0-32,32V464H64V240L248.038,57.356c.013-.012.014-.023.024-.035L448,240Z"></path>
                </svg>
                <NavLink to={'/'}><span>Home</span></NavLink>
              </a>
            </li>
            <li className="rounded-sm">
              <a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current dark:text-gray-600">
                  <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                </svg>
                <span>Search</span>
              </a>
            </li>
            <li className="rounded-sm">
              <a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current dark:text-gray-600">
                  <path d="M448.205,392.507c30.519-27.2,47.8-63.455,47.8-101.078,0-39.984-18.718-77.378-52.707-105.3C410.218,158.963,366.432,144,320,144s-90.218,14.963-123.293,42.131C162.718,214.051,144,251.445,144,291.429s18.718,77.378,52.707,105.3c33.075,27.168,76.861,42.13,123.293,42.13,6.187,0,12.412-.273,18.585-.816l10.546,9.141A199.849,199.849,0,0,0,480,496h16V461.943l-4.686-4.685A199.17,199.17,0,0,1,448.205,392.507ZM370.089,423l-21.161-18.341-7.056.865A180.275,180.275,0,0,1,320,406.857c-79.4,0-144-51.335-144-115.428s64.6-115.429,144-115.429,144,51.335,144,115.429c0,31.588-15.527,61.363-43.843,84.091L389.911,377l-19.822,46ZM504.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,504.971,456.284Z"></path>
                </svg>
                <span>Messages</span>
              </a>
            </li>
            <li className="rounded-sm">
              <a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current dark:text-gray-600">
                  <path d="M256,0C114.613,0,0,114.615,0,256s114.613,256,256,256,256-114.615,256-256S397.387,0,256,0Zm0,480C132.288,480,32,379.712,32,256S132.288,32,256,32,480,132.288,480,256,379.712,480,256,480Zm64-368H192a16,16,0,0,0-16,16V192a16,16,0,0,0,16,16H192v96H176a16,16,0,0,0-16,16v64a16,16,0,0,0,16,16H336a16,16,0,0,0,16-16V320a16,16,0,0,0-16-16H336V208h16a16,16,0,0,0,16-16V128A16,16,0,0,0,336,112ZM304,176H272v80H240V176H208V144H304Z"></path>
                </svg>
                <span>Reports</span>
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
        <h1 className="text-2xl font-bold">Dashboard Content</h1>
        <Outlet></Outlet>
      </div>
    </div>

  );
};

export default Dashboard;