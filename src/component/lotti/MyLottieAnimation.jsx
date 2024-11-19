// Import React and the Lottie package
import React from "react";
import Loading from '../../assets/loading.gif'
// import { Lottie } from "lottie-react";

import Lottie from "react-lottie";

import animationData from "../../../public/lotti.json";

const MyLottieAnimation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  };

  return (
    <div>
      {/* <Lottie
        animationData={animationData}
        loop={true}
        autoplay={true}
        style={{ width: 300, height: 300 }}
      /> */}
      <p>lotti test</p>
      {/* <img src={Loading} alt="loading"/> */}
      <Lottie options={defaultOptions} height={200} width={200} />
    </div>
  );
};

export default MyLottieAnimation;
