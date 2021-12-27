import React, { useEffect, useState } from "react";
import CollectionCard from "./CollectionCard";
import "./Collection.css";

const Collection = ({ setSelectedItem, nftCollection }) => {
  return (
    <div className="collection">
      {nftCollection?.map((collectionItem) => (
        <div
          onClick={() => setSelectedItem(collectionItem.token_id)}
          key={collectionItem.id}
        >
          <CollectionCard
            id={collectionItem.id}
            name={collectionItem.name}
            img={collectionItem.image_original_url}
            traits={collectionItem.traits}
          />
        </div>
      ))}
    </div>
  );
};

export default Collection;
