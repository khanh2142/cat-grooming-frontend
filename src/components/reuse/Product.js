import React, { useEffect, useState } from "react";

import "../../styles/product/product.css";

import Slider from "react-slick";

import axios from "axios";

import { numberWithCommas } from "./function/numberWithCommas";
import { Link } from "react-router-dom";

const Product = (props) => {
  var settings = {
    autoplay: false,
    arrows: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
  };

  const [data, setData] = useState();

  const url = process.env.REACT_APP_ADMIN;

  const endPoint = props.api;

  const imageUrl = process.env.REACT_APP_IMAGE;

  useEffect(() => {
    axios
      .get(url + "/products/random/" + endPoint)
      .then((res) => setData(res.data))
      .catch((e) => console.log(e));
  }, [url, endPoint]);

  return (
    <div className="container product__container">
      <div className="product__container--title">
        <div className="product__title--content">{props.title}</div>
        <Link to={"/" + endPoint} className="product__title--link">
          Xem tất cả <i className="fa-solid fa-arrow-right"></i>
        </Link>
      </div>
      <div className="product__container--content">
        <Slider {...settings}>
          {data ? (
            data.map((item, index) => {
              return (
                <Link
                  to={"/product/" + item.id}
                  className="product__content"
                  key={index}
                >
                  <div
                    className="product__content--image"
                    style={{
                      backgroundImage: `url(${
                        imageUrl + "/products/" + item.image
                      })`,
                    }}
                  ></div>
                  <p className="product__content--title">{item.name}</p>
                  <div className="product__content--pricesale">
                    {numberWithCommas(item.price_sale)}đ
                  </div>
                  <div className="product__content--sale">
                    {Math.floor(
                      100 - (item.price_sale * 100) / item.price_root
                    )}
                    %
                  </div>
                  <div className="product__content--progress"></div>
                </Link>
              );
            })
          ) : (
            <></>
          )}
        </Slider>
      </div>
    </div>
  );
};

export default Product;
