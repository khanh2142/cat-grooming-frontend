import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import { numberWithCommas } from "./function/numberWithCommas";

import "../../styles/category/category.css";

const CategoryDetail = (props) => {
  const { id } = useParams();
  const [data, setData] = useState();
  const [currentCategory, setCurrentCategory] = useState();

  const url = process.env.REACT_APP_ADMIN;
  const imageUrl = process.env.REACT_APP_IMAGE;

  useEffect(() => {
    axios
      .get(url + "/products/by-category/" + id)
      .then((res) => {
        setData(res.data);
      })
      .catch((e) => console.log(e));
  }, [id, url]);

  useEffect(() => {
    axios
      .get(url + "/categories/detail/" + id)
      .then((res) => setCurrentCategory(res.data))
      .catch((e) => console.log(e));
  }, [id]);

  console.log(data);

  return (
    <div className="container">
      <div className="containerList__title">
        {currentCategory ? currentCategory.name : ""}
      </div>
      <div className="categoryList__container">
        {data ? (
          data.map((item, index) => {
            return (
              <Link
                to={"/product/" + item.id}
                className="categoryList__item"
                key={index}
              >
                <div
                  className="categoryList__item--image"
                  style={{
                    backgroundImage: `url(${
                      imageUrl + "/products/" + item.images[0].image
                    })`,
                  }}
                ></div>
                <p className="categoryList__item--content">{item.name}</p>
                <p className="categoryList__item--price">
                  {numberWithCommas(item.price_sale)}đ
                </p>
              </Link>
            );
          })
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default CategoryDetail;
