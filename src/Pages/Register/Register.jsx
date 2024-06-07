import Lottie from 'lottie-react';
import registerAnimation from '../../assets/Animation - 1717611024556.json'
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }


  return (
    <div>
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
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">Email</label>
              <input type="email" {...register("email", { required: true })} id="email" className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 ease-in-out" />
              {errors.email && <span className='text-red-500'>Please fill up this field</span>}
            </div>
            <div>
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-700">Password</label>
              <input type="password" {...register("password", { required: true, minLength: 6, maxLength: 20 })} id="password" className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 ease-in-out" />
              {errors.password?.type === "minLength" && (
                <p className='text-red-500'>password must be 6 characters</p>
              )}
            </div>
            {/* <div>
              <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-700">Confirm Password</label>
              <input type="password" {...register("confirm-password", { required: true })} id="confirm-password" className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 ease-in-out" />
              {errors.confirm-password && <span className='text-red-500'>Please fill up this field</span>}
            </div> */}
            <button type="submit" className="w-full bg-[#27A3FA] text-white p-3 rounded-lg shadow-lg hover:bg-[#2784F5] focus:outline-none focus:ring-2 focus:ring-[#27A3FA] focus:ring-opacity-50 transition duration-300 ease-in-out">Register</button>
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