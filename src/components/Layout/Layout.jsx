import React from "react";
// import { Link } from "gatsby";
// import useFade from "../../hooks/useFade";

// import { IoChatboxOutline, IoHomeOutline } from "react-icons/io5";

// import CommentModal from "../CommentModal/CommentModal";

// import { header, footer, icon, commentButton } from "./Layout.module.scss";

const Layout = ({ children }) => {
  // const [fadeModal, setFadeModal, modalFadeProps] = useFade(false);

  // const handleCommentButton = () => {
  //   setFadeModal(!fadeModal);
  // };

  return (
    <>
      {/* <header className={header}>
        <Link to="/" aria-label="Return to the home page">
          <IoHomeOutline className={icon} />
        </Link>
      </header>
      {fadeModal && (
        <CommentModal fadeProps={modalFadeProps} setFade={setFadeModal} />
      )} */}
      <main>{children}</main>
      {/* <footer className={footer}>
        <button
          className={commentButton}
          onClick={handleCommentButton}
        >
          <IoChatboxOutline className={icon} />
        </button>
      </footer> */}
    </>
  );
};

export default Layout;
