import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import mainImage from "../assests/finance_managment/iStock-531606550.jpg";
import FadeLoader from "react-spinners/FadeLoader";

const FinanceProtection = () => {
  const [loading, setLoading] = useState(true);
  function onLoad() {
    console.log("loaded");
    setLoading(false);
  }

  return (
    <div>
      <div className={loading ? "hidden" : null}>
        <div className="pb-[10vh]">
          <Helmet>
            <title>Trusti | Protect Your Project's Finances!</title>
            <meta
              name="description"
              content="Let us help you protect your projects finances! No more worrying about getting paid or someone disappearing with the money! Schedule a time below to start protecting your finances!"
            />
          </Helmet>
          <div>
            <img
              src={mainImage}
              className="w-[100vw] h-[100vh] object-cover"
              onLoad={onLoad}
            />
            <div
              className="absolute w-[100vw] video-gradient bottom-[-17px] pb-[12vh] pl-[5vw] xs:pl-[10vw] pt-[270px]"
              style={{ bottom: "0px" }}
            >
              <div className="w-[90vw] xs:w-[70vw] xl:w-[50vw] text-text_base">
                <p className="text-4xl sm:text-6xl pb-[10px] font-semibold">
                  Protect Your Project's Finances!
                </p>
                <p>
                  Let us help you protect your projects finances! No more worrying
                  about getting paid or someone disappearing with the money!
                  Schedule a time below to start protecting your finances!
                </p>
                <p>
                  Déjenos proteger su Finanzas! Ya no se preocupe de que no le
                  pagan o que desaparezcan con su dinero! Escoja un tiempo en
                  nuestro horario y empiece a proteger su finanzas!
                </p>
              </div>
            </div>
          </div>
          <div className="calendly-inline-widget min-w-[320px] h-[700px]">
            <iframe
              src="https://calendly.com/trusti/30min"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
      <div className={!loading ? "hidden" : null}>
        <div className="h-[100vh] flex items-center justify-center z-[999] bg-text_base">
          <FadeLoader
            color={"#002B3D"}
            loading={loading}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      </div>
    </div>
  );
};

export default FinanceProtection;
