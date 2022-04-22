import React from "react";
import logo from "../assets/images/igireLogo2.png";
import "./header.css";

const Header = () => {
  return (
    <>
      <div className="logo-container">
        <div className="home1-container">
          <div>
            <img src={logo} />
          </div>

          {/* <div id="google_translate_element"></div> */}

          <div className="nav-nav">
            <h1 style={{ height: "120px" }}>IGIRE MUHINZI</h1>
            <div className="nav-container">
              <a href="home">Home</a>
              <a href="SignUp">SignUp</a>
              <a href="SignIn">SignIn</a>
              <a href="AboutUs">About Us</a>
              <a href="product">Products</a>
              
            </div>
            
          </div>
          <hr></hr>
        </div>
      </div>
    </>
  );
};
export default Header;
