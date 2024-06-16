import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ShowModal from "../ShowModal/ShowModal";


const ModalPage = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setShowModal(true);
    }, 7000); // 7 seconds

    return () => clearTimeout();
  }, []);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSubscribe = () => {
    navigate('/subscribe');
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