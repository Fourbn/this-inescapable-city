import React from "react";
import alert from "../../assets/audio/error.wav";

import { modal, rotate, topBar } from "./OliviaModal.module.scss";

const OliviaModal = ({ message }) => {
  return (
    <div className={modal}>
      <audio src={alert} autoPlay aria-hidden="true" />
      <div className={topBar}>
        <button type="button">
          <span className={rotate}>+</span>
        </button>
      </div>
      <p>{message}</p>
    </div>
  );
};

export default OliviaModal;
