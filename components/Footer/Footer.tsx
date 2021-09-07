import React from "react";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <ul className="nav nav-pills nav-justified">
                    <li className="nav-item">
                        <a className="nav-link active" href="index.html">
                            <span>
                                <i className="nav-icon bi bi-house"></i>
                                <span className="nav-text">Home</span>
                            </span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="stats.html">
                            <span>
                                <i className="nav-icon bi bi-laptop"></i>
                                <span className="nav-text">Statistics</span>
                            </span>
                        </a>
                    </li>
                    <li className="nav-item centerbutton">
                        <div className="nav-link">
                            <span className="theme-radial-gradient">
                                <i className="close bi bi-x"></i>
                                <img
                                    src="assets/img/centerbutton.svg"
                                    className="nav-icon"
                                    alt=""
                                />
                            </span>
                            <div className="nav-menu-popover justify-content-between">
                                <button
                                    type="button"
                                    className="btn btn-lg btn-icon-text"
                                    onClick={() =>
                                        window.location.replace("pay.html")
                                    }
                                >
                                    <i className="bi bi-credit-card size-32"></i>
                                    <span>Pay</span>
                                </button>

                                <button
                                    type="button"
                                    className="btn btn-lg btn-icon-text"
                                    onClick={() =>
                                        window.location.replace(
                                            "sendmoney.html"
                                        )
                                    }
                                >
                                    <i
                                        className="
                                            bi bi-arrow-up-right-circle
                                            size-32
                                        "
                                    ></i>
                                    <span>Send</span>
                                </button>

                                <button
                                    type="button"
                                    className="btn btn-lg btn-icon-text"
                                    onClick={() =>
                                        window.location.replace("bills.html")
                                    }
                                >
                                    <i className="bi bi-receipt size-32"></i>
                                    <span>Bills</span>
                                </button>

                                <button
                                    type="button"
                                    className="btn btn-lg btn-icon-text"
                                    onClick={() =>
                                        window.location.replace(
                                            "receivemoney.html"
                                        )
                                    }
                                >
                                    <i
                                        className="
                                            bi bi-arrow-down-left-circle
                                            size-32
                                        "
                                    ></i>
                                    <span>Receive</span>
                                </button>
                            </div>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="rewards.html">
                            <span>
                                <i className="nav-icon bi bi-gift"></i>
                                <span className="nav-text">Rewards</span>
                            </span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="wallet.html">
                            <span>
                                <i className="nav-icon bi bi-wallet2"></i>
                                <span className="nav-text">Wallet</span>
                            </span>
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}
