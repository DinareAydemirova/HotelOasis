import axios from "axios";
import React, { useEffect, useState } from "react";
import { IoMdSearch } from "react-icons/io";

const ManageTeam = () => {
    const [data, setData] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
  
    useEffect(() => {
      axios.get("/team").then((res) => {
        setData(res.data);
      });
    }, []);
  
    const filteredData = data.filter((team) =>
      team.fullname.toLowerCase().includes(searchQuery.toLowerCase())
    );
  return (
    <div className="text-gray-900 bg-gray-200 min-h-screen">
    <div className="p-4 flex justify-between">
      <div className="flex gap-4">
        <h1 className="text-3xl">Team</h1>

        <button className="px-4 py-2 text-black backdrop-blur-sm border border-black rounded-md hover:shadow-[0px_0px_4px_4px_rgba(0,0,0,0.1)] bg-white/[0.2] text-sm transition duration-200">
          Add new team member
        </button>
      </div>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <IoMdSearch className="text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
        />
      </div>
    </div>
    <div className="px-3 py-4 flex justify-center">
      <table className="w-full text-md bg-white shadow-md rounded mb-4">
        <thead>
          <tr className="border-b">
            <th className="text-left p-3 px-5">Image</th>
            <th className="text-left p-3 px-5">Full name</th>
            <th className="text-left p-3 px-5">Position</th>
            <th className="text-left p-3 px-5">Email</th>
            <th className="text-left p-3 px-5">Detail</th>
            <th className="text-left p-3 px-5">Edit</th>
            <th className="text-left p-3 px-5">Delete</th>
          </tr>
        </thead>
        <tbody>
          {filteredData?.map((elem) => (
            <tr
              key={elem.id}
              className="border-b hover:bg-orange-100 bg-gray-100"
            >
              <td className="p-3 px-5">
                <img src={elem.image} alt={elem.name} className="w-24" />
              </td>
              <td className="p-3 px-5">{elem.fullname}</td>
              <td className="p-3 px-5">{elem.position}</td>
              <td className="p-3 px-5">{elem.email}</td>
              <td className="p-3 px-5">
                <div className="flex justify-center">
                  <button
                    type="button"
                    className="text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                  >
                    Detail
                  </button>
                </div>
              </td>
              <td className="p-3 px-5">
                <div className="flex justify-center">
                  <button
                    type="button"
                    className="text-sm bg-green-500 hover:bg-green-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                  >
                    Edit
                  </button>
                </div>
              </td>
              <td className="p-3 px-5">
                <div className="flex justify-center">
                  <button
                    type="button"
                    className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  )
}

export default ManageTeam