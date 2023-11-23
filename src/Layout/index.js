import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <div>
      <div className="min-h-[100vh] flex flex-col justify-end">
        <div>
          <Navbar />
        </div>
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
