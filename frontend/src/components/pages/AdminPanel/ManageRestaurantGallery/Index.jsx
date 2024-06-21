import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";

const ManageRestaurantGallery = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("/restaurant").then((res) => {
      setData(res.data);
    });
  }, []);

  const handleDelete = (id) => {
    axios.delete(`/restaurant/${id}`).then(() => {
      setData((prevData) => prevData.filter((room) => room._id !== id));
    })
    .catch((error)=>{
      console.error("There was an error deleting the image!", error)
    })
  };

  return (
    <div className="text-gray-900 bg-gray-200 min-h-screen">
      <Helmet>
        <title>Admin Manage gallery - kinsley</title>
        <link
          rel="shortcut icon"
          href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKUgFpfnDFc3lR56q1erL71EEv1lNvDYrbfQ&s"
          type="image/x-icon"
        />
      </Helmet>
      <div className="p-4 flex justify-between">
        <h1 className="text-3xl">Hotel Gallery</h1>
        <button className="px-4 py-2 text-black backdrop-blur-sm border border-black rounded-md hover:shadow-[0px_0px_4px_4px_rgba(0,0,0,0.1)] bg-white/[0.2] text-sm transition duration-200"
        onClick={()=>navigate("/admin/restaurant/post")}
        >
          Add Image
        </button>
      </div>
      <div className="px-3 py-4">
        <div className="flex justify-center">
          <table className="w-full text-md bg-white shadow-md rounded mb-4">
            <thead>
              <tr className="border-b">
                <th className="text-left p-3 px-5">Image</th>
                <th className="text-left p-3 px-5">Edit</th>
                <th className="text-left p-3 px-5">Delete</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((elem) => (
                <tr
                  key={elem.id}
                  className="border-b hover:bg-orange-100 bg-gray-100"
                >
                  <td className="p-3 px-5">
                    <img src={elem.image} alt={elem.name} className="w-24" />
                  </td>
                  <td className="p-3 px-5">
                    <div>
                      <button
                        type="button"
                        className="text-sm bg-green-500 hover:bg-green-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                        onClick={() =>
                          navigate(`/admin/restaurant/edit/${elem._id}`)
                        }
                      >
                        Edit
                      </button>
                    </div>
                  </td>
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
      </div>
    </div>
  );
};

export default ManageRestaurantGallery;
