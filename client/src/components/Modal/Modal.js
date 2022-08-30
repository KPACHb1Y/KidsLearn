import React from "react";
import "./modal.css";

export const Modal = ({
  open,
  title,
  children,
  className,
  succesBtn,
  closeModal
}) => {
  return (
    <div className={open ? "b-modal" : "b-modal__hide"}>
      <div className="b-modal__content">
        <div className="b-modal__header">{title}</div>
        <div className="b-modal__body">{children}</div>
        <div className="b-modal__footer">
          <button className={className} onClick={closeModal}>{succesBtn}</button>
        </div>
      </div>
    </div>
  );
};
