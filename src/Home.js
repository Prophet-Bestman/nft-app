import React from "react";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";

import Collection from "./components/Collection";
import Header from "./components/Header";
import Main from "./components/Main";

const Home = () => {
  const [selectedItem, setSelectedItem] = useState(0);
  const [nftCollection, setNftCollection] = useState([]);

  const fetchCollection = async () => {
    const data = await axios.get(
      "https://testnets-api.opensea.io/assets?asset_contract_address=0x27b0423169247DE2dE2d2b25e7b836E037006628&order_direction=asc"
    );
    console.log(data.data.assets);
    return data.data.assets;
  };

  const { data, isLoading, error } = useQuery("collection", fetchCollection);
  useEffect(() => {
    console.log("data: ", data);
    setNftCollection(data);
    console.log("nftCollection: ", nftCollection);
  }, [data, nftCollection]);

  return (
    <div>
      <Header />
      {nftCollection && (
        <Main collectionData={nftCollection} selectedItem={selectedItem} />
      )}
      <Collection
        setSelectedItem={setSelectedItem}
        nftCollection={nftCollection}
      />
    </div>
  );
};

export default Home;
