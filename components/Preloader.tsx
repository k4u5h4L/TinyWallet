import React from "react";

export default function Preloader() {
    return (
        <div className="container-fluid loader-wrap">
            <div className="row h-100">
                <div
                    className="
                        col-10 col-md-6 col-lg-5 col-xl-3
                        mx-auto
                        text-center
                        align-self-center
                    "
                >
                    <div className="loader-cube-wrap loader-cube-animate mx-auto">
                        <img src="assets/img/logo.png" alt="Logo" />
                    </div>
                    <p className="mt-4">
                        It&apos;s time for track budget
                        <br />
                        <strong>Please wait...</strong>
                    </p>
                </div>
            </div>
        </div>
    );
}
