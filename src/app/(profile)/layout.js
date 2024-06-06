import React from "react";
import '../../styles/global.scss';
import { Inter } from "next/font/google";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "../components/Navbar";
import CustomCursor from "../components/MouseCursor";
import Aos from "../components/AOS";
import "aos/dist/aos.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Personal",
  description: "Generated by Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Aos />
        <Navbar />
        {children}
        <CustomCursor />
      </body>
    </html>
  );
}
