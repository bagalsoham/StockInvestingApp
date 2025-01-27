import React from "react";

function Universe() {
  return (
    <div className="container text-center">
      <h1 className="mb-3 mt-3">The Zerodha Universe</h1>
      <p className="mb-4">
        Extend your trading and investment experience even further with our
        partner platforms.
      </p>
      <div className="row">
        {/* Column 1 */}
        <div className="col-lg-4 col-md-6 col-12 p-3">
          <img
            style={{ width: "40%" }}
            src="media/images/zerodhaFundhouse.png"
            alt="Zerodha Fundhouse"
          />
          <p className="text-muted mt-3">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
          <img
            style={{ width: "35%" }}
            className="mt-4"
            src="media/images/streakLogo.png"
            alt="Streak Logo"
          />
          <p className="text-muted mt-3">
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>

        {/* Column 2 */}
        <div className="col-lg-4 col-md-6 col-12 p-3">
          <img
            style={{ width: "40%" }}
            src="media/images/sensibullLogo.svg"
            alt="Sensibull Logo"
          />
          <p className="text-muted mt-3">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
          <img
            style={{ width: "40%" }}
            className="mt-4"
            src="media/images/smallcaseLogo.png"
            alt="Smallcase Logo"
          />
          <p className="text-muted mt-3">
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>

        {/* Column 3 */}
        <div className="col-lg-4 col-md-6 col-12 p-3">
          <img
            style={{ width: "40%" }}
            src="media/images/goldenpiLogo.png"
            alt="GoldenPi Logo"
          />
          <p className="text-muted mt-3">
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
          <img
            style={{ width: "35%" }}
            className="mt-4"
            src="media/images/dittoLogo.png"
            alt="Ditto Logo"
          />
          <p className="text-muted mt-3">
            Personalized advice on life and health insurance. No spam and no
            mis-selling.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Universe;
