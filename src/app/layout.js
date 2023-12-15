import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import {Inter} from "next/font/google";
import Head from "next/head";
import "./globals.css";

const inter = Inter({subsets: ["latin"]});

export const metadata = {
    title: "FTM Swap | 🏆 Community driven dapp on Fantom",
    description:
        "Fantom Swap is the first 🥇 community driven DAPP in fantom.foundation which make you eligible to earn passive income with/without investment.",
};

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <Head>
            <meta charSet="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
            <meta name="description" content="Fantom Swap is the first 🥇 community driven DAPP in fantom.foundation which make you eligible to earn passive income with/without investment."/>
            <meta name="keywords" content="Fantom, FTM, Fantom Swap, FTM Swap, DAPP, ftm swap exchange, swap on ftm, fantom price"/>
            <meta name="author" content="NILL Devs"/>

            <meta property="og:title" content="FTM Swap | 🏆 Community driven dapp on Fantom"/>
            <meta property="og:description" content="Fantom Swap is the first 🥇 community driven DAPP in fantom.foundation which make you eligible to earn passive income with/without investment."/>
            <meta property="og:image" content="/ftm_banner.png"/>
            <meta property="og:url" content="https://www.ftmswap.com"/>

            <meta name="twitter:card" content="Fantom Swap is the first 🥇 community driven DAPP in fantom.foundation which make you eligible to earn passive income with/without investment."/>
            <meta name="twitter:title" content="FTM Swap | 🏆 Community driven dapp on Fantom"/>
            <meta name="twitter:description" content="Fantom Swap is the first 🥇 community driven DAPP in fantom.foundation which make you eligible to earn passive income with/without investment."/>
            <meta name="twitter:image" content="/ftm_banner.png"/>


            <script
                async
                src="https://www.googletagmanager.com/gtag/js?id=G-213XCQXWZR"
                crossOrigin="anonymous"
            ></script>
            <script>
                {` window.dataLayer = window.dataLayer || []; function gtag()
          {dataLayer.push(arguments)}
          gtag('js', new Date()); gtag('config', 'G-213XCQXWZR');`}
            </script>
            <meta
                property="article:modified_time"
                content="2023-01-23T19:00:05+00:00"
            />
            <meta name="y_key" content="1e39c508e0d87750"/>
            <meta name="pageKey" content="guest-home"/>
            <meta itemProp="name" content="jQTouch"/>
            <meta httpEquiv="Expires" content="0"/>
            <meta httpEquiv="Pragma" content="no-cache"/>
            <meta httpEquiv="Cache-Control" content="no-cache"/>
            <meta httpEquiv="imagetoolbar" content="no"/>
            <meta httpEquiv="x-dns-prefetch-control" content="off"/>
            <meta name="Classification" content="Business"/>
            <meta name="author" content="mhmdnzr, mohammadnzr80@gmail.com"/>
            <meta name="designer" content="Peyman Kalani"/>
            <meta name="reply-to" content="nill.developers@gmail.com"/>
            <meta name="owner" content=""/>
            <meta name="url" content="https://www.ftmswap.com"/>
            <meta name="identifier-URL" content="https://www.ftmswap.com"/>
            <meta name="directory" content="./index"/>
            <meta name="category" content="web designer group"/>
            <meta name="coverage" content="Worldwide"/>
            <meta name="distribution" content="Global"/>
            <meta name="rating" content="General"/>
            <meta name="revisit-after" content="7 days"/>
            <meta name="subtitle" content="FTM Swap"/>
            <meta name="target" content="all"/>
            <meta name="HandheldFriendly" content="True"/>
            <meta name="MobileOptimized" content="320"/>
            <meta name="date" content="Sep. 27, 2010"/>
            <meta name="search_date" content="2023-03-27"/>
            <meta name="DC.title" content="Unstoppable Robot Ninja"/>
            <meta name="ResourceLoaderDynamicStyles" content=""/>
            <meta name="medium" content="blog"/>
            <meta name="copyright" content="FTM SWAP"/>
            <meta name="language" content="EN"/>
            <meta name="robots" content="index,follow"/>
            <meta name="revised" content="Sunday, July 18th, 2023, 5:15 pm"/>
            <meta name="abstract" content="FTM Swap"/>
            <meta name="topic" content="FTM Swap"/>
            <meta
                name="summary"
                content="FTM Swap | 🏆 Community driven dapp on Fantom"
            />
            <meta
                name="syndication-source"
                content="https://mashable.com/2008/12/24/free-brand-monitoring-tools/"
            />
            <link rel="icon" href="/icon-600x600.png"/>
            <meta
                name="original-source"
                content="https://mashable.com/2008/12/24/free-brand-monitoring-tools/"
            />
            <meta
                name="verify-v1"
                content="dV1r/ZJJdDEI++fKJ6iDEl6o+TMNtSu0kv18ONeqM0I="
            />
            <link rel="shortcut icon" href="/icon-600x600.png"/>
            <link rel="manifest" href="/manifest.json"/>
            <meta name="theme-color" content="#1E69FF"/>
        </Head>
        <body className={inter.className}>
        <Navbar/>
        {children}
        <Footer/>
        </body>
        </html>
    );
}
