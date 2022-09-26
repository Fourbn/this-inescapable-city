import React from 'react';

const Land150 = () => {
  return (
    <div className="draggable-svg">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 30 49"
        className="path-map"
      >
        <path
          id="dragPathLand155"
          data-image-group="land"
          fill="white"
          stroke="none"
          opacity="0"
          strokeWidth="1"
          d="M 12.00,39.00
           C 7.93,38.68 4.29,37.35 1.92,33.74
             -2.21,27.45 0.62,9.90 5.54,4.31
             10.79,-1.63 16.65,-0.56 19.00,7.00
             20.76,7.29 22.00,7.25 23.42,8.60
             24.69,9.80 25.43,12.36 26.07,14.00
             28.32,19.78 29.93,24.89 27.16,30.95
             25.62,34.31 23.31,34.95 22.01,37.26
             18.93,42.68 24.64,46.31 13.00,48.00
             13.00,48.00 12.00,39.00 12.00,39.00 Z"
        />
      </svg>

      <svg
        id="uuid-0fe64c28-f666-4308-be55-11b558bff2c3"
        xmlns="http://www.w3.org/2000/svg"
        width="29.76"
        height="49"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 29.76 49"
        className="artwork-svg"
      >
        <g id="uuid-b82f372a-d68f-4ddc-aecf-1255ad615e72">
          <g id="uuid-d8a5471d-e164-46b7-9d28-8747e2c2334e">
            <image
              id="uuid-89e15912-156f-4146-b7a4-15ffc6d9af4c"
              width="30"
              height="49"
              transform="translate(-.16)"
              xlinkHref="data:image/png;base64,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"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

export default Land150;
