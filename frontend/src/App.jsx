import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../src/components/layout/Index";
import Home from "../src/components/pages/Home/Index";
import Rooms from "../src/components/pages/Rooms/Index";
import ScrollToTop from "./hooks/ScrollToTop";
import RoomDetail from "../src/components/pages/Rooms/roomsDetail/Index";
import About from "../src/components/pages/About/Index";
import Contact from "../src/components/pages/Contact/Index";
import Restaurants from "../src/components/pages/Restaurants/Index";
import Login from "../src/components/pages/Login/Index";
import Register from "../src/components/pages/Register/Index";
import AdminPanel from "../src/components/pages/AdminPanel/Index";
import ManageRooms from "./components/pages/AdminPanel/ManageRooms/Index";
import Dashboard from "./components/pages/AdminPanel/Dashboard/Index";
import ManageMenu from "./components/pages/AdminPanel/ManageMenu/Index";
import ManageHotelImage from "./components/pages/AdminPanel/ManageHotelGalery/Index";
import ManageRestaurantGallery from "./components/pages/AdminPanel/ManageRestaurantGallery/Index";
import ManageTeam from "./components/pages/AdminPanel/ManageTeam/Index";
import ResetPssword from "./components/pages/ResetPassword/Index";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="rooms" element={<Rooms />} />
          <Route path="rooms/:id" element={<RoomDetail />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="restaurants" element={<Restaurants />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="resetpassword" element={<ResetPssword />} />

        </Route>
        <Route path="/admin" element={<AdminPanel />}>
          <Route index element={<Dashboard />} />
          <Route path="rooms" element={<ManageRooms />} />
          <Route path="menu" element={<ManageMenu />} />
          <Route path="gallery" element={<ManageHotelImage />} />
          <Route path="restaurant" element={<ManageRestaurantGallery />} />
          <Route path="team" element={<ManageTeam />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
