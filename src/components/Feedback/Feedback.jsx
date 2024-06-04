import { GoStarFill } from "react-icons/go";

const Feedback = () => {
  return (
    <div className="my-12">
      <div className="text-4xl flex justify-center items-center gap-4 text-[#FCC223]">
        <GoStarFill />
        <GoStarFill />
        <GoStarFill />
        <GoStarFill />
        <GoStarFill />
      </div>
      <p className="text-center mt-6 text-4xl font-sans uppercase">115,000+ dedicated customers trust us Regularly</p>

      <div className="flex justify-center items-center my-12">
        <div className="w-60 text-center">
          <hr className="border-t-2 border-gray-300" />
        </div>
      </div>

      <div>
        <h2 className="text-6xl text-center font-sans font-bold bg-gradient-to-br from-[#278BF6] to-[#28B2FD] bg-clip-text text-transparent">Balanced Reporting!</h2>
        <h3 className="font-bold font-sans text-center text-3xl mt-16 text-gray-600">Your newspaper does an excellent job of presenting balanced viewpoints.</h3>
        <p className="text-center text-gray-500 font-sans mt-4 text-xl">Balanced reporting is a cornerstone of credible journalism, ensuring that news coverage is fair,<br /> impartial, and comprehensive. A newspaper committed to balanced <br /> reporting seeks to present all sides of a story,<br /> giving readers a well-rounded perspective <br />  on the issues at hand.</p>
      </div>

      <div className="flex justify-center items-center mt-8 ">
        <button className="bg-gradient-to-r from-[#2784F5] to-[#28AFFC] hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 py-4 px-12 text-white rounded-sm border-none font-medium shadow-xl font-sans">Yes,Lets started</button>
      </div>
    </div>
  );
};

export default Feedback;