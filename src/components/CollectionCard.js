import React from "react";
import ethImg from "../assets/weth.png";
import "./CollectionCard.css";

const CollectionCard = ({ id, name, traits, img }) => {
  return (
    <div className="collection-card">
      <img src={img} alt="" />
      <div className="details">
        <div className="name">
          {name}
          <div className="id">#{id}</div>
        </div>
        <div className="price-container">
          <img src={ethImg} alt="" className="eth-img" />
          <div className="price">{traits[0]?.value}</div>
        </div>
      </div>
    </div>
  );
};

export default CollectionCard;
