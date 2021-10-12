import React from 'react';
import './ErrorModal.css';

const ErrorModal = ({text, displayError, onCloseError}) => {
  const handleClick = () => {
    onCloseError();
  };

  return (
    <div className="error-modal" style={{display: displayError}}>
      <h1 className="error-modal__header">Invalid Input</h1>
      <p className="error-modal__text">{text}</p>
      <div className="error-modal__btn-wrapper">
        <button type="button" className="error-modal__btn" onClick={handleClick}>
          Okay
        </button>
      </div>
    </div>
  );
};

export default ErrorModal;
