import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const ModalExample = props => {
  const { buttonLabel, className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <div>
        <p className="">
          <i className="fas fa-sign-in-alt" onClick={toggle}></i>
          Sigin
        </p>
      </div>
      <Modal isOpen={modal} toggle={toggle} className={className}></Modal>
    </div>
  );
};

export default ModalExample;
