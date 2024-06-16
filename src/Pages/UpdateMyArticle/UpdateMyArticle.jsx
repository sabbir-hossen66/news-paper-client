// import { useParams } from "react-router-dom";
// import useAxiosSecure from "../../hooks/useAxiosSecure";
// import { useQuery } from "@tanstack/react-query";
// import { Controller, useForm } from "react-hook-form";
// import Select from 'react-select';
// import Swal from "sweetalert2";




// const publishers = [
//   { value: 'local', label: 'Local' },
//   { value: 'national', label: 'National' },
//   { value: 'international', label: 'International' },
//   { value: 'sports', label: 'Sports' },
//   { value: 'entertainment', label: 'Entertainment' },
// ];

// const tagOptions = [
//   { value: 'politics', label: 'Politics' },
//   { value: 'economy', label: 'Economy' },
//   { value: 'health', label: 'Health' },
//   { value: 'technology', label: 'Technology' },
//   { value: 'environment', label: 'Environment' },
//   { value: 'sports', label: 'Sports' },
//   { value: 'entertainment', label: 'Entertainment' },
//   { value: 'editorial', label: 'Editorial' },
// ];


// const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
// const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

// const UpdateMyArticle = () => {
//   const axiosScure = useAxiosSecure();
//   const { id } = useParams()

//   const { register, handleSubmit, reset, control, formState: { errors } } = useForm();


//   const { data: updateArticle = [] } = useQuery({
//     queryKey: ['updateArticle'],
//     queryFn: async () => {
//       const res = await axiosScure.get(`/myarticle/${id}`);
//       return res.data;
//     },

//   });

//   console.log(updateArticle);

//   const onSubmit = async (data) => {
//     console.log(data);


//     const imageFile = { image: data.image[0] }
//     const res = await axiosScure.post(image_hosting_api, imageFile, {
//       headers: {
//         'content-type': 'multipart/form-data'
//       }
//     });
//     if (res.data.success) {

//       const articleItem = {
//         title: data.title,
//         authorName: data.authorName,
//         authorPhoto: data.authorPhoto,
//         authorEmail: data.authorEmail,
//         image: res.data.data.display_url,
//         description: data.description,
//         publisher: data.publisher.map(publish => publish.value),
//         tags: data.tags.map(tag => tag.value)
//       };

//       const articleRes = await axiosScure.patch(`/myArticle/${updateArticle._id}`, articleItem);
//       console.log(updateArticle._id)
//       if (articleRes.data.modifiedCount > 0) {

//         reset();
//         Swal.fire({
//           position: "top-end",
//           icon: "success",
//           title: `${data.name} is updated to the menu.`,
//           showConfirmButton: false,
//           timer: 1500
//         });
//       }
//     }
//     console.log('with image url', res.data);


//   }


//   return (
//     <div>
//       <div className="min-h-screen bg-gray-100 flex items-center justify-center">
//         <form
//           onSubmit={handleSubmit(onSubmit)}
//           className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md transform transition duration-500 hover:scale-105"
//         >
//           <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Update an Article</h2>

//           <div className="mb-4">
//             <label className="block text-gray-700 mb-2">Title</label>
//             <input
//               defaultValue={updateArticle.title}
//               type="text"
//               {...register('title', { required: true })}
//               className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 transition duration-200"
//             />
//             {errors.title && <p className="text-red-500 text-xs mt-1">Title is required.</p>}
//           </div>

//           <div className="mb-4">
//             <label className="block text-gray-700 mb-2">Publisher</label>
//             <Controller
//               name="publisher"
//               control={control}
//               rules={{ required: true }}
//               render={({ field }) =>
//                 <Select
//                   {...field}
//                   options={publishers}
//                   className="w-full"
//                 />
//               }
//             />
//             {errors.publisher && <p className="text-red-500 text-xs mt-1">Publisher is required.</p>}
//           </div>

//           <div className="mb-4">
//             <label className="block text-gray-700 mb-2">Tags</label>
//             <Controller
//               name="tags"
//               control={control}
//               render={({ field }) =>
//                 <Select
//                   {...field}
//                   isMulti
//                   options={tagOptions}
//                   className="w-full"
//                 />
//               }
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block text-gray-700 mb-2">Description</label>
//             <textarea
//               defaultValue={updateArticle.description}
//               {...register('description', { required: true })}
//               className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 transition duration-200"
//             ></textarea>
//             {errors.description && <p className="text-red-500 text-xs mt-1">Description is required.</p>}
//           </div>

//           <div className="mb-4">
//             <label className="block text-gray-700 mb-2">Image</label>
//             <input
//               type="file"
//               {...register('image')}
//               className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 transition duration-200"
//             />
//             {errors.image && <p className="text-red-500 text-xs mt-1">Image is required.</p>}
//           </div>

//           <div className="text-center">
//             <button
//               type="submit"
//               className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-200"
//             >
//               Update
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default UpdateMyArticle;



/* new  */




// components/UpdateMyArticle.js
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { Controller, useForm } from "react-hook-form";
import Select from 'react-select';
import Swal from "sweetalert2";

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

// const statuses = [
//   { value: 'draft', label: 'Draft' },
//   { value: 'published', label: 'Published' },
//   { value: 'archived', label: 'Archived' },
// ];

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateMyArticle = () => {
  const axiosSecure = useAxiosSecure();
  const { id } = useParams();

  const { register, handleSubmit, reset, control, formState: { errors } } = useForm();

  const { data: updateArticle = {} } = useQuery({
    queryKey: ['updateArticle'],
    queryFn: async () => {
      const res = await axiosSecure.get(`/myarticle/${id}`);
      return res.data;
    },
  });

  const onSubmit = async (data) => {
    try {
      let imageUrl = updateArticle.image; // Use existing image URL by default

      // Upload new image if provided
      if (data.image && data.image[0]) {
        const imageFile = new FormData();
        imageFile.append('image', data.image[0]);

        const imageRes = await axiosSecure.post(image_hosting_api, imageFile, {
          headers: {
            'content-type': 'multipart/form-data',
          },
        });

        if (imageRes.data.success) {
          imageUrl = imageRes.data.data.display_url;
        }
      }

      const articleItem = {
        title: data.title,
        authorName: data.authorName,
        status: data.status.value,
        authorPhoto: data.authorPhoto,
        authorEmail: data.authorEmail,
        image: imageUrl,
        description: data.description,
        publisher: data.publisher ? data.publisher.map(publish => publish.value) : [],
        tags: data.tags ? data.tags.map(tag => tag.value) : [],
      };

      const articleRes = await axiosSecure.patch(`/myArticle/${id}`, articleItem);
      if (articleRes.data.modifiedCount > 0) {
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Article updated successfully.",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      console.error("Error updating article:", error);
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Sorry bro, I was trying 7 hours. but couldn't slove this",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md transform transition duration-500 hover:scale-105"
        >
          <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Update an Article</h2>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Title</label>
            <input
              defaultValue={updateArticle.title}
              type="text"
              {...register('title', { required: true })}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 transition duration-200"
            />
            {errors.title && <p className="text-red-500 text-xs mt-1">Title is required.</p>}
          </div>

          {/* <div className="mb-4">
            <label className="block text-gray-700 mb-2">Status</label>
            <Controller
              name="status"
              control={control}
              rules={{ required: true }}
              render={({ field }) =>
                <Select
                  {...field}
                  options={statuses}
                  defaultValue={statuses.find(status => status.value === updateArticle.status)}
                  className="w-full"
                />
              }
            />
            {errors.status && <p className="text-red-500 text-xs mt-1">Status is required.</p>}
          </div> */}

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
                  defaultValue={Array.isArray(updateArticle.publisher) ? updateArticle.publisher.map(publisher => publishers.find(pub => pub.value === publisher)) : []}
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
                  defaultValue={Array.isArray(updateArticle.tags) ? updateArticle.tags.map(tag => tagOptions.find(opt => opt.value === tag)) : []}
                  className="w-full"
                />
              }
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Description</label>
            <textarea
              defaultValue={updateArticle.description}
              {...register('description', { required: true })}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 transition duration-200"
            ></textarea>
            {errors.description && <p className="text-red-500 text-xs mt-1">Description is required.</p>}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Image</label>
            <input
              type="file"
              {...register('image')}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 transition duration-200"
            />
            {errors.image && <p className="text-red-500 text-xs mt-1">Image is required.</p>}
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-200"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateMyArticle;
