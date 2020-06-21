import React, { useRef, useEffect, useState } from "react";
import "./index.scss";
import logo from "../../media/img/logo.png";

const Banner = () => {
  const [w, setW] = useState(0);
  const [widthRocketContainer, setWidthRocketContainer] = useState(0);

  const ref = useRef(null);
  const refRocketMobileContainer = useRef(null);
  const miniForm = useRef(null);

  useEffect(() => {
    setW(ref.current ? ref.current.offsetWidth : 0);
  }, [ref]);

  useEffect(() => {
    setWidthRocketContainer(
      refRocketMobileContainer.current
        ? refRocketMobileContainer.current.offsetWidth
        : 0
    );
  }, [refRocketMobileContainer]);

  const resizeRocket = () => {
    setW(ref.current ? ref.current.offsetWidth : 0);
    setWidthRocketContainer(
      refRocketMobileContainer.current
        ? refRocketMobileContainer.current.offsetWidth
        : 0
    );
  };

  useEffect(() => {
    // subscribe event
    window.addEventListener("resize", resizeRocket);
    return () => {
      // unsubscribe event
      window.removeEventListener("resize", resizeRocket);
    };
  }, []);

  const send = () => {
    if (miniForm !== null) console.log("here", miniForm.current.value);
  };

  const menuItems = ["WHY ANIMATION?", "ANIMATION EXAMPLES", "GET A QUOTE"];
  const title = "SWITCH TO ANIMATION";

  const TextRocket = (props) => {
    return (
      <div
        className={`text-rocket ${
          props.paddingLeft ? "pl-5" : ""
        } filicudi mb-4`}
      >
        SMART COMPANIES <br /> <strong>KNOW HOW TO</strong> ADAPT <br />
        TO CHALLENGES{" "}
        <strong>
          {" "}
          THAT <br /> COME THEIR WAY{" "}
        </strong>
      </div>
    );
  };

  const MiniForm = (props) => {
    return (
      <div className={`mini-form ${props.paddingLeft ? "pl-5" : ""}`}>
        <input
          ref={miniForm}
          type="text"
          className="american"
          placeholder="Enter email"
        />
        <button
          className="filicudi"
          onClick={() => {
            send();
          }}
        >
          Get info
        </button>
      </div>
    );
  };

  const MenuMobile = () => {
    return (
      <div className="col-12 menu-mobile">
        <nav className="navbar navbar-expand-lg navbar-dark">
          <a className="navbar-brand" href="#kl">
            <img src={logo} alt="logo" className="logo" />
          </a>
          <div className="filicudi">{title}</div>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              {menuItems.map((item, i) => (
                <li className="nav-item" key={i}>
                  <a className="nav-link american" href="#d">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    );
  };

  return (
    <div className="banner">
      <div className="container">
        <div className="row pb-5">
          {/* menu */}
          <div className="col-12 py-5 menu-pc">
            <div className="row">
              <div className="col-4">
                <img src={logo} alt="logo" className="logo" />
              </div>
              <div className="col-4 text-center center-center filicudi switch-to-animation">
                {title}
              </div>
              <div className="col-4 item-container american">
                {menuItems.map((item, i) => (
                  <div key={i} className="item">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* menu */}
          {/* menu mobile */}
          <MenuMobile />
          {/* menu mobile */}
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
                <TextRocket paddingLeft={true} />
                <MiniForm paddingLeft={true} />

                <div className="mini-text pl-5 ml-3 american mt-3">
                  Learn more about using animation <br />
                  in your next video project
                </div>
              </div>
              <div className="col-6"></div>
            </div>
          </div>
          {/* banner */}
          {/* banner mobile */}
          <div className="p-5 center-center w-100 rocket-mobile-container">
            <div
              className="rocket-mobile pt-2"
              ref={refRocketMobileContainer}
              style={{ height: `${widthRocketContainer * 2.2}px` }}
            >
              <TextRocket />
              <div className="mini-form-mobile-container">
                <MiniForm />
              </div>
            </div>
          </div>

          {/* banner mobile */}
        </div>
      </div>
    </div>
  );
};

export default Banner;
