import React from "react";

function FooterLayout({ colorText }) {
    const getCurrentYear = () => {
        return new Date().getFullYear();
    }
    let color;
    if (colorText) {
        color = colorText
    } else {
        color = "#ffffff"
    }
    return (
        <div className="footer-text" style={{ color: color }}>
        </div>
    )
}

export default FooterLayout