import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from '../src/components/layout/Index'
import Home from '../src/components/pages/Home/Index'
import Rooms from '../src/components/pages/Rooms/Index'
import ScrollToTop from "./hooks/ScrollToTop";
import RoomDetail from '../src/components/pages/Rooms/roomsDetail/Index'
import About from '../src/components/pages/About/Index'
import Contact from '../src/components/pages/Contact/Index'
import Restaurants from '../src/components/pages/Restaurants/Index'
import Login from '../src/components/pages/Login/Index'
import Register from '../src/components/pages/Register/Index'


function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path="Rooms" element={<Rooms />} />
          <Route path=":id" element={<RoomDetail />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="Restaurants" element={<Restaurants />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
