import React from "react";
import "./Collection.css";
import collectionBike from "./../images/feature-bike.jpg";

const Collection = () => {
  return (
    <div>
      <div className="collection">
        <h1>Fetured Bikes 2021</h1>
        <p>Best bike collection</p>
        <hr />
        <div className="collectionImages">
          <div className="collectionImg colorChange">
            <img src={collectionBike} alt="" />
          </div>
          <div className="collectionImg">
            <img src={collectionBike} alt="" />
          </div>
          <div className="collectionImg colorChange">
            <img src={collectionBike} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
