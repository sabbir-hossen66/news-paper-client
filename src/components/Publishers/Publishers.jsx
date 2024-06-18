
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const Publishers = () => {
  const axiosSecure = useAxiosSecure();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const { data: publishers = [] } = useQuery({
    queryKey: ['detailArticle'],
    queryFn: async () => {
      const res = await axiosSecure.get('/seePublisher');
      return res.data;
    },
  });

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = publishers.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(publishers.length / itemsPerPage);

  return (
    <div>
      <h2 className="text-2xl lg:text-6xl text-center text-[#27A3FA] my-16 font-bold">Our All Publishers</h2>
      <div>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentItems.map((publisher, index) => (
            <div key={index} className="hover:animate-bounce bg-white rounded-lg shadow-lg overflow-hidden">
              <img className="w-full h-48 object-cover" src={publisher.image} alt={publisher.publisher} />
              <div className="p-4">
                <p className="text-xl font-semibold text-gray-500">Published by: {publisher.publisher ? publisher.publisher.value : 'Unknown'}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center my-8">
        <ul className="flex">
          {[...Array(totalPages).keys()].map((page) => (
            <li key={page + 1} className="mx-1">
              <button
                className={`px-3 py-1 rounded-lg ${page + 1 === currentPage ? 'bg-blue-500 text-white' : 'bg-gray-200'
                  }`}
                onClick={() => handlePageClick(page + 1)}
              >
                {page + 1}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Publishers;

