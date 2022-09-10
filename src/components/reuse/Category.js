import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "../../styles/category/category.css";

const Category = (props) => {
  const [data, setData] = useState();
  const url = process.env.REACT_APP_ADMIN;
  const imageUrl = process.env.REACT_APP_IMAGE;
  useEffect(() => {
    axios
      .get(url + "/categories/" + props.id)
      .then((res) => res.data)
      .then((data) => setData(data))
      .catch((e) => console.log(e));
  }, [url, props.id]);

  return (
    <div className="container">
      <div className="containerList__title">{props.type}</div>
      <div className="categoryList__container">
        {data ? (
          data.map((item, index) => {
            return (
              <Link
                to={"" + item.id}
                className="categoryList__item"
                key={index}
              >
                <div
                  className="categoryList__item--image"
                  style={{
                    backgroundImage: `url(${
                      imageUrl + "/categories/" + item.image
                    })`,
                  }}
                ></div>
                <div className="categoryList__item--content">{item.name}</div>
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

export default Category;
