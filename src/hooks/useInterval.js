// hook copied from this blog post: https://overreacted.io/making-setinterval-declarative-with-react-hooks/
// intentionally leaving in the unused import statements, mostly cuz idk seems fine, why would he leave them in there? who knows, I'm sure it's fine....

import React, { useState, useEffect, useRef } from "react";

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

export default useInterval;
