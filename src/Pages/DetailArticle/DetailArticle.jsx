import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { motion } from 'framer-motion';

const DetailArticle = () => {
  const { id } = useParams()
  const axiosPublic = useAxiosPublic();

  const { data: detailArticle = [], isLoading, refetch } = useQuery({
    queryKey: ['detailArticle'],
    queryFn: async () => {
      const res = await axiosPublic.get(`/news/${id}`);
      return res.data;
    },
    enabled: !!id, // Ensure the query runs only if `id` exists
  });
  console.log(detailArticle);
  if (isLoading) {
    return <p>setLoading</p>
  }


  return (
    <div>

      <h2>|This is Detail Article</h2>
      <motion.div
        className="max-w-4xl mx-auto my-16 bg-white rounded-xl shadow-md overflow-hidden md:max-w-3xl"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img className="h-64 w-full object-cover md:h-full md:w-64" src={detailArticle.image} alt="Article" />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{detailArticle.title}</div>
            <p className="mt-2 text-gray-500">{detailArticle.description}</p>
            <div className="mt-4">
              <ul className="list-disc list-inside text-gray-600">
                <p className="text-gray-600 text-sm">
                  Published by: {detailArticle.publisher ? detailArticle.publisher.value : 'Unknown'}
                </p>
              </ul>
            </div>
            <div className="mt-4">
              <h4 className="font-semibold text-gray-700">Tags:</h4>
              <div className="mb-4">
                {detailArticle.tags && detailArticle.tags.length > 0 ? (
                  detailArticle.tags.map((tag, index) => (
                    <div key={index} className="inline-block bg-blue-200 text-blue-800 text-xs px-2 py-1 rounded-full mr-2">
                      {tag.value}
                    </div>
                  ))
                ) : (
                  <span className="text-gray-600 text-sm">No tags available</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default DetailArticle;