import React from "react";

import { modalWrapper, modal } from "./MobileWarningModal.module.scss";

const MobileWarningModal = ({ setModalVisible, fadeProps }) => {
  return (
    <div
      className={`${fadeProps.className} ${modalWrapper}`}
      onAnimationEnd={fadeProps.onAnimationEnd}
      onClick={() => setModalVisible(false)}
      aria-hidden={true}
    >
      <div className={modal}>
        <button
          type="button"
          aria-label="Click to close the warning pop-up and access the rest of the site"
          onClick={() => setModalVisible(false)}
        >
          +
        </button>
        <h2>Hello and welcome!</h2>
        <p>
          Thanks for checking out This Inescapable City! We notice that you are
          accessing the exhibition on a mobile device and wanted to let you know
          that some pieces are best enjoyed on a computer. Check things out that
          way if you like; otherwise, scroll away!
        </p>
      </div>
    </div>
  );
};

export default MobileWarningModal;
