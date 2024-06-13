import { useEffect, useState } from "react";
import AllArticle from "../AllArticle/AllArticle";


const AllArticles = () => {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)

  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 6; // Number of articles per page

  useEffect(() => {
    fetch('http://localhost:5000/news')
      .then(res => res.json())
      .then(data => {
        setArticles(data);
        setLoading(false)
      })
  }, [loading])


  // Get current articles
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <h3>All Articles are here: {articles.length}</h3>
      <div className="grid grid-cols-1 lg:grid-cols-3 my-16">
        {loading ? (
          <p>Loading...</p>
        ) : (
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