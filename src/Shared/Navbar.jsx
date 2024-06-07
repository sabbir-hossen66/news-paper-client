import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from '../assets/logho/news.png'
import './Navbar.css'
import { AuthContext } from "../Providers/AuthProviders";
import { FaLongArrowAltRight } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext)

  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .catch(error => console.log(error))
  }

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };


  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className=" sticky top-0 z-50">
      <nav className="relative bg-white shadow">
        <div className="container px-6 py-3 mx-auto">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="flex items-center justify-between">
              <div className="flex justify-center items-center">
                <img className="w-10" src={logo} alt="" />
                <h2 className="text-3xl">Morning Star</h2>
              </div>

              {/* Mobile menu button */}
              <div className="flex lg:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                  aria-label="toggle menu"
                >
                  {!isOpen ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 8h16M4 16h16"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Mobile Menu open: "block", Menu closed: "hidden" */}
            <div
              className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:flex lg:items-center ${isOpen ? 'translate-x-0 opacity-100 ' : 'opacity-0 -translate-x-full'
                } lg:opacity-100 lg:translate-x-0`}
            >
              <div className="flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-8">

                <li className="list-none head-section hover:animate-pulse"><NavLink to={'/'}><a className="px-3 py-2 mx-3 mt-2">Home</a></NavLink></li>
                <li className="list-none head-section hover:animate-pulse"> <NavLink to={'/add-artciles'}><a className="px-3 py-2 mx-3 mt-2">Add Articles</a></NavLink></li>
                <li className="list-none head-section hover:animate-pulse"> <NavLink to={'/a'}><a className="px-3 py-2 mx-3 mt-2">All Articles</a></NavLink></li>
                <li className="list-none head-section hover:animate-pulse"> <NavLink to={'/s'}><a className="px-3 py-2 mx-3 mt-2">Subscription</a></NavLink></li>


                {
                  user ?
                    <>
                      {/* <span>  {user?.displayName}</span> */}

                      {/* <div>
                        <img alt="" className="w-12 h-12 rounded-full ring-2 ring-offset-4 dark:bg-gray-500 dark:ring-default-600 dark:ring-offset-gray-100" src="https://source.unsplash.com/40x40/?portrait?1" />
                      </div>
                      <button onClick={handleLogOut}>Logout</button> */}

                      <div className="relative inline-block text-left">
                        <div
                          className="flex items-center cursor-pointer"
                          onClick={toggleDropdown}
                        >
                          <img
                            alt=""
                            className="w-12 h-12 rounded-full ring-2 ring-offset-4 dark:bg-gray-500 dark:ring-default-600 dark:ring-offset-gray-100"
                            src="https://source.unsplash.com/40x40/?portrait?1"
                          />
                        </div>

                        {isOpen && (
                          <div
                            className="origin-top-right absolute  mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" >
                            <div className="flex items-center">
                              <CgProfile />
                              <p>{user?.displayName || 'Your name '}</p>
                            </div>
                            <div className="py-1 flex items-center" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                              <div> <FaLongArrowAltRight /></div>
                              <button
                                onClick={handleLogOut}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                role="menuitem">
                                Logout
                              </button>

                            </div>
                          </div>
                        )}
                      </div>

                    </>
                    :
                    <>
                      <Link to={'/login'}><a className="px-3 py-2 mx-3 mt-2">Login</a></Link>
                    </>
                }

              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;