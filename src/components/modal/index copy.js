import React, { useEffect } from "react";
import $ from "jquery";
// window.jQuery = $;
// window.$ = $;
// global.jQuery = $;

const Modal = (props) => {
  const action = () => {
    props.actionButton.action();
  };

  useEffect(() => {
    if (props.show === true) {
      $("#modal").modal("show");
    } else {
      $("#modal").modal("hide");
    }

    if (props.children === undefined) {
      console.log("Error");
      console.log(props);

      $("#modal").modal("hide");
    }

    return () => $("#modal").modal("hide");
  });
  if (props.children !== undefined)
    return (
      <div
        className="modal fade"
        id="modal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            {props.title !== "" ? (
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalCenterTitle">
                  {props.title}{" "}
                </h5>
              </div>
            ) : null}

            <div className="modal-body">
              <div dangerouslySetInnerHTML={{ __html: props.children }} />
              <div>
                {" "}
                {props.loader ? (
                  <div className="spinner-border text-primary" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                ) : null}{" "}
              </div>{" "}
            </div>

            <div className="modal-footer">
              {props.closeButton ? (
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Cerrar
                </button>
              ) : null}

              {props.actionButton !== undefined ? (
                <button
                  type="button"
                  className="btn btn-info"
                  onClick={() => action()}
                >
                  {props.actionButton.text}
                </button>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    );
  else return <div>undefined</div>;
};

export default Modal;
