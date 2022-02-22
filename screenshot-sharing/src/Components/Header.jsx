import React from "react";

const Header = ({ gameName }) => {
  return (
    <header
      id="page-header"
      className="main-header display-flex flex-align-center nice-box-shadow"
    >
      <nav id="header-nav">
        <ul id="header-list">
          <li>
            <h1 id="main-heading" className="highlight-font">
              {gameName}!
            </h1>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
