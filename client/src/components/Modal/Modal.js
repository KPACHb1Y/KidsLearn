import React from "react";

export const Modal = ({ title, children, className, succesBtn, cancelBtn }) => {
  return (
    <div className="b-modal">
      <div className="b-modal__header">{title}</div>
      <div className="b-modal__body">{children}</div>
      <div className="b-modal__footer">
        <button className={className}>{succesBtn}</button>
        <button className={className}>{cancelBtn}</button>
      </div>
    </div>
  );
};
