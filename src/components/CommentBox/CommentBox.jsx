import React from "react";

import { box, riverBlue, thistle, deepWaters, rust, algae } from "./CommentBox.module.scss";

const CommentBox = ({ comment, colorCycle }) => {
  const bgColors = [riverBlue, thistle, deepWaters, rust, algae];

  return (
    <li className={`${box} ${bgColors[colorCycle]}`}>
      <h2>The water remembers...</h2>
      <p>{comment}</p>
    </li>
  );
};

export default CommentBox;
