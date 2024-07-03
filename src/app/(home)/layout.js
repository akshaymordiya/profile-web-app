import { Inter } from "next/font/google";
import "../../styles/global.scss";
import ScrollToTop from "@/app/components/scrollToTop";
import Navbar from "@/app/components/Navbar";
import Footer from "./sections/Footer";
import SmoothScroll from "@/app/components/SmoothScroll";
import CustomCursor from "@/app/components/MouseCursor";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Personal",
  description: "Generated by create next app",
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <SmoothScroll>
            <main>
              {children}
            </main>
          <Footer />
          <CustomCursor />
          <ScrollToTop />
          <div id="portal"></div>
        </SmoothScroll>
      </body>
    </html>
  );
}
