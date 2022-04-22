import React from "react";
import logo from "../assets/images/igireLogo2.png";
import { faMugHot } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faEnvelopeOpen } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faPrint } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faGooglePlusG } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <div className="container-fluid footer-container-footer ">
        <div className="row rows justify-content-around">
          <div className="col-10 col-xs-10 cols1 col-sm-2 h-2 col-md-5 col-lg-3 cols1">
            <div className="logo">
              <img src={logo} style={{width:"100px", height:"100px"}}/>
            </div>

            <p style={{ width: "100%" }}>
              GIRE MUHINZI project aims to create a platform that will aid in
              the development of Rwanda's agricultural sector, which employs
              approximately 70% of the population, by assisting farmers in
              advertising and selling their products, as well as wholesalers and
              buyers in general in obtaining High-quality products at an
              affordable price. 
            </p>

            <div className="footer-icon" >
              <a href="https://www.facebook.com/">
                <FontAwesomeIcon
                  icon={faFacebookF}
                  className="social"
                  style={{ background: "#3B5998", marginLeft: "50px" }}
                />
              </a>
              <a href="">
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="social"
                  style={{ background: "#55ACEE" }}
                />
              </a>
              <a href="">
                <FontAwesomeIcon
                  className="social"
                  icon={faGooglePlusG}
                  style={{ background: "#DD4B39" }}
                />
              </a>
              <a href="">
                <FontAwesomeIcon
                  className="social"
                  icon={faLinkedinIn}
                  style={{ background: "#0976B4" }}
                />
              </a>
            </div>
          </div>
          <div className="col-10 col-xs-10 col-sm-2 col-md-5 col-lg-2 px-4 cols2 ">
            <h1>
              Navigation
              {/* <hr style={{ height: "2px", color: "white", width: "35%", marginLeft:"20px" }} />{" "} */}
            </h1>
            <ul>
              <li>
                <a href="home">Home</a>
              </li>
              <li>
                <a href="SignUp">Sign Up</a>
              </li>
              <li>
                <a href="signin">Sign In</a>
              </li>
              <li>
                <a href="aboutUs">About Us</a>
              </li>
              <li>
                <a href="product">Products</a>
              </li>
              
            </ul>
          </div>
          <div className="col-10 col-xs-10 col-sm-2 col-md-5 mb-2 col-lg-3 cols3">
            <h1 style={{marginLeft:"-90px" }}>
              Our Services
              {/* <hr style={{ height: "2px", color: "white", width: "20%", marginLeft:"40px" }} />{" "} */}
            </h1>

            <p>buyer can buy a product </p>
            <p>seller is ale to post his/her product</p>
            <p>meet with your needs </p>
          </div>
          <div className="col-10 col-xs-10 col-sm-2 col-md-5 col-lg-3 cols4 ">
            <h1 style={{marginLeft:"-130px" }}>
              Contact US{" "}
              {/* <hr style={{ height: "2px", color: "white", width: "20%" }} />{" "} */}
            </h1>

            <p>
              {" "}
              <FontAwesomeIcon icon={faHome} style={{ fontSize: "16px" }} />
              &nbsp;&nbsp;&nbsp;kacyiru, 549 IRO
            </p>
            <p>
              {" "}
              <FontAwesomeIcon
                icon={faEnvelopeOpen}
                style={{ fontSize: "16px" }}
              />
              &nbsp;&nbsp;&nbsp;info@gs_kacyiru.com
            </p>
            <p>
              {" "}
              <FontAwesomeIcon icon={faPhone} style={{ fontSize: "16px" }} />
              &nbsp;&nbsp;&nbsp;<a href="tel:0786774605">+250786774605 </a>
            </p>
            <p>
              <FontAwesomeIcon icon={faPrint} style={{ fontSize: "16px" }} />
              &nbsp;&nbsp;&nbsp;<a href="tel:0785627690">+250 785627690</a>
            </p>
          </div>
          <hr className="big-line" />
          <div className="sub-footer">
            <p style={{ margin: "0 auto", alignItems: "center" }}>
              &copy; 2022 Copyright: <a href="">Software Chasers</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
