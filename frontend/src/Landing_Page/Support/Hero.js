import React from "react";

function Hero() {
  return (
    <section
      className="container-fluid"
      id="supportHero"
      style={{
        backgroundColor: "#0073e6",
        color: "white",
        padding: "2rem",
      }}
    >
      <div
        className="d-flex justify-content-between align-items-center mb-4"
        id="supportWrapper"
      >
        <h3>Support Portal</h3>
        <a
          href="#"
          style={{
            textDecoration: "underline",
            color: "white",
            fontSize: "1rem",
          }}
        >
          Track tickets
        </a>
      </div>
      <div className="row p-5">
        {/* Left Section */}
        <div className="col-md-6 pe-md-5">
          <h1 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input
            type="text"
            placeholder="Eg. how do I activate F&O, why is my order getting rejected..."
            style={{
              width: "100%",
              padding: "0.8rem",
              borderRadius: "4px",
              border: "none",
              marginBottom: "1rem",
            }}
          />
          <div>
            <a
              href="#"
              style={{
                textDecoration: "underline",
                color: "white",
                marginRight: "2rem",
              }}
            >
              Track account opening
            </a>
            <a
              href="#"
              style={{
                textDecoration: "underline",
                color: "white",
                marginRight: "2rem",
              }}
            >
              Track segment activation
            </a>
            <a
              href="#"
              style={{
                textDecoration: "underline",
                color: "white",
              }}
            >
              Intraday margins
            </a>
          </div>
          <div style={{ marginTop: "1rem" }}>
            <a href="#" style={{ textDecoration: "underline", color: "white" }}>
              Kite user manual
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="col-md-6 ps-md-5">
          <h1 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>Featured</h1>
          <ol style={{ paddingLeft: "1rem", fontSize: "1rem" }}>
            <li style={{ marginBottom: "0.5rem" }}>
              <a
                href="#"
                style={{
                  textDecoration: "underline",
                  color: "white",
                }}
              >
                Current Takeovers and Delisting - January 2025
              </a>
            </li>
            <li>
              <a
                href="#"
                style={{
                  textDecoration: "underline",
                  color: "white",
                }}
              >
                Rights Entitlements listing in January 2025
              </a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
