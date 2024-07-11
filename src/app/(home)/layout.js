import { Inter } from "next/font/google";
import "../../styles/global.scss";
import ScrollToTop from "@/app/components/scrollToTop";
import Navbar from "@/app/components/Navbar";
import Footer from "./sections/Footer";
import SmoothScroll from "@/app/components/SmoothScroll";
import CustomCursor from "@/app/components/MouseCursor";
import { defaultMetadata } from "@/config/metadata";
//metadata

const inter = Inter({ subsets: ["latin"] });

export const metadata = defaultMetadata

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
        </SmoothScroll>
        <div id="menu-portal"></div>
      </body>
    </html>
  );
}
