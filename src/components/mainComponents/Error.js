import React from "react";

import bg from "../../images/chill_wallpaper.jpg";

import { Link } from "react-router-dom";

import "../../styles/error/error.css";

const Error = () => {
  return (
    <div className="error" style={{ backgroundImage: `url(${bg})` }}>
      <div className="error__container">
        <div className="error__container--title">404</div>
        <div className="error__container--content">Trang này không tồn tại</div>
        <Link className="error__container--button" to="/">
          Trang chủ
        </Link>
      </div>
    </div>
  );
};

export default Error;
