import { Helmet } from "react-helmet-async";


const PremiumArticle = () => {
  return (
    <>
      <Helmet>
        <title>MorningStar || PremiumArticles</title>
      </Helmet>
      <div>
        <h2 className="text-5xl font-semibold mt-8 text-center text-[#54ADF8]">These Are Premium Articles</h2>

        <div className="flex flex-col items-center justify-center h-96 my-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-4">
            <div className="bg-gray-800 shadow-md rounded-lg p-6 text-center transform transition-transform hover:scale-105 hover:shadow-xl text-white">
              <img className="rounded-t-lg w-full h-48 object-cover" src="https://i.ibb.co/Xky7vZB/prem.jpg" alt="All Users" />
              <h2 className="text-2xl font-bold mb-2 mt-4 text-blue-400">All Users</h2>
              <p className="text-gray-400 text-lg mb-4">Total: 5000</p>
              <div className="flex justify-between items-center">
                <span className="bg-green-500 text-white py-1 px-3 rounded-full text-xs"># National</span>
                <button className="bg-purple-500 text-white py-1 px-3 rounded-full text-xs">Details</button>
              </div>
            </div>
            <div className="bg-gray-800 shadow-md rounded-lg p-6 text-center transform transition-transform hover:scale-105 hover:shadow-xl text-white">
              <img className="rounded-t-lg w-full h-48 object-cover" src="https://i.ibb.co/vZ5W4Hq/prem2.jpg" alt="Only Users" />
              <h2 className="text-2xl font-bold mb-2 mt-4 text-green-400">Only Users</h2>
              <p className="text-gray-400 text-lg mb-4">Total: 3000</p>
              <div className="flex justify-between items-center">
                <span className="bg-green-500 text-white py-1 px-3 rounded-full text-xs"># International</span>
                <button className="bg-purple-500 text-white py-1 px-3 rounded-full text-xs">Details</button>
              </div>
            </div>
            <div className="bg-gray-800 shadow-md rounded-lg p-6 text-center transform transition-transform hover:scale-105 hover:shadow-xl text-white relative">
              <img className="rounded-t-lg w-full h-48 object-cover" src="https://i.ibb.co/nLBQv6G/prem3.jpg" alt="Premium Users" />
              <h2 className="text-2xl font-bold mb-2 mt-4 text-yellow-400">
                Premium Users
                <svg className="inline-block w-6 h-6 ml-2 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.171 3.604a1 1 0 00.95.69h3.764c.969 0 1.371 1.24.588 1.81l-3.045 2.21a1 1 0 00-.364 1.118l1.171 3.604c.3.921-.755 1.688-1.538 1.118l-3.045-2.21a1 1 0 00-1.175 0l-3.045 2.21c-.783.57-1.838-.197-1.538-1.118l1.171-3.604a1 1 0 00-.364-1.118L2.636 9.031c-.783-.57-.381-1.81.588-1.81h3.764a1 1 0 00.95-.69l1.171-3.604z" />
                </svg>
              </h2>
              <p className="text-gray-400 text-lg mb-4">Total: 2000</p>
              <div className="flex justify-between items-center">
                <span className="bg-green-500 text-white py-1 px-3 rounded-full text-xs"># International</span>
                <button className="bg-purple-500 text-white py-1 px-3 rounded-full text-xs">Details</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default PremiumArticle;