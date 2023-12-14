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
                name="description"
                content="Fantom Swap is the first 🥇 community driven DAPP in fantom.foundation which make you eligible to earn passive income with/without investment."
            />
            <meta
                name="keywords"
                content="Fantom, FTM, Fantom Swap, FTM Swap, DAPP, ftm swap exchange, swap on ftm, fantom price"
            />

            <meta property="og:locale" content="en_US"/>
            <meta property="og:type" content="website"/>
            <meta property="og:title" content="Home"/>
            <meta
                property="og:description"
                content="Fantom Swap is the first 🥇 community driven DAPP in fantom.foundation which make you eligible to earn passive income with/without investment."
            />
            <meta property="og:url" content="https://ftmswap.best"/>
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
                content="Fantom Swap is the first 🥇 community driven DAPP in fantom.foundation which make you eligible to earn passive income with/without investment."
            />
            <meta
                name="twitter:description"
                content="Fantom Swap is the first 🥇 community driven DAPP in fantom.foundation which make you eligible to earn passive income with/without investment."
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
            <meta name="language" content="ES"/>
            <meta name="robots" content="index,follow"/>
            <meta name="revised" content="Sunday, July 18th, 2023, 5:15 pm"/>
            <meta name="abstract" content="FTM Swap"/>
            <meta name="topic" content="FTM Swap"/>
            <meta
                name="summary"
                content="A web developer group is a team of professionals who specialize in creating, designing, and maintaining websites. This group includes web developers, web designers, front-end developers, back-end developers, and others. Web developers write the code that makes websites function, using programming languages such as HTML, CSS, and JavaScript. Web designers focus on the visual aspects of websites, such as layout and color schemes. Front-end developers create and maintain the parts of a website that users interact with directly, while back-end developers handle tasks such as data storage and security. The group works together to create websites that are visually appealing, user-friendly, and efficient. They use a variety of tools and technologies to ensure that websites are optimized for speed, accessibility, and search engine rankings."
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
