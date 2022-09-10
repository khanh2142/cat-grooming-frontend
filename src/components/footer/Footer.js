import React from "react";

import "../../styles/footer/footer.css";

const Footer = () => {
  return (
    <div className="footer__box">
      <div className="container-fluid footer">
        <div className="container footer__container">
          <div className="row">
            <div className="col-sm-3 footer__container--item">
              <div className="footer__item--title">Về chúng tôi</div>
              <div className="footer__item--description">
                <i className="fa-solid fa-user-tie"></i>
                <div className="footer__item--content">
                  Đỗ Ngọc Thạch (Manager)
                </div>
              </div>
              <div className="footer__item--description">
                <i className="fa-solid fa-user-pen"></i>
                <div className="footer__item--content">
                  Nguyễn Bá Khánh (Dev)
                </div>
              </div>
              <div className="footer__item--description">
                <i className="fa-solid fa-phone"></i>
                <div className="footer__item--content">
                  Hotline : 03xx xxx xxx
                </div>
              </div>
              <div className="footer__item--description">
                <i className="fa-solid fa-envelope"></i>
                <div className="footer__item--content">
                  Email : k2142a@gmail.com
                </div>
              </div>
              <div className="footer__item--description">
                <i className="fa-solid fa-location-dot"></i>
                <div className="footer__item--content">
                  Địa chỉ : Mĩ Đình, Nam Từ Liêm, Hà Nội
                </div>
              </div>
            </div>
            <div className="col-sm-3 footer__container--item">
              <div className="footer__item--title">Chính sách mua hàng</div>
              <div className="footer__item--description">Bảo hành, Đổi trả</div>
              <div className="footer__item--description">
                Giao nhận, Thanh toán
              </div>
              <div className="footer__item--description">
                Chính sách bảo mật
              </div>
              <div className="footer__item--description">
                Điều khoản dịch vụ
              </div>
            </div>
            <div className="col-sm-3 footer__container--item">
              <div className="footer__item--title">Liên hệ</div>
              <div className="footer__item--contact">
                <div
                  className="footer__contact"
                  style={{
                    backgroundImage:
                      "url(https://cdn.tgdd.vn/2020/03/GameApp/Facebook-200x200.jpg)",
                  }}
                ></div>
                <div
                  className="footer__contact"
                  style={{
                    backgroundImage:
                      "url(https://play-lh.googleusercontent.com/rFIOt4fDSCgJh_FkHU2qP8YiZUUhfVoKoNfQFbPEM-Wl8zuyuwn7vzkEx_XMh5B6FfO3)",
                  }}
                ></div>
                <div
                  className="footer__contact"
                  style={{
                    backgroundImage:
                      "url(https://play-lh.googleusercontent.com/2kdv4gGWKchMkThhxMYlWlkSouhx6BP50X1b7O7_Yl78fFCitAe3t4hLACuCyC9tsJA)",
                  }}
                ></div>
                <div
                  className="footer__contact"
                  style={{
                    backgroundImage:
                      "url(https://play-lh.googleusercontent.com/h9jWMwqb-h9hjP4THqrJ50eIwPekjv7QPmTpA85gFQ10PjV02CoGAcYLLptqd19Sa1iJ)",
                  }}
                ></div>
              </div>
            </div>
            <div className="col-sm-3 footer__container--item">
              <div className="footer__item--title">Địa chỉ</div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d931.0266765987112!2d105.77389962922985!3d21.02841600091564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454b1a14fa80d%3A0x6d65aff43f06a312!2zNTIvMjUvNg!5e0!3m2!1svi!2s!4v1654501546921!5m2!1svi!2s"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid footer__description">
        <div className="container footer__description--container">
          <div className="footer__description--item">
            Bản quyền thuộc về <strong>Cat grooming</strong> © (v1.0 beta)
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
