import React from "react";

export default function PWAMessage() {
    return (
        <div
            className="
                position-fixed
                bottom-0
                start-50
                translate-middle-x
                z-index-10
            "
        >
            <div
                className="toast mb-3"
                role="alert"
                aria-live="assertive"
                aria-atomic="true"
                id="toastinstall"
                data-bs-animation="true"
            >
                <div className="toast-header">
                    <img
                        src="assets/img/favicon32.png"
                        className="rounded me-2"
                        alt="..."
                    />
                    <strong className="me-auto">Install PWA App</strong>
                    <small>now</small>
                    <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="toast"
                        aria-label="Close"
                    ></button>
                </div>
                <div className="toast-body">
                    <div className="row">
                        <div className="col">
                            Click &quot;install&quot; to install PWA app &
                            experience indepedent.
                        </div>
                        <div className="col-auto align-self-center ps-0">
                            <button
                                className="btn-default btn btn-sm"
                                id="addtohome"
                            >
                                Install
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
