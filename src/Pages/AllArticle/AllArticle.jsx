import { Link } from "react-router-dom";


const AllArticle = ({ article }) => {
  const { _id, title, image, description, tags, publisher } = article;
  // console.log(tags, publisher);

  return (
    <div>

      <div className="max-w-sm my-4 lg:max-w-lg mx-auto bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105">
        <img className="w-full h-48 object-cover" src={image} alt={title} />
        <div className="p-4">
          <h1 className="text-gray-900 font-bold text-2xl mb-2">{title}</h1>
          <p className="text-gray-600 text-sm mb-4">{description.slice(0, 75)}</p>
          <div className="mb-4">
            {tags && tags.length > 0 ? (
              tags.map((tag, index) => (
                <div key={index} className="inline-block bg-blue-200 text-blue-800 text-xs px-2 py-1 rounded-full mr-2">
                  {tag.value}
                </div>
              ))
            ) : (
              <span className="text-gray-600 text-sm">No tags available</span>
            )}
          </div>
          <p className="text-gray-600 text-sm">
            Published by: {publisher ? publisher.value : 'Unknown'}
          </p>

          <Link to={`/detail-article/${_id}`}>
            <button
              className="mt-4 px-4 py-2 bg-[#278BF6] text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75" >
              Details
            </button>
          </Link>

        </div>
      </div>
    </div>
  );
};

export default AllArticle;