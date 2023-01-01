import React from "react";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarContent,
} from "react-pro-sidebar";
import Social from "../../social/Social";

const menuContent = [
  {
    name: "Home",
    to: "/"
  },
  {
    name: "Portfolio",
    to: "/works-grid",
  },
  {
    name: "Blog",
    to: "/blog-grid"
  },
  {
    name: "About",
    to: "/about-me"
  },
];

const MobileMenu = () => {
  return (
    <>
      <div className="ptf-offcanvas-menu__navigation">
        <ProSidebar>
          <SidebarContent>
            <Menu className="sidebar-menu_wrapper">
              {menuContent.map((item, i) => (
                // <SubMenu title={item.name} key={i}>
                //   {item.dropDownItems.map((val, i) => (
                //     <MenuItem key={i}>
                //       <Link to={val.routerPath}>{val.name}</Link>
                //     </MenuItem>
                //   ))}
                // </SubMenu>
                <MenuItem>
                  <Link to={item.to} className="pro-menu-item pro-sub-menu">
                    {item.name}
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </SidebarContent>
        </ProSidebar>
      </div>
      {/* End .ptf-offcanvas-menu__navigation */}

      <div className="ptf-offcanvas-menu__footer">
        <p className="ptf-offcanvas-menu__copyright">
          @{new Date().getFullYear()} <span>Moonex</span>. All Rights Reserved.{" "}
          <br />
          Development by{" "}
          <span>
            <a
              href="https://themeforest.net/user/ib-themes"
              target="_blank"
              rel="noopener noreferrer"
            >
              ib-themes
            </a>
          </span>
          .
        </p>
        <Social />
      </div>
      {/* End .ptf-offcanvas-menu__footer */}
    </>
  );
};

export default MobileMenu;
