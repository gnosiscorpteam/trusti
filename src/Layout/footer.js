import React from "react";
import logo from "../assests/logo.png";
import { navbar_tabs, supportInfo } from "../const/default";
import send from "../assests/icon/send.svg";
import facebook from "../assests/icon/facebook.svg";
import linkedin from "../assests/icon/linkedin.svg";
import instagram from "../assests/icon/instagram.svg";
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#002B3D] w-[100vw] px-[10vw] py-[50px]">
      <div className="grid grid-cols-1 gap-[6vw] sm:gap-[3vw] grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-b-[0.5px] border-text_base pb-[6vh]">
        <a href="/">
          <img
            src={logo}
            alt="logo"
            className="h-[40px] mr-[70px] mb-[20px] sm:mb-[0px]"
          />
        </a>
        <div className="text-text_base">
          <p className="text-lg font-semibold">Business Consultants</p>
          {supportInfo.map((item, index) => {
            return (
              <div key={index} className="flex items-center mt-4 w-[250px]">
                <img src={item.icon} className="mr-2" />
                {
                  item.title == 'location' ?
                    <a className="text-[14px] cursor-pointer">
                      {item.info}
                    </a>
                    :
                    <a className="text-[14px]" href={item.title}>
                      {item.info}
                    </a>
                }
              </div>
            );
          })}
        </div>
        <div className="text-sm text-text_base flex flex-col justify-between">
          {navbar_tabs.map((item, index) => {
            return (
              <p
                key={index}
                className={"ml-8 cursor-pointer"}
                onClick={() => navigate(item.value)}
              >
                {item.label}
              </p>
            );
          })}
        </div>
        <div className="text-text_base flex-col justify-between flex">
          <div className="mb-[20px] sm:mb-[0px]">
            <p className="pb-2 text-lg font-semibold">Follow Us</p>
            <div className="flex items-center justify-between w-[90px]">
              <a
                href="https://www.facebook.com/profile.php?id=61553421057528"
                target="_blank"
              >
                <img src={facebook} />
              </a>
              <a
                href="https://www.linkedin.com/company/98815074"
                target="_blank"
              >
                <img src={linkedin} />
              </a>
              <a
                href="https://www.instagram.com/trusti_tx/"
                target="_blank"
              >
                <img src={instagram} />
              </a>
            </div>
          </div>
          <Formik
            initialValues={{
              email: "",
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
              return errors;
            }}
            onSubmit={async (values, { setSubmitting, resetForm }) => {
              setSubmitting(false);
              resetForm();
              //   await axios
              //     .post(`${API_BASIC_URL}/contact`, values)
              //     .then(res => {
              //       console.log("res", res.data.status);
              //       if (res.data.status) {
              //         // alert("Successfully Sent")
              //         enqueueSnackbar("Message Success!", {
              //           variant: "success"
              //         });
              //       }
              //     })
              //     .catch(error => {
              //       console.log("error", error);
              //       enqueueSnackbar("Message Failed!", {
              //         variant: "error"
              //       });
              //     });
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
                <div className="relative flex items-end">
                  <input
                    type="text"
                    className={"bg-[#183750] rounded-full h-[40px] px-5 text-xs w-full"}
                    placeholder="your email address"
                    label="email"
                    error={errors.email ? "error" : null}
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                  <div className="flex justify-center items-center w-[38px] h-[38px] bg-text_base absolute right-[2px] top-[2px] rounded-full" onClick={handleSubmit}>
                    <img src={send} className="w-[16px]" />
                  </div>
                </div>
              </form>}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Footer;
