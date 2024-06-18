// import { useEffect, useState } from "react";
// import AllArticle from "../AllArticle/AllArticle";
// import { Helmet } from "react-helmet-async";


// const AllArticles = () => {
//   const [articles, setArticles] = useState([])
//   const [loading, setLoading] = useState(true)

//   const [currentPage, setCurrentPage] = useState(1);
//   const articlesPerPage = 6;

//   useEffect(() => {
//     fetch('https://morning-star-two.vercel.app/news')
//       .then(res => res.json())
//       .then(data => {
//         setArticles(data);
//         setLoading(false)
//       })
//   }, [loading])


//   const indexOfLastArticle = currentPage * articlesPerPage;
//   const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
//   const currentArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle);


//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   return (
//     <>
//       <Helmet>
//         <title>MorningStar || AllArticles</title>
//       </Helmet>
//       <div>
//         <h3 className="text-center text-4xl font-bold mt-8 bg-gradient-to-r from-sky-400 to-violet-500 bg-clip-text text-transparent">All Articles are here: {articles.length}</h3>
//         <div className="grid grid-cols-1 lg:grid-cols-3 my-16">
//           {loading ? (
//             <section className="bg-white dark:bg-gray-900 flex items-center justify-center min-h-screen">
//               <div className="container px-6 py-10 mx-auto animate-pulse">
//                 <h1 className="w-48 h-2 mx-auto bg-gray-200 rounded-lg dark:bg-gray-700"></h1>

//                 <p className="w-64 h-2 mx-auto mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
//                 <p className="w-64 h-2 mx-auto mt-4 bg-gray-200 rounded-lg sm:w-80 dark:bg-gray-700"></p>

//                 <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3">
//                   {Array.from({ length: 8 }).map((_, index) => (
//                     <div key={index} className="w-full">
//                       <div className="w-full h-64 bg-gray-300 rounded-lg md:h-72 dark:bg-gray-600"></div>

//                       <h1 className="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
//                       <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </section>
//           ) :

//             (
//               currentArticles.map(article => (
//                 <AllArticle
//                   key={article._id}
//                   article={article}
//                 />
//               ))
//             )}
//         </div>
//         <div className="flex justify-center my-4">
//           {Array.from({ length: Math.ceil(articles.length / articlesPerPage) }, (_, i) => i + 1).map(page => (
//             <button
//               key={page}
//               className={`mx-1 px-3 py-1 rounded ${page === currentPage ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
//               onClick={() => paginate(page)}
//             >
//               {page}
//             </button>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default AllArticles;




/* new code here */



import { useEffect, useState } from "react";
import AllArticle from "../AllArticle/AllArticle";
import { Helmet } from "react-helmet-async";

const AllArticles = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 6;

  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [selectedTag, setSelectedTag] = useState('');

  useEffect(() => {
    fetch('https://morning-star-two.vercel.app/news')
      .then(res => res.json())
      .then(data => {
        setArticles(data);
        setLoading(false);
      });
  }, []);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value) {
      const filteredSuggestions = articles
        .map(article => article.title)
        .filter(title => title.toLowerCase().includes(value.toLowerCase()))
        .slice(0, 5);
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion);
    setSuggestions([]);
  };

  const handleTagChange = (e) => {
    setSelectedTag(e.target.value);
  };

  const filteredArticles = articles.filter(article => {
    const matchesSearchTerm = article.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = selectedTag === '' || (article.tags && article.tags.some(tag => tag.value === selectedTag));
    return matchesSearchTerm && matchesTag;
  });

  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = filteredArticles.slice(indexOfFirstArticle, indexOfLastArticle);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const allTags = Array.from(new Set(articles.flatMap(article => article.tags ? article.tags.map(tag => tag.value) : [])));

  return (
    <>
      <Helmet>
        <title>MorningStar || AllArticles</title>
      </Helmet>
      <div>
        <h3 className="text-center text-4xl font-bold mt-8 bg-gradient-to-r from-sky-400 to-violet-500 bg-clip-text text-transparent">
          All Articles are here: {articles.length}
        </h3>

        {/* Search Input with Suggestions */}
        <div className="relative flex justify-center my-4">
          <input
            type="text"
            placeholder="Search articles..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="w-full max-w-md px-4 py-2 border rounded-lg mx-2"
          />
          {suggestions.length > 0 && (
            <div className="absolute top-12 left-0 w-full max-w-md bg-white border rounded-lg shadow-lg z-10">
              {suggestions.map((suggestion, index) => (
                <div
                  key={index}
                  onClick={() => handleSuggestionClick(suggestion)}
                  className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                >
                  {suggestion}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Tag Filter */}
        <div className="flex justify-center my-4">
          <select
            value={selectedTag}
            onChange={handleTagChange}
            className="w-full max-w-md px-4 py-2 border rounded-lg mx-2"
          >
            <option value="">All Tags</option>
            {allTags.map(tag => (
              <option key={tag} value={tag}>{tag}</option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-16 gap-4">
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
          ) : (
            currentArticles.map(article => (
              <AllArticle key={article._id} article={article} />
            ))
          )}
        </div>

        <div className="flex justify-center my-4">
          {Array.from({ length: Math.ceil(filteredArticles.length / articlesPerPage) }, (_, i) => i + 1).map(page => (
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
    </>
  );
};

export default AllArticles;
