import Lottie from 'lottie-react';
import registerAnimation from '../../assets/Animation - 1717611024556.json'
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Helmet } from 'react-helmet-async';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';
import Swal from 'sweetalert2';

const Register = () => {
  const { createUser, updatePRf } = useContext(AuthContext)
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password, data.name)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
        updatePRf(data.name, data.photoURL)
          .then(() => {
            console.log('user profile updated');
            reset();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Successfully Sign UP",
              showConfirmButton: false,
              timer: 1500
            });
          })
        navigate('/login')
      })
      .catch(error => {
        console.log(error.message);
      })
  }


  return (
    <div>
      <Helmet>
        <title>Morning Star || Register</title>

      </Helmet>
      <div className="flex flex-col lg:flex-row items-center justify-evenly min-h-screen bg-gray-100">
        <Lottie className='hover:animate-spin' animationData={registerAnimation} />
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md transform transition-all duration-500 hover:scale-105">
          <h2 className="text-2xl font-bold mb-5 text-center">Register Please</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-700">Username</label>
              <input type="text" {...register("name", { required: true })} id="name" className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 ease-in-out" />
              {errors.name && <span className='text-red-500'>Please fill up this field</span>}
            </div>
            <div>
              <label htmlFor="photoURl" className="block mb-2 text-sm font-medium text-gray-700">Photo URL</label>
              <input type="text" {...register("photoURL", { required: true })} id="photoURL" className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 ease-in-out" />
              {errors.photoURL && <span className='text-red-500'>Please fill up this field</span>}
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">Email</label>
              <input type="email" {...register("email", { required: true })} id="email" className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 ease-in-out" />
              {errors.email && <span className='text-red-500'>Please fill up this field</span>}
            </div>
            <div>
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-700">Password</label>
              <input type="password" {...register("password", {
                required: true,
                minLength: 6,
                maxLength: 15,
                pattern: /^[^A-Z0-9!@#$%^&*(),.?":{}|<>]*$/
              })} id="password" className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 ease-in-out" />
              {errors.password?.type === "minLength" && (
                <p className='text-red-500'>password must be 6 characters</p>
              )}
              {errors.password?.type === "maxLength" && (
                <p className='text-red-500'>password must be less than 15 characters</p>
              )}
              {errors.password?.type === "pattern" && (
                <p className='text-red-500'>Password must not contain capital letters, numbers, or special characters.</p>
              )}
            </div>

            <input className="w-full cursor-pointer bg-[#27A3FA] text-white p-3 rounded-lg shadow-lg hover:bg-[#2784F5] focus:outline-none focus:ring-2 focus:ring-[#27A3FA] focus:ring-opacity-50 transition duration-300 ease-in-out" type="submit" value="Register" />

          </form>
          <div className="mt-6 text-center text-sm text-gray-600" >
            Already Have an Account?{' '}
            <a href="#" className="font-medium text-[#27A3FA] hover:text-[#2784F5]">
              <Link to={'/login'}> Login </Link>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;