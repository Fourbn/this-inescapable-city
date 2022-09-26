import React, { useState } from "react";
import Draggable from "react-draggable";

import City000 from "../../svg/city/City000";
import City005 from "../../svg/city/City005";
import City010 from "../../svg/city/City010";
import City015 from "../../svg/city/City015";
import City020 from "../../svg/city/City020";
import City025 from "../../svg/city/City025";
import City030 from "../../svg/city/City030";
import City035 from "../../svg/city/City035";
import City040 from "../../svg/city/City040";
import City045 from "../../svg/city/City045";
import City050 from "../../svg/city/City050";
import City055 from "../../svg/city/City055";
import City060 from "../../svg/city/City060";
import City065 from "../../svg/city/City065";
import City070 from "../../svg/city/City070";
import City075 from "../../svg/city/City075";
import City080 from "../../svg/city/City080";
import City085 from "../../svg/city/City085";
import City090 from "../../svg/city/City090";
import City095 from "../../svg/city/City095";
import City100 from "../../svg/city/City100";
import City105 from "../../svg/city/City105";
import City110 from "../../svg/city/City110";
import City115 from "../../svg/city/City115";
import City120 from "../../svg/city/City120";
import City125 from "../../svg/city/City125";
import City130 from "../../svg/city/City130";
import City135 from "../../svg/city/City135";

const allImportsWithCoords = [
  { Import: City000, coords: { x: 0, y: 0 } },
  { Import: City005, coords: { x: 647, y: 230 } },
  { Import: City010, coords: { x: 420, y: 625 } },
  { Import: City015, coords: { x: 980, y: 30 } },
  { Import: City020, coords: { x: 5, y: 180 } },
  { Import: City025, coords: { x: 950, y: 630 } },
  { Import: City030, coords: { x: 390, y: 230 } },
  { Import: City035, coords: { x: 565, y: 75 } },
  { Import: City040, coords: { x: 950, y: 590 } },
  { Import: City045, coords: { x: 1190, y: 600 } },
  { Import: City050, coords: { x: 1063, y: 580 } },
  { Import: City055, coords: { x: 400, y: 60 } },
  { Import: City060, coords: { x: 1110, y: 375 } },
  { Import: City065, coords: { x: 1005, y: 285 } },
  { Import: City070, coords: { x: 1005, y: 120 } },
  { Import: City075, coords: { x: 840, y: 300 } },
  { Import: City080, coords: { x: 845, y: 132 } },
  { Import: City085, coords: { x: 725, y: 20 } },
  { Import: City090, coords: { x: 590, y: 540 } },
  { Import: City095, coords: { x: 555, y: 220 } },
  { Import: City100, coords: { x: 390, y: 450 } },
  { Import: City105, coords: { x: 400, y: 95 } },
  { Import: City110, coords: { x: 250, y: 305 } },
  { Import: City115, coords: { x: 205, y: 510 } },
  { Import: City120, coords: { x: 130, y: 100 } },
  { Import: City125, coords: { x: 945, y: 210 } },
  { Import: City130, coords: { x: 220, y: 110 } },
  { Import: City135, coords: { x: 40, y: 355 } },
];

const CityImages = ({
  className,
  fadeProps,
  handleZIndexIncrease,
  activeImage,
  setActiveImage,
}) => {
  const convertTo3DigitKeyString = (key) => {
    const keyString = key.toString();
    const characterTotal = keyString.split("").length;
    if (characterTotal >= 3) {
      return key.toString();
    }
    if (characterTotal <= 2) {
      return `${characterTotal === 2 ? "0" : "00"}${keyString}`;
    }
  };

  const allImages = allImportsWithCoords.map((ImportObj, key) => {
    const { Import, coords } = ImportObj;
    const keyx5 = key * 5;
    const zIndex = 3000 + keyx5;
    return {
      Image: Import,
      keyx5,
      zIndex,
      group: "city",
      coords,
    };
  });

  // increase z-index to highest value on click
  const startingImageZIndexesMap = new Map();
  allImages.forEach((image) => {
    startingImageZIndexesMap.set(
      `dragPathCity${convertTo3DigitKeyString(image.keyx5)}`,
      image.zIndex
    );
  });
  const [imageZStates, setImageZStates] = useState(startingImageZIndexesMap);

  // control hidden/visible elements
  const [hiddenImages, setHiddenImages] = useState([]);

  const handleHideImage = (e) => {
    if (hiddenImages.includes(e.target.id)) {
      return;
    }
    const newListOfHiddenImages = [...hiddenImages, e.target.id];
    setHiddenImages(newListOfHiddenImages);
    return;
  };

  const handleHideButtonVisibility = (e) => {
    setActiveImage([e.target.id, ...activeImage]);
  };

  // temporary placement coords to support default positioning
  // const [lastDraggedImageCoords, setLastDraggedImageCoords] = useState({
  //   id: '',
  //   x: 0,
  //   y: 0,
  // });

  // const handleUpdateCoords = (e) => {
  //   setLastDraggedImageCoords({ id: e.target.id, x: e.x, y: e.y });
  // };

  return (
    <>
      {allImages.map((image) => {
        const { Image, keyx5, group, coords } = image;
        const threeDigitKey = convertTo3DigitKeyString(keyx5);

        const renderButton = activeImage.includes(
          `dragPathCity${threeDigitKey}`
        );
        const fadeButton = activeImage[0] === `dragPathCity${threeDigitKey}`;

        if (hiddenImages.includes(`hideCity${threeDigitKey}`)) {
          return null;
        }
        return (
          <Draggable
            key={keyx5}
            onMouseDown={(e) =>
              handleZIndexIncrease(e, imageZStates, setImageZStates)
            }
            onStart={(e) => handleHideButtonVisibility(e)}
            // onDrag={(e) => handleUpdateCoords(e)}
            handle={`#dragPathCity${threeDigitKey}`}
            defaultPosition={{ x: coords.x, y: coords.y }}
          >
            <div
              id={`${group}${threeDigitKey}`}
              className={className}
              style={{
                zIndex: imageZStates.get(`dragPathCity${threeDigitKey}`),
              }}
            >
              <div {...fadeProps}>
                <Image />
              </div>
              {renderButton &
              (
                <button
                  onAnimationEnd={() => {
                    if (!fadeButton) setActiveImage(activeImage.slice(0, 1));
                  }}
                  className={fadeButton ? "fading-in" : "fading-out"}
                  type="button"
                  id={`hideCity${threeDigitKey}`}
                  onClick={(e) => handleHideImage(e)}
                >
                  +
                </button>
              )}
            </div>
          </Draggable>
        );
      })}
      {/* <h1 className={coords}>
        {lastDraggedImageCoords.id} x: {lastDraggedImageCoords.x} y: {lastDraggedImageCoords.y}
      </h1> */}
    </>
  );
};

export default CityImages;
