import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddArticles from "../Pages/AddArticles/AddArticles";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import AllArticles from "../Pages/AllArticles/AllArticles";
import DetailArticle from "../Pages/DetailArticle/DetailArticle";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import MyProfile from "../Pages/MyProfile/MyProfile";
import UpdateProfile from "../Pages/UpdateProfile/UpdateProfile";
import SubsCription from "../Pages/SubsCription/SubsCription";
import Payment from "../Pages/Payment/Payment";
import PremiumArticle from "../Pages/PremiumArticle/PremiumArticle";
import AdminRoute from "./AdminRoute";
import AddPublisher from "../Pages/Dashboard/AddPublisher/AddPublisher";



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
        path: "/my-profile",
        element: <PrivateRoute><MyProfile></MyProfile></PrivateRoute>,
      },
      {
        path: "/update-profile",
        element: <UpdateProfile></UpdateProfile>
      },
      {
        path: "/subscription",
        element: <PrivateRoute><SubsCription></SubsCription></PrivateRoute>
      },
      {
        path: "/premium-article",
        element: <PrivateRoute><PremiumArticle></PremiumArticle></PrivateRoute>
      },
      {
        path: '/payment',
        element: <Payment></Payment>
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
        // TODO:ADMIN ROUTE
        path: 'all-users',
        element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
      },
      {
        path: 'add-publisher',
        element: <AdminRoute><AddPublisher></AddPublisher></AdminRoute>
      }
    ]
  }
]);