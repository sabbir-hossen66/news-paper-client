import { Helmet } from "react-helmet-async";
import Banner from "../../components/Banner/Banner";
import Feedback from "../../components/Feedback/Feedback";
import ModalPage from "../../components/ModalPage/ModalPage";
import Publishers from "../../components/Publishers/Publishers";
import Support from "../../components/Support/Support";
import PricingCard from "../../components/PricingCard/PricingCard";


const Home = () => {
  return (
    <>
      <Helmet>
        <title>BookSwap || Home</title>
      </Helmet>
      <div>
        <Banner></Banner>
        <ModalPage>  </ModalPage>
        <Publishers></Publishers>
        <PricingCard></PricingCard>
        <Feedback></Feedback>
        <Support></Support>

      </div>
    </>
  );
};

export default Home;