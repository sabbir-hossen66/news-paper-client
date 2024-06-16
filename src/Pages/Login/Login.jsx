import { useContext, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import loginAnimation from '../../assets/Animation - 1717610757831.json'
import Lottie from 'lottie-react';
import { AuthContext } from '../../Providers/AuthProviders';
import Swal from 'sweetalert2';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { GoogleAuthProvider } from 'firebase/auth';
import useAxiosPublic from '../../hooks/useAxiosPublic';

const Login = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [success, setSuccess] = useState('')
  const [googleUser, setGoogleUser] = useState(null)
  console.log(googleUser);
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const location = useLocation()
  const axiosPublic = useAxiosPublic();

  const from = location.state?.from?.pathname || '/'


  const { signIn, googleSignIn } = useContext(AuthContext)
  const provider = new GoogleAuthProvider();

  /* from submission functionality */
  const handleSignIn = e => {
    e.preventDefault()

    const form = new FormData(e.currentTarget)
    const email = form.get('email')
    const password = form.get('password')
    console.log(email, password);

    signIn(email, password)
      .then(result => {
        const response = result.user;

        /* users related function */
        const userInfo = {
          email: response?.email,
          name: response?.displayName,
          photoURL: response?.photoURL
        }
        axiosPublic.post('/users', userInfo)
          .then(res => {
            console.log(res.data);
          })

        setSuccess(response)
        // navigate(location?.state ? location.state : "/")
        Swal.fire({
          title: 'Success!',
          text: 'Login Successfully',
          icon: 'success',
          confirmButtonText: 'Cool'
        })
        navigate(from, { replace: true })
      })
      .catch(error => {
        const errorMessege = error.messege;

        setError(errorMessege)
      })
  }


  // google sign in
  const handleGoogleSign = (e) => {
    e.preventDefault();
    googleSignIn(provider)
      .then(result => {
        const googleUser = result.user;
        console.log(googleUser);
        /* users related function */
        const userInfo = {
          email: googleUser?.email,
          name: googleUser?.displayName,
          photoURL: googleUser?.photoURL
        }
        axiosPublic.post('/users', userInfo)
          .then(res => {
            console.log(res.data);
          })
        setGoogleUser(googleUser);

        Swal.fire({
          title: 'Successfully Google Login!',
          text: 'Do you want to continue',
          icon: 'success',
          confirmButtonText: 'cool'
        })
        // navigate(from, { replace: true })
        navigate(location?.state ? location.state : "/")

      })
      .catch(error => {
        const googleError = error.message;
        setGoogleUser(googleError);
      })
  }


  /* this is for animation framer */
  useEffect(() => {
    setIsVisible(true);
  }, []);

  /* This function is password seeing */
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };



  return (
    <div>

      <div className="flex flex-col lg:flex-row items-center justify-evenly min-h-screen bg-gray-100 ">
        <div>
          <Lottie className='hover:animate-spin' animationData={loginAnimation} />
        </div>
        {/* set animation customize */}
        <div className='bg-white p-8 rounded-lg shadow-lg w-full max-w-md transform transition-all duration-500 hover:scale-105'>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
            transition={{ duration: 0.5 }}  >

            <h2 className="text-3xl font-semibold text-center mb-6">Please Login</h2>
            <form onSubmit={handleSignIn} className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name='email'
                  id="email"
                  placeholder='Type your email'
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#27A3FA] focus:border-[#27A3FA]"
                  required
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name='password'
                    placeholder='Type your password'
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#27A3FA] focus:border-[#27A3FA]"
                    required
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer" onClick={togglePasswordVisibility}>
                    {showPassword ? <FaEyeSlash className="text-gray-500" /> : <FaEye className="text-gray-500" />}
                  </div>
                </div>
              </motion.div>
              <motion.div
                className="flex items-center justify-between"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="remember-me"
                    className="h-4 w-4 text-[#27A3FA] focus:ring-[#27A3FA] border-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                    Remember me
                  </label>
                </div>
                <div className="text-sm">
                  <a href="#" className="font-medium text-[#27A3FA] hover:text-[#27A3FA]">
                    Forgot your password?
                  </a>
                </div>
              </motion.div>
              <motion.button
                type="submit"
                className="w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#27A3FA] hover:bg-[#2784F5] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#27A3FA]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Sign in
              </motion.button>
              {/* added error text */}
              {
                error ? <p className="text-red-500 text-xl">{error}</p> :
                  success && <p className="text-2xl text-green-500">{success}</p>
              }

            </form>
            <div className="relative mt-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or continue with</span>
              </div>
            </div>
            <motion.div
              className="mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <button
                onClick={handleGoogleSign}
                type="button"
                className="w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-gray-700 font-medium flex items-center justify-center hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#27A3FA]"
              // whileHover={{ scale: 1.05 }}
              // whileTap={{ scale: 0.95 }}
              >
                <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                  <path fill="#EA4335" d="M24 9.5c3.94 0 6.64 1.64 8.16 3l6.16-6.17C34.53 3.9 29.87 2 24 2 14.73 2 7.05 7.84 4.1 16.26l7.27 5.65C12.85 14.61 18.01 9.5 24 9.5z" />
                  <path fill="#4285F4" d="M46.09 24.5c0-1.77-.14-3.48-.41-5.14H24v9.74h12.52c-.54 2.9-2.13 5.37-4.48 7.03l7.27 5.65C43.92 37.77 46.09 31.74 46.09 24.5z" />
                  <path fill="#FBBC05" d="M7.33 28.91c-1.44-2.33-2.27-5.03-2.27-7.91s.83-5.58 2.27-7.91l-7.27-5.65C.38 12.63 0 18.19 0 24s.38 11.37 1.07 16.56l7.26-5.65z" />
                  <path fill="#34A853" d="M24 46c5.87 0 10.53-1.9 14.16-5.52l-7.27-5.65c-1.52 1.37-4.21 3-8.16 3-6.01 0-11.17-5.11-12.63-11.91l-7.27 5.65C7.05 40.16 14.73 46 24 46z" />
                </svg>
                Sign in with Google
              </button>

            </motion.div>
            <motion.p
              className="mt-6 text-center text-sm text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Do not have an account?{' '}
              <a href="#" className="font-medium text-[#27A3FA] hover:text-[#2784F5]">
                <Link to={'/register'}> Sign up </Link>
              </a>
            </motion.p>
          </motion.div>
        </div>

      </div>

    </div>
  );
};

export default Login;