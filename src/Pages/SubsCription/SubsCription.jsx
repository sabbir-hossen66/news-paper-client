import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { AuthContext } from "../../Providers/AuthProviders";
import Swal from "sweetalert2";


const SubsCription = () => {
  const { user } = useContext(AuthContext)
  const [subscriptionPeriod, setSubscriptionPeriod] = useState("");
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();

  const handleSubscriptionChange = (e) => {
    setSubscriptionPeriod(e.target.value);
  };

  const handleSubscriptionSubmit = async () => {
    let paymentInfo = {
      user: user?.email,
      validation: subscriptionPeriod,
      status: 'pending',
      plan: subscriptionPeriod,
    };

    if (subscriptionPeriod === "1 minute") {
      paymentInfo.price = 4;
    } else if (subscriptionPeriod === "5 days") {
      paymentInfo.price = 50;
    } else if (subscriptionPeriod === "10 days") {
      paymentInfo.price = 80;
    }

    try {
      const res = await axiosPublic.post('/payment', paymentInfo);  // Change to your API endpoint
      console.log(res.data);

      if (res.data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `This ${paymentInfo.plan} plan has been subscribed`,
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/#");
      }
    } catch (error) {
      console.error("Error processing payment: ", error);
    }
  };


  return (
    <div className="container mx-auto my-8 p-4 md:my-16 md:p-8 bg-white shadow-lg rounded-lg">
      {/* Banner Image */}
      <div className="mb-8 flex justify-center">
        <img
          src="https://i.ibb.co/K7fPRRW/subscribe.jpg"
          alt="Banner"
          className="w-1/2 h-72 sm:h-56 md:h-64 lg:h-72 rounded-lg"
        />
      </div>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-8">
        Subscribe Now
      </h2>
      <div className="flex flex-col items-center">
        <label className="mb-4 text-lg">Choose Subscription Period</label>
        <select
          value={subscriptionPeriod}
          onChange={handleSubscriptionChange}
          className="mb-4 px-4 py-2 border rounded-lg w-3/4 sm:w-1/2 md:w-1/3 lg:w-1/4"
        >
          <option value="" disabled>Select a period</option>
          <option value="1 minute">1 Minute</option>
          <option value="5 days">5 Days</option>
          <option value="10 days">10 Days</option>
        </select>
        <button
          onClick={handleSubscriptionSubmit}
          className="bg-blue-500 text-white px-8 py-2 rounded-md shadow-lg transition transform hover:bg-blue-600 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50"
        >
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default SubsCription;