import React from "react";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";
import "./header.scss";

const Header = () => {
  const { pathname } = useLocation();
  const path = pathname.split("/").pop();

  const categoriesClassName = classNames({
    "header-link": true,
    active: path === "categories",
  });
  const locationsClassName = classNames({
    "header-link": true,
    active: path === "locations",
  });

  return (
    <div className="header-container">
      <div className="header-title">
        <h2>My Locations</h2>
      </div>
      <div className="header-links">
        <Link to="/categories" className={categoriesClassName}>
          Categories
        </Link>
        <Link to="/locations" className={locationsClassName}>
          Locations
        </Link>
      </div>     
    </div>
  );
};

export default Header;
