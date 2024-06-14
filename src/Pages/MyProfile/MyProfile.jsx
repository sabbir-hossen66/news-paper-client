import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import Lottie from "lottie-react";
import profile from '../../assets/Animation - 1718399271151.json'


const MyProfile = () => {
  const { user } = useContext(AuthContext)
  console.log(user);

  return (
    <div className="my-16">
      <h2 className="text-4xl font-semibold text-[#54ADF8] text-center my-8">Welcome to My Profile</h2>


      <div className="flex justify-center items-center h-48 sm:h-56 md:h-64 lg:h-72 p-4">
        <Lottie className='hover:animate-spin w-32 text-center' animationData={profile} />
      </div>
      <div className="max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105">
        <div className="bg-cover bg-center h-48 sm:h-56 md:h-64 lg:h-72 p-4 flex justify-center items-center">
          <img className="rounded-full border-4 border-white w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36" src={user.photoURL} alt="Profile" />
        </div>
        <div className="p-4 sm:p-6">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">{user.displayName}</h1>
          <p className="text-gray-600">{user.email}</p>
          <p className="text-gray-600">{user.metadata.creationTime}</p>
        </div>
        <div className="p-4 sm:p-6 text-center">
          <button className="bg-blue-500 text-white px-8 font-semibold py-2 rounded-md shadow-lg transition transform hover:bg-blue-600 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50">
            Update
          </button>
        </div>
      </div>




    </div>
  );
};

export default MyProfile;

//  <p className="text-gray-600">{user.metadata.creationTime}</p >
