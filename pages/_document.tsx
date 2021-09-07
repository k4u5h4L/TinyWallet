import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <link
                        rel="shortcut icon"
                        type="image/png"
                        href="/images/favicon/favicon-16x16.png"
                    />
                    <link
                        rel="preconnect"
                        href="https://fonts.googleapis.com"
                    />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap"
                        rel="stylesheet"
                    />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap"
                        rel="stylesheet"
                    />

                    <link
                        rel="stylesheet"
                        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"
                    />

                    <link
                        rel="stylesheet"
                        href="/assets/vendor/swiperjs-6.6.2/swiper-bundle.min.css"
                    />

                    <link
                        href="/assets/css/style.css"
                        rel="stylesheet"
                        id="style"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />

                    <script src="/assets/js/jquery-3.3.1.min.js"></script>
                    <script src="/assets/js/popper.min.js"></script>
                    <script src="/assets/vendor/bootstrap-5/js/bootstrap.bundle.min.js"></script>

                    <script src="/assets/js/jquery.cookie.js"></script>

                    <script src="/assets/js/main.js"></script>
                    <script src="/assets/js/color-scheme.js"></script>

                    {/* <!-- PWA app service registration and works -->
                    <script src="/assets/js/pwa-services.js"></script> */}

                    <script src="/assets/vendor/chart-js-3.3.1/chart.min.js"></script>

                    <script src="/assets/vendor/progressbar-js/progressbar.min.js"></script>

                    <script src="/assets/vendor/swiperjs-6.6.2/swiper-bundle.min.js"></script>

                    <script src="/assets/js/app.js"></script>
                </body>
            </Html>
        );
    }
}
