function Team() {
    return (
        <div className="container">
            <div className="row border-top p-5 mt-5 mb-5">
                <h1 className="  text-center">People</h1>
            </div>
            <div
                className="row text-muted fs-6"
                style={{ lineHeight: "1.8", fontSize: "1.2em" }}
            >
                <div className="col-6 p-5 text-center ">
                    <img
                        src="media/images/nithinKamath.jpg"
                        style={{ borderRadius: "100%", width: "60%" }}
                    />
                    <h5 className="mt-5">Nithin Kamath</h5>
                    <h6>CEO,Founder</h6>
                </div>
                <div className="fs-5 col-6 p-5">
                    <p>
                        Nithin bootstrapped and founded Zerodha in 2010 to overcome the
                        hurdles he faced during his decade long stint as a trader. Today,
                        Zerodha has changed the landscape of the Indian broking industry.
                    </p>
                    <p>
                        He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
                    </p>
                    <p>
                        Playing basketball is his zen.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Team;
