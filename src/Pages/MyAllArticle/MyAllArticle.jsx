import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const MyAllArticle = ({ myArticle, refetch, axiosScure, index }) => {
  // const { title, image, authorName, status, views, authorPhoto, authorEmail } = myArticle
  // console.log(title);


  // const [articles, setArticles] = useState([]);
  const [modalArticle, setModalArticle] = useState(null);
  const navigate = useNavigate();

  const handleDelete = articleId => {

    // await axiosScure.delete(`/myArticle/${articleId}`);
    // setArticles(articles.filter(article => article._id !== articleId));

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {

        axiosScure.delete(`/myArticle/${articleId}`)
          .then(res => {
            if (res.data.deletedCount > 0) {
              refetch();
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
            }
          })
      }
    });


  };

  const handleUpdate = (articleId) => {
    navigate(`/update-article/${articleId}`);
  };

  const handleViewDetails = (articleId) => {
    navigate(`/detail-article/${articleId}`);
  };


  return (
    <>
      <tr key={myArticle._id}>
        <td className="px-4 py-2 border-b border-gray-300">{index + 1}</td>
        <td className="px-4 py-2 border-b border-gray-300">{myArticle.title}</td>
        <td className="px-4 py-2 border-b border-gray-300">
          <button
            className="bg-blue-500 text-white px-2 py-1 rounded"
            onClick={() => handleViewDetails(myArticle._id)}
          >
            Details
          </button>
        </td>
        <td className="px-4 py-2 border-b border-gray-300">
          {myArticle.status === 'declined' ? (
            <>
              <span className="text-red-500">{myArticle.status}</span>
              <button
                className="bg-yellow-500 text-white px-2 py-1 rounded ml-2"
                onClick={() => setModalArticle(myArticle)}
              >
                Reason
              </button>
            </>
          ) : (
            <span>{myArticle.status}</span>
          )}
        </td>
        <td className="px-4 py-2 border-b border-gray-300">{myArticle.isPremium ? 'Yes' : 'No'}</td>
        <td className="px-4 py-2 border-b border-gray-300">
          <button
            className="bg-green-500 text-white px-2 py-1 rounded mr-2"
            onClick={() => handleUpdate(myArticle._id)}
          >
            Update
          </button>
          <button
            className="bg-red-500 text-white px-2 py-1 rounded"
            onClick={() => handleDelete(myArticle._id)}
          >
            Delete
          </button>
        </td>
      </tr>

      {modalArticle && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-96">
            <h3 className="text-xl font-semibold mb-4">Decline Reason</h3>
            <p>{modalArticle.declineReason}</p>
            <button
              className="bg-gray-500 text-white px-4 py-2 rounded mt-4"
              onClick={() => setModalArticle(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}

    </>
  );
};

export default MyAllArticle;

/* 
 <div className="container mx-auto p-4">

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr>
                <th className="px-4 py-2 border-b-2 border-gray-300 text-left text-xs lg:text-sm text-blue-500 tracking-wider">
                  Title
                </th>
                <th className="px-4 py-2 border-b-2 border-gray-300 text-left text-xs lg:text-sm text-blue-500 tracking-wider">
                  Author
                </th>
                <th className="px-4 py-2 border-b-2 border-gray-300 text-left text-xs lg:text-sm text-blue-500 tracking-wider">
                  Email
                </th>
                <th className="px-4 py-2 border-b-2 border-gray-300 text-left text-xs lg:text-sm text-blue-500 tracking-wider">
                  Photo
                </th>
                <th className="px-4 py-2 border-b-2 border-gray-300 text-left text-xs lg:text-sm text-blue-500 tracking-wider">
                  Posted Date
                </th>
                <th className="px-4 py-2 border-b-2 border-gray-300 text-left text-xs lg:text-sm text-blue-500 tracking-wider">
                  Status
                </th>
                <th className="px-4 py-2 border-b-2 border-gray-300 text-left text-xs lg:text-sm text-blue-500 tracking-wider">
                  Publisher
                </th>
                <th className="px-4 py-2 border-b-2 border-gray-300 text-left text-xs lg:text-sm text-blue-500 tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>

              <tr key={myArticle._id} className="text-xs lg:text-sm">
                <td className="px-4 py-2 whitespace-nowrap border-b border-gray-500">
                  {myArticle.title}
                </td>
                <td className="px-4 py-2 whitespace-nowrap border-b border-gray-500">
                  {myArticle.authorName}
                </td>
                <td className="px-4 py-2 whitespace-nowrap border-b border-gray-500">
                  {myArticle.authorEmail}
                </td>
                <td className="px-4 py-2 whitespace-nowrap border-b border-gray-500">
                  <img
                    src={myArticle.authorPhoto}
                    alt="Author"
                    className="w-10 h-10 rounded-full mx-auto lg:mx-0"
                  />
                </td>
                <td className="px-4 py-2 whitespace-nowrap border-b border-gray-500">
                  {new Date(myArticle.postedDate).toLocaleDateString()}
                </td>
                <td
                  className={`px-4 py-2 whitespace-nowrap border-b border-gray-500 ${myArticle.status === "declined" ? "text-red-500" : ""
                    }`}
                >
                  {myArticle.status}
                </td>
                <td className="px-4 py-2 whitespace-nowrap border-b border-gray-500">
                  <span className="font-semibold">Published by</span>: {myArticle.publisher ? myArticle.publisher.value : 'Unknown'}
                </td>
                <td className="px-4 py-2 whitespace-nowrap border-b border-gray-500">
                  <div className="flex flex-col lg:flex-row gap-2">
                    <button
                      onClick={() => handleApprove(myArticle._id)}
                      className="bg-green-500 text-white px-2 py-1 rounded-md shadow-md transform transition duration-300 hover:bg-green-600 hover:scale-105"
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => setModalArticle(myArticle)}
                      className="bg-red-500 text-white px-2 py-1 rounded-md shadow-md transform transition duration-300 hover:bg-red-600 hover:scale-105"
                    >
                      Decline
                    </button>
                    <button
                      onClick={() => handleMakePremium(myArticle._id)}
                      className="bg-yellow-500 text-white px-2 py-1 rounded-md shadow-md transform transition duration-300 hover:bg-yellow-600 hover:scale-105"
                    >
                      Make Premium
                    </button>
                    <button
                      onClick={() => handleDelete(myArticle._id)}
                      className="bg-gray-500 text-white px-2 py-1 rounded-md shadow-md transform transition duration-300 hover:bg-gray-600 hover:scale-105"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>

            </tbody>

          </table>
        </div>

        {modalArticle && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg p-6 w-96">
              <h3 className="text-xl font-semibold mb-4">Decline Article</h3>
              <textarea
                value={declineReason}
                onChange={(e) => setDeclineReason(e.target.value)}
                className="w-full border rounded-md p-2 mb-4"
                rows="4"
                placeholder="Enter the reason for declining..."
              ></textarea>
              <div className="flex justify-between">
                <button
                  onClick={() => setModalArticle(null)}
                  className="bg-gray-500 text-white px-4 py-2 rounded-md shadow-md transform transition duration-300 hover:bg-gray-600 hover:scale-105"
                >
                  Cancel
                </button>
                <button
                  onClick={handleDecline}
                  className="bg-red-500 text-white px-4 py-2 rounded-md shadow-md transform transition duration-300 hover:bg-red-600 hover:scale-105"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
*/