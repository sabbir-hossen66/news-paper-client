import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";


const Publishers = () => {
  const axiosScure = useAxiosSecure();

  const { data: publishers = [] } = useQuery({
    queryKey: ['detailArticle'],
    queryFn: async () => {
      const res = await axiosScure.get('/seePublisher');
      return res.data;
    },

  });

  return (
    <div>
      <h2 className="text-2xl lg:text-6xl text-center text-[#27A3FA] my-16 font-bold">Our All Publishers</h2>
      <div>
        <div className="container mx-auto grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-8">
          {publishers.map((publisher, index) => (

            <div key={index} className="hover:animate-bounce bg-white rounded-lg shadow-lg overflow-hidden">

              <img className="w-full h-48 object-cover" src={publisher.image} alt={publisher.publisher} />
              <div className="p-4">
                <p className="text-xl font-semibold text-gray-500">Published by: {publisher.publisher ? publisher.publisher?.value : 'Unknown'}</p>

              </div>
            </div>
          ))}
        </div>
      </div>



    </div>
  );
};

export default Publishers;