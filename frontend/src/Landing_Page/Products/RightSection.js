import React from "react";

function RightSection({ imageUrl, productName, productDescription, lernMore }) {
  return (
    <div className="container d-flex align-items-center">
      <div className="row w-100">
        <div className="col-6 p-3 d-flex flex-column justify-content-center">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div>
            <a href={lernMore} style={{ color: "blue" }}>
              Learn More
            </a>
          </div>
        </div>
        <div className="col-6 d-flex justify-content-center align-items-center">
          <img src={imageUrl} style={{ maxWidth: "100%", height: "auto" }} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
