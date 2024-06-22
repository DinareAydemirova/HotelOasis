import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import GridLoader from "react-spinners/GridLoader";
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
import ResetPassword from "./components/pages/ResetPassword/Index";
import ManageUsers from "./components/pages/AdminPanel/ManageUsers/Index";
import EditRoom from "./components/pages/AdminPanel/ManageRooms/editRoom/Index";
import EditRestaurant from "./components/pages/AdminPanel/ManageRestaurantGallery/editRestaurant/Index";
import EditHotelGallery from "./components/pages/AdminPanel/ManageHotelGalery/editHotelGallery/Index";
import EditMenu from "./components/pages/AdminPanel/ManageMenu/editMenu/Index";
import MenuDetail from "./components/pages/AdminPanel/ManageMenu/detailMenu/Index";
import EditTeam from "./components/pages/AdminPanel/ManageTeam/editTeam/Index";
import TeamDetail from "./components/pages/AdminPanel/ManageTeam/teamDetail/Index";
import PostTeamMember from "./components/pages/AdminPanel/ManageTeam/postTeamMember/Index";
import PostRooms from "./components/pages/AdminPanel/ManageRooms/postRooms/Index";
import PostMenu from "./components/pages/AdminPanel/ManageMenu/postMenu/Index";
import PostHotelImage from "./components/pages/AdminPanel/ManageHotelGalery/postImage/Index";
import PostRestaurantImage from "./components/pages/AdminPanel/ManageRestaurantGallery/postRestaurantImage/Index";
import Page404 from "./components/pages/404Page/Index";
import PrivateRoute from "./routes/PrivateRouter";

function App() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setUser({ role: "Admin" });
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <GridLoader color="#add8e6" loading={loading} />
      </div>
    );
  }

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="rooms" element={<Rooms />} />
          <Route path="rooms/:id" element={<RoomDetail />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="restaurants" element={<Restaurants />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="resetpassword" element={<ResetPassword />} />
          <Route path="*" element={<Page404 />} />
         
        </Route>
        <Route element={<PrivateRoute roles={["Admin"]} />}>
            <Route path="admin/*" element={<AdminPanel />}>
              <Route index element={<Dashboard />} />
              <Route path="rooms" element={<ManageRooms />} />
              <Route path="menu" element={<ManageMenu />} />
              <Route path="gallery" element={<ManageHotelImage />} />
              <Route path="restaurant" element={<ManageRestaurantGallery />} />
              <Route path="team" element={<ManageTeam />} />
              <Route path="users" element={<ManageUsers />} />
              <Route path="rooms/:id" element={<RoomDetail />} />
              <Route path="menu/:id" element={<MenuDetail />} />
              <Route path="team/:id" element={<TeamDetail />} />
              <Route path="rooms/edit/:id" element={<EditRoom />} />
              <Route path="restaurant/edit/:id" element={<EditRestaurant />} />
              <Route path="gallery/edit/:id" element={<EditHotelGallery />} />
              <Route path="menu/edit/:id" element={<EditMenu />} />
              <Route path="team/edit/:id" element={<EditTeam />} />
              <Route path="team/post" element={<PostTeamMember />} />
              <Route path="rooms/post" element={<PostRooms />} />
              <Route path="menu/post" element={<PostMenu />} />
              <Route path="gallery/post" element={<PostHotelImage />} />
              <Route path="restaurant/post" element={<PostRestaurantImage />} />
            </Route>
          </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
