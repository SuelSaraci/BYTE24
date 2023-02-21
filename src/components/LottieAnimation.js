import React, { useEffect, useState } from "react";
import Lottie from "react-lottie-player";

import * as animation from "../../public/animation.json";

function LottieAnimation() {
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }
  return (
    <div>
      <Lottie
        loop
        animationData={animation}
        play
        style={{ width: 500, height: 500 }}
      />
    </div>
  );
}

export default LottieAnimation;
