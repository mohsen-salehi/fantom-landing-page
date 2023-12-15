import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import {Inter} from "next/font/google";
import Head from "next/head";
import "./globals.css";

const inter = Inter({subsets: ["latin"]});

export const metadata = {
    title: "FTM Swap 🏆 is a community-driven dApp on Fantom Sonic.",
    description:
        "FTM Swap stands out as the pioneering 🥇 community-driven DApp on the Fantom Sonic Network, offering you the opportunity to generate passive income, whether or not you choose to make an investment.",
};

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <Head>
            <meta charSet="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
            <meta name="description" content="FTM Swap stands out as the pioneering 🥇 community-driven DApp on the Fantom Sonic Network, offering you the opportunity to generate passive income, whether or not you choose to make an investment."/>
            <meta name="keywords" content="Fantom, FTM Sonic, Fantom sonic, FTM, Fantom Swap, FTM Swap, DAPP, ftm swap exchange, swap on ftm, fantom price"/>
            <meta name="author" content="FTM Swap"/>

            <meta property="og:title" content="FTM Swap 🏆 is a community-driven dApp on Fantom Sonic."/>
            <meta property="og:description" content="FTM Swap stands out as the pioneering 🥇 community-driven DApp on the Fantom Sonic Network, offering you the opportunity to generate passive income, whether or not you choose to make an investment."/>
            <meta property="og:image" content="/logo.png"/>
            <meta property="og:url" content="https://ftmswap.com"/>

            <meta name="twitter:card" content="FTM Swap stands out as the pioneering 🥇 community-driven DApp on the Fantom Sonic Network, offering you the opportunity to generate passive income, whether or not you choose to make an investment."/>
            <meta name="twitter:title" content="FTM Swap 🏆 is a community-driven dApp on Fantom Sonic."/>
            <meta name="twitter:description" content="FTM Swap stands out as the pioneering 🥇 community-driven DApp on the Fantom Sonic Network, offering you the opportunity to generate passive income, whether or not you choose to make an investment."/>
            <meta name="twitter:image" content="/logo.png"/>


            <script
                async
                src="https://www.googletagmanager.com/gtag/js?id=G-213XCQXWZR"
                crossOrigin="anonymous"
            />
            <script>
                {` window.dataLayer = window.dataLayer || []; function gtag()
          {dataLayer.push(arguments)}
          gtag('js', new Date()); gtag('config', 'G-213XCQXWZR');`}
            </script>

            <meta name="pageKey" content="guest-home"/>

            <meta name="Classification" content="Business"/>
            <meta name="author" content="FTM Swap, support@ftmswap.com"/>
            <meta name="reply-to" content="support@ftmswap.com"/>
            <meta name="owner" content="FTM Swap"/>
            <meta name="url" content="https://ftmswap.com"/>
            <meta name="directory" content="./index"/>
            <meta name="category" content="Business"/>
            <meta name="coverage" content="Worldwide"/>
            <meta name="distribution" content="Global"/>
            <meta name="rating" content="General"/>
            <meta name="revisit-after" content="7 days"/>
            <meta name="subtitle" content="FTM Swap"/>
            <meta name="target" content="all"/>
            <meta name="HandheldFriendly" content="True"/>
            <meta name="MobileOptimized" content="320"/>
            <meta name="copyright" content="FTM SWAP"/>
            <meta name="language" content="EN"/>
            <meta name="robots" content="index,follow"/>
            <meta name="revised" content="Friday, December 15th, 2023, 5:15 pm"/>
            <meta name="abstract" content="FTM Swap"/>
            <meta name="topic" content="FTM Swap"/>
            <meta
                name="summary"
                content="FTM Swap 🏆 is a community-driven dApp on Fantom Sonic."
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
