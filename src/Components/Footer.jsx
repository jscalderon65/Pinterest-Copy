import React from "react";
import {
  HomeFilled,
  SearchOutlined,
  MessageOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <>

        <div className="Footer-navbar-container animate__animated animate__bounceInDown">
          <NavLink
            className="Footer-navbar-item"
            activeClassName="Footer-navbar-item-active"
            to="/home"
          >
            <b>Inicio</b>
          </NavLink>
          <NavLink
            className="Footer-navbar-item"
            activeClassName="Footer-navbar-item-active"
            to="/gallery"
          >
            <b>Fotos</b>
          </NavLink>
        </div>


      <div className="animate__animated animate__bounceInUp Footer-footer-container">
        <div className="Footer-menu">
          <NavLink
            to="/home"
            className="Footer-navlink"
            activeClassName="Footer-icon-active"
          >
            <HomeFilled className="Footer-icon-styles" />
          </NavLink>

          <NavLink
            to="/search"
            className="Footer-navlink"
            activeClassName="Footer-icon-active"
          >
            <SearchOutlined className="Footer-icon-styles" />
          </NavLink>

          <NavLink
            to="/messages"
            className="Footer-navlink"
            activeClassName="Footer-icon-active"
          >
            <MessageOutlined className="Footer-icon-styles" />
          </NavLink>

          <NavLink
            to="/settings"
            className="Footer-navlink"
            activeClassName="Footer-icon-active"
          >
            <UserOutlined className="Footer-icon-styles" />
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Footer;
