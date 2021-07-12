import React from "react";

import "./index.scss";


const FooterForm = () => {
  

  return (
    <div className="footer-form-container pb-5">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <div className="title filicudi py-4">
              <strong>BRING YOUR </strong>VISION TO LIFE!
            </div>
            <div className="message">
                Contact us, tell us all about your project <br /> and  how we can help you bring it to life
            </div>
            <div className="simple_cta_container">
                <div className="simple_cta_field">
                    
                    <div className="field">
                        To email us
                    </div>
                    <a href="mailto:rod@6thman.us" className="button">
                        Click here
                    </a>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterForm;
