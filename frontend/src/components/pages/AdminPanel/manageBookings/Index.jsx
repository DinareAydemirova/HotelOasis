import { Stack, Pagination } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

const Bookings = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [rowsPerPage] = useState(10);

  useEffect(() => {
    axios.get("/booking").then((res) => {
      setData(res.data);
    });
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`/booking/${id}`)
      .then(() => {
        setData((prevData) => prevData.filter((booking) => booking._id !== id));
      })
      .catch((error) => {
        console.error("There was an error deleting the booking!", error);
      });
  };

  const handleChangePage = (event, value) => {
    setPage(value);
  };

  const paginatedData = data.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );
  return (
    <div className="text-gray-900 bg-gray-200 min-h-screen">
      <Helmet>
        <title>Admin Manage Bookings - kinsley</title>
        <link
          rel="shortcut icon"
          href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKUgFpfnDFc3lR56q1erL71EEv1lNvDYrbfQ&s"
          type="image/x-icon"
        />
      </Helmet>
      <div className="p-4 flex justify-between">
        <h1 className="text-3xl">Bookings</h1>
      </div>
      <div className="px-3 py-4">
        <div className="flex justify-center">
          <table className="w-full text-md bg-white shadow-md rounded mb-4">
            <thead>
              <tr className="border-b">
                <th className="text-left p-3 px-5">ID</th>
                <th className="text-left p-3 px-5">Room ID</th>
                <th className="text-left p-3 px-5">Check In</th>
                <th className="text-left p-3 px-5">Check Out</th>
                <th className="text-left p-3 px-5">Total Amount</th>
              </tr>
            </thead>
            <tbody>
              {paginatedData.map((elem) => (
                <tr
                  key={elem._id}
                  className="border-b hover:bg-orange-100 bg-gray-100"
                >
                  <td className="p-3 px-5">{elem._id}</td>
                  <td className="p-3 px-5">{elem.roomid}</td>
                  <td className="p-3 px-5">{elem.checkIn}</td>
                  <td className="p-3 px-5">{elem.checkOut}</td>
                  <td className="p-3 px-5">{elem.totalAmount}</td>

                  <td className="p-3 px-5">
                    <div>
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
              count={Math.ceil(data.length / rowsPerPage)}
              page={page}
              onChange={handleChangePage}
              color="primary"
            />
          </Stack>
        </div>
      </div>
    </div>
);
};

export default Bookings;
