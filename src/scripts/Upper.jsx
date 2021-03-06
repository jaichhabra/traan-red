import React, { Component } from "react";
import graphic from "../assests/graphic.svg";

class Upper extends Component {
  render() {
    return (
      <div className="main-div">
        <div className="container">
          <div className="row">
            <div className="main-div-additional responsive-font-size col-sm-12 col-m-6 col-lg-6">
              <h1 className="main-div-text">Traan</h1>
              <h2 className="text-break">
                {" "}
                Healing in a matter of time, but it is sometimes also a matter
                of opportunity.
              </h2>
              <a href="https://traan.in/traan_contact/index.html">
              <button
                type="button"
                className="main-div-button-set btn btn-dark btn-outline-white waves-effect"
              >
              
                Contact-Us
              </button>
              </a>
              <a href="https://traan.in/traan_contact/index.html">
              <button
                type="button"
                className="main-div-button-set btn  waves-effect"
              >
                I am in an Emergency{" "}
                
              </button>
              </a>
            </div>
            <div className="main-div-graphic responsive-font-size col-sm-12 col-m-6 col-lg-6">
              <img className="graphic" src={graphic} alt="" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Upper;