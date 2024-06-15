import { useState } from "react";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const AdminAllArticles = () => {
  const axiosSecure = useAxiosSecure();
  const { data: articles = [], refetch } = useQuery({
    queryKey: ['articles'],
    queryFn: async () => {
      const res = await axiosSecure.get('/users');
      return res.data;
    }
  });

  const [modalArticle, setModalArticle] = useState(null);
  const [declineReason, setDeclineReason] = useState('');

  const handleApprove = (articleId) => {
    axiosSecure.patch(`/articles/approve/${articleId}`)
      .then(res => {
        if (res.data.modifiedCount > 0) {
          refetch();
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Article Approved',
            showConfirmButton: false,
            timer: 1500
          });
        }
      });
  };

  const handleDecline = () => {
    axiosSecure.patch(`/articles/decline/${modalArticle._id}`, { reason: declineReason })
      .then(res => {
        if (res.data.modifiedCount > 0) {
          setModalArticle(null);
          refetch();
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Article Declined',
            showConfirmButton: false,
            timer: 1500
          });
        }
      });
  };

  const handleMakePremium = (articleId) => {
    axiosSecure.patch(`/articles/make-premium/${articleId}`)
      .then(res => {
        if (res.data.modifiedCount > 0) {
          refetch();
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Article Marked as Premium',
            showConfirmButton: false,
            timer: 1500
          });
        }
      });
  };

  const handleDelete = (articleId) => {
    axiosSecure.delete(`/articles/${articleId}`)
      .then(res => {
        if (res.data.deletedCount > 0) {
          refetch();
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Article Deleted',
            showConfirmButton: false,
            timer: 1500
          });
        }
      });
  };
  return (
    <div>
      <h2 className="text-3xl font-semibold mb-4">All Articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <div key={article._id} className="bg-white rounded-lg shadow-lg p-4 transform hover:-translate-y-2 transition duration-300">
            <img src={article.authorPhoto} alt="Author" className="w-16 h-16 rounded-full mx-auto mb-4" />
            <h3 className="text-xl font-semibold">{article.title}</h3>
            <p className="text-gray-600 mb-2">By: {article.authorName}</p>
            <p className="text-gray-600 mb-2">Email: {article.authorEmail}</p>
            <p className="text-gray-600 mb-2">Posted on: {new Date(article.postedDate).toLocaleDateString()}</p>
            <p className="text-gray-600 mb-2">Publisher: {article.publisher}</p>
            <p className={`text-gray-600 mb-2 ${article.status === 'declined' ? 'text-red-500' : ''}`}>Status: {article.status}</p>
            <div className="flex justify-between mt-4">
              <button
                onClick={() => handleApprove(article._id)}
                className="bg-green-500 text-white px-2 py-1 rounded-md shadow-md transform transition duration-300 hover:bg-green-600 hover:scale-105"
              >
                Approve
              </button>
              <button
                onClick={() => setModalArticle(article)}
                className="bg-red-500 text-white px-2 py-1 rounded-md shadow-md transform transition duration-300 hover:bg-red-600 hover:scale-105"
              >
                Decline
              </button>
              <button
                onClick={() => handleMakePremium(article._id)}
                className="bg-yellow-500 text-white px-2 py-1 rounded-md shadow-md transform transition duration-300 hover:bg-yellow-600 hover:scale-105"
              >
                Make Premium
              </button>
              <button
                onClick={() => handleDelete(article._id)}
                className="bg-gray-500 text-white px-2 py-1 rounded-md shadow-md transform transition duration-300 hover:bg-gray-600 hover:scale-105"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for Decline Reason */}
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
  );
};

export default AdminAllArticles;