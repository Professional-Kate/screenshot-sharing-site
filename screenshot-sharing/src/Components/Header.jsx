import React, { useState } from "react";
import HeaderNavigation from "./HeaderNavigation";

const Header = ({ title, FontAwesomeIcon, icons, setHeaderTitle }) => {
  const headerIcons = [icons.faAngleDown, icons.faAngleUp];
  const [headerIcon, setHeaderIcon] = useState(headerIcons[0]);

  const clickEvent = function () {
    const getHeaderElement = document.getElementById("page-header");
    if (getHeaderElement.classList.contains("extend-header")) {
      getHeaderElement.classList.remove("extend-header");
      setHeaderIcon(headerIcons[1]);
      setHeaderTitle("Screenshots");
    } else {
      getHeaderElement.classList.add("extend-header");
      setHeaderIcon(headerIcons[0]);
      setHeaderTitle("Submit");
    }
  };

  return (
    <header id="page-header" className="main-header nice-box-shadow">
      <nav id="header-nav">
        <ul id="header-list" className="header-list">
          <li>
            <h1 id="main-heading" className="highlight-font main-heading">
              {title}!
            </h1>
          </li>
          <li>
            <FontAwesomeIcon
              icon={headerIcon}
              className="hamburger-icon cursor-pointer"
              onClick={clickEvent}
            />
          </li>
          {headerIcon.iconName === "angle-down" && <HeaderNavigation />}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
