import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <a
      className="w-full h-screen"
      href="https://www.designbyhumans.com/shop/StrangerThings/"
    >
      <img
        src="/Hero.png"
        className="w-full h-full hidden md:block"
        alt="hero image"
      />
      <img
        src="/herom.png"
        className="w-full h-full  md:hidden"
        alt="hero image"
      />
    </a>
  );
}

export default Hero;
