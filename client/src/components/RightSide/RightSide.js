import React from "react";
import { Header } from "../Header/Header";
import './rightSide.css';

export const RightSide = ({ title, children }) => {
  return (
    <div className="b-rightSide">
      <div className="b-rightSide__header">
        {title ? <Header title={title} /> : ""}
      </div>
      <div className="b-rightSide__content">{children}</div>
      <div className="b-rightSide__hint">hint</div>
    </div>
  );
};
