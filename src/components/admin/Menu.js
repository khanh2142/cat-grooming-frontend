import React from "react";

import { Link } from "react-router-dom";

import "../../styles/admin/menu/menu.css";

const Menu = () => {
  return (
    <div className="menu">
      <Link className="menu__item" to="user/2">
        <div className="menu__item--icon">
          <i className="fa-solid fa-user-shield"></i>
        </div>
        <div className="menu__item--content">Quản lý nhân viên</div>
      </Link>
      <Link className="menu__item" to="user/3">
        <div className="menu__item--icon">
          <i className="fa-solid fa-user"></i>
        </div>
        <div className="menu__item--content">Quản lý khách hàng</div>
      </Link>
      <Link className="menu__item" to="category/1">
        <div className="menu__item--icon">
          <i className="fa-solid fa-shield-cat"></i>
        </div>
        <div className="menu__item--content">Quản lý danh mục - Mèo</div>
      </Link>
      <Link className="menu__item" to="category/2">
        <div className="menu__item--icon">
          <i className="fa-solid fa-shield-dog"></i>
        </div>
        <div className="menu__item--content">Quản lý danh mục - Chó</div>
      </Link>
      <Link className="menu__item" to="category/3">
        <div className="menu__item--icon">
          <i className="fa-solid fa-hat-wizard"></i>
        </div>
        <div className="menu__item--content">Quản lý danh mục - Phụ kiện</div>
      </Link>
      <Link className="menu__item" to="product/1">
        <div className="menu__item--icon">
          <i className="fa-solid fa-paw"></i>
        </div>
        <div className="menu__item--content">Quản lý - Mèo</div>
      </Link>

      <Link className="menu__item" to="product/2">
        <div className="menu__item--icon">
          <i className="fa-solid fa-bone"></i>
        </div>
        <div className="menu__item--content">Quản lý - Chó</div>
      </Link>

      <Link className="menu__item" to="product/3">
        <div className="menu__item--icon">
          <i className="fa-solid fa-splotch"></i>
        </div>
        <div className="menu__item--content">Quản lý - Phụ kiện</div>
      </Link>
      <div className="menu__item">
        <div className="menu__item--icon">
          <i className="fa-solid fa-book-open"></i>
        </div>
        <div className="menu__item--content">Quản lý - Bài viết</div>
      </div>
      <div className="menu__item">
        <div className="menu__item--icon">
          <i className="fa-solid fa-cart-arrow-down"></i>
        </div>
        <div className="menu__item--content">Quản lý - Đơn hàng</div>
      </div>
    </div>
  );
};

export default Menu;
