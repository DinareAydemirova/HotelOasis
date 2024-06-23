import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { IoMdSearch } from "react-icons/io";
import { UserContext } from "../../../../context/userProvider";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const ManageUsers = () => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const { token } = useContext(UserContext);
  const [page, setPage] = useState(1);
  const [rowsPerPage] = useState(10); 

  useEffect(() => {
    axios
      .get("/users", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, [token]);

  const makeUserAdmin = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/users/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          role: "Admin",
        }),
      });
      if (response.ok) {
        setData((prevUsers) =>
          prevUsers.map((user) =>
            user._id === id ? { ...user, role: "Admin" } : user
          )
        );
      } else {
        console.error("Failed to update role to Admin");
      }
    } catch (error) {
      console.error("Error updating role to Admin:", error);
    }
  };

  const makeRoleUser = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/users/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          role: "User",
        }),
      });
      if (response.ok) {
        setData((prevUsers) =>
          prevUsers.map((user) =>
            user._id === id ? { ...user, role: "User" } : user
          )
        );
      } else {
        console.error("Failed to update role to User");
      }
    } catch (error) {
      console.error("Error updating role to User:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/users/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        setData((prevUsers) =>
          prevUsers.filter((user) => user._id !== id)
        );
      } else {
        console.error("Failed to delete user");
      }
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const filteredData = data.filter((user) =>
    user.firstName.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
        <title>Admin Manage Users - kinsley</title>
        <link
          rel="shortcut icon"
          href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKUgFpfnDFc3lR56q1erL71EEv1lNvDYrbfQ&s"
          type="image/x-icon"
        />
      </Helmet>
      <div className="p-4 flex justify-between">
        <div className="flex gap-4">
          <h1 className="text-3xl">Users</h1>
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
              <th className="text-left p-3 px-5">User ID</th>
              <th className="text-left p-3 px-5">First Name</th>
              <th className="text-left p-3 px-5">Last name</th>
              <th className="text-left p-3 px-5">Email</th>
              <th className="text-left p-3 px-5">Role</th>
              <th className="text-left p-3 px-5">Edit</th>
              <th className="text-left p-3 px-5">Delete</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((user) => (
              <tr
                key={user._id}
                className="border-b hover:bg-orange-100 bg-gray-100"
              >
                <td className="p-3 px-5">{user._id}</td>
                <td className="p-3 px-5">{user.firstName}</td>
                <td className="p-3 px-5">{user.lastName}</td>
                <td className="p-3 px-5">{user.email}</td>
                <td className="p-3 px-5">{user.role}</td>
                <td className="p-3 px-5">
                  <div className="flex justify-center">
                    {user.role === "User" ? (
                      <button
                        className="text-sm bg-green-500 hover:bg-green-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                        onClick={() => makeUserAdmin(user._id)}
                      >
                        Make Admin
                      </button>
                    ) : (
                      <button
                        className="text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                        onClick={() => makeRoleUser(user._id)}
                      >
                        Make User
                      </button>
                    )}
                  </div>
                </td>
                <td className="p-3 px-5">
                  <div className="flex justify-center">
                    <button
                      type="button"
                      className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                      onClick={() => handleDelete(user._id)}
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

export default ManageUsers;
