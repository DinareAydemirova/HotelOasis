import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useNavigate, useParams } from "react-router-dom";

const EditUsers = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState({ role: '' }); 

  useEffect(() => {
    axios.get(`/users/${id}`).then((res) => {
      setUser(res.data);
    });
  }, [id]);





  return (
    <div className="text-gray-900 bg-gray-200 min-h-screen flex items-center justify-center">
      <Helmet>
        <title>Admin Edit User - kinsley</title>
        <link
          rel="shortcut icon"
          href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKUgFpfnDFc3lR56q1erL71EEv1lNvDYrbfQ&s"
          type="image/x-icon"
        />
      </Helmet>
      <form className="bg-white p-6 rounded shadow-md w-full max-w-lg" >
        <h2 className="text-2xl mb-4">Edit User</h2>
        <div className="mb-4">
          <label className="block text-gray-700">Role</label>
          <select
            name="role"
            value={user.role}
            className="w-full px-3 py-2 border rounded"
          >
            <option value="User">User</option>
            <option value="Admin">Admin</option>
          </select>
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditUsers;
