import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import ScrollAnimation from "react-animate-on-scroll";
import axios from "axios";
import { Formik } from "formik";
import { useSnackbar } from "notistack";
import { useLoadScript } from "@react-google-maps/api";
import { locations, supportInfo_secondary } from "../const/default";
import Input from "../component/input";
import { API_BASIC_URL, API_KEY } from "../const/config";
import Map from "../component/map";
import FadeLoader from "react-spinners/FadeLoader";
import { BackgroundImage } from "react-image-and-background-image-fade";
import contactBg from "../assests/contact/mainPhoto.jpg";

const Contact = () => {
  const { enqueueSnackbar } = useSnackbar();
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDfoKp4SfKpNC96HOFMOzMgyersN69OJO4" // Add your API key
  });
  const [loading, setLoading] = useState(true);

  return (
    <div>
      <div className={`pb-[10vh] ${loading ? "hidden" : ""}`}>
        <Helmet>
          <title>Trusti | Contact Us</title>
          <meta
            name="description"
            content="Thanks for subscribing! Address : 8600 Freeport Pkwy Suite 400, Irving TX 75063"
          />
        </Helmet>
        <BackgroundImage
          src={contactBg}
          width="100vw"
          height="100vh"
          renderLoader={({ hasLoaded, hasFailed }) => {
            setLoading(!hasLoaded);
          }}
        >
          <div className="w-[100vw] h-[100vh] px-[5vw] xs:px-[10vw] pt-[150px]">
            {/* <ScrollAnimation animateIn="slideInLeft" animateOnce={true}> */}
            <span className="text-5xl md:text-7xl text-primary font-bold">
              Contact <span className="text-secondary">Us</span>
            </span>
            {/* </ScrollAnimation> */}
            <div>
              {supportInfo_secondary.map((item, index) => {
                return (
                  //   <ScrollAnimation animateIn="slideInLeft" animateOnce={true}>
                  <div
                    key={index}
                    className="mt-[12vh] lg:mt-[12vh] min-w-[300px]"
                  >
                    {
                      item.title == 'location' ?
                        <a className="flex items-center cursor-pointer">
                          <img
                            src={item.icon}
                            className="mr-4 w-[20px] lg:w-[30px]"
                          />
                          <p className="text-lg sm:text-2xl md:text-3xl text-primary font-semibold">
                            {item.info}
                          </p>
                        </a>
                        :
                        <a className="flex items-center cursor-pointer" href={item.title}>
                          <img
                            src={item.icon}
                            className="mr-4 w-[20px] lg:w-[30px]"
                          />
                          <p className="text-lg sm:text-2xl md:text-3xl text-primary font-semibold">
                            {item.info}
                          </p>
                        </a>
                    }
                  </div>
                  //   </ScrollAnimation>
                );
              })}
            </div>
          </div>
        </BackgroundImage>
        <div>
          <div className="w-[100vw] h-[100vh] relative">
            <div className="w-full h-full">
              {isLoaded ? <Map /> : null}
            </div>
            <div className="hidden sm:block absolute min-w-[400px] w-[22vw] min-h-[500px] h-[28vw] bottom-[5vh] right-[5vw]">
              <Formik
                initialValues={{
                  firstName: "",
                  lastName: "",
                  email: "",
                  msg: "",
                  support: "support@gotrusti.com"
                }}
                validate={values => {
                  const errors = {};
                  if (!values.email) {
                    errors.email = "Required";
                  } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                      values.email
                    )
                  ) {
                    errors.email = "Invalid email address";
                  }
                  if (!values.firstName) {
                    errors.firstName = "Required";
                  }
                  if (!values.lastName) {
                    errors.lastName = "Required";
                  }
                  if (!values.msg) {
                    errors.msg = "Required";
                  }
                  return errors;
                }}
                onSubmit={async (values, { setSubmitting, resetForm }) => {
                  setSubmitting(false);
                  resetForm();

                  console.log("dddddd", values)
                  await axios
                    .post(`${API_BASIC_URL}/contact`, values)
                    .then(res => {
                      console.log("res", res.data.status);
                      if (res.data.status) {
                        enqueueSnackbar("Message Success!", {
                          variant: "success"
                        });
                      }
                    })
                    .catch(error => {
                      console.log("error", error);
                      enqueueSnackbar("Message Failed!", {
                        variant: "error"
                      });
                    });
                }}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting
                }) =>
                  <form onSubmit={handleSubmit}>
                    <div className="flex flex-col justify-between w-full min-h-[500px] h-[28vw] bg-text_base p-8 rounded-n">
                      <div className="grid grid-cols-2 gap-[4vw] mb-8 lg:mb-[0px]">
                        <Input
                          label="First Name"
                          placeholder="John"
                          error={errors.firstName ? "error" : null}
                          type="text"
                          name="firstName"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.firstName}
                        />
                        <Input
                          label="Last Name"
                          placeholder="Dae"
                          error={errors.lastName ? "error" : null}
                          type="text"
                          name="lastName"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.lastName}
                        />
                      </div>
                      <div className="mb-8 lg:mb-[0px]">
                        <Input
                          label="Email"
                          placeholder="john@dae.com"
                          error={errors.email ? "error" : null}
                          type="email"
                          name="email"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.email}
                        />
                      </div>
                      <textarea
                        className="bg-textarea resize-y rounded-n p-3 mb-8 lg:mb-[0px] w-full"
                        placeholder="Type your message here..."
                        rows="5"
                        type="text"
                        name="msg"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.msg}
                      />
                      <div className="flex justify-end">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className={`rounded-full bg-secondary text-text_base px-12 py-2 bg-[#C72C2B] hover:shadow-xl shadow-[#C72C2B]`}
                        >
                          <span className="text-xl">Send Now</span>
                        </button>
                      </div>
                    </div>
                  </form>}
              </Formik>
            </div>
          </div>
          <div className="flex sm:hidden flex-col justify-between w-full h-full bg-text_base p-[5vw] xs:p-8 rounded-n">
            <Formik
              initialValues={{
                firstName: "",
                lastName: "",
                email: "",
                msg: "",
                support: "support@gotrusti.com"
              }}
              validate={values => {
                const errors = {};
                if (!values.email) {
                  errors.email = "Required";
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = "Invalid email address";
                }
                if (!values.firstName) {
                  errors.firstName = "Required";
                }
                if (!values.lastName) {
                  errors.lastName = "Required";
                }
                if (!values.msg) {
                  errors.msg = "Required";
                }
                return errors;
              }}
              onSubmit={async (values, { setSubmitting, resetForm }) => {
                setSubmitting(false);
                resetForm();
                console.log("dddddd", values)
                await axios
                  .post(`${API_BASIC_URL}/contact`, values)
                  .then(res => {
                    console.log("res", res.data.status);
                    if (res.data.status) {
                      // alert("Successfully Sent")
                      enqueueSnackbar("Message Success!", {
                        variant: "success"
                      });
                    }
                  })
                  .catch(error => {
                    console.log("error", error);
                    enqueueSnackbar("Message Failed!", {
                      variant: "error"
                    });
                  });
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting
              }) =>
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-2 gap-[4vw] mb-8 lg:mb-[0px]">
                    <Input
                      label="First Name"
                      placeholder="John"
                      error={errors.firstName ? "error" : null}
                      type="text"
                      name="firstName"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.firstName}
                    />
                    <Input
                      label="Last Name"
                      placeholder="Dae"
                      error={errors.lastName ? "error" : null}
                      type="text"
                      name="lastName"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.lastName}
                    />
                  </div>
                  <div className="mb-8 lg:mb-[0px]">
                    <Input
                      label="Email"
                      placeholder="john@dae.com"
                      error={errors.email ? "error" : null}
                      type="email"
                      name="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                    />
                  </div>
                  <textarea
                    className="bg-textarea resize-y rounded-n p-3 mb-8 lg:mb-[0px] w-full"
                    placeholder="Type your message here..."
                    rows="5"
                    type="text"
                    name="msg"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.msg}
                  />
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`rounded-full bg-secondary text-text_base px-12 py-2 bg-[#C72C2B] hover:shadow-xl shadow-[#C72C2B]`}
                    >
                      <span className="text-xl">Send Now</span>
                    </button>
                  </div>
                </form>}
            </Formik>
          </div>
        </div>
        <div className="px-[5vw] xs:px-[15vw]">
          <ScrollAnimation animateIn="slideInRight" animateOnce={true}>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-[1.5vw] gap-y-[2vh] pt-[5vh]">
              {locations.map((item, index) => {
                return (
                  <a
                    key={index}
                    className="text-primary px-8 py-4 flex flex-col justify-center bg-card rounded-n cursor-pointer hover:bg-secondary hover:duration-500 location_card"
                  >
                    <p className="text-center font-semibold text-secondary underline pb-2 location">
                      {item.location}
                    </p>
                    <p className="text-center location_title">
                      {item.street}
                    </p>
                    <p className="text-center location_title">
                      {item.address}
                    </p>
                  </a>
                );
              })}
            </div>
          </ScrollAnimation>
        </div>
      </div>

      <div
        className={`h-[100vh] flex items-center justify-center z-[20] bg-text_base ${!loading
          ? "hidden"
          : ""}`}
      >
        <FadeLoader
          color={"#002B3D"}
          loading={loading}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    </div>
  );
};

export default Contact;
