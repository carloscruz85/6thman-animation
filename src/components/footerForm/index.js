import React, { useState, useRef, useContext, useEffect } from "react";
import axios from "axios";
import Modal from "../../components/modal";
import "./index.scss";
import { SectionContext } from "../../context/sectionContext";

const FooterForm = () => {
  const { dispatch } = useContext(SectionContext);
  //console.log(sections);

  const section = useRef(null);

  useEffect(() => {
    if (section !== null) dispatch({ type: "SET_SECTION_2", data: section });
  }, [section, dispatch]);

  const [emailData, setEmailData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [overlayer, setOverlayer] = useState({
    show: false,
    msg: "",
    title: "",
    closeButton: false,
    loader: false,
    actionButton: {
      action: null,
      text: "Cerrar",
    },
  });
  const [menuOptions, setMenuOptions] = useState([
    {
      title: "What kind of animation?",
      current: "What kind of animation?",
      options: [
        "2D Animation",
        "3D Animation/Cartoon",
        "3D Animation/Realistic",
      ],
    },
    {
      title: "How long will your video be?",
      current: "How long will your video be?",
      options: ["0:30 sec or under ", "1:00 min", "2:00 mins"],
    },
    {
      title: "What resolution?",
      current: "What resolution?",
      options: ["HD", "4K"],
    },
    {
      title: "Will you need sound?",
      current: "Will you need sound?",
      options: ["Music", "Narrator/Voice Actor", "Both"],
    },
  ]);

  const refFirst = useRef(null);
  const refLast = useRef(null);
  const refCompany = useRef(null);
  const refEmail = useRef(null);
  const refPhone = useRef(null);

  const setThisData = (title, index, subIndex) => {
    //console.log(title, index, subIndex);
    const temp = [...menuOptions];
    //console.log(temp[]);
    //console.log(menuOptions[0]);
    temp[index].current = title;
    //console.log(temp, menuOptions);

    setMenuOptions(temp);
  };

  //console.log(menuOptions, menuOptions.map);

  const sendData = () => {
    if (
      refFirst !== null &&
      refLast !== null &&
      refEmail !== null &&
      refCompany !== null &&
      refPhone !== null &&
      refEmail.current.value.length !== 0
    ) {
      const myBodyEmail = `
            Firstname: ${refFirst.current.value}
            LastName: ${refLast.current.value}
            Company: ${refCompany.current.value}
            Phone: ${refPhone.current.value}
            Email: ${refEmail.current.value}

            Options:

            ${menuOptions[0].title} : ${menuOptions[0].current}
            ${menuOptions[1].title} : ${menuOptions[1].current}
            ${menuOptions[2].title} : ${menuOptions[2].current}
            ${menuOptions[3].title} : ${menuOptions[3].current}
           
            `;

      setOverlayer({
        show: true,
        msg: "Sending email please wait a moment",
        title: "",
        closeButton: "false",
        loader: true,
      });

      let dataSend = {
        name: refFirst.current.value,
        email: refEmail.current.value,
        message: myBodyEmail,
      };

      //sending data
      axios.post("https://6thman.us/mail.php", dataSend).then((response) => {
        console.log(response);

        if (response.data.status === "success") {
          setOverlayer({
            show: true,
            msg: "Mail sent",
            title: "",
            closeButton: "false",
            loader: false,
            actionButton: {
              action: () => {
                setOverlayer({
                  show: false,
                  msg: "Thanks, we will contact you ASAP",
                  title: "",
                  closeButton: "true",
                  loader: false,
                });
              },
              text: "Close",
            },
          });
        } else if (response.data.status === "fail") {
          setOverlayer({
            show: true,
            msg: "An error ocurred, try again",
            title: "",
            closeButton: "false",
            loader: false,
            actionButton: {
              action: () => {
                setOverlayer({
                  show: false,
                  msg: "",
                  title: "",
                  closeButton: "true",
                  loader: false,
                });
              },
              text: "Close",
            },
          });
        }
      });
      //sending data
    } else {
      setOverlayer({
        show: true,
        msg: "Please provide your email",
        title: "",
        closeButton: "false",
        loader: false,
        actionButton: {
          action: () => {
            setOverlayer({
              show: false,
              msg: "Please provide your email",
              title: "",
              closeButton: "true",
              loader: false,
            });
          },
          text: "Close",
        },
      });
    }
  };

  return (
    <div className="footer-form-container pb-5" ref={section}>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <div className="title filicudi py-4">
              <strong>BRING YOUR </strong>VISION TO LIFE!
            </div>
            <div className="subtitle filicudi py-2">Tell us about you </div>
          </div>
        </div>
        {/* inputs */}

        <div className="row justify-content-center mb-3">
          <div className="col-12 col-sm-6">
            <div className="row">
              <div className="col-12 col-sm-6">
                <input
                  ref={refFirst}
                  type="text"
                  className="american"
                  placeholder="First"
                />
              </div>
              <div className="col-12 col-sm-6">
                <input
                  ref={refLast}
                  type="text"
                  className="american"
                  placeholder="Last"
                />
              </div>
              <div className="col-12">
                <input
                  ref={refCompany}
                  type="text"
                  className="american"
                  placeholder="Company"
                />
              </div>
              <div className="col-12">
                <input
                  ref={refEmail}
                  type="text"
                  className="american"
                  placeholder="Email"
                />
              </div>
              <div className="col-12">
                <input
                  ref={refPhone}
                  type="text"
                  className="american"
                  placeholder="Phone"
                />
              </div>
            </div>
          </div>
        </div>
        {/* inputs */}

        <div className="row">
          <div className="col-12 text-center">
            <div className="subtitle filicudi py-2">
              A few questions about your project{" "}
            </div>
          </div>
        </div>
        {/* inputs */}

        <div className="row justify-content-center">
          <div className="col-12 col-sm-6">
            <div className="row">
              <div className="col-12">
                {menuOptions.map((data, i) => {
                  return (
                    <div className="mySelect" key={i}>
                      <div className="option-title">
                        <strong>&#x25BE;</strong> {data.current}
                      </div>
                      <div className="options">
                        {data.options.map((option, item) => {
                          return (
                            <div
                              className="item"
                              key={item}
                              onClick={() => {
                                setThisData(option, i, item);
                              }}
                            >
                              {option}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="col-12 mt-5 mb-5 center-center">
                <div
                  className="cc filicudi "
                  onClick={() => {
                    sendData();
                  }}
                >
                  <button>GET A FREE QUOTE</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* inputs */}
      </div>
      <Modal
        show={overlayer.show}
        title={overlayer.title}
        loader={overlayer.loader}
        actionButton={overlayer.actionButton}
        closeButton={overlayer.closeButton}
      >
        {overlayer.msg}
      </Modal>
    </div>
  );
};

export default FooterForm;
