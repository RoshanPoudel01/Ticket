import { Navigate, createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Navlink } from "./Navlink";
import NavBar from "../Components/NavBar/NavBar";
import Footer from "../Components/Footer/Footer";
import Login from "../User/Login";
import Register from "../User/Register";
import AddMovie from "../Dashboard/AddMovie";
import axios from "axios";
import Sidebard from "../Components/Sidebar";
const commonRoutes = [
  {
    path: Navlink?.homePage,
    element: (
      <NavBar>
        <App />
        <Footer />
      </NavBar>
    ),
  },
  {
    path: Navlink?.register,
    element: (
      <NavBar>
        <Register />
      </NavBar>
    ),
  },
  {
    path: "*",
    replace: true,
    element: <Navigate to={Navlink?.homePage} replace />,
  },
];
const openRoutes = [
  ...commonRoutes,
  {
    path: Navlink?.login,
    element: (
      <NavBar>
        <Login />
      </NavBar>
    ),
  },

  // {
  //   path: Navlink?.addMovie,
  //   element: (
  //     <NavBar>
  //       <AddMovie />
  //     </NavBar>
  //   ),
  // },
];
const closedRoutes = [
  ...commonRoutes,
  {
    path: Navlink?.addMovie,
    element: (
      <Sidebard>
        <AddMovie />
      </Sidebard>
    ),
  },
];
// gue
//add/
// role nikalaa ,

const apiCall = async () => {
  try {
    const usertoken = await localStorage.getItem("usertoken");
    const headers = {
      token: usertoken,
    };
    const res = await axios.get(
      `http://localhost:5000/api/users/user-details`,
      {
        headers: { ...headers },
      }
    );
    return res?.data?.user?.user_type ?? null;
  } catch (e) {
    return null;
  }
};
const userType = await apiCall(); // Wait for the API call to complete

export const router = createBrowserRouter(
  userType === "guest" ? closedRoutes : openRoutes
);
