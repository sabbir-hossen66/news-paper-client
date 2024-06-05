import { TfiWorld } from "react-icons/tfi";
import { GiNewspaper } from "react-icons/gi";
import { HiOutlineMailOpen } from "react-icons/hi";
import { RiArrowRightSLine } from "react-icons/ri";
import { PiShoppingCart } from "react-icons/pi";
import { Link } from "react-router-dom";

const Support = () => {
  return (
    <div>
      <div className="my-12 bg-gray-50 p-16 pb-20 mb-16">
        <h2 className="text-6xl text-center font-sans font-bold bg-gradient-to-br from-[#278BF6] to-[#28B2FD] bg-clip-text text-transparent">Top notch support</h2>

        <div className="flex justify-center items-center my-12">
          <div className="w-60 text-center">
            <hr className="border-t-2 border-gray-300" />
          </div>
        </div>

        <p className="text-center text-gray-500 font-sans my-4 text-xl">A newspaper company thrives not only on the quality of its journalism but also on the robust support <br /> system it provides to its readers, employees,and the community.This support manifests <br /> in various forms,from exceptional customer service. </p>

        {/* social things added */}
        <div className="flex flex-col lg:flex-row items-center justify-evenly mt-14">
          <div className="flex flex-col items-center">
            <TfiWorld className="hover:animate-bounce text-[#54ADF8] text-7xl cursor-pointer" />
            <h3 className="text-2xl font-semibold mt-6">Community</h3>
            <p className="w-96 text-center mt-6 text-gray-500">Newspaper communities represent a unique and vibrant ecosystem within the broader media landscape. </p>
            <Link to={'https://www.facebook.com/sabbir.ms2000'}>
              <div className="flex justify-center items-center hover:animate-pulse hover:text-[#54ADF8] cursor-pointer">
                <h4 className=" mt-8 uppercase text-xs">Join Now</h4>
                <div className="mt-8">  <RiArrowRightSLine /></div>
              </div>
            </Link>
          </div>
          <div className="flex flex-col items-center">
            <GiNewspaper className="hover:animate-spin text-[#54ADF8] text-7xl cursor-pointer" />
            <h3 className="text-2xl font-semibold mt-6">Documentation</h3>
            <p className="w-96 text-center mt-6 text-gray-500">Documentation in a newspaper context refers to the systematic process of creating, managing, and maintaining.</p>
            <Link to={'https://www.facebook.com/sabbir.ms2000'}>
              <div className="flex justify-center items-center hover:animate-pulse hover:text-[#54ADF8] cursor-pointer">
                <h4 className="mt-8 uppercase text-xs ">Join Now</h4>
                <div className="mt-8">  <RiArrowRightSLine /></div>
              </div>
            </Link>
          </div>
          <div className="flex flex-col items-center">
            <HiOutlineMailOpen className="hover:animate-pulse text-[#54ADF8] text-7xl cursor-pointer" />
            <h3 className="text-2xl font-semibold mt-6">Email Us</h3>
            <p className="w-96 text-center mt-6 text-gray-500">Emails are essential for internal communication among newspaper staff. Journalists, editors, designers use email </p>

            <Link to={'https://www.linkedin.com/in/sabbir-hossen66/'}>
              <div className="flex justify-center items-center hover:animate-pulse hover:text-[#54ADF8] cursor-pointer">
                <h4 className=" mt-8 uppercase text-xs">Join Now</h4>
                <div className="mt-8">  <RiArrowRightSLine /></div>
              </div>
            </Link>
          </div>
        </div>

      </div>

      {/* shadow card */}
      <div className="p-16 mb-16 w-2/3 mx-auto -mt-24 shadow-xl bg-[#FFFFFF]">
        <div className="flex items-center gap-4">
          <div className="w-24">
            <hr className="border-t-2 border-[#28BEFF]" />
          </div>
          <h3 className="text-center text-3xl font-semibold">Keep in mind, our updates are FREE for our Users. Enjoy!</h3>

          <button className="bg-gradient-to-r from-[#2784F5] to-[#28AFFC] hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 py-4 px-12 text-white rounded-sm border-none font-medium shadow-xl font-sans ml-10 hover:animate-pulse">
            <div className="flex justify-center items-center gap-2">
              <PiShoppingCart />
              NewsPaper
            </div>
          </button>


        </div>
        <p className="text-gray-500 text-md mt-2">Not a customer yet? Start today, and you will understand why so many awesome people love our Newspaper.</p>
      </div>
    </div>
  );
};

export default Support;