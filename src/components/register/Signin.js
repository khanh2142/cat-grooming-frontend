import React, { useState } from "react";

import { Link } from "react-router-dom";

import validator from "validator";

import "../../styles/register/index.css";

const Signin = () => {
  const [validateMsg, setValidateMsg] = useState({});

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isValidated, setIsValidated] = useState(false);
  const [keepLogin, setKeepLogin] = useState(false);

  const validateAll = () => {
    const msg = {};

    if (validator.isEmpty(username, { ignore_whitespace: true })) {
      msg.username = "Tên đăng nhập không được bỏ trống !";
    }

    if (!isNaN(username[0])) {
      msg.username = "Ký tự đầu tiên chỉ từ a-z hoặc A-Z !";
    }

    if (!validator.isAlphanumeric(username)) {
      msg.username = "Tên đăng nhập chỉ gồm các ký tự từ a-z và 0-9 !";
    }

    if (!validator.isLength(username, { min: 6, max: 20 })) {
      msg.username = "Tên đăng nhập cần ít nhất 6 ký tự  và tối đa 20 ký tự !";
    }

    if (validator.isEmpty(password)) {
      msg.password = "Mật khẩu không được bỏ trống !";
    }

    if (!validator.isAlphanumeric(password)) {
      msg.password =
        "Mật khẩu chỉ gồm các ký tự từ a-z, 0-9 và ít nhất 1 ký tự viết hoa !";
    }

    if (
      !validator.isStrongPassword(password, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 0,
        returnScore: false,
        pointsPerUnique: 1,
        pointsPerRepeat: 0.5,
        pointsForContainingLower: 10,
        pointsForContainingUpper: 10,
        pointsForContainingNumber: 10,
        pointsForContainingSymbol: 10,
      })
    ) {
      msg.password = "Mật khẩu không hợp lệ !";
    }

    if (password.length > 20) {
      msg.password = "Mật khẩu cần tối thiểu 8 ký tự và tối đa 20 ký tự !";
    }

    setValidateMsg(msg);

    if (Object.keys(msg).length > 0) {
      setIsValidated(false);
    } else {
      setIsValidated(true);
    }
  };

  function signIn(e) {
    e.preventDefault();
    console.log(username, password, keepLogin);
  }

  return (
    <div className="register__container">
      <form method="post" className="register__form">
        <div className="register__form--title">Đăng nhập</div>
        <div className="register__form--item">
          <label htmlFor="#username">Tên đăng nhập</label>
          <input
            type="text"
            placeholder="Tên đăng nhập"
            id="username"
            name="username"
            onChange={(e) => setUsername(e.target.value)}
            onBlur={() => validateAll()}
          ></input>
        </div>
        {validateMsg.username ? (
          <p className="register__form--validate">{validateMsg.username}</p>
        ) : (
          ""
        )}
        <div className="register__form--item">
          <label htmlFor="#password">Mật khẩu</label>
          <input
            type="password"
            placeholder="Mật khẩu"
            id="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            onBlur={() => validateAll()}
          ></input>
        </div>
        {validateMsg.password ? (
          <p className="register__form--validate">{validateMsg.password}</p>
        ) : (
          ""
        )}
        <label className="register__form--checkbox">
          <input
            type="checkbox"
            className="register__checkbox--input"
            name="checkbox"
            onClick={(e) => setKeepLogin(!keepLogin)}
          ></input>
          Duy trì đăng nhập
        </label>
        <button
          className="register__form--button"
          type="submit"
          disabled={!isValidated ? true : false}
          onClick={(e) => signIn(e)}
        >
          Đăng nhập
        </button>
        <div className="register__form--forgot">
          <Link to="/forgot-pass" className="register__forgot">
            <i className="fa-solid fa-circle-question"></i>Quên mật khẩu
          </Link>
        </div>
        <p>hoặc</p>
        <div className="register__form--next">
          Chưa có tài khoản? <Link to="/signup">Đăng ký ngay</Link>
        </div>
        <Link to="/" className="register__form--back">
          <i className="fa-solid fa-house"></i>Trang chủ
        </Link>
      </form>
    </div>
  );
};

export default Signin;
