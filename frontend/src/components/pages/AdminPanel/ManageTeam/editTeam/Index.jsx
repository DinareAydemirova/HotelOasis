import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Helmet } from "react-helmet";

const EditTeam = () => {
   const {id} = useParams();
   const navigate = useNavigate();
   const [team, setTeam] = useState({
    image: '',
    fullname: '',
    age: '',
    email: '',
    phone: '',
    position: '',
   });

   useEffect(() => {
     axios.get(`/team/${id}`).then((res) => {
        setTeam(res.data);
     }).catch((error) => {
        console.error('There was an error fetching the team data!', error);
     });
   }, [id]);

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setTeam({
        ...team,
        [name]: value,
    });
   }

   const handleFormSubmit = (e) => {
    e.preventDefault();
    axios.put(`/team/${id}`, team).then(() => {
        navigate("/admin/team");
    }).catch((error) => {
        console.error('There was an error updating the team!', error);
    });
   }

  return (
    <div className="text-gray-900 bg-gray-200 min-h-screen flex items-center justify-center">
       <Helmet>
        <title>Admin Edit Team - kinsley</title>
        <link
          rel="shortcut icon"
          href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKUgFpfnDFc3lR56q1erL71EEv1lNvDYrbfQ&s"
          type="image/x-icon"
        />
      </Helmet>
    <form className="bg-white p-6 rounded shadow-md w-full max-w-lg" onSubmit={handleFormSubmit}>
      <h2 className="text-2xl mb-4">Edit Member</h2>
      <div className="mb-4">
        <label className="block text-gray-700">Full Name</label>
        <input
          type="text"
          name="fullname"
          value={team.fullname}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Position</label>
        <textarea
          name="position"
          value={team.position}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Age</label>
        <input
          type="number"
          name="age"
          value={team.age}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          value={team.email}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Image URL</label>
        <input
          type="text"
          name="image"
          value={team.image}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border rounded"
          placeholder="Enter image URL"
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Save Changes
      </button>
    </form>
  </div>
  )
}

export default EditTeam;
