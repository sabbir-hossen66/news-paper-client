import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";


const Root = () => {
  return (
    <div className="font-outfit">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;