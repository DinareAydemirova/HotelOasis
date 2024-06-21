import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

const EditRestaurant = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [gallery, setGallery] = useState({ image: "" });

  useEffect(() => {
    axios.get(`/restaurant/${id}`).then((res) => {
      setGallery(res.data);
    });
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setGallery({
      ...gallery,
      [name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault(); 
    axios
      .put(`/restaurant/${id}`, gallery)
      .then(() => {
        navigate('/admin/restaurant'); 
      })
      .catch((error) => {
        console.error('There was an error updating the gallery!', error);
      });
  };

  return (
    <div className="text-gray-900 bg-gray-200 min-h-screen flex items-center justify-center">
      <Helmet>
        <title>Admin Edit Gallery - kinsley</title>
        <link
          rel="shortcut icon"
          href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKUgFpfnDFc3lR56q1erL71EEv1lNvDYrbfQ&s"
          type="image/x-icon"
        />
      </Helmet>
      <form className="bg-white p-6 rounded shadow-md w-full max-w-lg" onSubmit={handleFormSubmit}>
        <h2 className="text-2xl mb-4">Edit Restaurant Gallery</h2>
        <div className="mb-4">
          <label className="block text-gray-700">Image URL</label>
          <input
            type="text"
            name="image"
            value={gallery.image}
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
  );
};

export default EditRestaurant;
