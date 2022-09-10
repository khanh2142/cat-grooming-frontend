import React from "react";

import { Link } from "react-router-dom";

import "../../styles/admin/currentUser/currentUser.css";

const CurrentUser = () => {
  return (
    <div className="currentUser">
      <Link
        to="info"
        className="currentUser__item--avatar"
        style={{
          backgroundImage:
            "url(http://windows79.com/wp-content/uploads/2021/02/Thay-the-hinh-dai-dien-tai-khoan-nguoi-dung-mac.png)",
        }}
      ></Link>
      <Link to="info" className="currentUser__item--name">
        Nguyễn Bá Khánh
      </Link>
    </div>
  );
};

export default CurrentUser;
