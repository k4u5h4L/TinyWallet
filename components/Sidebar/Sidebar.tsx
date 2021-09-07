import React from "react";

export default function Sidebar() {
    return (
        <div className="sidebar-wrap sidebar-pushcontent">
            {/* <!-- Add overlay or fullmenu instead overlay --> */}
            <div className="closemenu text-muted">Close Menu</div>
            <div className="sidebar dark-bg">
                {/* <!-- user information --> */}
                <div className="row my-3">
                    <div className="col-12">
                        <div className="card shadow-sm bg-opac text-white border-0">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-auto">
                                        <figure className="avatar avatar-44 rounded-15">
                                            <img
                                                src="assets/img/user1.jpg"
                                                alt=""
                                            />
                                        </figure>
                                    </div>
                                    <div className="col px-0 align-self-center">
                                        <p className="mb-1">Maxartkiller</p>
                                        <p className="text-muted size-12">
                                            New York City, US
                                        </p>
                                    </div>
                                    <div className="col-auto">
                                        <button className="btn btn-44 btn-light">
                                            <i className="bi bi-box-arrow-right"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="card bg-opac text-white border-0">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-12">
                                            <h1 className="display-4">
                                                100.00
                                            </h1>
                                        </div>
                                        <div className="col-auto">
                                            <p className="text-muted">
                                                Wallet Balance
                                            </p>
                                        </div>
                                        <div className="col text-end">
                                            <p className="text-muted">
                                                <a href="addmoney.html">
                                                    + Top up
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- user emnu navigation --> */}
                <div className="row">
                    <div className="col-12">
                        <ul className="nav nav-pills">
                            <li className="nav-item">
                                <a
                                    className="nav-link active"
                                    aria-current="page"
                                    href="index.html"
                                >
                                    <div className="avatar avatar-40 rounded icon">
                                        <i className="bi bi-house-door"></i>
                                    </div>
                                    <div className="col">Dashboard</div>
                                    <div className="arrow">
                                        <i className="bi bi-chevron-right"></i>
                                    </div>
                                </a>
                            </li>

                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    data-bs-toggle="dropdown"
                                    href="#"
                                    role="button"
                                    aria-expanded="false"
                                >
                                    <div className="avatar avatar-40 rounded icon">
                                        <i className="bi bi-person"></i>
                                    </div>
                                    <div className="col">Account</div>
                                    <div className="arrow">
                                        <i className="bi bi-plus plus"></i>
                                        <i className="bi bi-dash minus"></i>
                                    </div>
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a
                                            className="dropdown-item nav-link"
                                            href="profile.html"
                                        >
                                            <div
                                                className="
                                                    avatar avatar-40
                                                    rounded
                                                    icon
                                                "
                                            >
                                                <i className="bi bi-calendar2"></i>
                                            </div>
                                            <div className="col">Profile</div>
                                            <div className="arrow">
                                                <i className="bi bi-chevron-right"></i>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="dropdown-item nav-link"
                                            href="settings.html"
                                        >
                                            <div
                                                className="
                                                    avatar avatar-40
                                                    rounded
                                                    icon
                                                "
                                            >
                                                <i className="bi bi-calendar-check"></i>
                                            </div>
                                            <div className="col">Settings</div>
                                            <div className="arrow">
                                                <i className="bi bi-chevron-right"></i>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link"
                                    href="chat.html"
                                    tabIndex={-1}
                                >
                                    <div className="avatar avatar-40 rounded icon">
                                        <i className="bi bi-chat-text"></i>
                                    </div>
                                    <div className="col">Messages</div>
                                    <div className="arrow">
                                        <i className="bi bi-chevron-right"></i>
                                    </div>
                                </a>
                            </li>

                            <li className="nav-item">
                                <a
                                    className="nav-link"
                                    href="notifications.html"
                                    tabIndex={-1}
                                >
                                    <div className="avatar avatar-40 rounded icon">
                                        <i className="bi bi-bell"></i>
                                    </div>
                                    <div className="col">Notification</div>
                                    <div className="arrow">
                                        <i className="bi bi-chevron-right"></i>
                                    </div>
                                </a>
                            </li>

                            <li className="nav-item">
                                <a
                                    className="nav-link"
                                    href="blog.html"
                                    tabIndex={-1}
                                >
                                    <div className="avatar avatar-40 rounded icon">
                                        <i className="bi bi-newspaper"></i>
                                    </div>
                                    <div className="col">Blogs</div>
                                    <div className="arrow">
                                        <i className="bi bi-chevron-right"></i>
                                    </div>
                                </a>
                            </li>

                            <li className="nav-item">
                                <a
                                    className="nav-link"
                                    href="style.html"
                                    tabIndex={-1}
                                >
                                    <div className="avatar avatar-40 rounded icon">
                                        <i className="bi bi-palette"></i>
                                    </div>
                                    <div className="col">
                                        Style
                                        <i
                                            className="
                                                bi bi-star-fill
                                                text-warning
                                                small
                                            "
                                        ></i>
                                    </div>
                                    <div className="arrow">
                                        <i className="bi bi-chevron-right"></i>
                                    </div>
                                </a>
                            </li>

                            <li className="nav-item">
                                <a
                                    className="nav-link"
                                    href="pages.html"
                                    tabIndex={-1}
                                >
                                    <div className="avatar avatar-40 rounded icon">
                                        <i className="bi bi-file-earmark-text"></i>
                                    </div>
                                    <div className="col">
                                        Pages
                                        <span className="badge bg-info fw-light">
                                            new
                                        </span>
                                    </div>
                                    <div className="arrow">
                                        <i className="bi bi-chevron-right"></i>
                                    </div>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link"
                                    href="signin.html"
                                    tabIndex={-1}
                                >
                                    <div className="avatar avatar-40 rounded icon">
                                        <i className="bi bi-box-arrow-right"></i>
                                    </div>
                                    <div className="col">Logout</div>
                                    <div className="arrow">
                                        <i className="bi bi-chevron-right"></i>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
