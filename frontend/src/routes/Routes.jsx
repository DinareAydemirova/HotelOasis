import Layout from "../components/layout/Index";
import Home from "../components/pages/Home/Index";
import Rooms from "../components/pages/Rooms/Index";
import About from "../components/pages/About/Index";
import Contact from "../components/pages/Contact/Index";
import Restaurants from "../components/pages/Restaurants/Index";
import Login from "../components/pages/Login/Index";
import Register from "../components/pages/Register/Index";
import RoomDetail from "../components/pages/Rooms/roomsDetail/Index";

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Rooms",
        element: <Rooms />,
        
      },
      {
        path: "/:id",
        element: <RoomDetail />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants",
        element: <Restaurants />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
];

export default routes;
