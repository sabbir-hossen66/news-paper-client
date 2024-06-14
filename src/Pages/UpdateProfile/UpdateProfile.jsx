import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";

const UpdateProfile = () => {
  const { user, updatePRf } = useContext(AuthContext)
  console.log(updatePRf);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    displayName: user.displayName || '',
    email: user.email || '',
    photoURL: user.photoURL || '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.displayName.trim()) {
      setError('Display name is required');
      return;
    }

    if (!formData.email.trim() || !validateEmail(formData.email)) {
      setError('Valid email is required');
      return;
    }

    if (!formData.photoURL.trim() || !isValidURL(formData.photoURL)) {
      setError('Valid photo URL is required');
      return;
    }

    try {
      await updateProfile(user, {
        displayName: formData.displayName,
        photoURL: formData.photoURL,
      });

      setError('');
      navigate('/my-profile');
    } catch (error) {
      setError('Error updating profile');
      console.error('Error updating profile:', error);
    }
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const isValidURL = (string) => {
    try {
      new URL(string);
      return true;
    } catch (_) {
      return false;
    }
  };

  return (
    <div>
      <h2>update</h2>
      <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg overflow-hidden p-6 my-6">
        <h1 className="text-2xl font-bold mb-4 text-center">Update Profile</h1>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Display Name</label>
            <input
              type="text"
              name="displayName"
              value={formData.displayName}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Profile Image URL</label>
            <input
              type="text"
              name="photoURL"
              value={formData.photoURL}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 text-white px-8 py-2 rounded-full shadow-lg transition transform hover:bg-blue-600 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50"
            >
              Update
            </button>
          </div>
        </form>
      </div>

    </div>
  );
};

export default UpdateProfile;