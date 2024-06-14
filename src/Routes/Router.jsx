import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddArticles from "../Pages/AddArticles/AddArticles";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import User from "../Pages/Dashboard/User/User";
import AllArticles from "../Pages/AllArticles/AllArticles";
import DetailArticle from "../Pages/DetailArticle/DetailArticle";
import AllUsers from "../Pages/AllUsers/AllUsers";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/add-articles",
        element: <PrivateRoute><AddArticles></AddArticles></PrivateRoute>,
      },
      {
        path: "/all-articles",
        element: <AllArticles></AllArticles>,
      },
      {
        path: "/detail-article/:id",
        element: <PrivateRoute><DetailArticle></DetailArticle></PrivateRoute>,

      },

      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },


    ],

  },
  /* dashboard object */
  {
    path: 'dashboard',
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: 'all-users',
        element: <AllUsers></AllUsers>
      },
      {
        path: 'user',
        element: <User></User>
      }
    ]
  }
]);