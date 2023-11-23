import React, { useEffect } from "react";
import Navbar from "../Layout/navbar";
import ErrorSvg from "../assests/icon/404";
import anime from "animejs/lib/anime.es.js";

const ErrorPage = () => {
  useEffect(() => {
    anime({
      targets: "#zero",
      translateX: 10,
      autoplay: true,
      loop: true,
      easing: "easeInOutSine",
      direction: "alternate",
      scale: [{ value: 1 }, { value: 1.4 }, { value: 1, delay: 250 }],
      rotateY: { value: "+=180", delay: 200 }
    });

    anime({
      targets: "svg",
      translateY: 10,
      autoplay: true,
      loop: true,
      easing: "easeInOutSine",
      direction: "alternate"
    });
  }, []);

  return (
    <div className="min-h-[100vh] pt-[150px] oopBgColor">
      <Navbar />
      {/* <div className="error_bg"></div> */}
      {/* <div className="text-center">
                <p className="text-secondary error_letter">404</p>
            </div> */}
      <div className="flex justify-center items-center">
        <a target="_blank" href="/">
          <div className="h-[80vh] flex justify-center items-center">
            <ErrorSvg />
          </div>
        </a>
      </div>
    </div>
  );
};

export default ErrorPage;
