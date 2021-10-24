import Login from "../pages/Login/Login";
import Signup from "../pages/Signup";
import Home from "../pages/Home/Home";

const mainRoutes = [
  { path: "/", exact: true, Component: Home },
  { path: "/login", exact: true, Component: Login },
  { path: "/signup", exact: true, Component: Signup },
];

export default mainRoutes;
