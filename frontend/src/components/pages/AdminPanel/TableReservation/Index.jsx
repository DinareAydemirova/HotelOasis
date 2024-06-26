import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { IoMdSearch } from "react-icons/io";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import axios from "axios"; 

const TableReservation = () => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);
  const [rowsPerPage] = useState(5);

  useEffect(() => {
    axios.get("/reservation").then((res) => {
      setData(res.data);
      console.log(res.data)
    });
  }, []);

  const filteredData = data.filter((reservation) =>
    reservation.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDelete = (id) => {
    axios
      .delete(`/reservation/${id}`)
      .then(() => {
        setData((prevData) => prevData.filter((reservation) => reservation._id !== id));
      })
      .catch((error) => {
        console.error("There was an error deleting the reservation!", error);
      });
  };

  const paginatedData = filteredData.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );

  const handleChangePage = (event, value) => {
    setPage(value);
  };

  return (
    <div className="text-gray-900 bg-gray-200 min-h-screen">
      <Helmet>
        <title>Admin Manage Reservations - kinsley</title>
        <link
          rel="shortcut icon"
          href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKUgFpfnDFc3lR56q1erL71EEv1lNvDYrbfQ&s"
          type="image/x-icon"
        />
      </Helmet>
      <div className="p-4 flex justify-between">
        <div className="flex gap-4">
          <h1 className="text-3xl">Reservations</h1>
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
              <th className="text-left p-3 px-5">ID</th>
              <th className="text-left p-3 px-5">Day</th>
              <th className="text-left p-3 px-5">Time</th>
              <th className="text-left p-3 px-5">Email</th>
              <th className="text-left p-3 px-5">People</th>
              <th className="text-left p-3 px-5">Delete</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData?.map((elem) => (
              <tr
                key={elem._id} 
                className="border-b hover:bg-orange-100 bg-gray-100"
              >
                <td className="p-3 px-5">{elem._id}</td> 
                <td className="p-3 px-5">{elem.day}</td>
                <td className="p-3 px-5">{elem.time}</td>
                <td className="p-3 px-5">{elem.email}</td>
                <td className="p-3 px-5">{elem.people}</td>

                <td className="p-3 px-5">
                  <div className="flex justify-center">
                    <button
                      type="button"
                      className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                      onClick={() => handleDelete(elem._id)}
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
      <div className="flex justify-center my-4 pb-8">
        <Stack spacing={2}>
          <Pagination
            count={Math.ceil(filteredData.length / rowsPerPage)}
            page={page}
            onChange={handleChangePage}
            color="primary"
          />
        </Stack>
      </div>
    </div>
  );
};

export default TableReservation;
