import React from "react";
import Lottie from "react-lottie";
import animationData from "../../Assets/animation.json"; // Update this path to your JSON file

const LottieAnimation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return <Lottie options={defaultOptions} height={600} width={600} />;
};

export default LottieAnimation;
