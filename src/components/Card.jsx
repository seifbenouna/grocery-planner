import React from "react";

export const Card = ({ item, children, onDelete }) => {
  const { id, name, price } = item;

  return (
    <div className="card">
      <div
        className="redcross"
        onClick={() => {
          onDelete(id);
        }}
      ></div>
      <h3>{name}</h3>
      <div className="">{price} DA</div>
      <div className="extra">{children}</div>
    </div>
  );
};
