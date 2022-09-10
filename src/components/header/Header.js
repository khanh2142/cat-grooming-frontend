import React from "react";

import { Link } from "react-router-dom";

import "../../styles/header/header.css";

const Header = () => {
  return (
    <div className="container-fluid header">
      <div className="container header__container">
        <Link className="header__container--logo" to="/"></Link>
        <div className="header__container--search">
          <input
            type="text"
            placeholder="Bạn cần tìm gì..."
            className="header__search--input"
          ></input>
          <div className="header__search--icon">
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>
        <div className="header__container--button">
          <div className="header__button">
            <i className="fa-solid fa-heart"></i>
            <div className="header__button--content">Yêu thích</div>
          </div>
          <div className="header__button">
            <i className="fa-solid fa-earth-asia"></i>
            <div className="header__button--content">Thông tin</div>
          </div>
          <Link className="header__button" to="/signin">
            <i className="fa-solid fa-circle-user"></i>
            <div className="header__button--content">Đăng nhập/Đăng ký</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
