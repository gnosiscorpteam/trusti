import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import AboutUs from "../pages/aboutus";
import ServiceContact from "../pages/financepartner";
import FinanceProtection from "../pages/finance_protection";
import OnlineAccess from "../pages/onlineAccess";
import Layout from "../Layout";
import Contact from "../pages/contact";
import ErrorPage from "../pages/404";
import Splash from "../pages/splash";

const AppRouter = () => {
    return(
            <Routes>
                {/* <Route path="/" element={<Splash />} /> */}
                <Route path="/" element={<Layout><Home /></Layout>} />
                <Route path="/aboutus" element={<Layout><AboutUs /></Layout>} />
                <Route path="/financepartner" element={<Layout><ServiceContact /></Layout>} />
                <Route path="/finance_protection" element={<Layout><FinanceProtection /></Layout>} />
                <Route path="/online_access" element={<OnlineAccess />} />
                <Route path="/contact" element={<Layout><Contact /></Layout>} />
                <Route path="/*" element={<ErrorPage />} />
            </Routes>
    );
}

export default AppRouter;