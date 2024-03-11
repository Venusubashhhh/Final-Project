import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  return (
    <div className={`modal ${isOpen ? 'show-modal' : ''}`}>
      <div className="modal-content">
        <span className="close-button" onClick={onClose}>&times;</span>
        {children}
      </div>
    </div>
  );
};

export default Modal;
