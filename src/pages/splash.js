import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import closeIcon from "../assests/icon/close-splash.svg";
import FadeLoader from "react-spinners/FadeLoader";
import { BackgroundImage } from "react-image-and-background-image-fade";
import splashBg from "../assests/splash/iStock-1224629431.jpg";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const Splash = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [loading, setLoading] = useState(true);

  const closeModal = () => {
    Cookies.set("news", "true", { expires: 1 });
    setIsOpen(false);
  };

  useEffect(() => {
    const settingsUpdated = Cookies.get("news");

    if (!settingsUpdated) {
      setIsOpen(true);
    }
  }, []);

  if (!modalIsOpen) {
    return null;
  }

  return (
    <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
      <div className="w-[100vw] h-[100vh]">
        <div
          className={`h-[100vh] flex items-center justify-center z-[999] bg-text_base ${!loading
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
        <div className={`${loading ? "hidden" : ""}`}>
          <div className={`z-[99] ${!modalIsOpen ? "hidden" : null}`}>
            <BackgroundImage
              src={splashBg}
              width="100vw"
              height="100vh"
              renderLoader={({ hasLoaded, hasFailed }) => {
                setLoading(!hasLoaded);
              }}
              className="bg-cover bg-no-repeat"
            >
              <div className="w-[100vw] h-[100vh] overflow-scroll no-scrollbar relative z-[900]">
                <div className="w-[100vw] h-[100vh] splash-gradient absolute top-0 z-10" />
                <div className="px-[5vw] pb-[10vh] pt-[20vh] flex flex-col justify-between h-full">
                  <div className="flex justify-center items-center">
                    <span className="text-5xl lg:text-7xl text-[#FFFFFF] font-bold text-center">
                      Welcome to{" "}
                      <span className="text-secondary">Trusti </span>!
                    </span>
                    <div
                      onClick={closeModal}
                      className="w-[32px] xs:w-[40px] absolute z-[999] right-[9vw] top-[5vh] xs:top-[9vw]"
                    >
                      <img src={closeIcon} className="w-full" />
                    </div>
                  </div>
                  <div className="w-[90vw] sm:w-[80vw] md:w-[70vw] xl:w-[60vw] text-text_base px-[0vw] sm:pl-[5vw] z-20">
                    <p className="text-4xl lg:text-6xl pb-[10px] font-semibold">
                      Now Introducing Finance Protection
                    </p>
                    <p>
                      We know what it's like to wait for payments that never
                      come.
                    </p>
                    <p>
                      We also know how it feels to see money walk away with
                      nothing done and wonder how to get a project completed
                      with the money gone.{" "}
                    </p>
                    <p>
                      We know because we deal with these issues every day. It
                      impacts businesses, families, and put's unnecessary strain
                      on what should be an exciting project! Let us help you
                      protect your project's finances!{" "}
                    </p>
                    <p>
                      Click on our Finance Management page and schedule a
                      meeting with one of our representatives today!
                    </p>
                  </div>
                </div>
              </div>
            </BackgroundImage>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default Splash;
