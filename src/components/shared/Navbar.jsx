"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const currentPage = usePathname();

  const navItems = [
    { text: "home", route: "/" },
    { text: "swap", route: "/swap" },
    { text: "liquidity", route: "/liquidity" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
      <>
        {/* Mobile Sidebar Version */}
        <div className="lg:hidden">
          {/* Hamburger Menu Icon */}
          <button
              onClick={toggleMobileMenu}
              className="text-white focus:outline-none p-2"
          >
            ☰
          </button>

          {/* Mobile Sidebar */}
          <nav
              className={`${
                  isMobileMenuOpen ? "block" : "hidden"
              } fixed inset-0 bg-black-800 bg-opacity-75 z-50 backdrop-blur-md`}
          >
            <div className="flex justify-end p-4">
              <button
                  onClick={toggleMobileMenu}
                  className="text-white focus:outline-none"
              >
                ✕
              </button>
            </div>
            <ul className="flex flex-col items-center">
              {navItems.map((item) => (
                  <li
                      key={item.route}
                      className={`${
                          currentPage === item.route
                              ? "text-white font-slashed-zero font-inter font-medium text-base leading-8 tracking-wider uppercase"
                              : "text-gray-500 font-slashed-zero font-inter font-medium text-base leading-8 tracking-wider uppercase"
                      } py-2`}
                  >
                    <Link href={item.route}>{item.text}</Link>
                  </li>
              ))}
              {/* Include Launch Dapp button in mobile version */}
              <button className="bg-success hover:bg-blue-700 text-white font-normal rounded-0 my-2">
                <Link
                    href="/"
                    className="text-white font-normal py-2 px-4 rounded font-roboto-condensed text-base leading-9 capitalize"
                >
                  Launch Dapp
                </Link>
              </button>
            </ul>
          </nav>
        </div>

        {/* Desktop Navbar Version */}
        <div className="hidden lg:block">
          <header className="header backdrop-blur z-10 sticky top-0 bg-transparent flex items-center justify-between px-8 py-02">
            <h1 className="w-3/12">
              <Link href="/">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="124"
                    height="32"
                    viewBox="0 0 124 32"
                    fill="none"
                >
                  <g clipPath="url(#clip0_435_14806)">
                    <path
                        d="M11.2429 0.306535C12.0209 -0.102178 13.2048 -0.102178 13.9828 0.306535L21.9219 4.47708C22.3905 4.72323 22.6478 5.09002 22.6939 5.46868H22.7015V26.432C22.6912 26.845 22.4314 27.2553 21.9219 27.523L13.9828 31.6935C13.2048 32.1022 12.0209 32.1022 11.2429 31.6935L3.30383 27.523C2.79645 27.2565 2.55296 26.8432 2.54091 26.432C2.53971 26.3915 2.53956 26.3577 2.54071 26.3298L2.54066 5.60332C2.53986 5.58063 2.53978 5.55795 2.54043 5.53538L2.54091 5.46868L2.54446 5.46865C2.57972 5.08585 2.82539 4.72843 3.30383 4.47708L11.2429 0.306535ZM21.4517 17.164L13.9828 21.0875C13.2048 21.4963 12.0209 21.4963 11.2429 21.0875L3.79036 17.1728V26.3905L11.2429 30.2847C11.6637 30.5085 12.1005 30.7265 12.5276 30.7542L12.6129 30.757C13.0579 30.7585 13.49 30.5337 13.9281 30.321L21.4517 26.357V17.164ZM1.24962 25.9762C1.24962 26.7792 1.34348 27.3073 1.52983 27.6793C1.68428 27.9875 1.91603 28.223 2.33919 28.5098L2.36335 28.526C2.45621 28.5882 2.55852 28.6535 2.68303 28.73L2.82989 28.8195L3.28082 29.0903L2.63407 30.1537L2.12935 29.8505L2.04451 29.7987C1.89858 29.709 1.77762 29.6322 1.6648 29.5565C0.458789 28.7477 0.0090093 27.8662 0.000134307 26.032L0 25.9762H1.24962ZM11.9879 11.5452C11.9301 11.5649 11.8759 11.5878 11.8265 11.6137L3.88744 15.7843C3.87911 15.7887 3.87116 15.793 3.86361 15.7972L3.85688 15.8012L3.86933 15.8082L3.88744 15.818L11.8265 19.9886C11.8759 20.0145 11.9301 20.0373 11.9879 20.0571V11.5452ZM13.2379 11.5452V20.0571C13.2957 20.0373 13.3498 20.0145 13.3992 19.9886L21.3383 15.818C21.3466 15.8136 21.3546 15.8093 21.3621 15.805L21.3688 15.8012L21.3564 15.7941L21.3383 15.7843L13.3992 11.6137C13.3498 11.5878 13.2957 11.5649 13.2379 11.5452ZM21.4517 6.95575L14.3299 10.697L21.4517 14.4382V6.95575ZM3.79036 6.9645V14.4295L10.8956 10.697L3.79036 6.9645ZM13.3992 1.40554C12.9863 1.18866 12.2394 1.18866 11.8265 1.40554L3.88744 5.5761C3.87911 5.58047 3.87116 5.5848 3.86361 5.58908L3.85688 5.59295L3.86933 5.60005L3.88744 5.60983L11.8265 9.78037C12.2394 9.99725 12.9863 9.99725 13.3992 9.78037L21.3383 5.60983C21.3466 5.60545 21.3546 5.60113 21.3621 5.59683L21.3688 5.59295L21.3564 5.58585L21.3383 5.5761L13.3992 1.40554ZM22.625 1.86288L23.1297 2.16606L23.2145 2.21786C23.3605 2.30746 23.4814 2.38442 23.5942 2.46008C24.8002 3.26875 25.25 4.15042 25.2588 5.98453L25.259 6.0404H24.0094C24.0094 5.2372 23.9156 4.7093 23.7292 4.33738C23.5748 4.02913 23.343 3.79355 22.9198 3.5069L22.8957 3.49062C22.8028 3.42835 22.7005 3.36312 22.576 3.28645L22.4291 3.197L21.9782 2.92635L22.625 1.86288Z"
                        fill="white"
                    />
                    <path
                        d="M37.6666 25.558V13.8671H40.9097V11.7266H37.6666V10.1897C37.6666 8.4517 38.4271 7.58267 39.9479 7.58267C40.3875 7.58267 40.8549 7.65585 41.3496 7.8022V5.52443C40.7449 5.34148 40.0762 5.25 39.3432 5.25C37.9324 5.25 36.8375 5.6525 36.0587 6.4575C35.28 7.2625 34.8906 8.4334 34.8906 9.97023V11.7266H32.2246V13.8671H34.8906V25.558H37.6666ZM48.9353 25.75C49.9982 25.75 50.9281 25.5305 51.7251 25.0912C52.5221 24.6523 53.1223 24.0211 53.5255 23.1978V25.558H56.274V11.7266H53.5255V13.9769C53.1038 13.1536 52.4994 12.5178 51.7113 12.0696C50.9236 11.6214 49.9982 11.3973 48.9353 11.3973C47.7444 11.3973 46.6815 11.6991 45.7472 12.3029C44.8126 12.9066 44.0844 13.7574 43.5622 14.8551C43.04 15.9528 42.7789 17.2152 42.7789 18.6422C42.7789 20.0693 43.0352 21.318 43.5484 22.3882C44.0613 23.4585 44.7806 24.2864 45.7059 24.8718C46.6313 25.4572 47.7077 25.75 48.9353 25.75ZM49.5951 23.5546C48.3306 23.5546 47.3458 23.1246 46.6405 22.2647C45.935 21.4049 45.5821 20.1974 45.5821 18.6422C45.5821 17.0688 45.935 15.8385 46.6405 14.9511C47.3458 14.0638 48.3216 13.6201 49.5676 13.6201C50.8318 13.6201 51.8076 14.0501 52.4946 14.91C53.1819 15.7698 53.5255 16.9957 53.5255 18.5874C53.5255 20.1608 53.1819 21.382 52.4946 22.251C51.8076 23.12 50.841 23.5546 49.5951 23.5546ZM63.0902 25.558V17.6817C63.0902 16.4559 63.4428 15.4771 64.1483 14.7453C64.8538 14.0135 65.7929 13.6476 66.9655 13.6476C67.9917 13.6476 68.7382 13.922 69.2056 14.4709C69.6728 15.0197 69.9063 15.8979 69.9063 17.1054V25.558H72.6823V16.9408C72.6823 13.2451 71.024 11.3973 67.7076 11.3973C66.6449 11.3973 65.6966 11.6305 64.8628 12.097C64.0292 12.5636 63.3925 13.236 62.9526 14.1141L62.7053 11.7266H60.1218C60.2684 12.8792 60.3417 14.1782 60.3417 15.6235V25.558H63.0902ZM81.9722 25.75C82.7417 25.75 83.4289 25.6495 84.0336 25.4482V23.1978C83.5387 23.3442 83.0533 23.4173 82.5769 23.4173C81.8439 23.4173 81.2714 23.2206 80.859 22.8273C80.4469 22.4339 80.2405 21.7616 80.2405 20.8102V13.8671H84.0612V11.7266H80.2405V7.30823L77.4648 8.26875V11.7266H74.7711V13.8671H77.4648V21.0298C77.4648 22.5666 77.8587 23.7375 78.6465 24.5425C79.4345 25.3475 80.5429 25.75 81.9722 25.75ZM92.5815 25.75C93.9189 25.75 95.1009 25.4572 96.127 24.8718C97.1531 24.2864 97.9454 23.4539 98.5043 22.3745C99.0633 21.2951 99.3426 20.0327 99.3426 18.5874C99.3426 17.142 99.0633 15.8751 98.5043 14.7865C97.9454 13.6979 97.1531 12.8609 96.127 12.2754C95.1009 11.69 93.9189 11.3973 92.5815 11.3973C91.2255 11.3973 90.0345 11.69 89.0084 12.2754C87.9823 12.8609 87.1898 13.6979 86.6308 14.7865C86.0721 15.8751 85.7925 17.142 85.7925 18.5874C85.7925 20.0327 86.0721 21.2951 86.6308 22.3745C87.1898 23.4539 87.9823 24.2864 89.0084 24.8718C90.0345 25.4572 91.2255 25.75 92.5815 25.75ZM92.5539 23.5546C91.2895 23.5546 90.3139 23.1338 89.6267 22.2922C88.9397 21.4506 88.596 20.2157 88.596 18.5874C88.596 16.9957 88.9442 15.7698 89.6404 14.91C90.3367 14.0501 91.317 13.6201 92.5815 13.6201C93.8274 13.6201 94.794 14.0501 95.481 14.91C96.1682 15.7698 96.5116 16.9957 96.5116 18.5874C96.5116 20.2157 96.1727 21.4506 95.4947 22.2922C94.8168 23.1338 93.8364 23.5546 92.5539 23.5546ZM105.334 25.558V17.7366C105.334 16.4742 105.646 15.4771 106.269 14.7453C106.892 14.0135 107.735 13.6476 108.798 13.6476C109.714 13.6476 110.378 13.922 110.79 14.4709C111.202 15.0197 111.408 15.8888 111.408 17.078V25.558H114.184V17.7366C114.184 16.4742 114.491 15.4771 115.105 14.7453C115.719 14.0135 116.557 13.6476 117.62 13.6476C118.536 13.6476 119.2 13.922 119.613 14.4709C120.025 15.0197 120.231 15.8888 120.231 17.078V25.558H123.007V16.9408C123.007 13.2451 121.468 11.3973 118.39 11.3973C117.364 11.3973 116.443 11.6351 115.627 12.1108C114.812 12.5865 114.194 13.2359 113.772 14.0592C113.113 12.2846 111.711 11.3973 109.567 11.3973C108.559 11.3973 107.68 11.626 106.928 12.0833C106.177 12.5407 105.6 13.1902 105.197 14.0318L104.95 11.7266H102.366C102.513 12.8792 102.586 14.1782 102.586 15.6235V25.558H105.334Z"
                        fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_435_14806">
                      <rect width="123.294" height="32" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </Link>
            </h1>

            <nav className="flex items-center justify-between px-4 py-3 bg-transparent text-white">
              {/* Navbar items */}
              <ul className="flex space-x-4 items-center mx-12">
                {navItems.map((item) => (
                    <li
                        key={item.route}
                        className={`${
                            currentPage === item.route
                                ? "text-white font-slashed-zero font-inter font-medium text-base leading-8 tracking-wider uppercase"
                                : "text-gray-500 font-slashed-zero font-inter font-medium text-base leading-8 tracking-wider uppercase"
                        }`}
                    >
                      <Link href={item.route}>{item.text}</Link>
                    </li>
                ))}
              </ul>
            </nav>

            <div className="w-3/12 flex justify-end">
              <button className="bg-success hover:bg-blue-700 text-white font-normal rounded-0">
                <Link
                    href="/"
                    className="text-white font-normal py-2 px-4 rounded font-roboto-condensed text-base leading-9 capitalize"
                >
                  Launch Dapp
                </Link>
              </button>
            </div>
          </header>
        </div>
      </>
  );
};

export default Navbar;
