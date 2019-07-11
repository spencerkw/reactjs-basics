import React from "react";

export const Header = (props) => {
  return (
    <nav className="navbar navbar-default">
      <div className="container">
        <div className="navbar-header">
          <ul className="nav navbar-nav">
            {/* eslint-disable-next-line*/}
            <li><a href="">Home</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}