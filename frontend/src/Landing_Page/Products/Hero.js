import React from "react";
function Hero() {
  return (
    <div className="container text-center mt-5 mb-5 ">
      <h1>Zerodha Products </h1>
      <h5 className="text-muted mt-3 p-3 fs-4">
        Sleek, modern, and intuitive trading platforms
      </h5>
      <p className="mt-3 ">
        Check out our <a style={{ color: "blue" }}>investment offerings </a>
        <i
          style={{ color: "blue" }}
          class="fa fa-long-arrow-right"
          aria-hidden="true"
        ></i>{" "}
      </p>
    </div>
  );
}

export default Hero;
