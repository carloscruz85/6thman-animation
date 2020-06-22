import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { Spinner } from "react-bootstrap";

const MyVerticallyCenteredModal = (props) => {
  const action = () => {
    props.actionbutton.action();
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter-sm"
      centered
    >
      {props.title !== "" ? (
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter-sm">
            {props.title}
          </Modal.Title>
        </Modal.Header>
      ) : null}
      <Modal.Body>
        <div dangerouslySetInnerHTML={{ __html: props.msg }} />
        {props.myloaderupdate === "true" ? (
          <Spinner animation="border" variant="primary" />
        ) : null}
      </Modal.Body>
      <Modal.Footer>
        {props.closebutton === "true" ? (
          <Button onClick={props.onHide}>Cerrar</Button>
        ) : null}

        {props.actionbutton !== undefined ? (
          <button
            type="button"
            className="btn btn-info"
            onClick={() => action()}
          >
            {props.actionbutton.text}
          </button>
        ) : null}
      </Modal.Footer>
    </Modal>
  );
};

const App = (props) => {
  const [modalShow, setModalShow] = useState(false);
  //console.clear();
  //console.log(props);

  /*  useEffect(() => {
    console.log(
      `in useEffect
      props.show: ${props.show}
      modalShow : ${modalShow}`
    );

    setModalShow(props.show);
    return () => {
      setModalShow(false);
    };
  }, [props.show, modalShow]); */

  useEffect(() => {
    /* console.log(`in useEffect 
    modalShow:${modalShow}
    props.show:${props.show} `); */
    setModalShow(props.show);
  });

  const hide = () => {
    setModalShow(false);
    //console.log(`Hided ${modalShow}`);
  };

  return (
    <>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => hide()}
        msg={props.children}
        title={props.title}
        closebutton={props.closeButton.toString()}
        myloaderupdate={props.loader.toString()}
        actionbutton={props.actionButton}
      />
    </>
  );
};

export default App;
