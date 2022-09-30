import React, { useState } from "react";
import Draggable from "react-draggable";

import Land005 from "../../svg/land/Land005";
import Land010 from "../../svg/land/Land010";
import Land015 from "../../svg/land/Land015";
import Land020 from "../../svg/land/Land020";
import Land025 from "../../svg/land/Land025";
import Land030 from "../../svg/land/Land030";
import Land035 from "../../svg/land/Land035";
import Land040 from "../../svg/land/Land040";
import Land045 from "../../svg/land/Land045";
import Land050 from "../../svg/land/Land050";
import Land055 from "../../svg/land/Land055";
import Land060 from "../../svg/land/Land060";
import Land065 from "../../svg/land/Land065";
import Land070 from "../../svg/land/Land070";
import Land075 from "../../svg/land/Land075";
import Land080 from "../../svg/land/Land080";
import Land085 from "../../svg/land/Land085";
import Land090 from "../../svg/land/Land090";
import Land095 from "../../svg/land/Land095";
import Land100 from "../../svg/land/Land100";
import Land105 from "../../svg/land/Land105";
import Land110 from "../../svg/land/Land110";
import Land115 from "../../svg/land/Land115";
import Land120 from "../../svg/land/Land120";
import Land125 from "../../svg/land/Land125";
import Land130 from "../../svg/land/Land130";
import Land135 from "../../svg/land/Land135";
import Land140 from "../../svg/land/Land140";
import Land145 from "../../svg/land/Land145";
import Land150 from "../../svg/land/Land150";
import Land155 from "../../svg/land/Land155";
import Land160 from "../../svg/land/Land160";
import Land165 from "../../svg/land/Land165";
import Land170 from "../../svg/land/Land170";

// import { coords } from './LandImages.module.scss';

const allImportsWithCoords = [
  { Import: Land005, coords: { x: 487, y: 340 } },
  { Import: Land010, coords: { x: 620, y: 380 } },
  { Import: Land015, coords: { x: 745, y: 625 } },
  { Import: Land020, coords: { x: 840, y: 545 } },
  { Import: Land025, coords: { x: 285, y: 395 } },
  { Import: Land030, coords: { x: 525, y: 370 } },
  { Import: Land035, coords: { x: -40, y: 230 } },
  { Import: Land040, coords: { x: 1050, y: 485 } },
  { Import: Land045, coords: { x: 960, y: 10 } },
  { Import: Land050, coords: { x: 720, y: 45 } },
  { Import: Land055, coords: { x: 290, y: 30 } },
  { Import: Land060, coords: { x: 240, y: -2 } },
  { Import: Land065, coords: { x: 15, y: 155 } },
  { Import: Land070, coords: { x: 970, y: 590 } },
  { Import: Land075, coords: { x: 15, y: 240 } },
  { Import: Land080, coords: { x: 140, y: 500 } },
  { Import: Land085, coords: { x: 5, y: 390 } },
  { Import: Land090, coords: { x: 30, y: 410 } },
  { Import: Land095, coords: { x: 0, y: -3 } },
  { Import: Land100, coords: { x: 225, y: -1 } },
  { Import: Land105, coords: { x: 797, y: 300 } },
  { Import: Land110, coords: { x: 300, y: 580 } },
  { Import: Land115, coords: { x: 565, y: 485 } },
  { Import: Land120, coords: { x: 720, y: 420 } },
  { Import: Land125, coords: { x: 340, y: 420 } },
  { Import: Land130, coords: { x: 830, y: 380 } },
  { Import: Land135, coords: { x: 480, y: 540 } },
  { Import: Land140, coords: { x: 745, y: 575 } },
  { Import: Land145, coords: { x: 1150, y: 455 } },
  { Import: Land150, coords: { x: 690, y: 450 } },
  { Import: Land155, coords: { x: 510, y: 620 } },
  { Import: Land160, coords: { x: 410, y: 580 } },
  { Import: Land165, coords: { x: 1140, y: 520 } },
  { Import: Land170, coords: { x: 610, y: 600 } },
];

const LandImages = ({
  className,
  handleZIndexIncrease,
  fadeProps,
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
    const keyx5 = (key + 1) * 5;
    const zIndex = 1000 + keyx5;
    return {
      Image: Import,
      keyx5,
      zIndex,
      group: "land",
      coords,
    };
  });

  // increase z-index to highest value on click
  const startingImageZIndexesMap = new Map();
  allImages.forEach((image) => {
    startingImageZIndexesMap.set(
      `dragPathLand${convertTo3DigitKeyString(image.keyx5)}`,
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
          `dragPathLand${threeDigitKey}`
        );
        const fadeButton = activeImage[0] === `dragPathLand${threeDigitKey}`;

        if (hiddenImages.includes(`hideLand${threeDigitKey}`)) {
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
            handle={`#dragPathLand${threeDigitKey}`}
            defaultPosition={{ x: coords.x, y: coords.y }}
          >
            <div
              id={`${group}${threeDigitKey}`}
              className={className}
              style={{
                zIndex: imageZStates.get(`dragPathLand${threeDigitKey}`),
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
                  id={`hideLand${threeDigitKey}`}
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

export default LandImages;
