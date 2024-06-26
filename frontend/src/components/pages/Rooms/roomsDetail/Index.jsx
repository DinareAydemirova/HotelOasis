import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import style from "../roomsDetail/detail.module.scss";
import axios from "axios";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import dayjs from "dayjs";
import { Helmet } from "react-helmet";

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
  const [bookingError, setBookingError] = useState("");

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/rooms/${id}`);
        setData(res.data);
        setMainImage(res.data.images[0]);
      } catch (error) {
        console.error("Error fetching room data:", error);
      }
    };
    fetchData();
  }, [id]);

  const handleImageClick = (img) => {
    setMainImage(img);
  };

  const handleBookClick = async (values) => {
    const checkInDate = dayjs(values.checkIn);
    const checkOutDate = dayjs(values.checkOut);
    const numberOfDays = checkOutDate.diff(checkInDate, "day");
    const total = numberOfDays * data.price;
    setTotalPrice(total);
    setShowModal(true);

    try {
      await axios.post("/booking", {
        roomid: id,
        checkIn: values.checkIn,
        checkOut: values.checkOut,
        totalAmount: total,
      });
    } catch (error) {
      setBookingError("This room is already booked for the selected dates.");
      console.error("Error posting booking data:", error);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setBookingError("");
  };

  return (
    <div className={style.roomdetail}>
      <Helmet>
        <title>Book Room - kinsley</title>
        <link
          rel="shortcut icon"
          href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKUgFpfnDFc3lR56q1erL71EEv1lNvDYrbfQ&s"
          type="image/x-icon"
        />
      </Helmet>
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
              initialValues={{ checkIn: "", checkOut: "", email: "" }}
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

            {bookingError && <p className="text-red-500">{bookingError}</p>}

            <Formik
              initialValues={{
                cardNumber: "",
                validThrough: "",
                cvc: "",
              }}
              validationSchema={Yup.object({
                cardNumber: Yup.number()
                  .required("Card number is required")
                  .positive("Card number must be positive")
                  .min(1000000000000000, "Card number must be 16 digits")
                  .max(9999999999999999, "Card number must be 16 digits"),
                validThrough: Yup.date().required("Valid through is required"),
                cvc: Yup.number()
                  .required("CVC is required")
                  .positive("CVC must be positive")
                  .min(100, "CVC must be 3 digits")
                  .max(999, "CVC must be 3 digits"),
                email: Yup.string()
                  .required("Email is required")
                  .email("Invalid email address"),
              })}
              onSubmit={(values) => {}}
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
                    type="number"
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
                <div className="flex gap-3">
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
                    <Field
                      type="number"
                      name="cvc"
                      id="cvc"
                      placeholder="cvc"
                    />
                    <ErrorMessage
                      name="cvc"
                      component="span"
                      className="text-red-500 text-sm"
                    />
                  </div>
                </div>
                <button type="submit" className="bg-green">
                  Pay ${totalPrice}
                </button>
              </Form>
            </Formik>
          </div>
        </div>
      )}
    </div>
  );
};

export default RoomDetail;
