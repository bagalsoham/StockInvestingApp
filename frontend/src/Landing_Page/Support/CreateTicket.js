import React from 'react'
function CreateTicket() {
    return (
        <div className='container'>
            <div className='row p-5 mt-2 mb-2'>
                <p className='fs-2 text-muted '>To create a ticket, select a relevant topic</p>
                <div className='col-4 p-5 mt-2 mb-2'>
                    <h4 className=''><i class="fa fa-plus-circle" aria-hidden="true"></i> Account Opening</h4>
                    <a style={{ color: "blue", lineHeight: "2.5" }}>Getting started </a><br />
                    <a style={{ color: "blue", lineHeight: "2.5" }}>Online </a><br />
                    <a style={{ color: "blue", lineHeight: "2.5" }}>Offline </a><br />
                    <a style={{ color: "blue", lineHeight: "2.5" }}>Charges </a><br />
                    <a style={{ color: "blue", lineHeight: "2.5" }}>Company, Partnership and HUF </a><br />
                    <a style={{ color: "blue", lineHeight: "2.5" }}>Non Resident Indian (NRI) </a><br />
                </div>
                <div className='col-4 p-5 mt-2 mb-2'>
                    <h4 className=''><i class="fa fa-user" aria-hidden="true"></i> Your Zerodha Account</h4>
                    <a style={{ color: "blue", lineHeight: "2.5" }}>Login credentials </a><br />
                    <a style={{ color: "blue", lineHeight: "2.5" }}>Your Profile </a><br />
                    <a style={{ color: "blue", lineHeight: "2.5" }}>Account modification and segment addition </a><br />
                    <a style={{ color: "blue", lineHeight: "2.5" }}>CMR & DP ID </a><br />
                    <a style={{ color: "blue", lineHeight: "2.5" }}>Nomination</a><br />
                    <a style={{ color: "blue", lineHeight: "2.5" }}>Transfer and conversion of shares (NRI) </a><br />
                </div>
                <div className='col-4 p-5 mt-2 mb-2'>
                    <h4 className=''><i class="fa fa-bar-chart" aria-hidden="true"></i> Trading and Markets</h4>
                    <a style={{ color: "blue", lineHeight: "2.5" }}>Trading FAQs</a><br />
                    <a style={{ color: "blue", lineHeight: "2.5" }}>Kite </a><br />
                    <a style={{ color: "blue", lineHeight: "2.5" }}>Margins </a><br />
                    <a style={{ color: "blue", lineHeight: "2.5" }}>Product and order types </a><br />
                    <a style={{ color: "blue", lineHeight: "2.5" }}>Corporate actions </a><br />
                    <a style={{ color: "blue", lineHeight: "2.5" }}>Kite features </a><br />
                </div>
                <div className='col-4 p-5 mt-2 mb-2'>
                    <h4 className=''><i class="fa fa-credit-card-alt" aria-hidden="true"></i> Funds</h4>
                    <a style={{ color: "blue", lineHeight: "2.5" }}>Fund withdrawal </a><br />
                    <a style={{ color: "blue", lineHeight: "2.5" }}>Adding funds </a><br />
                    <a style={{ color: "blue", lineHeight: "2.5" }}>Adding bank accounts </a><br />
                    <a style={{ color: "blue", lineHeight: "2.5" }}>eMandates </a><br />
                </div>
                <div className='col-4 p-5 mt-2 mb-2'>
                    <h4 className=''><i class="fa fa-dot-circle-o" aria-hidden="true"></i> Console</h4>
                    <a style={{ color: "blue", lineHeight: "2.5" }}>IPO </a><br />
                    <a style={{ color: "blue", lineHeight: "2.5" }}>Portfolio </a><br />
                    <a style={{ color: "blue", lineHeight: "2.5" }}>Funds statement </a><br />
                    <a style={{ color: "blue", lineHeight: "2.5" }}>Profile </a><br />
                    <a style={{ color: "blue", lineHeight: "2.5" }}>Reports </a><br />
                    <a style={{ color: "blue", lineHeight: "2.5" }}>Referral program</a><br />
                </div>
                <div className='col-4 p-5 mt-2 mb-2'>
                    <h4 className=''><i class="fa fa-circle-thin" aria-hidden="true"></i>  Coin</h4>
                    <a style={{ color: "blue", lineHeight: "2.5" }}>Understanding mutual funds and Coin</a><br />
                    <a style={{ color: "blue", lineHeight: "2.5" }}>Coin app </a><br />
                    <a style={{ color: "blue", lineHeight: "2.5" }}>Coin web </a><br />
                    <a style={{ color: "blue", lineHeight: "2.5" }}>Transactions and reports </a><br />
                    <a style={{ color: "blue", lineHeight: "2.5" }}>National Pension Scheme (NPS)</a><br />
                </div>
            </div>

        </div>
    );
}

export default CreateTicket;