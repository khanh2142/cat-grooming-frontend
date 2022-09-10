import axios from "axios";
import React, { useState } from "react";

import validator from "validator";

import { Link, useNavigate } from "react-router-dom";

import "../../styles/register/index.css";

const Signup = () => {
  let redirect = useNavigate();

  const [isValidated, setIsValidated] = useState(false);
  const [validateMsg, setValidateMsg] = useState({});
  const [checkAccount, setCheckAcount] = useState(false);

  const url = process.env.REACT_APP_API_ENDPOINT;

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPass, setRepeatPass] = useState("");

  function setUser(e) {
    setUsername(e.target.value);
    setCheckAcount(false);
  }

  function signUp(e) {
    e.preventDefault();
    if (password !== repeatPass) {
      alert("mat khau khong chinh xac");
    } else {
      axios
        .post(url + "/admin/auth/signup", {
          username: username,
          password: password,
          repeatpass: repeatPass,
        })
        .then((res) => {
          let apiData = res.data;
          if (apiData.status) {
            redirect("/");
          } else {
            setCheckAcount(true);
          }
        })
        .catch(() => {
          console.log("error");
        });
    }
  }

  const validateAll = () => {
    const msg = {};

    if (!isNaN(username[0])) {
      msg.username = "Ký tự đầu tiên chỉ từ a-z hoặc A-Z !";
    }

    if (validator.isEmpty(username, { ignore_whitespace: true })) {
      msg.username = "Tên đăng nhập không được bỏ trống !";
    }

    if (!validator.isAlphanumeric(username)) {
      msg.username = "Tên đăng nhập chỉ gồm các ký tự từ a-z và 0-9 !";
    }

    if (!validator.isLength(username, { min: 6, max: 20 })) {
      msg.username = "Tên đăng nhập cần ít nhất 6 ký tự và tối đa 20 ký tự!";
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

    if (validator.isEmpty(repeatPass)) {
      msg.repeatpass = "Mật khẩu nhập lại không được bỏ trống !";
    }

    if (!validator.equals(repeatPass, password)) {
      msg.repeatpass = "Mật khẩu nhập lại không chính xác !";
    }

    setValidateMsg(msg);

    if (Object.keys(msg).length > 0) {
      setIsValidated(false);
    } else {
      setIsValidated(true);
    }
  };

  return (
    <div className="register__container">
      <form method="post" className="register__form">
        <div className="register__form--title">Đăng ký</div>
        <div className="register__form--item">
          <label htmlFor="#username">Tên đăng nhập</label>
          <input
            type="text"
            placeholder="Tên đăng nhập"
            id="username"
            name="username"
            onChange={setUser}
            onBlur={() => validateAll()}
          ></input>
        </div>
        {validateMsg.username ? (
          <p className="register__form--validate">{validateMsg.username}</p>
        ) : (
          ""
        )}
        {checkAccount ? (
          <p className="register__form--validate">Tài khoản đã tồn tại !</p>
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
        <div className="register__form--item">
          <label htmlFor="#password">Nhập lại mật khẩu</label>
          <input
            type="password"
            placeholder="Nhập lại mật khẩu"
            id="password"
            name="repeatpass"
            onChange={(e) => setRepeatPass(e.target.value)}
            onBlur={() => validateAll()}
          ></input>
        </div>
        {validateMsg.repeatpass ? (
          <p className="register__form--validate">{validateMsg.repeatpass}</p>
        ) : (
          ""
        )}
        <button
          className="register__form--button"
          type="submit"
          onClick={(e) => signUp(e)}
          disabled={!isValidated || checkAccount ? true : false}
        >
          Đăng ký
        </button>
        <p>hoặc</p>
        <div className="register__form--next">
          Đã có tài khoản? <Link to="/signin">Đăng nhập</Link>
        </div>
        <Link to="/" className="register__form--back">
          <i className="fa-solid fa-house"></i>Trang chủ
        </Link>
      </form>
    </div>
  );
};

export default Signup;
