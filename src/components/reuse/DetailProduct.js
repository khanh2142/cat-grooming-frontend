import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { numberWithCommas } from "../reuse/function/numberWithCommas";

import "../../styles/product/detailProduct.css";

const DetailProduct = () => {
  const { id } = useParams();
  const [data, setData] = useState();

  console.log(id);

  const url = process.env.REACT_APP_ADMIN;
  const imageUrl = process.env.REACT_APP_IMAGE;

  useEffect(() => {
    axios
      .get(url + "/products/detail/" + id)
      .then((res) => setData(res.data))
      .catch((e) => console.log(e));
  }, [id, url]);

  console.log(data);

  return (
    <div className="container">
      <div className="line"></div>
      {data ? (
        <div className="row">
          <div className="col-4">
            <div className="productDetail__image">
              <div
                className="productDetail__image--show"
                style={{
                  backgroundImage: `url(${
                    imageUrl + "/products/" + data.image
                  })`,
                }}
              ></div>
              <div className="productDetail__image--list"></div>
            </div>
          </div>
          <div className="col-8">
            <div className="productDetail__content">
              <div className="productDetail__content--name">{data.name}</div>
              <ul className="productDetail__content--desc">
                {data.gender ? (
                  <li className="productDetail__desc">
                    Giống :{" "}
                    {data.gender === 0 ? "Đực" : data.gender === 1 ? "Cái" : ""}
                  </li>
                ) : (
                  <></>
                )}
                {data.color ? (
                  <li className="productDetail__desc">
                    Màu sắc : {data.color}
                  </li>
                ) : (
                  <></>
                )}
                {data.age ? (
                  <li className="productDetail__desc">
                    Tuổi : {data.age} (tháng)
                  </li>
                ) : (
                  <></>
                )}
              </ul>
              <div className="productDetail__content--sale">
                {numberWithCommas(data.price_sale)}đ
              </div>
              <div className="productDetail__content--root">
                {numberWithCommas(data.price_root)}đ
              </div>
              <div className="productDetail__content--btn">
                <div className="productDetail__btn btn--buy">
                  <div className="productDetail__btn--icon">
                    <i className="fa-solid fa-cart-shopping"></i>
                  </div>
                  <div className="productDetail__btn--content">Mua ngay</div>
                </div>
                <div className="productDetail__btn btn--like">
                  <div className="productDetail__btn--icon">
                    <i class="fa-solid fa-heart"></i>
                  </div>
                  <div className="productDetail__btn--content">Yêu thích</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default DetailProduct;
