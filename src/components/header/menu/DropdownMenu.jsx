import React from "react";
import { Link } from "react-router-dom";

const menuContent = [
  {
    name: "Home",
    activeClass: "sf-with-ul",
    menuClass: "two-columns current-menu-item",
    to: "/",
  },
  {
    name: "Portfolio",
    activeClass: "",
    menuClass: "",
    to: "/works-grid",
  },
  {
    name: "Blog",
    activeClass: "",
    menuClass: "",
    to: "/blog-grid",
  },
  {
    name: "About",
    activeClass: "",
    menuClass: "two-columns",
    to: "/about-me",
  },
];

const DropdownMenu = () => {
  return (
    <ul className="sf-menu">
      {menuContent.map((item, i) => (
        <li className={`menu-item-has-children ${item.menuClass}`} key={i}>
          <Link to={item.to}>
            <span>{item.name}</span>
          </Link>

          {/* <ul className="sub-menu mega">
            {item.dropDownItems.map((val, i) => (
              <li key={i}>
                <Link to={val.routerPath}>
                  {" "}
                  <span>{val.name}</span>
                </Link>
              </li>
            ))}
          </ul> */}
        </li>
      ))}
    </ul>
  );
};

export default DropdownMenu;
