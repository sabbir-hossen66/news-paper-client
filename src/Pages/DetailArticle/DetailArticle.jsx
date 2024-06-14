import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { motion } from 'framer-motion';




const DetailArticle = () => {
  const { id } = useParams()
  const axiosPublic = useAxiosPublic();
  // const queryClient = useQueryClient();


  const { data: detailArticle = [], isLoading, error } = useQuery({
    queryKey: ['detailArticle'],
    queryFn: async () => {
      const res = await axiosPublic.get(`/news/${id}`);
      return res.data;
    },
    enabled: !!id,
  });



  /*  // Mutation to increment view count
   const incrementViewCount = useMutation(
     async () => {
       await axiosPublic.put(`/news/${id}`);
     },
     {
       onSuccess: () => {
         // Invalidate the query to refetch the updated data
         queryClient.invalidateQueries(['detailArticle', id]);
       },
     }
   );
 
   // Increment view count on component mount
   useEffect(() => {
     if (id) {
       incrementViewCount.mutate();
     }
   }, [id, incrementViewCount]);
 
   if (isLoading) {
     return <div>Loading...</div>;
   }
 
   if (error) {
     return <div>Error fetching the article: {error.message}</div>;
   } */


  return (
    <div>

      <h2 className="text-4xl text-center bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent font-bold mt-8">|This is Article Detail Page|</h2>
      <motion.div
        className="max-w-sm mx-auto my-16 bg-white rounded-xl shadow-md overflow-hidden md:max-w-4xl"
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
                  <span className="font-semibold">Published by</span>: {detailArticle.publisher ? detailArticle.publisher.value : 'Unknown'}
                </p>
              </ul>
            </div>
            <div className="mt-4">
              <div className="mb-4">
                {detailArticle.tags && detailArticle.tags.length > 0 ? (
                  detailArticle.tags.map((tag, index) => (
                    <div key={index}>
                      <span className="font-semibold text-gray-700 text-sm">Tags</span>: <span className="inline-block bg-blue-200 text-blue-800 text-xs px-2 py-1 rounded-full mr-2">{tag.value}</span>
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