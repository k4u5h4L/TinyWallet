import React from "react";

export default function Header() {
    return (
        <header className="header position-fixed">
            <div className="row">
                <div className="col-auto">
                    <a
                        // href="javascript:void(0)"
                        target="_self"
                        style={{ cursor: "pointer" }}
                        className="btn btn-light btn-44 menu-btn"
                    >
                        <i className="bi bi-list"></i>
                    </a>
                </div>
                <div className="col align-self-center text-center">
                    <div className="logo-small">
                        <img src="assets/img/logo.png" alt="" />
                        <h5>FiMobile</h5>
                    </div>
                </div>
                <div className="col-auto">
                    <a
                        href="notifications.html"
                        target="_self"
                        className="btn btn-light btn-44"
                    >
                        <i className="bi bi-bell"></i>
                        <span className="count-indicator"></span>
                    </a>
                </div>
            </div>
        </header>
    );
}
