import React from 'react';

import './style.scss';

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <div className="modal-action">
          <button type="button" onClick={handleClose}>
            X
          </button>
        </div>
        <div className="modal-content">{children}</div>
      </section>
    </div>
  );
};

export default Modal;
