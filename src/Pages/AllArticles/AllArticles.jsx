import { useEffect, useState } from "react";
import AllArticle from "../AllArticle/AllArticle";


const AllArticles = () => {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)

  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 6;

  useEffect(() => {
    fetch('http://localhost:5000/news')
      .then(res => res.json())
      .then(data => {
        setArticles(data);
        setLoading(false)
      })
  }, [loading])


  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle);


  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <h3 className="text-center text-4xl font-bold mt-8 bg-gradient-to-r from-sky-400 to-violet-500 bg-clip-text text-transparent">All Articles are here: {articles.length}</h3>
      <div className="grid grid-cols-1 lg:grid-cols-3 my-16">
        {loading ? (
          <section className="bg-white dark:bg-gray-900 flex items-center justify-center min-h-screen">
            <div className="container px-6 py-10 mx-auto animate-pulse">
              <h1 className="w-48 h-2 mx-auto bg-gray-200 rounded-lg dark:bg-gray-700"></h1>

              <p className="w-64 h-2 mx-auto mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
              <p className="w-64 h-2 mx-auto mt-4 bg-gray-200 rounded-lg sm:w-80 dark:bg-gray-700"></p>

              <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3">
                {Array.from({ length: 8 }).map((_, index) => (
                  <div key={index} className="w-full">
                    <div className="w-full h-64 bg-gray-300 rounded-lg md:h-72 dark:bg-gray-600"></div>

                    <h1 className="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
                    <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ) :

          (
            currentArticles.map(article => (
              <AllArticle
                key={article._id}
                article={article}
              />
            ))
          )}
      </div>
      <div className="flex justify-center my-4">
        {Array.from({ length: Math.ceil(articles.length / articlesPerPage) }, (_, i) => i + 1).map(page => (
          <button
            key={page}
            className={`mx-1 px-3 py-1 rounded ${page === currentPage ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => paginate(page)}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AllArticles;