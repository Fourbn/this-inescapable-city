import React, { useState, useEffect } from "react";

const DelayedRender = ({ children, delay = 500 }) => {
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsShown(true);
    }, delay)

    return () => clearTimeout(timer);
  }, [delay])

  return isShown ? children : null;
}

export default DelayedRender;
