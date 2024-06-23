import React, { useState } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { MdHome, MdMeetingRoom } from "react-icons/md";
import { GiMeal } from "react-icons/gi";
import { GrGallery } from "react-icons/gr";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import { AiOutlineTeam } from "react-icons/ai";



function AdminPanel() {
  const [showGalleryLinks, setShowGalleryLinks] = useState(false);
  const location = useLocation();


  const toggleGalleryLinks = () => {
    setShowGalleryLinks(!showGalleryLinks);
  };


  return (
    <div className="flex min-h-screen">
      <nav className="w-64 bg-gray-200 text-black">
        <div className="flex justify-center">
          <img
            src="https://kinsley.bslthemes.com/wp-content/uploads/2021/11/logo.png"
            className="space-y-2 p-4 w-36"
            alt=""
          />
        </div>

        <ul className="space-y-2 p-4">
          <li>
            <Link
              to="/admin"
              className={`block py-2 px-4 rounded hover:bg-gray-700 hover:text-white ${
                location.pathname === "/admin" ? "bg-gray-700 text-white" : ""
              }`}
            >
              <p className="flex items-center gap-4">
                <MdHome /> Dashboard
              </p>
            </Link>
          </li>

          <li>
            <Link
              to="/admin/rooms"
              className={`block py-2 px-4 rounded hover:bg-gray-700 hover:text-white ${
                location.pathname === "/admin/rooms"
                  ? "bg-gray-700 text-white"
                  : ""
              }`}
            >
              <p className="flex items-center gap-4">
                <MdMeetingRoom /> Rooms
              </p>
            </Link>
          </li>

          <li>
            <Link
              to="/admin/menu"
              className={`block py-2 px-4 rounded hover:bg-gray-700 hover:text-white ${
                location.pathname === "/admin/menu"
                  ? "bg-gray-700 text-white"
                  : ""
              }`}
            >
              <p className="flex items-center gap-4">
                <GiMeal /> Menu
              </p>
            </Link>
          </li>
          <li>
            <Link
              to="/admin/team"
              className={`block py-2 px-4 rounded hover:bg-gray-700 hover:text-white ${
                location.pathname === "/admin/team"
                  ? "bg-gray-700 text-white"
                  : ""
              }`}
            >
              <p className="flex items-center gap-4">
              <AiOutlineTeam /> Team
              </p>
            </Link>
          </li>
          <li>
            <Link
              to="/admin/users"
              className={`block py-2 px-4 rounded hover:bg-gray-700 hover:text-white ${
                location.pathname === "/admin/users"
                  ? "bg-gray-700 text-white"
                  : ""
              }`}
            >
              <p className="flex items-center gap-4">
              <AiOutlineTeam /> Users
              </p>
            </Link>
          </li>
          <li>
            <button
              onClick={toggleGalleryLinks}
              className={`block py-2 px-4 rounded hover:bg-gray-700 hover:text-white w-full text-left`}
            >
              <p className="flex items-center gap-4">
                <GrGallery />
                Gallery
                {showGalleryLinks ? <FaAngleUp /> : <FaAngleDown />}
              </p>
            </button>
            {showGalleryLinks && (
              <ul className="ml-4">
                <li>
                  <Link
                    to="/admin/restaurant"
                    className={`block py-2 px-4 rounded hover:bg-gray-700 hover:text-white text-slate-400 ${
                      location.pathname === "/admin/restaurant"
                        ? "bg-gray-700 text-white"
                        : ""
                    }`}
                  >
                    Restaurant Gallery
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/gallery"
                    className={`block py-2 px-4 rounded hover:bg-gray-700 hover:text-white text-slate-400 ${
                      location.pathname === "/admin/gallery"
                        ? "bg-gray-700 text-white"
                        : ""
                    }`}
                  >
                    Hotel Gallery
                  </Link>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </nav>
      <div className="flex-1 p-6">
        <Outlet />
      </div>
    </div>
  );
}

export default AdminPanel;
