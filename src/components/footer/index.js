import React from "react";
import "./index.scss";
import logo from "../../media/img/logo.png";

const Footer = () => {
  return (
    <div className="footer-container filicudi py-4">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-sm-2"></div>
          <div className="col-12 col-sm-8 text-center title">
            THANK YOU FOR STOPPING BY!
          </div>
          <div className="col-12 col-sm-2 text-sm-right text-center">
            <img src={logo} alt="logo" className="logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
