import React from "react";

import Slider from "react-slick";

import "../../styles/takecarepet/takecarepet.css";

const TakeCarePet = () => {
  var settings = {
    autoplay: true,
    arrows: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
  };
  return (
    <div className="container takecare__container">
      <div className="takecare__container--title">
        <div className="takecare__title--content">Chăm sóc pet</div>
      </div>
      <div className="takecare__container--content">
        <Slider {...settings}>
          <div className="takecare__content--item">
            <div
              className="takecare__item--image"
              style={{
                backgroundImage: `url(https://pethealth.vn/wp-content/uploads/2018/07/cham-soc-meo.jpg)`,
              }}
            ></div>
            <div className="takecare__item--title">
              Chăm Sóc Mèo: Kinh Nghiệm Vàng Cho Người Mới Nuôi?
            </div>
            <div className="takecare__item--desc">
              <div className="takecare__item--time">20:00 19/6/2022</div>
              <div className="takecare__item--comment">100 bình luận</div>
            </div>
          </div>
          <div className="takecare__content--item">
            <div
              className="takecare__item--image"
              style={{
                backgroundImage: `url(https://pethealth.vn/wp-content/uploads/2019/10/c%C3%A1ch-ch%C4%83m-s%C3%B3c-ch%C3%B3-1.jpg)`,
              }}
            ></div>
            <div className="takecare__item--title">
              Cách Chăm Sóc Chó Cảnh Cho Bạn Trẻ Bận Rộn
            </div>
            <div className="takecare__item--desc">
              <div className="takecare__item--time">20:00 19/6/2022</div>
              <div className="takecare__item--comment">100 bình luận</div>
            </div>
          </div>
          <div className="takecare__content--item">
            <div
              className="takecare__item--image"
              style={{
                backgroundImage: `url(https://helenexpress.com/wp-content/uploads/2017/09/cham-soc-meo-de.jpg)`,
              }}
            ></div>
            <div className="takecare__item--title">Chăm sóc mèo đẻ</div>
            <div className="takecare__item--desc">
              <div className="takecare__item--time">20:00 19/6/2022</div>
              <div className="takecare__item--comment">100 bình luận</div>
            </div>
          </div>
          <div className="takecare__content--item">
            <div
              className="takecare__item--image"
              style={{
                backgroundImage: `url(https://helenexpress.com/wp-content/uploads/2017/09/cham-soc-meo-de.jpg)`,
              }}
            ></div>
            <div className="takecare__item--title">Chăm sóc mèo đẻ</div>
            <div className="takecare__item--desc">
              <div className="takecare__item--time">20:00 19/6/2022</div>
              <div className="takecare__item--comment">100 bình luận</div>
            </div>
          </div>
          <div className="takecare__content--item">
            <div
              className="takecare__item--image"
              style={{
                backgroundImage: `url(https://helenexpress.com/wp-content/uploads/2017/09/cham-soc-meo-de.jpg)`,
              }}
            ></div>
            <div className="takecare__item--title">Chăm sóc mèo đẻ</div>
            <div className="takecare__item--desc">
              <div className="takecare__item--time">20:00 19/6/2022</div>
              <div className="takecare__item--comment">100 bình luận</div>
            </div>
          </div>
        </Slider>
      </div>

      <div className="takecare__container--more">
        <div className="takecare__more--item">
          Xem tất cả <i className="fa-solid fa-arrow-right"></i>
        </div>
      </div>
    </div>
  );
};

export default TakeCarePet;
