import React, {useEffect, useState} from "react";
import { Helmet } from "react-helmet-async";
import mainImage from "../assests/onlineAccess/iStock-1455680251.jpg";
import backIcon from "../assests/icon/back.svg";
import { useNavigate } from "react-router-dom";
import FadeLoader from "react-spinners/FadeLoader";

const OnlineAccess = () => {
  const [loading, setLoading] = useState(true);

  function onLoad() {
    console.log("loaded");
    setLoading(false);
  }

  const navigate = useNavigate();

  return (
    <div>
        <div className={`w-[100vw] ${loading ? "hidden" : ""}`}>
            <Helmet>
              <title>Trusti | Online Access</title>
              <meta
                name="description"
                content="Our simple site makes it possible to access your project from any computer, tablet, or phone."
              />
            </Helmet>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 h-[100vh] gap-[50px] md:gap-1">
              <div className="lg:col-span-2">
                <img src={mainImage} className="w-full h-full object-cover" onLoad={onLoad} />
              </div>
              <div className="h-full flex items-center">
                <div className="px-12">
                  <span className="text-5xl md:text-7xl text-primary font-bold text-center">
                    Online <span className="text-secondary">Access</span>
                  </span>
                  <p className="text-content text-lg pt-[3vh] pb-[5vh]">
                    Our simple site makes it possible to access your project
                    from any computer, tablet, or phone.
                  </p>
                  <iframe
                    src="https://buildertrend.net/NewLoginFrame.aspx?color=Navy"
                    className="w-full"
                    style={{
                      border: 0,
                      height: 60,
                      marginTop: "1em",
                      frameborder: 0
                    }}
                  />
                  <div
                    className="border border-2 border-primary h-[50px] flex items-center justify-center mt-2 mb-[50px] md:mb-[0px] cursor-pointer"
                    onClick={() => navigate("/")}
                  >
                    <img src={backIcon} className="w-[24px] mr-4" />
                    <p className="text-primary">Go Back</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        <div className={`h-[100vh] flex items-center justify-center z-[999] bg-text_base ${!loading ? "hidden": ""}`}>
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

export default OnlineAccess;
