import React from "react";

export default function HireMeButton() {
    const buttonStyle = {
        display: "flex",
        justifyContent: "flex-end",
        marginTop: "50px",
    };

    return (
        <div style={buttonStyle}>
            <a href="/Contact">
            <button type="button" className="btn cube cube-hover">
                <div className="bg-top">
                    <div className="bg-inner"></div>
                </div>
                <div className="bg-right">
                    <div className="bg-inner"></div>
                </div>
                <div className="bg">
                    <div className="bg-inner"></div>
                </div>
                <div className="text">Contact me</div>
            </button>
            </a>
        </div>
    );
}
