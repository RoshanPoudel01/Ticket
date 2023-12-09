import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Navlink } from "./Navlink";
import NavBar from "../Components/NavBar/NavBar";
import Footer from "../Components/Footer/Footer";
import Login from "../User/Login";
import Register from "../User/Register";
import AddMovie from "../Dashboard/AddMovie";

export const router = createBrowserRouter([
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
    path: Navlink?.login,
    element: (
      <NavBar>
        <Login />
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
    path: Navlink?.addMovie,
    element: (
      <NavBar>
        <AddMovie />
      </NavBar>
    ),
  },
]);
