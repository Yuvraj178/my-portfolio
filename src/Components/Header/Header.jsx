import React from "react";
import { Navbar } from "../Navbar/Navbar";
import { ThemeContext } from "../../Context/theme";

import "./Header.css";
export const Header = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <header className={"header center " + themename}>
        <h3>
          <a href="#home" className="link">
            <span>
              <img src="Y-logo.png" alt="logo" />
            </span>
            uvraj
          </a>
        </h3>
        <Navbar />
      </header>
    </>
  );
};
