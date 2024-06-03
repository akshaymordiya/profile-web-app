"use client";

import { useEffect } from "react";

export default function Aos() {
  useEffect(() => { 
    import("aos").then((AOS) =>
      AOS.init({
        duration: 1200,
        once: true,
        offset: 200,
        delay: 100,
      })
    );
  }, []);

  return <></>;
}
