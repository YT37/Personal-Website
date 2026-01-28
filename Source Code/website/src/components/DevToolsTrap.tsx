"use client";
import { useEffect } from "react";

const DevToolsTrap = () => {
  useEffect(() => {
    const warningTitleCSS =
      "color: #ef4444; font-size: 40px; font-weight: bold; text-shadow: 2px 2px #000; font-family: monospace;";
    const warningDescCSS =
      "color: #fff; font-size: 14px; font-family: monospace;";
    const signatureCSS =
      "color: #0ea5e9; font-size: 12px; font-family: monospace;";

    console.log("%c⚠ SYSTEM ALERT ⚠", warningTitleCSS);
    console.log(
      "%cYou have entered a restricted area. If you are a developer, welcome to the backend.",
      warningDescCSS
    );
    console.log(
      "%cInterested in how this was built? Check out the source code or contact me.",
      warningDescCSS
    );
    console.log("%c\nDesigned & Engineered by Yug Thapar", signatureCSS);
  }, []);

  return null;
};

export default DevToolsTrap;
