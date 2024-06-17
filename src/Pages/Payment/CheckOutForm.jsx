import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import useAxiosSecure from '../../hooks/useAxiosSecure';
// import SubsCription from "../SubsCription/SubsCription";
import { AuthContext } from "../../Providers/AuthProviders";
import SubsCription from "../SubsCription/SubsCription";

const CheckOutForm = () => {
  const [clientSecret, setClientSecret] = useState('')
  const [error, setError] = useState('')
  const stripe = useStripe();
  const [transactionId, setTransactionId] = useState('')
  const elements = useElements();
  const axiosSecure = useAxiosSecure()
  const { user } = useContext(AuthContext)

  const paymentInfo = SubsCription();
  const totalprice = paymentInfo.price;
  console.log(totalprice);

  useEffect(() => {
    axiosSecure.post('/create-payment-intent', 10)
      .then(res => {
        console.log(res.data.clientSecret);
        setClientSecret(res.data.clientSecret)
      })


  }, [axiosSecure])



  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || elements) {
      return
    }

    const card = elements.getElement(CardElement)

    if (card === null) {
      return
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card
    });

    if (error) {
      console.log('payment error', error);
      setError(error.message)

    }
    else {
      console.log('payment method', paymentMethod);
      setError('')
    }

    // confirm payment
    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: card,
        billing_details: {
          email: user?.email || 'anonymous',
          name: user?.displayName || 'anonymous'
        }
      }
    })

    if (confirmError) {
      console.log('confirm error');
    }
    else {
      console.log('payment intent', paymentIntent);
      if (paymentIntent.status === 'succeeded') {
        console.log(`transjection id`, paymentIntent.id);
        setTransactionId(paymentIntent.id)
        alert('hai hai')
      }
    }


  }

  return (
    <div className="container mx-auto my-16 p-8 bg-white shadow-lg rounded-lg max-w-md">
      {/* Banner Image */}
      <div className="mb-8 flex justify-center">
        <img
          src="https://i.ibb.co/8zNCz1W/download-1.png"
          alt="Banner"
          className="w-80 h-72 sm:w-full sm:h-56 md:h-64 lg:h-72 object-cover rounded-lg"
        />
      </div>
      <h2 className="text-3xl font-semibold text-center mb-8">Payment Form</h2>
      <form onSubmit={handleSubmit} className="">
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />

        <button className="btn btn-sm btn-primary my-4 bg-blue-400 text-white rounded-sm" type="submit" disabled={!stripe || !clientSecret}>
          Pay
        </button>
        <p className="text-red-500">{error}</p>
        {transactionId && <p className="text-green-600">Your Transaction Id: {transactionId}</p>}
      </form>
    </div>
  );
};

export default CheckOutForm;






