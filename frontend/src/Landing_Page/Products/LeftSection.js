import React from "react";

function LeftSection({
  imageUrl,
  productName,
  productDescription,
  tryDemo,
  lernMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container d-flex align-items-center">
      <div className="row w-100">
        {/* Image Section */}
        <div className="col-6 d-flex justify-content-center align-items-center">
          <img
            src={imageUrl}
            className="mb-5"
            style={{ maxWidth: "100%", height: "auto" }}
            alt="Product"
          />
        </div>
        {/* Text Section */}
        <div className="col-6 d-flex flex-column justify-content-center p-5">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div>
            <a href={tryDemo} style={{ color: "blue" }}>
              Try Demo
            </a>
            <a
              href={lernMore}
              style={{ color: "blue", marginLeft: "50px" }}
            >
              Learn More
            </a>
          </div>
          <div className="mt-3">
            <a href={googlePlay}>
              <img
                src="media/images/googlePlayBadge.svg"
                alt="Google Play Badge"
                style={{ maxWidth: "150px", marginRight: "20px" }}
              />
            </a>
            <a href={appStore}>
              <img
                src="media/images/appstoreBadge.svg"
                alt="App Store Badge"
                style={{ maxWidth: "150px" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
