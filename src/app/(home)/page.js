"use client";
import React from "react";

//sections
import Hero from "@/app/(home)/sections/Hero";
import Services from "@/app/(home)/sections/Services";

import HomeFooter from "@/components/HomeFooter";

export default function Home() {
  return (
     <div id="home-content">
        <main>
          <Hero />
          {/* <Services /> */}
        </main>
       
        {/* <HomeFooter /> */}
      </div>
  );
}
