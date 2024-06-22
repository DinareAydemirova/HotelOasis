import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";

const RoomDetailAdmin = () => {
  const [data, setData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/rooms/${id}`);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching room detail:", error);
      }
    };
    fetchData();
  }, [id]);

  return (
    <div className="text-gray-900 bg-gray-200 min-h-screen">
      <Helmet>
        <title>Admin Room Detail - kinsley</title>
        <link
          rel="shortcut icon"
          href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKUgFpfnDFc3lR56q1erL71EEv1lNvDYrbfQ&s"
          type="image/x-icon"
        />
      </Helmet>
      <div className="p-4 flex justify-between">
        <div className="flex gap-4">
          <h1 className="text-3xl">Detail</h1>
        </div>
      </div>
      <div className="px-3 py-4 flex justify-center">
        <table className="w-full text-md bg-white shadow-md rounded mb-4">
          <thead>
            <tr className="border-b">
              <th className="text-left p-3 px-5">Images</th>
              <th className="text-left p-3 px-5">ID</th>
              <th className="text-left p-3 px-5">Name</th>
              <th className="text-left p-3 px-5">Description</th>
              <th className="text-left p-3 px-5">Price</th>
              <th className="text-left p-3 px-5">People</th>
              <th className="text-left p-3 px-5">Rate</th>
            </tr>
          </thead>
          <tbody>
            <tr
              key={data._id}
              className="border-b hover:bg-orange-100 bg-gray-100"
            >
                <td className="p-3 px-5" rowSpan={data.images?.length}>
                {data.images?.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={data.name}
                    className="w-24 mr-2 mb-2"
                  />
                ))}
              </td>
              <td className="p-3 px-5">{data._id}</td>
              <td className="p-3 px-5">{data.name}</td>
              <td className="p-3 px-5">{data.description}</td>
              <td className="p-3 px-5">{data.price}</td>
              <td className="p-3 px-5">{data.people}</td>
              <td className="p-3 px-5">{data.rate}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RoomDetailAdmin;
