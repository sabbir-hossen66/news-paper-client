import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer/Footer";


const Root = () => {
  const location = useLocation();
  console.log(location);
  const withoutHeaderFooter = location.pathname.includes('login') || location.pathname.includes('register')
  return (
    <div className="font-outfit">
      {withoutHeaderFooter || <Navbar></Navbar>}
      <Outlet></Outlet>
      {withoutHeaderFooter || <Footer></Footer>}
    </div>
  );
};

export default Root;