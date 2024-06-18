import { Link } from "react-router-dom";

const plans = [
  {
    title: "Premium Individual",
    price: "FREE FOR 1 MONTH",
    buttonText: "Try free for 1 month",
    description: "Free for 1 month, then $10.99 per month after. Offer only available if you haven’t tried Premium before.",
    features: [
      "1 Premium account",
      "Cancel anytime",
      "15 hours/month of listening time from our audiobooks subscriber catalog"
    ],
    isFree: true,
    bgColor: "bg-[#EC4899]",
    buttonBgColor: "bg-pink-500 hover:bg-pink-700",
    borderColor: "border-pink-500"
  },
  {
    title: "Premium Duo",
    price: "$14.99",
    buttonText: "Get Premium Duo",
    description: "For couples who reside at the same address.",
    features: [
      "2 Premium accounts",
      "Cancel anytime",
      "15 hours/month of listening time from our audiobooks subscriber catalog (plan manager only)"
    ],
    bgColor: "bg-[#EAB308]",
    buttonBgColor: "bg-yellow-500 hover:bg-yellow-700",
    borderColor: "border-yellow-500"
  },
  {
    title: "Premium Family",
    price: "$16.99",
    buttonText: "Get Premium Family",
    description: "For up to 6 family members residing at the same address.",
    features: [
      "Up to 6 Premium or Kids accounts",
      "Block explicit music",
      "Access to Spotify Kids",
      "Cancel anytime",
      "15 hours/month of listening time from our audiobooks subscriber catalog (plan manager only)"
    ],
    bgColor: "bg-[#3B82F6]",
    buttonBgColor: "bg-blue-500 hover:bg-blue-700",
    borderColor: "border-blue-500"
  }
];

const PricingCard = () => {
  return (
    <div className="shadow-xl rounded-md text-gray-300 py-16 my-16">
      <h2 className="text-5xl text-black text-center mb-6">Choose Your Plan</h2>
      <div className="container mx-auto px-6 md:px-12 xl:px-24">
        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan, index) => (
            <div key={index} className={`p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border-2 ${plan.borderColor}`}>
              <div className={`text-center mb-4 ${plan.bgColor} p-4 rounded-t-lg`}>
                {plan.isFree && <span className="bg-pink-500 text-white py-1 px-3 rounded-full text-sm mb-2 inline-block">Free For 1 Month</span>}
                <h2 className="text-2xl font-bold">{plan.title}</h2>
                <p className="text-3xl font-extrabold">{plan.price}</p>
              </div>
              <ul className="mb-6 space-y-2">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center space-x-2">
                    <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link to={'/subscription'}>
                <button className={`w-full py-2 rounded-lg ${plan.buttonBgColor} text-white font-semibold transition-transform duration-300 transform hover:scale-105`}>
                  {plan.buttonText}
                </button>
              </Link>

              <p className="text-center text-sm mt-4">{plan.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingCard;