import dynamic from "next/dynamic";
import heroAnimation from "./../public/heroAnimation.json";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function HeroAnimation() {
  return <Lottie animationData={heroAnimation} loop={true} />;
}
