import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Slider from "react-slick";

import "../../styles/hot/hot.css";
import { numberWithCommas } from "../reuse/function/numberWithCommas";

const Hot = () => {
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

  const imageUrl = process.env.REACT_APP_IMAGE;

  useEffect(() => {
    axios
      .get(url + "/products/hot")
      .then((res) => setData(res.data))
      .catch((e) => console.log(e));
  }, [url]);

  return (
    <div className="container hot__container">
      <div className="hot__container--title">
        <div className="hot__title--content">
          hot <i className="fa-solid fa-bolt"></i>
        </div>
      </div>
      <div className="hot__container--content">
        <Slider {...settings}>
          {data ? (
            data.map((item, index) => {
              return (
                <Link
                  to={"/product/" + item.id}
                  className="hot__content"
                  key={index}
                >
                  <div
                    className="hot__content--image"
                    style={{
                      backgroundImage: `url(${
                        imageUrl + "/products/" + item.image
                      })`,
                    }}
                  ></div>
                  <p className="hot__content--title">{item.name}</p>
                  <div className="hot__content--pricesale">
                    {numberWithCommas(item.price_sale)}đ
                  </div>
                  <div className="hot__content--sale">
                    {Math.floor(item.sale)}%
                  </div>
                  <div className="hot__content--progress"></div>
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

export default Hot;
