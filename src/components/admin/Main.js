import React from "react";

import { Routes, Route } from "react-router-dom";

import "../../styles/admin/main/main.css";
import AddCategory from "./components/AddCategory";
import AddProduct from "./components/AddProduct";
import ManageCategory from "./components/ManageCategory";
import ManageProduct from "./components/ManageProduct";
import ManageUser from "./components/ManageUser";
import UpdateCategory from "./components/UpdateCategory";

import CurrentUser from "./CurrentUser";

const Main = () => {
  return (
    <div className="main">
      <CurrentUser></CurrentUser>
      <div className="main__content">
        <Routes>
          <Route path="/user/:id" element={<ManageUser></ManageUser>}></Route>
          <Route
            path="/category/:id"
            element={<ManageCategory></ManageCategory>}
          ></Route>
          <Route
            path="category/add"
            element={<AddCategory></AddCategory>}
          ></Route>
          <Route
            path="product/:id"
            element={<ManageProduct></ManageProduct>}
          ></Route>
          <Route
            path="/category/update/:id"
            element={<UpdateCategory></UpdateCategory>}
          ></Route>
          <Route
            path="/product/add"
            element={<AddProduct></AddProduct>}
          ></Route>
        </Routes>
      </div>
    </div>
  );
};

export default Main;
