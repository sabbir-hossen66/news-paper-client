
import Select from 'react-select';

import { Controller, useForm } from 'react-hook-form';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import Swal from 'sweetalert2';


const publishers = [
  { value: 'local', label: 'Local' },
  { value: 'national', label: 'National' },
  { value: 'international', label: 'International' },
  { value: 'sports', label: 'Sports' },
  { value: 'entertainment', label: 'Entertainment' },
];

const tagOptions = [
  { value: 'politics', label: 'Politics' },
  { value: 'economy', label: 'Economy' },
  { value: 'health', label: 'Health' },
  { value: 'technology', label: 'Technology' },
  { value: 'environment', label: 'Environment' },
  { value: 'sports', label: 'Sports' },
  { value: 'entertainment', label: 'Entertainment' },
  { value: 'editorial', label: 'Editorial' },
];

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`


const AddArticles = () => {

  const { register, handleSubmit, reset, control, formState: { errors } } = useForm();
  const axiosPublic = useAxiosPublic();

  const onSubmit = async (data) => {
    console.log('Form Data:', data);

    //image upload to imgbb and then get an url
    const imgFile = { image: data.image[0] }
    const res = await axiosPublic.post(image_hosting_api, imgFile, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    if (res.data.success) {
      const NewsItem = {
        description: data.description,
        publisher: data.publisher,
        title: data.title,
        tags: data.tags,
        image: res.data.data.display_url

      }
      // when create adminsceure then implement axiosScure
      const newsRes = await axiosPublic.post('/addArticle', NewsItem)
      console.log(newsRes.data);
      if (newsRes.data.insertedId) {
        reset()
        // show success popup
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.title}is Added to the all articles`,
          showConfirmButton: false,
          timer: 1500
        });
      }

    }
    console.log(res.data)
  };



  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md transform transition duration-500 hover:scale-105"
      >
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Submit an Article</h2>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Title</label>
          <input
            type="text"
            {...register('title', { required: true })}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 transition duration-200"
          />
          {errors.title && <p className="text-red-500 text-xs mt-1">Title is required.</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Publisher</label>
          <Controller
            name="publisher"
            control={control}
            rules={{ required: true }}
            render={({ field }) =>
              <Select
                {...field}
                options={publishers}
                className="w-full"
              />
            }
          />
          {errors.publisher && <p className="text-red-500 text-xs mt-1">Publisher is required.</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Tags</label>
          <Controller
            name="tags"
            control={control}
            render={({ field }) =>
              <Select
                {...field}
                isMulti
                options={tagOptions}
                className="w-full"
              />
            }
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Description</label>
          <textarea
            {...register('description', { required: true })}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 transition duration-200"
          ></textarea>
          {errors.description && <p className="text-red-500 text-xs mt-1">Description is required.</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Image</label>
          <input
            type="file"
            {...register('image', { required: true })}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 transition duration-200"
          />
          {errors.image && <p className="text-red-500 text-xs mt-1">Image is required.</p>}
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-200"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddArticles;