import React, { useState } from "react";
import { BiX } from "react-icons/bi";
import "./Modal.css";

const Modal = ({ isOpen, onClose, children }) => {
  const handleClose = () => {
    onClose();
  };

  if (!isOpen) return null;
  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="modal-close" onClick={handleClose}>
          <BiX fontSize="2rem" />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
