import React from "react";
import ethImg from "../assets/weth.png";

const CollectionCard = ({ id, name, properties, img }) => {
  return (
    <div className="collection-card">
      <img src={img} alt="" />
      <div className="details"></div>
      <div className="name">
        {name}
        <div className="id">#{id}</div>
      </div>
      <div className="price-container">
        <img src={ethImg} alt="" className="eth-img" />
        <div className="price">{9}</div>
        {/* <div className="price">{properties[0]?.value}</div> */}
      </div>
    </div>
  );
};

export default CollectionCard;
