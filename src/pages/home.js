import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Video from "../assests/video.mp4";
import { homeContent } from "../const/default";
import ScrollAnimation from "react-animate-on-scroll";
import FadeLoader from "react-spinners/FadeLoader";

const Home = () => {
  const [loading, setLoading] = useState(true);

  function onLoad() {
    console.log("loaded");
    setLoading(false);
  }

  return (
    <div>
      <Helmet>
        <title>Trusti | Home</title>
        <meta
          name="description"
          content="Solutions-Simplified. Getting what you need for your customers shouldn't be difficult. Let our team of experts make it simple for you and your customers by managing expectations, timelines, and projects."
        />
      </Helmet>
      <div>
        <video loop autoPlay muted playsInline>
          <source src={Video} type="video/mp4" id="myVideo" />
          Your browser does not support the video tag.
        </video>
        {/* <iframe width="1400" height="928"
          src="https://www.youtube.com/embed/4AyZnNBsNho?autoplay=1&mute=1">
        </iframe> */}
        <div
          className="absolute w-[100vw] video-gradient bottom-[-17px] pb-[125px] pl-[10vw] pt-[270px]"
          style={{ bottom: "0px" }}
        >
          <div className="w-[70vw] xl:[60vw] 2xl:w-[50vw] text-text_base">
            <p className="text-4xl sm:text-6xl pb-[10px] font-semibold">
              Project Solutions - Simplified
            </p>
            <p>
              Getting what you need for your project to be completed shouldn't be difficult. Let our team of experts make it simple for you and your project by managing expectations, timelines, and funds.
            </p>
          </div>
        </div>
      </div>
      <div className="h-[100vh]" />
      <div className="px-[10vw] xl:px-[15vw]">
        <ScrollAnimation animateIn="slideInUp" animateOnce={true}>
          <div className="py-[7vh] sm:py-[10vh]">
            <span className="text-4xl sm:text-6xl font-semibold text-primary">
              <span className="underline decoration-secondary">What</span> we
              offer
            </span>
          </div>
        </ScrollAnimation>
        {homeContent.map((item, index) => {
          if (index === 1) {
            return (
              <div
                key={index}
                className="grid grid-cols-1 lg:grid-cols-7 gap-[4vw] pb-[4vw] sm:pb-[4vw]"
              >
                <div className="hidden lg:flex items-center lg:col-span-4">
                  <div className="w-full h-[44vw] lg:h-[40vh] overflow-hidden rounded-n">
                    <ScrollAnimation
                      animateIn="slideInLeft"
                      animateOnce={true}
                    >
                      <img
                        src={item.image}
                        className="w-full lg:h-[40vh] h-[44vw] object-cover image"
                      />
                    </ScrollAnimation>
                  </div>
                </div>
                <div className="lg:col-span-3">
                  <ScrollAnimation animateIn="slideInRight" animateOnce={true}>
                    <div className="w-full h-full">
                      <img
                        src={item.icon}
                        className="h-[90px] w-[90px] pb-4"
                      />
                      <img src={item.title} className="h-[37px] w-fit" />
                      <p className="text-content text-justify pt-[20px]">
                        {item.content}
                      </p>
                    </div>
                  </ScrollAnimation>
                </div>
                <div className="flex lg:hidden items-center lg:col-span-4">
                  <div className="w-full h-[44vw] lg:h-[40vh] overflow-hidden rounded-n">
                    <ScrollAnimation
                      animateIn="slideInRight"
                      animateOnce={true}
                    >
                      <img
                        src={item.image}
                        className="w-full lg:h-[40vh] h-[44vw] object-cover image"
                      />
                    </ScrollAnimation>
                  </div>
                </div>
              </div>
            );
          } else {
            return (
              <div
                key={index}
                className="grid grid-cols-1 lg:grid-cols-7 gap-[4vw] pb-[4vw] sm:pb-[4vw]"
              >
                <div className="lg:col-span-3">
                  <ScrollAnimation animateIn="slideInLeft" animateOnce={true}>
                    <div className="w-full h-full">
                      <img
                        src={item.icon}
                        className="h-[90px] w-[90px] pb-4"
                      />
                      <img src={item.title} className="h-[37px] w-fit" />
                      <p className="text-content text-justify pt-[20px]">
                        {item.content}
                      </p>
                    </div>
                  </ScrollAnimation>
                </div>
                <div className="flex items-center lg:col-span-4">
                  <div className="w-full h-[44vw] lg:h-[40vh] overflow-hidden rounded-n">
                    <ScrollAnimation
                      animateIn="slideInRight"
                      animateOnce={true}
                    >
                      <img
                        src={item.image}
                        className="w-full lg:h-[40vh] h-[44vw] object-cover image"
                      />
                    </ScrollAnimation>
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Home;
