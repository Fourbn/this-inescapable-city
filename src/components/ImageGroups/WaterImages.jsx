import React, { useState } from "react";
import Draggable from "react-draggable";

import Water000 from "../../svg/water/Water000";
import Water005 from "../../svg/water/Water005";
import Water010 from "../../svg/water/Water010";
import Water015 from "../../svg/water/Water015";
import Water020 from "../../svg/water/Water020";
import Water025 from "../../svg/water/Water025";
import Water030 from "../../svg/water/Water030";
import Water035 from "../../svg/water/Water035";
import Water040 from "../../svg/water/Water040";
import Water045 from "../../svg/water/Water045";

// import { coords } from './LandImages.module.scss';

const allImportsWithCoords = [
  { Import: Water000, coords: { x: 450, y: 340 } },
  { Import: Water005, coords: { x: 760, y: 445 } },
  { Import: Water010, coords: { x: 0, y: 100 } },
  { Import: Water015, coords: { x: 810, y: 40 } },
  { Import: Water020, coords: { x: 520, y: 5 } },
  { Import: Water025, coords: { x: 350, y: 460 } },
  { Import: Water030, coords: { x: -80, y: 20 } },
  { Import: Water035, coords: { x: -20, y: 430 } },
  { Import: Water040, coords: { x: 230, y: 180 } },
  { Import: Water045, coords: { x: 150, y: 30 } },
];

const WaterImages = ({
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
    const zIndex = 2000 + keyx5;
    return {
      Image: Import,
      keyx5,
      zIndex,
      group: "water",
      coords,
    };
  });

  // increase z-index to highest value on click
  const startingImageZIndexesMap = new Map();
  allImages.forEach((image) => {
    startingImageZIndexesMap.set(
      `dragPathWater${convertTo3DigitKeyString(image.keyx5)}`,
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
          `dragPathWater${threeDigitKey}`
        );
        const fadeButton = activeImage[0] === `dragPathWater${threeDigitKey}`;

        if (hiddenImages.includes(`hideWater${threeDigitKey}`)) {
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
            handle={`#dragPathWater${threeDigitKey}`}
            defaultPosition={{ x: coords.x, y: coords.y }}
          >
            <div
              id={`${group}${threeDigitKey}`}
              className={className}
              style={{
                zIndex: imageZStates.get(`dragPathWater${threeDigitKey}`),
              }}
            >
              <div {...fadeProps}>
                <Image />
              </div>
              {renderButton && (
                <button
                  onAnimationEnd={() => {
                    if (!fadeButton) setActiveImage(activeImage.slice(0, 1));
                  }}
                  className={fadeButton ? "fading-in" : "fading-out"}
                  type="button"
                  id={`hideWater${threeDigitKey}`}
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

export default WaterImages;
