import React, { useState } from "react";
import Draggable from "react-draggable";

import Weeds000 from "../../svg/weeds/Weeds000";
import Weeds005 from "../../svg/weeds/Weeds005";
import Weeds010 from "../../svg/weeds/Weeds010";
import Weeds015 from "../../svg/weeds/Weeds015";
import Weeds020 from "../../svg/weeds/Weeds020";
import Weeds025 from "../../svg/weeds/Weeds025";
import Weeds030 from "../../svg/weeds/Weeds030";
import Weeds035 from "../../svg/weeds/Weeds035";
import Weeds040 from "../../svg/weeds/Weeds040";
import Weeds045 from "../../svg/weeds/Weeds045";
import Weeds050 from "../../svg/weeds/Weeds050";
import Weeds055 from "../../svg/weeds/Weeds055";
import Weeds060 from "../../svg/weeds/Weeds060";
import Weeds065 from "../../svg/weeds/Weeds065";
import Weeds070 from "../../svg/weeds/Weeds070";
import Weeds075 from "../../svg/weeds/Weeds075";
import Weeds080 from "../../svg/weeds/Weeds080";

// import { coords } from './LandImages.module.scss';

const allImportsWithCoords = [
  { Import: Weeds000, coords: { x: 610, y: 10 } },
  { Import: Weeds005, coords: { x: 265, y: 90 } },
  { Import: Weeds010, coords: { x: 480, y: 80 } },
  { Import: Weeds015, coords: { x: 1150, y: 70 } },
  { Import: Weeds020, coords: { x: 0, y: 0 } },
  { Import: Weeds025, coords: { x: 600, y: 150 } },
  { Import: Weeds030, coords: { x: 620, y: 40 } },
  { Import: Weeds035, coords: { x: 645, y: 100 } },
  { Import: Weeds040, coords: { x: 400, y: 0 } },
  { Import: Weeds045, coords: { x: 380, y: 0 } },
  { Import: Weeds050, coords: { x: 270, y: 125 } },
  { Import: Weeds055, coords: { x: 910, y: 130 } },
  { Import: Weeds060, coords: { x: 900, y: 60 } },
  { Import: Weeds065, coords: { x: 660, y: 260 } },
  { Import: Weeds070, coords: { x: 870, y: 0 } },
  { Import: Weeds075, coords: { x: 100, y: 10 } },
  { Import: Weeds080, coords: { x: -40, y: 80 } },
];

const WeedsImages = ({
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
    const zIndex = 4000 + keyx5;
    return {
      Image: Import,
      keyx5,
      zIndex,
      group: "weeds",
      coords,
    };
  });

  // increase z-index to highest value on click
  const startingImageZIndexesMap = new Map();
  allImages.forEach((image) => {
    startingImageZIndexesMap.set(
      `dragPathWeeds${convertTo3DigitKeyString(image.keyx5)}`,
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
          `dragPathWeeds${threeDigitKey}`
        );
        const fadeButton = activeImage[0] === `dragPathWeeds${threeDigitKey}`;

        if (hiddenImages.includes(`hideWeeds${threeDigitKey}`)) {
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
            handle={`#dragPathWeeds${threeDigitKey}`}
            defaultPosition={{ x: coords.x, y: coords.y }}
          >
            <div
              id={`${group}${threeDigitKey}`}
              className={className}
              style={{
                zIndex: imageZStates.get(`dragPathWeeds${threeDigitKey}`),
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
                  id={`hideWeeds${threeDigitKey}`}
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

export default WeedsImages;
