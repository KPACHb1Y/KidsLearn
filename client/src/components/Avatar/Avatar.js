import React from "react";
import './avatar.css';

export const Avatar = ({ avatar }) => {
  return (
    <div className="b-avatar">
      <div className="b-avatar__image">{avatar}</div>
    </div>
  );
};
