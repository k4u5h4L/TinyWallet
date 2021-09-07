import React, { useState } from "react";

import Head from "next/head";
import { Provider } from "next-auth/client";
import type { AppProps /*, AppContext */ } from "next/app";

import { ApolloProvider } from "@apollo/client";
import { useApollo } from "@/graphql/apolloClient";

// import NextNprogress from "nextjs-progressbar";

function MyApp({ Component, pageProps }: AppProps) {
    const client = useApollo();

    return (
        <Provider session={pageProps.session}>
            <Head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />
                <meta name="format-detection" content="telephone=no" />
                <meta name="theme-color" content="#33a16e" />
                <title>TinyWallet</title>
                <meta name="author" content="kaushal" />
                <meta
                    name="description"
                    content="A light weight personal finance management app"
                />
                <meta
                    name="keywords"
                    content="finance, wallet, money, budget"
                />
                <meta
                    property="og:description"
                    content="A light weight personal finance management app"
                />
                <meta
                    name="twitter:card"
                    content="A light weight personal finance management app"
                />
                <meta name="twitter:site" content="@tinywallet" />
                <meta name="twitter:creator" content="@tinywallet" />
                <meta name="twitter:title" content="TinyWallet" />
                <meta
                    name="twitter:description"
                    content="A light weight personal finance management app"
                />
            </Head>
            {/* <NextNprogress
                color="#000000"
                startPosition={0.3}
                stopDelayMs={200}
                height={3}
            /> */}
            <ApolloProvider client={client}>
                <Component {...pageProps} />
            </ApolloProvider>
        </Provider>
    );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
//
// MyApp.getInitialProps = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }

export default MyApp;
