// code for this hook came from this blog: https://dev.to/ekeijl/simple-react-fade-animation-hook-5dp8

import { useState, useEffect } from "react";

const useFade = (initial) => {
  const [show, setShow] = useState(initial);
  const [isVisible, setVisible] = useState(show);

  // Update visibility when show changes
  useEffect(() => {
    if (show) setVisible(true);
  }, [show]);

  // When the animation finishes, set visibility to false
  const onAnimationEnd = () => {
    if (!show) setVisible(false);
  };

  // const style = { animation: `${show ? "fadeIn" : "fadeOut"} .3s` };
  const className = `${show ? "fading-in" : "fading-out"}`;

  // These props go on the fading DOM element
  const fadeProps = {
    className,
    onAnimationEnd,
  };

  return [isVisible, setShow, fadeProps];
};

export default useFade;
