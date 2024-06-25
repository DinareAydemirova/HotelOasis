import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import style from "../roomsDetail/detail.module.scss";
import axios from "axios";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import dayjs from "dayjs";

const RoomDetail = () => {
  const [data, setData] = useState({
    name: "",
    description: "",
    price: 0,
    people: 0,
    images: [],
  });
  const [mainImage, setMainImage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`/rooms/${id}`);
      setData(res.data);
      setMainImage(res.data.images[0]);
    };
    fetchData();
  }, [id]);

  const handleImageClick = (img) => {
    setMainImage(img);
  };

  const handleBookClick = (values) => {
    const checkInDate = dayjs(values.checkIn);
    const checkOutDate = dayjs(values.checkOut);
    const numberOfDays = checkOutDate.diff(checkInDate, "day");
    const total = numberOfDays * data.price;
    setTotalPrice(total);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className={style.roomdetail}>
      <div className={style.container}>
        <div className={style.heading}>
          <h1>Deluxe Room</h1>
          <div className={style.home}>
            <Link to="/">Home</Link>
            <IoIosArrowForward />
            <Link to="/Rooms">Rooms</Link>
            <IoIosArrowForward />
            <p>{data.name}</p>
          </div>
        </div>
        <div className={style.booking}>
          <div className={style.roomimages}>
            <img src={mainImage} alt={data.name} className={style.mainimage} />
            <div className={style.chilimages}>
              {data.images.map((img, index) => (
                <div
                  key={index}
                  onClick={() => handleImageClick(img)}
                  className={mainImage === img ? style.active : ""}
                >
                  <img src={img} alt={`Room image ${index + 1}`} />
                </div>
              ))}
            </div>
            <div>
              <h3>About Room</h3>
              <p>{data.description}</p>
            </div>
          </div>

          <div className={style.book}>
            <div className={style.info}>
              <p>Rating: {data.rate}</p>
              <p>People: {data.people}</p>
              <div>
                <h1>${data.price}</h1>
                <p>per night</p>
              </div>
            </div>
            <Formik
              initialValues={{ checkIn: "", checkOut: "" }}
              validationSchema={Yup.object({
                checkIn: Yup.date().required("Check-in date is required"),
                checkOut: Yup.date().required("Check-out date is required"),
              })}
              onSubmit={(values) => {
                handleBookClick(values);
              }}
            >
              <Form className={style.form}>
                <div className="flex flex-col">
                  <label htmlFor="checkIn">Check in</label>
                  <Field type="date" name="checkIn" />
                  <ErrorMessage
                    name="checkIn"
                    component="span"
                    className="text-red-500 text-sm"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="checkOut">Check out</label>
                  <Field type="date" name="checkOut" />
                  <ErrorMessage
                    name="checkOut"
                    component="span"
                    className="text-red-500 text-sm"
                  />
                </div>
                <button type="submit">Pay</button>
              </Form>
            </Formik>
          </div>
        </div>
      </div>

      {showModal && (
        <div className={style.modalBackdrop}>
          <div className={style.modalContent}>
            <button className={style.closeButton} onClick={handleCloseModal}>
              X
            </button>
           
            <Formik
              initialValues={{
                email: "",
                cardNumber: "",
                validThrough: "",
                cvc: "",
              }}
              validationSchema={Yup.object({
                email: Yup.string()
                  .required("Email is required")
                  .email("Invalid email address"),
                cardNumber: Yup.string()
                  .length(16, "Must be 16 digits long")
                  .required("Card number is required"),
                validThrough: Yup.string().required("Valid through is required"),
                cvc: Yup.string().required("CVC is required"),
              })}
              onSubmit={(values) => {
                
              }}
            >
              <Form action="" className={style.modalForm}>
                <div className="flex flex-col">
                  <label htmlFor="email">Your Email</label>
                  <Field
                    type="email"
                    name="email"
                    id="email"
                    placeholder="example@gmail.com"
                  />
                  <ErrorMessage
                    name="email"
                    component="span"
                    className="text-red-500 text-sm"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="cardNumber">Card number</label>
                  <Field
                    type="text"
                    name="cardNumber"
                    id="cardNumber"
                    placeholder="**** **** **** ****"
                  />
                  <ErrorMessage
                    name="cardNumber"
                    component="span"
                    className="text-red-500 text-sm"
                  />
                </div>
                <div className={style.cartinfo}>
                  <div className="flex flex-col">
                    <label htmlFor="validThrough">Valid through</label>
                    <Field
                      type="month"
                      name="validThrough"
                      id="validThrough"
                      placeholder="MM/YYYY"
                    />
                    <ErrorMessage
                      name="validThrough"
                      component="span"
                      className="text-red-500 text-sm"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="cvc">CVC code</label>
                    <Field type="text" name="cvc" id="cvc" placeholder="cvc" />
                    <ErrorMessage
                      name="cvc"
                      component="span"
                      className="text-red-500 text-sm"
                    />
                  </div>
                </div>
                <button type="submit" className="bg-green"> ${totalPrice}</button>
              </Form>
            </Formik>
          </div>
        </div>
      )}
    </div>
  );
};

export default RoomDetail;
