import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import {Inter} from "next/font/google";
import Head from "next/head";
import "./globals.css";

const inter = Inter({subsets: ["latin"]});

export const metadata = {
    title: "FTM Swap | 🏆 Community driven dapp on Fantom sonic",
    description:
        "FTM Swap stands out as the pioneering 🥇 community-driven DApp on the Fantom Sonic Network, offering you the opportunity to generate passive income, whether or not you choose to make an investment.",

    icons: {
        icon: ["/icon-600x600.png"],
        apple: ["/icon-600x600.png"],
    },
};

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <Head>
            <meta charSet="UTF-8"/>
            <meta
                name="viewport"
                content="width=device-width, user-scalable=yes, initial-scale=1.0, maximum-scale=2.0, minimum-scale=1.0"
            />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-213XCQXWZR" crossOrigin="anonymous"/>
            <script>
                {` window.dataLayer = window.dataLayer || []; function gtag()
          {dataLayer.push(arguments)}
          gtag('js', new Date()); gtag('config', 'G-213XCQXWZR');`}
            </script>

            <meta
                name="description"
                content="FTM Swap stands out as the pioneering 🥇 community-driven DApp on the Fantom Sonic Network, offering you the opportunity to generate passive income, whether or not you choose to make an investment."
            />
            <meta
                name="keywords"
                content="Fantom, FTM Sonic, Fantom sonic, FTM, Fantom Swap, FTM Swap, DAPP, ftm swap exchange, swap on ftm, fantom price"
            />

            <meta property="og:locale" content="en_US"/>
            <meta property="og:type" content="website"/>
            <meta property="og:title" content="Home"/>
            <meta
                property="og:description"
                content="FTM Swap stands out as the pioneering 🥇 community-driven DApp on the Fantom Sonic Network, offering you the opportunity to generate passive income, whether or not you choose to make an investment."
            />
            <meta property="og:url" content="https://ftmswap.com"/>
            <meta property="og:site_name" content="FTM Swap"/>
            <meta
                property="article:modified_time"
                content="2023-01-23T19:00:05+00:00"
            />
            <meta property="og:image" content="/twitter-fantom.png"/>
            <meta property="og:image:width" content="124"/>
            <meta property="og:image:height" content="32"/>
            <meta property="og:image:type" content="image/png"/>
            <meta
                name="twitter:card"
                content="FTM Swap stands out as the pioneering 🥇 community-driven DApp on the Fantom Sonic Network, offering you the opportunity to generate passive income, whether or not you choose to make an investment."
            />
            <meta
                name="twitter:description"
                content="FTM Swap stands out as the pioneering 🥇 community-driven DApp on the Fantom Sonic Network, offering you the opportunity to generate passive income, whether or not you choose to make an investment."
            />
            <meta name="twitter:image" content="/twitter-fantom.png"/>
            <meta name="twitter:site" content="@FTMSwap"/>
            <meta name="twitter:label1" content="Est. reading time"/>
            <meta name="twitter:data1" content="2 minute"/>
            <meta name="y_key" content="1e39c508e0d87750"/>
            <meta name="pageKey" content="guest-home"/>
            <meta itemProp="name" content="jQTouch"/>
            <meta httpEquiv="Expires" content="0"/>
            <meta httpEquiv="Pragma" content="no-cache"/>
            <meta httpEquiv="Cache-Control" content="no-cache"/>
            <meta httpEquiv="imagetoolbar" content="no"/>
            <meta httpEquiv="x-dns-prefetch-control" content="off"/>
            <meta name="Classification" content="Business"/>
            <meta name="author" content="ftmswap, support@ftmswap.com"/>
            <meta name="designer" content="ftmswap"/>
            <meta name="reply-to" content="support@ftmswap.com"/>
            <meta name="owner" content=""/>
            <meta name="url" content="https://ftmswap.com"/>
            <meta name="identifier-URL" content="https://ftmswap.com"/>
            <meta name="directory" content="./index"/>
            <meta name="category" content="service"/>
            <meta name="coverage" content="Worldwide"/>
            <meta name="distribution" content="Global"/>
            <meta name="rating" content="General"/>
            <meta name="revisit-after" content="7 days"/>
            <meta name="subtitle" content="FTM Swap"/>
            <meta name="target" content="all"/>
            <meta name="HandheldFriendly" content="True"/>
            <meta name="MobileOptimized" content="320"/>
            <meta name="date" content="Friday, December 15th, 2023, 5:15 pm"/>
            <meta name="ResourceLoaderDynamicStyles" content=""/>
            <meta name="medium" content="blog"/>
            <meta name="copyright" content="FTM SWAP"/>
            <meta name="language" content="EN"/>
            <meta name="revised" content="Friday, December 15th, 2023, 5:15 pm"/>
            <meta name="abstract" content="FTM Swap"/>
            <meta name="topic" content="FTM Swap"/>
            <meta
                name="summary"
                content="Introducing FTMSwap - the decentralized exchange on Fantom Sonic Network. Trade assets in less than 1 second with lightning-fast speed and ultra-low fees. Unleash the power of decentralized trading today!"
            />
            <link rel="icon" href="/icon-600x600.png"/>

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
