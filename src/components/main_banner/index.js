import React, { useRef, useEffect, useState } from "react";
import "./index.scss";
import logo from "../../media/img/logo.png";

const Banner = () => {
  const [w, setW] = useState(0);

  const ref = useRef(null);

  useEffect(() => {
    //console.log("width", ref.current ? ref.current.offsetWidth : 0);
    setW(ref.current ? ref.current.offsetWidth : 0);
  }, [ref]);

  const resizeRocket = () => {
    setW(ref.current ? ref.current.offsetWidth : 0);
  };

  useEffect(() => {
    // subscribe event
    window.addEventListener("resize", resizeRocket);
    return () => {
      // unsubscribe event
      window.removeEventListener("resize", resizeRocket);
    };
  }, []);

  return (
    <div className="banner">
      <div className="container">
        <div className="row pb-5">
          {/* menu */}
          <div className="col-12 py-5">
            <div className="row">
              <div className="col-4">
                <img src={logo} alt="logo" className="logo" />
              </div>
              <div className="col-4 text-center center-center filicudi switch-to-animation">
                SWITCH TO ANIMATION
              </div>
              <div className="col-4 item-container american">
                <div className="item">WHY ANIMATION?</div>
                <div className="item">ANIMATION EXAMPLES</div>
                <div className="item">GET A QUOTE</div>
              </div>
            </div>
          </div>
          {/* menu */}
          {/* banner */}
          <div
            ref={ref}
            className="col-12 rocket-banner"
            style={{ height: `${w * 0.5423}px` }}
          >
            <div className="row">
              <div
                className="col-6 center-center  center-center text-rocket-container "
                style={{ height: `${w * 0.5423 * 0.8}px` }}
              >
                <div className="text-rocket pl-5 filicudi">
                  SMART COMPANIES <br /> <strong>KNOW HOW TO</strong> ADAPT{" "}
                  <br />
                  TO CHALLENGES{" "}
                  <strong>
                    {" "}
                    THAT <br /> COME THEIR WAY{" "}
                  </strong>
                </div>
                <div className="mini-form pl-5">
                  <input
                    type="text"
                    className="american"
                    placeholder="Enter email"
                  />
                  <button className="filicudi">Get info</button>
                </div>
                <div className="mini-text pl-5 american mt-3">
                  Learn more about using animation <br />
                  in your next video project
                </div>
              </div>
              <div className="col-6"></div>
            </div>
          </div>
          {/* banner */}
        </div>
      </div>
    </div>
  );
};

export default Banner;
