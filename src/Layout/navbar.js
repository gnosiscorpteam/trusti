import React, { useEffect, useState } from "react";
import { navbar_tabs } from "../const/default";
import logo from "../assests/logo.png";
import menuIcon from "../assests/icon/menu.svg"
import closeIcon from "../assests/icon/close.svg"
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const [url, setUrl] = useState(null);
    const [mobile, setMobile] = useState(false)

    useEffect(() => {
      setUrl(location.pathname);
    }, [location]);

    const mobileMenu = () => {
        setMobile(!mobile)
    }

    return(
        <div>
            <div className="absolute top-0 w-[100vw] z-[900]">
                <div className="h-[120px] hearder-gradient">
                    <div className="px-[6vw] flex justify-between pt-[32px]">
                        <a href="/">
                            <img src = {logo} alt="Logo" className="h-[40px] sm:h-[50px]" />
                        </a>
                        <div className="justify-between items-center text-text_base hidden lg:flex">
                            {
                                navbar_tabs.map((item, index) => {
                                    if(item.value === url) {
                                        return(
                                            <a key={index} className={"ml-8 cursor-pointer underline-offset-8 decoration-[3px] decoration-[#C72C2B]" + (url === item.value ?" underline" : "")} onClick={() => navigate(item.value)}>{item.label}</a>
                                        );
                                    }
                                    else {
                                        return(
                                            <a key={index} className="ml-8 cursor-pointer underline-offset-8 decoration-[3px] hover:underline hover:decoration-[#C72C2B]" onClick={() => navigate(item.value)}>{item.label}</a>
                                        );
                                    }
                                })
                            }
                        </div>
                        <div className="lg:hidden flex items-center" onClick={() => mobileMenu()}>
                            <img src={menuIcon} />
                        </div>
                    </div>
                </div>
            </div>
            {
                mobile ? 
                    <div className="lg:hidden w-full bg-primary px-[20px] pt-[20px] pb-[50px] absolute z-[999] text-text_base">
                        <div className="w-full flex justify-end" onClick={() => setMobile(!mobile)}><img src={closeIcon} className="w-[40px]" /></div>
                        {
                            navbar_tabs.map((item, index) => {
                                if(item.value === url) {
                                    return(
                                        <div key={index} className={"cursor-pointer underline-offset-8 decoration-2 decoration-[#C72C2B] mb-4" + (url === item.value ?" underline" : "")} onClick={() => {navigate(item.value); setMobile(false)}}>{item.label}</div>
                                    );
                                }
                                else {
                                    return(
                                        <div key={index} className="cursor-pointer underline-offset-8 decoration-2 hover:underline hover:decoration-[#C72C2B] mb-4" onClick={() => {navigate(item.value); setMobile(false);}}>{item.label}</div>
                                    );
                                }
                            })
                        }
                    </div>
                :
                null
            }
        </div>
    );
}

export default Navbar;