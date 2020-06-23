import React, { useRef, useContext, useEffect } from "react";
import "./index.scss";
import play from "../../media/img/play.png";
import { SectionContext } from "../../context/sectionContext";

const VideoBanner = () => {
  const { dispatch } = useContext(SectionContext);
  const section0 = useRef(null);

  useEffect(() => {
    if (section0 !== null) dispatch({ type: "SET_SECTION_1", data: section0 });
  }, [section0, dispatch]);

  const videos = [
    {
      title: "2D ANIMATION/CARTOON",
      content:
        "Simple, colorful, dynamic! This style of motion graphics is perfect to bring excitement and elements of fun to your campaigns.",
      video: "1akkB0bapsA",
      bg: "pink-card.png",
    },
    {
      title: "3D ANIMATION/CARTOON",
      content:
        "A more sophisticated approach to explain complex ideas or to take your vision to the next level.",
      video: "sHJm-r5zR60",
      bg: "soft-blue-card.png",
    },
    {
      title: "3D ANIMATION/REALISTIC",
      content:
        "Special effects at attainable prices - Make reality bend to fit your needs and bring that WOW moment to your audience.",
      video: "g9-GO_JCthQ",
      bg: "yellow-card.png",
    },
  ];

  return (
    <>
      <div className="video-banner-container py-5" ref={section0}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="cards">
                <div className="pink-card">
                  <div className="text">
                    YOUR NEXT <br /> ANIMATION PROJECT
                  </div>
                </div>
                <div className="soft-blue-card">
                  <div className="text">GET INSPIRED FOR</div>
                </div>
              </div>
            </div>
            {/* videos */}
            {videos.map((data, i) => {
              return (
                <div
                  key={i}
                  className="col-12 col-sm-4 video-container mb-5 mb-sm-0"
                >
                  <div className={`video-video bg-${i}`}>
                    <div className="embed-responsive embed-responsive-16by9 shadow">
                      <iframe
                        className="embed-responsive-item"
                        src={`https://www.youtube.com/embed/${data.video}?rel=0`}
                        allowFullScreen
                        title={`video_${i}`}
                      ></iframe>
                    </div>
                  </div>
                  <div className="video-title m-3 mt-sm-3"> {data.title}</div>
                  <div className="video-content px-2 px-sm-2">
                    <div className="px-0 px-sm-5 mb-4">{data.content}</div>
                  </div>
                </div>
              );
            })}
            {/* videos */}
            {/* button */}
            <div
              className="col-12 button-container pb-5"
              data-toggle="modal"
              data-target="#exampleModal"
            >
              <div className="cc">
                <button>CLICK HERE TO VIEW FULL REEL</button>
                <img src={play} alt="..." />
              </div>
            </div>
            {/* button */}
          </div>
        </div>
      </div>
      {/* fullvideo */}

      {/* fullvideo */}

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="embed-responsive embed-responsive-16by9 shadow">
                <iframe
                  className="embed-responsive-item"
                  src={`https://www.youtube.com/embed/C25CjoXlTRs?rel=0`}
                  allowFullScreen
                  title="full"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoBanner;
