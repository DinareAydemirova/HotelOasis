import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { useParams } from 'react-router-dom'

const TeamDetail = () => {
    const {id} = useParams()
    const [data, setData] = useState({})

    useEffect(() => {
        const fetchData = async () => {
            try {
              const response = await axios.get(`/team/${id}`);
              setData(response.data);
            } catch (error) {
              console.error("Error fetching team detail:", error);
            }
          };
          fetchData();
    }, [id])
    
  return (
    <div className="text-gray-900 bg-gray-200 min-h-screen">
      <Helmet>
        <title>Admin Team Detail - kinsley</title>
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

              <th className="text-left p-3 px-5">image</th>
              <th className="text-left p-3 px-5">Full Name</th>
              <th className="text-left p-3 px-5">Email</th>
              <th className="text-left p-3 px-5">Phone</th>
              <th className="text-left p-3 px-5">Position</th>
              <th className="text-left p-3 px-5">Age</th>

            </tr>
          </thead>
          <tbody>
            <tr
              key={data._id}
              className="border-b hover:bg-orange-100 bg-gray-100"
            >
              <td className="p-3 px-5">
                <img src={data.image} alt="" className="w-24"/>
              </td>

              <td className="p-3 px-5">{data.fullname}</td>
              <td className="p-3 px-5">{data.email}</td>
              <td className="p-3 px-5">{data.phone}</td>
              <td className="p-3 px-5">{data.position}</td>
              <td className="p-3 px-5">{data.age}</td>

            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default TeamDetail