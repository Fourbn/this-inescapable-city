import React from "react";
import { Link } from "gatsby";
import { IoChatboxOutline, IoHomeOutline } from "react-icons/io5";

import {
  header,
  footer,
  icon
} from "./Layout.module.scss";

const Layout = ({ children }) => {
  return (
    <>
      <header className={header}>
        {/* <Link to="/" aria-label="Return to the home page">
          <IoHomeOutline className={icon} />
        </Link> */}
      </header>
      <main>{children}</main>
      <footer className={footer}>
        <IoChatboxOutline className={icon} />
      </footer>
    </>
  );
};

export default Layout;
