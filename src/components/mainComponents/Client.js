import React from "react";
import { Routes, Route } from "react-router-dom";

import Footer from "../footer/Footer";
import Header from "../header/Header";
import Hot from "../hot/Hot";
import Menu from "../menu/Menu";
import Signin from "../register/Signin";
import Category from "../reuse/Category";
import CategoryDetail from "../reuse/CategoryDetail";
import DetailProduct from "../reuse/DetailProduct";
import Product from "../reuse/Product";
import TakeCarePet from "../takecarepet/TakeCarePet";

const Client = () => {
  return (
    <>
      <Header></Header>
      <Menu />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hot></Hot>
              <Product title="Mèo cảnh" api="cats"></Product>
              <Product title="Chó cảnh" api="dogs"></Product>
              <Product title="Phụ kiện" api="accessories"></Product>
              <TakeCarePet></TakeCarePet>
            </>
          }
        ></Route>

        <Route
          path="/cats"
          element={<Category id="1" type="Mèo cảnh"></Category>}
        ></Route>

        <Route
          path="/cats/:id"
          element={<CategoryDetail></CategoryDetail>}
        ></Route>

        <Route
          path="/dogs"
          element={<Category id="2" type="Chó cảnh"></Category>}
        ></Route>
        <Route
          path="/dogs/:id"
          element={<CategoryDetail></CategoryDetail>}
        ></Route>

        <Route
          path="/accessories"
          element={<Category id="3" type="Phụ kiện"></Category>}
        ></Route>
        <Route
          path="/accessories/:id"
          element={<CategoryDetail></CategoryDetail>}
        ></Route>

        <Route
          path="/product/:id"
          element={<DetailProduct></DetailProduct>}
        ></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
};

export default Client;
