import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ShowModal from "../ShowModal/ShowModal";


const ModalPage = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setShowModal(true);
    }, 10000); // 10 seconds

    return () => clearTimeout();
  }, []);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSubscribe = () => {
    navigate('/subscription');
  };
  return (
    <div className=" items-center justify-center bg-gray-100">

      {showModal && (
        <ShowModal onClose={handleCloseModal} onSubscribe={handleSubscribe} />
      )}
    </div>
  );
};

export default ModalPage;