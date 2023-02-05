import React from "react";
import "./Header.css"

const Footer = () => {
    const year = new Date().getFullYear();
    return (
      <>
        <h1 className="footer">Copyright @ {year} .  This Site is Created by Deepak Gupta</h1>
      </>
    );
}

export default Footer;
