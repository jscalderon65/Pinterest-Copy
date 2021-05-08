import React, { useState } from "react";
import { logout } from "../Firebase/FirebaseAuth";
import { useForm } from "my-customhook-collection";
import {
  SearchOutlined,
  CloseCircleFilled,
  DownOutlined,
  MessageFilled,
  HomeFilled,
  UserOutlined,
} from "@ant-design/icons";
import { Menu, Dropdown } from "antd";
import { NavLink, Link } from "react-router-dom";
import {getInputSearchValue} from '../Redux/Actions/Search';
import { useDispatch, useSelector } from "react-redux";
const Navbar = () => {
  const ReducerValues = useSelector((state) => state.search);
  const dispatch = useDispatch();
  const { Item } = Menu;
  const menu = (
    <Menu>
      <Item onClick={logout} danger>
        <b>Cerrar sesión</b>
      </Item>
    </Menu>
  );
  console.log("Navbar",ReducerValues);
  const [onFocusInput, setFocusInput] = useState(true);
  const [{ inputSearch }, onInputChange, setInputSearch] = useForm({
    inputSearch: "",
  });
  const onFocusHandler = () => {
    setFocusInput(!onFocusInput);
  };
  const clearInput = () => {
    setInputSearch({
      inputSearch: "",
    });
    dispatch(getInputSearchValue(""));
  };
  const onSubmitHandler = (e)=>{
    e.preventDefault();
    dispatch(getInputSearchValue(inputSearch));
  }
  return (
    <form onSubmit={onSubmitHandler} className="animate__animated animate__fadeIn Navbar-navbar-container">
      <Link to="/home" className="Navbar-icon-messages">
        <HomeFilled />
      </Link>
      <NavLink
        className="Navbar-navlink-item"
        activeClassName="Navbar-navlink-item-active"
        to="/home"
      >
        <div className="Navbar-change-view-select">
          <b>Inicio</b>
        </div>
      </NavLink>
      <NavLink
        className="Navbar-navlink-item"
        activeClassName="Navbar-navlink-item-active"
        to="/gallery"
      >
        <div className="Navbar-change-view-select">
          <b>Fotos</b>
        </div>
      </NavLink>
      <NavLink to="/search" className="Navbar-input-container">
        {onFocusInput && !inputSearch && (
          <SearchOutlined className="Navbar-input-icon" />
        )}
        <input
          type="text"
          autoComplete="off"
          name="inputSearch"
          onBlur={onFocusHandler}
          onFocus={onFocusHandler}
          onChange={onInputChange}
          className="Navbar-input"
          placeholder="Buscar"
          value={inputSearch}
        />
        {inputSearch && (
          <CloseCircleFilled
            onClick={clearInput}
            className="Navbar-clear-icon"
          />
        )}
      </NavLink>
      <NavLink
        to="/messages"
        className="Navbar-icon-messages"
        activeClassName="Navbar-icon-messages-active"
      >
        <MessageFilled />
      </NavLink>
      <NavLink
        to="/settings"
        className="Navbar-icon-messages"
        activeClassName="Navbar-icon-messages-active"
      >
        <UserOutlined />
      </NavLink>
      <Dropdown overlay={menu}>
        <DownOutlined className="Navbar-down-outlined" />
      </Dropdown>
    </form>
  );
};

export default Navbar;
