import React, { useEffect, useState } from "react";
import style from "../allRooms/AllRooms.module.scss";
import { CiBookmark } from "react-icons/ci";
import axios from "axios";
import { Link } from "react-router-dom";

const AllRooms = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("/rooms").then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <div className={style.allRooms}>
      <div className={style.container}>
        <div className={style.sorting}>
          <button>All rooms</button>
          <button>Economy</button>
          <button>Luxe</button>
          <button>Standard</button>
        </div>
        <div className={style.rooms}>
          {data?.map((elem) => {
          return(
            <div className={style.room}>
            <img
              src={elem.images[0]}
              alt=""
            />
            <h2>{elem.name}</h2>
            <p>
              {elem.description.slice(0,90)}...
            </p>
            <div className={style.booking}>
              <div className={style.pricing}>
                <h1>${elem.price}</h1>
                <p>per night</p>
              </div>
              <Link to={`/${elem._id}`}>
                <CiBookmark /> Book
              </Link>
            </div>
          </div>
          )
          })}
        </div>
        <button className={style.loadMore}>Load more</button>
      </div>
    </div>
  );
};

export default AllRooms;
