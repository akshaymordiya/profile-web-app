import React from "react";
import "../../styles/global.scss";
import { Inter } from "next/font/google";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Navbar from "@/app/components/Navbar";
import CustomCursor from "@/app/components/MouseCursor";
import Footer from "@/app/components/Footer";
import ScrollToTop from "@/app/components/scrollToTop";
import SmoothScroll from "@/app/components/SmoothScroll";
//metadata
import { defaultMetadata } from "@/config/metadata";
const inter = Inter({ subsets: ["latin"] });

export const metadata = defaultMetadata

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <SmoothScroll>
            <main>
              {children}
            </main>
          <Footer/>
          <CustomCursor />
          <ScrollToTop />
        </SmoothScroll>
        <div id="menu-portal"></div>
        <div id="alert-box"></div>
      </body>
    </html>
  );
}
