import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import mainPhoto from "../assests/service_control/iStock-1373167241.jpg";
import electricalImage from "../assests/service_control/iStock-1025303198.jpg";
import roofingImage from "../assests/service_control/iStock-984620714.jpg";
import {
  service_control_electrical,
  service_control_roofing
} from "../const/content";
import QuestionCard from "../component/questioncard";
import Button from "../component/button";
import Input from "../component/input";
import { roofingEstimate } from "../const/default";
import ScrollAnimation from "react-animate-on-scroll";
import { Formik } from "formik";
import { useSnackbar } from "notistack";
import axios from "axios";
import { API_BASIC_URL, API_KEY } from "../const/config";
import FadeLoader from "react-spinners/FadeLoader";

const ServiceContact = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [loading, setLoading] = useState(true);

  function onLoad() {
    console.log("loaded");
    setLoading(false);
  }

  return (
    <div>
      {/* <div className={`${loading ? "hidden" : ""}`}> */}
      <div>
        <Helmet>
          <title>Trusti | Project Finance Partners</title>
          <meta
            name="description"
            content="We have managed projects spanning from main panel upgrades to installing new roofs on clients' homes."
          />
        </Helmet>
        {/* <img
          src={mainPhoto}
          className="w-[100vw] h-[100vh] object-cover"
          onLoad={onLoad}
        /> */}
        <div className="w-[100vw] h-[100vh] financebg flex items-start justify-end">
          <p className="text-center text-4xl text-[#ffffff] pt-[15vh] pr-[10vw] font-semibold">Coming Soon...</p>
        </div>
        {/* <div className="px-[5vw] xs:px-[15vw] pt-[10vh]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[4vw] mb-[7vh]">
            <div>
              <ScrollAnimation animateIn="slideInUp" animateOnce={true}>
                <div className="w-full h-[40vh] overflow-hidden rounded-n">
                  <img
                    src={electricalImage}
                    className="w-full h-full object-cover image"
                  />
                </div>
              </ScrollAnimation>
              <ScrollAnimation animateIn="slideInUp" animateOnce={true}>
                <p className="text-2xl text-primary text-center font-semibold py-[24px]">
                  Electrical Service
                </p>
                <p className="text-content text-justify">
                  {service_control_electrical}
                </p>
              </ScrollAnimation>
            </div>
            <div className="flex flex-col justify-between">
              <Formik
                initialValues={{
                  firstName: "",
                  lastName: "",
                  email: "",
                  msg: "",
                  support: "service@trustigroup.com"
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
                  <form
                    onSubmit={handleSubmit}
                    className="flex flex-col justify-between h-full"
                  >
                    <ScrollAnimation animateIn="slideInUp" animateOnce={true}>
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
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="slideInUp" animateOnce={true}>
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
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="slideInUp" animateOnce={true}>
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
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="slideInUp" animateOnce={true}>
                      <div className="flex justify-end">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className={`rounded-full bg-secondary text-text_base px-12 py-2 bg-[#C72C2B] hover:shadow-xl shadow-[#C72C2B]`}
                        >
                          <span className="text-xl">Send Now</span>
                        </button>
                      </div>
                    </ScrollAnimation>
                  </form>}
              </Formik>
            </div>
          </div>
          <ScrollAnimation animateIn="slideInUp" animateOnce={true}>
            <div className="grid grid-cols-1 gap-[0.5vw] lg:grid-cols-2 lg:gap-[4vw]">
              <div className="w-full h-[40vh] overflow-hidden rounded-n ">
                <img
                  src={roofingImage}
                  className="w-full h-full object-cover image"
                />
              </div>
              <div>
                <p className="text-2xl text-primary text-center font-semibold py-[24px]">
                  Get your Instant Roof Quote
                </p>
                <p className="text-content text-justify">
                  {service_control_roofing}
                </p>
              </div>
            </div>
          </ScrollAnimation>
          <div className="flex justify-center">
            <ScrollAnimation
              animateIn="slideInLeft"
              animateOnce={true}
              className="w-full"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-[4vw] gap-y-[2vh] pt-[5vh]">
                {roofingEstimate.map((item, index) => {
                  return (
                    <a
                      key={index}
                      target="_blank"
                      href={item.link}
                      className="text-primary px-8 font-semibold bg-card flex justify-center items-center rounded-n h-[70px] cursor-pointer hover:text-text_base hover:bg-secondary hover:duration-500"
                    >
                      <p className="text-center">
                        {item.address}
                      </p>
                    </a>
                  );
                })}
              </div>
            </ScrollAnimation>
          </div>
        </div>
        <ScrollAnimation animateIn="slideInUp" animateOnce={true}>
          <QuestionCard>
            <div className="flex justify-center">
              <div className="flex jutify-center">
                <span className="text-4xl text-primary text-center font-semibold leading-[50px]">
                  You need more <span className="text-secondary">
                    Services
                  </span>{" "}
                  ?
                </span>
              </div>
            </div>
            <p className="text-center text-content pt-[20px] pb-[50px]">
              If you still have a question, please contact with support.
            </p>
            <div className="flex justify-center">
              <Button color="secondary" title="Contact Us" />
            </div>
          </QuestionCard>
        </ScrollAnimation> */}
      </div>
      {/* <div className={`h-[100vh] flex items-center justify-center z-[999] bg-text_base ${!loading ? "hidden": ""}`}>
        <FadeLoader
          color={"#002B3D"}
          loading={loading}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div> */}
    </div>
  );
};

export default ServiceContact;
