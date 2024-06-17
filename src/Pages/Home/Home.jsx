import Banner from "../../components/Banner/Banner";
import Feedback from "../../components/Feedback/Feedback";
import ModalPage from "../../components/ModalPage/ModalPage";
import Publishers from "../../components/Publishers/Publishers";
import Support from "../../components/Support/Support";


const Home = () => {
  return (
    <div>

      <Banner></Banner>
      <ModalPage>  </ModalPage>
      <Publishers></Publishers>
      <Feedback></Feedback>
      <Support></Support>

    </div>
  );
};

export default Home;