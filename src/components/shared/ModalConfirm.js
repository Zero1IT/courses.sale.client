import {Modal, Button} from "react-bootstrap";
import React from "react";

const ModalConfirm = ({children, show, onDismiss, onConfirm}) => (
  <Modal show={show} onHide={onDismiss}>
    <Modal.Header>
      <Modal.Title>{children}</Modal.Title>
    </Modal.Header>
    <Modal.Footer>
      <Button variant="secondary" onClick={onDismiss}>
        Отмена
      </Button>
      <Button variant="primary" onClick={onConfirm}>
        Подтвердить
      </Button>
    </Modal.Footer>
  </Modal>
);

export default ModalConfirm;