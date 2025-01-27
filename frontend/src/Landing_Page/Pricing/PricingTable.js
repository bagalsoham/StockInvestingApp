import React, { useState } from "react";

const PricingTable = () => {
  const [selectedCategory, setSelectedCategory] = useState("Equity");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const renderContent = () => {
    switch (selectedCategory) {
      case "Equity":
        return (
          <div className="container">
            <div className="row border text-center">
              <div className="col-3 bg-light py-2 font-weight-bold">
                Category
              </div>
              <div className="col-3 bg-light py-2 font-weight-bold">Equity</div>
              <div className="col-3 bg-light py-2 font-weight-bold">
                Currency
              </div>
              <div className="col-3 bg-light py-2 font-weight-bold">
                Commodity
              </div>
            </div>

            <div className="row border text-center">
              <div className="col-3 bg-light py-2">Equity Delivery</div>
              <div className="col-3 py-2">Zero Brokerage</div>
              <div className="col-3 py-2">
                0.03% or Rs. 20/executed order whichever is lower
              </div>
              <div className="col-3 py-2">Flat Rs. 20 per executed order</div>
            </div>

            <div className="row border text-center">
              <div className="col-3 bg-light py-2">STT/CTT</div>
              <div className="col-3 py-2">0.1% on buy & sell</div>
              <div className="col-3 py-2">0.025% on the sell side</div>
              <div className="col-3 py-2">
                0.125% of the intrinsic value on options that are bought and
                exercised
                <br />
                0.1% on sell side (on premium)
              </div>
            </div>

            <div className="row border text-center">
              <div className="col-3 bg-light py-2">Transaction Charges</div>
              <div className="col-3 py-2">
                NSE: 0.00297%
                <br />
                BSE: 0.00375%
              </div>
              <div className="col-3 py-2">
                NSE: 0.00173%
                <br />
                BSE: 0
              </div>
              <div className="col-3 py-2">
                NSE: 0.03503% (on premium)
                <br />
                BSE: 0.0325% (on premium)
              </div>
            </div>

            <div className="row border text-center">
              <div className="col-3 bg-light py-2">GST</div>
              <div className="col-9 py-2" colSpan="3">
                18% on (brokerage + SEBI charges + transaction charges)
              </div>
            </div>

            <div className="row border text-center">
              <div className="col-3 bg-light py-2">SEBI Charges</div>
              <div className="col-9 py-2" colSpan="3">
                ₹10 / crore
              </div>
            </div>

            <div className="row border text-center">
              <div className="col-3 bg-light py-2">Stamp Charges</div>
              <div className="col-3 py-2">
                0.015% or ₹1500 / crore on buy side
              </div>
              <div className="col-3 py-2">
                0.003% or ₹300 / crore on buy side
              </div>
              <div className="col-3 py-2">
                0.002% or ₹200 / crore on buy side
              </div>
            </div>
          </div>
        );
      case "Currency":
        return (
          <div className="container ">
            <div className="row border text-center">
              <div className="col-3 bg-light py-2 font-weight-bold">
                Category
              </div>
              <div className="col-3 bg-light py-2 font-weight-bold">
                Currency Futures
              </div>
              <div className="col-3 bg-light py-2 font-weight-bold">
                Currency Options
              </div>
            </div>

            <div className="row border text-center">
              <div className="col-3 bg-light py-2">Brokerage</div>
              <div className="col-3 py-2">
                0.03% or ₹20/executed order whichever is lower
              </div>
              <div className="col-3 py-2">₹20/executed order</div>
            </div>

            <div className="row border text-center">
              <div className="col-3 bg-light py-2">STT/CTT</div>
              <div className="col-3 py-2">No STT</div>
              <div className="col-3 py-2">No STT</div>
            </div>

            <div className="row border text-center">
              <div className="col-3 bg-light py-2">Transaction Charges</div>
              <div className="col-3 py-2">
                NSE: 0.00035%
                <br />
                BSE: 0.00045%
              </div>
              <div className="col-3 py-2">
                NSE: 0.0311%
                <br />
                BSE: 0.001%
              </div>
            </div>

            <div className="row border text-center">
              <div className="col-3 bg-light py-2">GST</div>
              <div className="col-6 py-2" colSpan="2">
                18% on (brokerage + SEBI charges + transaction charges)
              </div>
            </div>

            <div className="row border text-center">
              <div className="col-3 bg-light py-2">SEBI Charges</div>
              <div className="col-6 py-2" colSpan="2">
                ₹10 / crore
              </div>
            </div>

            <div className="row border text-center">
              <div className="col-3 bg-light py-2">Stamp Charges</div>
              <div className="col-3 py-2">
                0.0001% or ₹10 / crore on buy side
              </div>
              <div className="col-3 py-2">
                0.0001% or ₹10 / crore on buy side
              </div>
            </div>
          </div>
        );
      case "Commodity":
        return (
          <div className="container ">
            <div className="row border text-center">
              <div className="col-3 bg-light py-2 font-weight-bold">
                Category
              </div>
              <div className="col-3 bg-light py-2 font-weight-bold">
                Commodity Futures
              </div>
              <div className="col-3 bg-light py-2 font-weight-bold">
                Commodity Options
              </div>
            </div>

            <div className="row border text-center">
              <div className="col-3 bg-light py-2">Brokerage</div>
              <div className="col-3 py-2">
                0.03% or ₹20/executed order whichever is lower
              </div>
              <div className="col-3 py-2">₹20/executed order</div>
            </div>

            <div className="row border text-center">
              <div className="col-3 bg-light py-2">STT/CTT</div>
              <div className="col-3 py-2">0.01% on sell side (Non-Agri)</div>
              <div className="col-3 py-2">0.05% on sell side</div>
            </div>

            <div className="row border text-center">
              <div className="col-3 bg-light py-2">Transaction Charges</div>
              <div className="col-3 py-2">
                MCX: 0.0021%
                <br />
                NSE: 0.0001%
              </div>
              <div className="col-3 py-2">
                MCX: 0.0418%
                <br />
                NSE: 0.001%
              </div>
            </div>

            <div className="row border text-center">
              <div className="col-3 bg-light py-2">GST</div>
              <div className="col-6 py-2" colSpan="2">
                18% on (brokerage + SEBI charges + transaction charges)
              </div>
            </div>

            <div className="row border text-center">
              <div className="col-3 bg-light py-2">SEBI Charges</div>
              <div className="col-3 py-2">
                Agri: ₹1 / crore
                <br />
                Non-Agri: ₹10 / crore
              </div>
              <div className="col-3 py-2">₹10 / crore</div>
            </div>

            <div className="row border text-center">
              <div className="col-3 bg-light py-2">Stamp Charges</div>
              <div className="col-3 py-2">
                0.002% or ₹200 / crore on buy side
              </div>
              <div className="col-3 py-2">
                0.003% or ₹300 / crore on buy side
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container mb-5">
      <div className="btn-group mt-3 mf-19 mb-4">
        <h3 className="text-muted" style={{ marginBottom: "15px" }}>
          <button
            style={{
              backgroundColor: "transparent",
              border: "none",
              color: "#000",
            }}
            onClick={() => handleCategoryClick("Equity")}
          >
            Equity
          </button>
        </h3>
        <h3
          className="text-muted"
          style={{ marginBottom: "15px", marginLeft: "30px" }}
        >
          <button
            style={{
              backgroundColor: "transparent",
              border: "none",
              color: "#000",
            }}
            onClick={() => handleCategoryClick("Currency")}
          >
            Currency
          </button>
        </h3>
        <h3
          className="text-muted"
          style={{ marginBottom: "15px", marginLeft: "30px" }}
        >
          <button
            style={{
              backgroundColor: "transparent",
              border: "none",
              color: "#000",
            }}
            onClick={() => handleCategoryClick("Commodity")}
          >
            Commodity
          </button>
        </h3>
      </div>

      {renderContent()}
    </div>
  );
};

export default PricingTable;
