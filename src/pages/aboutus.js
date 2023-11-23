import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import about_image from "../assests/about/iStock-1316574225.jpg";
import {
  about_ourstory1,
  about_ourstory2,
  about_ourstory3
} from "../const/content";
import { aboutusContent } from "../const/default";
import "react-multi-carousel/lib/styles.css";
import Carousel from "../component/carousel";
import ScrollAnimation from "react-animate-on-scroll";
import FadeLoader from "react-spinners/FadeLoader";

const AboutUs = () => {
  const [loading, setLoading] = useState(true);

  function onLoad() {
    console.log("loaded");
    setLoading(false);
  }

  return (
    <div>
      <div className={`pt-[150px] pb-[10vh] ${loading ? 'hidden' : null}`}>
        <Helmet>
          <title>Trusti | About Us</title>
          <meta
            name="description"
            content="Imagine it - being able to sell clean energy to homeowner's across the United States with limited potential for deals to fall through due to projects taking ..."
          />
        </Helmet>
        <div className="px-[5vw] sm:px-[10vw]">
          <span className="text-6xl xs:text-7xl text-primary font-bold">
            About <span className="text-secondary">Us</span>
          </span>
          <div className="grid grid-cols-1 xl:grid-cols-2 mb-[50px] mt-[20px] gap-[4vw]">
            <div className=" flex items-center h-[100%]">
                <div className="h-[50vh] overflow-hidden rounded-n">
                <img
                    src={about_image}
                    className="w-full h-full image object-cover element"
                    onLoad={onLoad}
                />
                </div>
            </div>
            <div className="w-full flex justify-between itmes-center flex-col py-4">
              <div>
                <span className="text-4xl text-primary font-semibold">
                  <span className="underline decoration-secondary">
                    Our
                  </span>{" "}
                  Story
                </span>
                <p className="text-content pt-[32px] leading-[32px] text-between text-justify break-all">
                  {about_ourstory1}
                </p>
              </div>
              <p className="text-content leading-[32px] text-between text-justify break-all">
                {about_ourstory2}
              </p>
              <p className="text-content leading-[32px] text-between text-justify break-all font-semibold">
                {about_ourstory3}
              </p>
            </div>
          </div>
        </div>
        <Carousel />
        <div className="px-[5vw] sm:px-[15vw] flex justify-between">
          <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-[3vw] element min-h-[689px]">
            {aboutusContent.map((item, index) => {
              return (
                <div className="h-full">
                  <ScrollAnimation
                    animateIn="slideInUp"
                    animateOnce={true}
                    className=" h-full"
                  >
                    <div
                      key={index}
                      className="border border-[#f1f1f1] card-hover h-full"
                    >
                      <div className="h-[30vh] w-full overflow-hidden">
                        <img
                          src={item.img}
                          className="h-full w-full object-cover image"
                        />
                      </div>
                      <p className="text-xl font-semibold text-primary text-center my-3">
                        {item.title}
                      </p>
                      <p className="text-content px-4 text-justify break-all pb-4">
                        {item.content}
                      </p>
                    </div>
                  </ScrollAnimation>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className={`h-[100vh] flex items-center justify-center z-[999] bg-text_base ${!loading ? 'hidden' : null}`}>
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

export default AboutUs;
