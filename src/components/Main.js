import React, { useEffect, useState } from "react";

import instagramLogo from "../assets/owner/instagram.png";
import twitterLogo from "../assets/owner/twitter.png";
import moreIcon from "../assets/owner/more.png";
import "./main.css";

const Main = ({ selectedItem, collectionData }) => {
  const [activeItem, setActiveItem] = useState(collectionData[0]);

  useEffect(() => {
    setActiveItem(collectionData[selectedItem]);
    console.log("activeItem: ", activeItem);
  }, [collectionData, selectedItem, activeItem]);

  useEffect(() => {});
  return (
    <div className="main">
      <div className="main-content">
        <div className="collection-highlight">
          <div className="collection-container">
            <img
              src={activeItem?.image_original_url}
              alt=""
              className="selected-item"
            />
          </div>
        </div>
        <div className="collection-details">
          <div className="title">{activeItem?.name}</div>
          <span className="item-number">#3</span>
          <div className="owner">
            <div className="owner-img-container">
              <img src={activeItem?.owner?.profile_img_url} alt="" />
            </div>
            <div className="owner-details">
              <div className="owner-name-and-handle">
                <div>0xB2cee28FEd627e1EF8C75262467a4511d579d590</div>
                <div className="owner-handle">@prophetbestman</div>
              </div>
              <div className="social-links">
                <div className="owner-link">
                  <img src={instagramLogo} alt="" />
                </div>
                <div className="owner-link">
                  <img src={twitterLogo} alt="" />
                </div>
                <div className="owner-link">
                  <img src={moreIcon} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
