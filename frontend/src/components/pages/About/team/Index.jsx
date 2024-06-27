import React, { useEffect, useState } from "react";
import style from "../team/Team.module.scss";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import axios from "axios";
import SkeletonLoader from "../../../../skeletonLoader/Index";

const Team = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("/team").then((res) => {
      setData(res.data);
      setLoading(false);
    });
  }, []);

  const filteredData = data.filter((elem) => elem.position !== "Chef");

  return (
    <div className={style.teamSec}>
      <div className={style.container}>
        <div className={style.headings}>
          <h1>Our awesome Team</h1>
          <p>
            Consectetur adipisicing elit. Nihil, illum voluptate eveniet ex
            fugit ea delectus, sed voluptatem. Laborum accusantium libero
            commodi id officiis itaque esse adipisci, necessitatibus asperiores,
            illo odio.
          </p>
        </div>

        {loading ? (
          <SkeletonLoader /> 
        ) : (
          <div className={style.teamMembers}>
            {filteredData?.map((elem) => (
              <div className={style.member} key={elem._id}>
                <img src={elem.image} alt="" />
                <h3>{elem.fullname}</h3>
                <p>{elem.position}</p>
                <div className={style.social}>
                  <div>
                    <FaFacebookF />
                  </div>
                  <div>
                    <FaInstagram />
                  </div>
                  <div>
                    <FaTwitter />
                  </div>
                  <div>
                    <FaYoutube />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Team;
