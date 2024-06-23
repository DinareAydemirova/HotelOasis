import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

const Dashboard = () => {
  const [rooms, setRooms] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("/rooms").then((res) => {
      setRooms(res.data);
    });
  }, []);

  useEffect(() => {
    axios.get("/users").then((res) => {
      setUsers(res.data);
    });
  }, []);

  return (
    <div>
      <Helmet>
        <title>Dashboard - kinsley</title>
        <link
          rel="shortcut icon"
          href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKUgFpfnDFc3lR56q1erL71EEv1lNvDYrbfQ&s"
          type="image/x-icon"
        />
      </Helmet>
      <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">
        <div className="container max-w-6xl px-5 mx-auto my-7">
          <p className="mb-7 text-3xl font-semibold	">Welcome!</p>

          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex items-center justify-between p-5 bg-white rounded shadow-sm">
              <div>
                <div className="text-sm text-gray-400">Total Comments</div>
                <div className="flex items-center pt-1">
                  <div className="text-xl font-medium text-indigo-400">
                    $9850.90
                  </div>
                </div>
              </div>
              <div className="text-gray-300">
                <svg
                  className="h-8 w-8"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {" "}
                  <path stroke="none" d="M0 0h24v24H0z" />{" "}
                  <path d="M4 21v-13a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-9l-4 4" />{" "}
                  <line x1={12} y1={11} x2={12} y2="11.01" />{" "}
                  <line x1={8} y1={11} x2={8} y2="11.01" />{" "}
                  <line x1={16} y1={11} x2={16} y2="11.01" />
                </svg>
              </div>
            </div>
            <div className="flex items-center justify-between p-5 bg-white rounded shadow-sm">
              <div>
                <div className="text-sm text-gray-400 ">Total Rooms</div>
                <div className="flex items-center pt-1">
                  <div className="text-xl font-medium text-indigo-400 ">
                    {rooms.length}
                  </div>
                </div>
              </div>
              <div className="text-gray-300">
                <svg
                  className="h-8 w-8"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {" "}
                  <path stroke="none" d="M0 0h24v24H0z" />{" "}
                  <path d="M3 7v11m0 -4h18m0 4v-8a2 2 0 0 0 -2 -2h-8v6" />{" "}
                  <circle cx={7} cy={10} r={1} />
                </svg>
              </div>
            </div>
            <div className="flex items-center justify-between p-5 bg-white rounded shadow-sm">
              <div>
                <div className="text-sm text-gray-400 ">Customers</div>
                <div className="flex items-center pt-1">
                  <div className="text-xl font-medium text-indigo-400">
                    {users.length}
                  </div>
                </div>
              </div>
              <div className="text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8"
                  fill="none"
                  viewBox="0 0 47 46"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M39.167 40.25v-3.833a7.585 7.585 0 00-2.295-5.422 7.92 7.92 0 00-5.539-2.245H15.667a7.92 7.92 0 00-5.54 2.245 7.585 7.585 0 00-2.294 5.422v3.833M23.5 21.083c4.326 0 7.833-3.432 7.833-7.666 0-4.235-3.507-7.667-7.833-7.667-4.326 0-7.833 3.432-7.833 7.667 0 4.234 3.507 7.666 7.833 7.666z"
                  />
                </svg>
              </div>
            </div>
            <div className="flex items-center justify-between p-5 bg-white rounded shadow-sm">
              <div>
                <div className="text-sm text-gray-400 ">MRR</div>
                <div className="flex items-center pt-1">
                  <div className="text-xl font-medium text-indigo-400 ">
                    $250.00
                  </div>
                </div>
              </div>
              <div className="text-gray-300">
                <svg
                  className="w-8 h-8"
                  viewBox="0 0 47 46"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.5 38.3334V19.1667"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M35.25 38.3334V7.66675"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11.75 38.3334V30.6667"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
