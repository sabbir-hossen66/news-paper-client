
import Select from 'react-select';

import { Controller, useForm } from 'react-hook-form';

import Swal from 'sweetalert2';

import useAxiosPublic from '../../../hooks/useAxiosPublic';



const publishers = [
  { value: 'Prothom Alo', label: 'Prothom Alo' },
  { value: 'Doinik Azad', label: 'Doinik Azad' },
  { value: 'Khela Jog', label: 'Khela Jog' },
  { value: 'Somoy Tv', label: 'Somoy Tv' },
  { value: 'Jomuna Sports', label: 'Jomuna Sports' },
];



const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`


const AddPublisher = () => {

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
      const PublisherItem = {
        publisher: data.publisher,
        image: res.data.data.display_url,

      }
      // when create adminsceure then implement axiosScure
      const publishRes = await axiosPublic.post('/addPublisher', PublisherItem)
      console.log(publishRes.data);
      if (publishRes.data.insertedId) {
        reset()
        // show success popup
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `Publisher is Added to the Home page`,
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
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Add Publisher</h2>

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
            Add Publish
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPublisher;