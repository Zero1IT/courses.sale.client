import React from "react";
import {Modal, Alert} from "react-bootstrap";


/**
 * @param id {Number} - modal id
 * @param show {Boolean}
 * @param children {Any} - modal content
 * @param title {String} - modal title
 * @param size {"lg"|"sm"|undefined} - modal type
 * @param message {{text: String, type: String}}
 * @param onHide
 * @return {JSX.Element}
 * @constructor
 */
function ModalWindow({id, show, children, title, size, message, onHide}) {
  return (
    <Modal show={show} onHide={onHide} size={size}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {children}
      </Modal.Body>
      {
      message && message.type && message.text &&
      <Modal.Footer>
        <Alert variant={message.type}>
          {message.text}
        </Alert>
      </Modal.Footer>
      }
    </Modal>
  )
}

export default ModalWindow