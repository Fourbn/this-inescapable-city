import React from 'react';

const Land160 = () => {
  return (
    <div className="draggable-svg">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 39 47"
        className="path-map"
      >
        <path
          id="dragPathLand160"
          data-image-group="land"
          fill="white"
          stroke="none"
          opacity="0"
          strokeWidth="1"
          d="M 3.00,27.00
           C -1.60,24.99 2.57,21.64 4.72,19.00
             4.72,19.00 18.68,0.98 18.68,0.98
             19.91,0.11 20.67,0.23 22.00,0.00
             24.75,8.07 33.50,13.98 36.21,22.00
             38.50,27.76 36.57,30.44 36.21,36.00
             36.21,36.00 32.00,39.00 32.00,39.00
             26.59,37.25 26.22,36.89 22.00,33.00
             22.00,33.00 20.00,46.00 20.00,46.00
             20.00,46.00 15.00,44.00 15.00,44.00
             15.00,44.00 16.00,36.00 16.00,36.00
             13.15,38.17 10.03,42.34 7.00,39.00
             7.00,39.00 6.00,40.00 6.00,40.00
             6.00,40.00 4.00,39.00 4.00,39.00
             4.00,39.00 5.00,36.00 5.00,36.00
             5.00,36.00 2.00,35.00 2.00,35.00
             2.00,35.00 3.00,27.00 3.00,27.00 Z
           M 24.00,9.00
           C 24.00,9.00 23.00,9.00 23.00,9.00
             23.00,9.00 24.00,10.00 24.00,10.00
             24.00,10.00 24.00,9.00 24.00,9.00 Z
           M 6.00,35.00
           C 6.00,35.00 5.00,35.00 5.00,35.00
             5.00,35.00 6.00,36.00 6.00,36.00
             6.00,36.00 6.00,35.00 6.00,35.00 Z"
        />
      </svg>

      <svg
        id="uuid-a43954ae-9650-4aab-aad5-c3b986d76db1"
        xmlns="http://www.w3.org/2000/svg"
        width="39"
        height="47"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 39 47"
        className="artwork-svg"
      >
        <g id="uuid-7044f669-5ad8-457e-ba3a-2ee22e8c02e4">
          <g id="uuid-b7519ef8-b37d-498c-8ca6-29ce55076da5">
            <image
              id="uuid-fb022523-bd59-45c6-baee-dd5ae863dbe6"
              width="39"
              height="47"
              xlinkHref="data:image/png;base64,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"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

export default Land160;
