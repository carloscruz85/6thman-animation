import React, { useRef, useContext, useEffect } from "react";
import "./index.scss";
import lightbulb from "../../media/img/lightbulb.png";
import eye from "../../media/img/eye.png";
import clock from "../../media/img/clock.png";
import { SectionContext } from "../../context/sectionContext";

const TextBanner = () => {
  const { dispatch } = useContext(SectionContext);
  const section0 = useRef(null);

  useEffect(() => {
    if (section0 !== null) dispatch({ type: "SET_SECTION_0", data: section0 });
  }, [section0, dispatch]);

  //const title = "CREATE <strong>INFORMATIVE ENGAGING</strong> VIDEO ASSETS";
  const subTitle =
    "FOR YOUR COMMERCIAL OR DIGITAL CAMPAIGNS USING MOTION GRAPHICS";

  const items = [
    {
      title: "EXPLAIN COMPLEX IDEAS",
      data:
        "If your customers need education on your product or service, animated video is a great way to express complicated ideas in a simple, accessible way.",
      icon: lightbulb,
      color: "#eba92a",
    },
    {
      title: "VISUALLY APPEALING",
      data:
        "The objective is to capture attention and stop the scroll. Your animated ad or commercial can represent your brand in an aesthetically-pleasing, highly-professional way, with stunning graphics and movement to catch the eye.",
      icon: eye,
      color: "#2ebfe4",
    },
    {
      title: "EASY TO UPDATE",
      data:
        "Reshoots and talent fee costs makes a live-action video very difficult to update on a budget or with any speed. Animation allows for fast, cohesive updates to be made, to pivot with the market or test a new concept.",
      icon: clock,
      color: "#c53ac5",
    },
  ];

  return (
    <div className="text-banner-container py-5" id="section0" ref={section0}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="title filicudi text-center">
              CREATE <strong>INFORMATIVE ENGAGING</strong> VIDEO ASSETS
            </div>
            <div className="subtitle text-center filicudi mb-5">{subTitle}</div>
          </div>

          {items.map((item, i) => {
            return (
              <div
                className="col-12 col-md-4 mb-5 mb-md-0 text-center item-container"
                key={i}
              >
                <img className="icon" src={item.icon} alt="..." />
                <div className="example">
                  <div
                    className={`item-title filicudi  hover hover-f${i} hover-3`}
                  >
                    {item.title}
                    {/*                     <div className={`underline color-${i}`}></div>
                     */}{" "}
                  </div>
                </div>

                <div className="item-data american px-3">{item.data}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TextBanner;
