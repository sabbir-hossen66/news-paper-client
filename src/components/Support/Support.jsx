import { TfiWorld } from "react-icons/tfi";
import { GiNewspaper } from "react-icons/gi";
import { HiOutlineMailOpen } from "react-icons/hi";

const Support = () => {
  return (
    <div className="my-12 bg-gray-50 p-12">
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
          <div>
            <h4 className="text-center mt-8 uppercase text-xs">Join Now</h4>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <GiNewspaper className="hover:animate-spin text-[#54ADF8] text-7xl cursor-pointer" />
          <h3 className="text-2xl font-semibold mt-6">Documentation</h3>
          <p className="w-96 text-center mt-6 text-gray-500">Documentation in a newspaper context refers to the systematic process of creating, managing, and maintaining.</p>
          <div>
            <h4 className="text-center mt-8 uppercase text-xs">Join Now</h4>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <HiOutlineMailOpen className="hover:animate-pulse text-[#54ADF8] text-7xl cursor-pointer" />
          <h3 className="text-2xl font-semibold mt-6">Email Us</h3>
          <p className="w-96 text-center mt-6 text-gray-500">Emails are essential for internal communication among newspaper staff. Journalists, editors, designers use email </p>
          <div>
            <h4 className="text-center mt-8 uppercase text-xs">Join Now</h4>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Support;