import React from "react";
import Lottie from "lottie-react";
import heroAnimation from "./../public/heroAnimation.json";

export default function HeroAnimation() {
  return (
    <Lottie
      animationData={heroAnimation}
      loop={true}
    />
  );
}
