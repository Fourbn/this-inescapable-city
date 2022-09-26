import React from 'react';

const Land170 = () => {
  return (
    <div className="draggable-svg">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 28 50"
        className="path-map"
      >
        <path
          id="dragPathLand170"
          data-image-group="land"
          fill="white"
          stroke="none"
          opacity="0"
          strokeWidth="1"
          d="M 2.00,21.00
           C 0.70,15.84 1.67,16.30 3.56,11.83
             6.74,4.34 7.56,3.00 16.00,1.00
             18.11,5.20 17.88,6.39 22.00,9.00
             22.00,9.00 21.00,12.00 21.00,12.00
             26.88,15.60 29.72,25.87 26.07,31.96
             23.95,35.50 21.07,36.12 19.51,39.21
             18.10,41.98 18.03,46.90 18.00,50.00
             18.00,50.00 11.00,50.00 11.00,50.00
             10.99,47.60 11.21,44.32 9.98,42.21
             8.51,39.69 5.33,38.49 3.28,36.47
             -0.12,33.15 -1.79,24.40 2.00,21.00 Z
           M 25.00,23.00
           C 25.00,23.00 24.00,23.00 24.00,23.00
             24.00,23.00 25.00,24.00 25.00,24.00
             25.00,24.00 25.00,23.00 25.00,23.00 Z"
        />
      </svg>

      <svg
        id="uuid-2de9ce2d-40ad-4eb2-a2ff-010392346a51"
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="50"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 28 50"
        className="artwork-svg"
      >
        <g id="uuid-abe893b5-4d54-4982-a2ee-89e2fa638dc0">
          <g id="uuid-a0cc79d0-d7d0-49c8-b64f-ffb0a07dc86c">
            <image
              id="uuid-4116b5d2-dfab-4676-810a-442878eee162"
              width="28"
              height="50"
              xlinkHref="data:image/png;base64,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"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

export default Land170;
