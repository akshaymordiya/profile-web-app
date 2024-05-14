
import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css'

//sections
import Hero from "@/app/(home)/sections/Hero";

import HomeFooter from "@/components/HomeFooter";

export default function Home() {
  return (
    <div id="home-content">
        <main>
          <Hero />
        </main>
        <HomeFooter />
      </div>
  );
}
