import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const EditRoom = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [roomData, setRoomData] = useState({
    name: '',
    description: '',
    price: '',
    people: '',
    rate: '',
    images: [],
  });

  useEffect(() => {
    axios.get(`/rooms/${id}`).then((res) => {
      setRoomData(res.data);
    });
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRoomData({
      ...roomData,
      [name]: value,
    });
  };

  const handleImageChange = (e, index) => {
    const newImages = [...roomData.images];
    newImages[index] = e.target.value;
    setRoomData({
      ...roomData,
      images: newImages,
    });
  };

  const handleAddImage = () => {
    setRoomData({
      ...roomData,
      images: [...roomData.images, ''],
    });
  };

  const handleRemoveImage = (index) => {
    const newImages = roomData.images.filter((_, i) => i !== index);
    setRoomData({
      ...roomData,
      images: newImages,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault(); 
    axios
      .put(`/rooms/${id}`, roomData)
      .then(() => {
        navigate('/admin/rooms'); 
      })
      .catch((error) => {
        console.error('There was an error updating the room!', error);
      });
  };

  return (
    <div className="text-gray-900 bg-gray-200 min-h-screen flex items-center justify-center">
      <form className="bg-white p-6 rounded shadow-md w-full max-w-lg" onSubmit={handleFormSubmit}>
        <h2 className="text-2xl mb-4">Edit Room</h2>
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={roomData.name}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Description</label>
          <textarea
            name="description"
            value={roomData.description}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Price</label>
          <input
            type="number"
            name="price"
            value={roomData.price}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">People</label>
          <input
            type="number"
            name="people"
            value={roomData.people}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Rate</label>
          <input
            type="number"
            name="rate"
            value={roomData.rate}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Images</label>
          {roomData.images.map((image, index) => (
            <div key={index} className="flex items-center mb-2">
              <input
                type="text"
                value={image}
                onChange={(e) => handleImageChange(e, index)}
                className="w-full px-3 py-2 border rounded"
              />
              <button
                type="button"
                onClick={() => handleRemoveImage(index)}
                className="ml-2 px-3 py-2 bg-red-500 text-white rounded"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={handleAddImage}
            className="mt-2 px-4 py-2 bg-green-500 text-white rounded"
          >
            Add Image
          </button>
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditRoom;
