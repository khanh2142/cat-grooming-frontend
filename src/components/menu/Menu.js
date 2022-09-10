import React, { useEffect, useState } from "react";

import Slider from "react-slick";
import axios from "axios";
import { Link } from "react-router-dom";
import "../../styles/menu/menu.css";

const Menu = () => {
  const [data, setData] = useState([]);

  const imagesLink = process.env.REACT_APP_BASE_URL + "/storage/images/menu/";

  useEffect(() => {
    const url = process.env.REACT_APP_API_ENDPOINT + "/admin/menu/index";
    axios(url).then((res) => {
      setData(res.data);
    });
  }, []);

  var settings = {
    autoplay: true,
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
  };

  return (
    <div className="container menu__container">
      <div className="col-sm-4 menu__container--category">
        {data.map((item) => {
          return (
            <Link className="menu__category" to={item.link} key={item.id}>
              <div className="menu__category--icon">
                <img src={imagesLink + item.icon} alt=""></img>
              </div>
              <div className="menu__category--content">{item.name}</div>
            </Link>
          );
        })}
      </div>
      <div className="col-sm-8 menu__container--carousel">
        <Slider {...settings}>
          <div className="menu__carousel">
            <div
              className="menu__carousel--image"
              style={{
                backgroundImage:
                  "url(https://img.freepik.com/free-vector/cute-cat-kitten-family-greeting-cartoon-doodle-wallpaper-cover_40564-384.jpg)",
              }}
            ></div>
          </div>
          <div className="menu__carousel">
            <div
              className="menu__carousel--image"
              style={{
                backgroundImage:
                  "url(https://static.vecteezy.com/system/resources/previews/003/423/831/original/cute-cat-kitten-greeting-cartoon-doodle-background-wallpaper-free-vector.jpg)",
              }}
            ></div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Menu;
