"use client";
import React from "react";
import Script from "next/script";
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";

const TrackingScripts = () => {
  return (
    <>
      <GoogleTagManager gtmId="GTM-W5TDXMD" />
      <GoogleAnalytics gaId="G-2VB35ZXSZY" />
      <Script
        src="https://code.tidio.co/ie0hwxpri9o05xhjbf2zly2wuom4y6ri.js"
        strategy="afterInteractive"
      />
    </>
  );
};

export default TrackingScripts;
