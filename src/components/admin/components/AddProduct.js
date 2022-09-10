import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import validator from "validator";

import axios from "axios";

const AddProduct = () => {
  const redirect = useNavigate();

  const [name, setName] = useState("");
  const [image, setImage] = useState({});
  const [color, setColor] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("0");
  const [priceRoot, setPriceRoot] = useState("");
  const [priceSale, setPriceSale] = useState("");
  const [quantity, setQuantity] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState([]);
  const [categoryId, setCategoryId] = useState(null);
  const [type, setType] = useState(1);

  const [validateMsg, setValidateMsg] = useState({});
  const [isValidated, setIsValidated] = useState(false);

  const [imagePreview, setImagePreview] = useState();

  const url = process.env.REACT_APP_ADMIN;

  useEffect(() => {
    axios
      .get(url + "/categories/" + type)
      .then((res) => {
        setCategory(res.data);
      })
      .catch((e) => console.log(e));
  }, [url, type]);

  const validateAll = () => {
    const msg = {};

    if (validator.isEmpty(name, { ignore_whitespace: false })) {
      msg.name = "Tên danh mục không được bỏ trống !";
    }

    if (typeof image.name === "undefined") {
      msg.image = "Vui lòng thêm ảnh cho danh mục này !";
    }

    if (validator.isEmpty(color, { ignore_whitespace: false })) {
      msg.color = "Màu không được bỏ trống !";
    }

    if (validator.isEmpty(age, { ignore_whitespace: false }) && type !== 3) {
      msg.age = "Tuổi không được bỏ trống !";
    }

    if (age < 1 || age > 360) {
      msg.age = "Vui lòng nhập đúng độ tuổi !";
    }

    if (validator.isEmpty(priceRoot, { ignore_whitespace: false })) {
      msg.priceRoot = "Giá gốc không được bỏ trống !";
    }

    if (priceRoot < 1000 || priceRoot > 100000000) {
      msg.priceRoot = "Vui lòng nhập đúng giá gốc !";
    }

    if (validator.isEmpty(priceSale, { ignore_whitespace: false })) {
      msg.priceSale = "Giá sale không được bỏ trống !";
    }

    if (priceSale < 1000 || priceSale > 100000000) {
      msg.priceSale = "Vui lòng nhập đúng giá sale !";
    }

    if (validator.isEmpty(quantity, { ignore_whitespace: false })) {
      msg.quantity = "Số lượng không được bỏ trống !";
    }

    if (quantity < 0 || quantity > 10000) {
      msg.quantity = "Vui lòng nhập đúng số lượng !";
    }

    if (categoryId === null || categoryId === 0) {
      msg.categoryId = "Vui lòng chọn loại sản phẩm !";
    }

    setValidateMsg(msg);

    if (Object.keys(msg).length > 0) {
      setIsValidated(false);
    } else {
      setIsValidated(true);
    }
  };

  function submit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("color", color);
    formData.append("age", age);
    formData.append("gender", gender);
    formData.append("price_root", priceRoot);
    formData.append("price_sale", priceSale);
    formData.append("quantity", quantity);
    formData.append("content", content);
    formData.append("category_id", categoryId);
    formData.append("image", image);

    axios
      .post(url + "/products/create", formData, {
        headers: {
          "content-type": "multipart/form-data",
        },
      })
      .then((res) => {
        // redirect("/admin/product/" + type);
      })
      .catch((e) => console.log(e));
  }

  return (
    <div className="admin__container" style={{ height: "1000px" }}>
      <form
        className="form--container"
        encType="multipart/form-data"
        method="post"
        style={{ width: "auto" }}
      >
        <div className="form--title">Thêm sản phẩm</div>

        <div className="form__control">
          <div className="form__control--item">
            <div className="form--item">
              <label className="label">Tên sản phẩm</label>
              <input
                className="input"
                type="text"
                placeholder="Nhập sản phẩm..."
                name="name"
                onChange={(e) => setName(e.target.value)}
                onBlur={() => validateAll()}
              ></input>
            </div>
            {validateMsg.name ? (
              <p className="register__form--validate">{validateMsg.name}</p>
            ) : (
              ""
            )}

            <div className="form--item">
              <label className="label">Thêm màu sắc</label>
              <input
                className="input"
                type="text"
                placeholder="Nhập màu sắc sản phẩm..."
                onChange={(e) => setColor(e.target.value)}
                onBlur={() => validateAll()}
              ></input>
            </div>
            {validateMsg.color ? (
              <p className="register__form--validate">{validateMsg.color}</p>
            ) : (
              ""
            )}

            {type !== "3" ? (
              <>
                <div className="form--item">
                  <label className="label">Độ tuổi</label>
                  <input
                    className="input"
                    type="number"
                    placeholder="Nhập tuổi (tháng tuổi)..."
                    onChange={(e) => setAge(e.target.value)}
                    onBlur={() => validateAll()}
                    min="1"
                    max="360"
                  ></input>
                </div>

                {validateMsg.age ? (
                  <p className="register__form--validate">{validateMsg.age}</p>
                ) : (
                  ""
                )}

                <div className="form--item">
                  <label className="label">Giới tính</label>
                  <select
                    className="input"
                    defaultValue="0"
                    onChange={(e) => setGender(e.target.value)}
                  >
                    <option value="0">Đực</option>
                    <option value="1">Cái</option>
                  </select>
                </div>
              </>
            ) : (
              <></>
            )}
          </div>

          <div className="form__control--item">
            <div className="form--item">
              <label className="label">Giá gốc</label>
              <input
                className="input"
                type="number"
                placeholder="Nhập giá gốc..."
                onChange={(e) => setPriceRoot(e.target.value)}
                onBlur={() => validateAll()}
              ></input>
            </div>

            {validateMsg.priceRoot ? (
              <p className="register__form--validate">
                {validateMsg.priceRoot}
              </p>
            ) : (
              ""
            )}

            <div className="form--item">
              <label className="label">Giá sale</label>
              <input
                className="input"
                type="number"
                placeholder="Nhập giá sale..."
                onChange={(e) => setPriceSale(e.target.value)}
                onBlur={() => validateAll()}
              ></input>
            </div>

            {validateMsg.priceSale ? (
              <p className="register__form--validate">
                {validateMsg.priceSale}
              </p>
            ) : (
              ""
            )}

            <div className="form--item">
              <label className="label">Số lượng</label>
              <input
                className="input"
                type="number"
                placeholder="Nhập số lượng..."
                onChange={(e) => setQuantity(e.target.value)}
                onBlur={() => validateAll()}
              ></input>
            </div>

            {validateMsg.quantity ? (
              <p className="register__form--validate">{validateMsg.quantity}</p>
            ) : (
              ""
            )}

            <div className="form--item">
              <label className="label">Ảnh sản phẩm</label>
              <input
                className="input"
                type="file"
                name="image"
                onChange={(e) => {
                  setImage(e.target.files[0]);
                  setImagePreview(URL.createObjectURL(e.target.files[0]));
                }}
                onBlur={() => validateAll()}
              ></input>
            </div>
            {validateMsg.image ? (
              <p className="register__form--validate">{validateMsg.image}</p>
            ) : (
              ""
            )}

            {imagePreview ? (
              <div className="form--item">
                <label className="label">Xem trước</label>
                <div
                  className="image--preview"
                  style={{ backgroundImage: `url(${imagePreview})` }}
                ></div>
              </div>
            ) : (
              ""
            )}
          </div>

          <div className="form__control--item">
            <div className="form--item">
              <label className="label">Nội dung sản phẩm</label>
              <textarea
                className="input"
                style={{ height: "200px" }}
                placeholder="Nhập nội dung..."
                onChange={(e) => setContent(e.target.value)}
              ></textarea>
            </div>

            <div className="form--item">
              <label className="label">Loại sản phẩm</label>
              <select
                className="input"
                onChange={(e) => setType(e.target.value)}
                defaultValue="1"
              >
                <option value="1">Mèo</option>
                <option value="2">Chó</option>
                <option value="3">Phụ kiện</option>
              </select>
            </div>

            <div className="form--item">
              <label className="label">Danh mục</label>
              <select
                className="input"
                onChange={(e) => setCategoryId(e.target.value)}
                onBlur={() => validateAll()}
              >
                <option
                  defaultValue="0"
                  value="0"
                  onChange={(e) => setCategoryId(e.target.value)}
                >
                  Chọn loại
                </option>
                {category ? (
                  category.map((item, index) => {
                    return (
                      <option
                        value={item.id}
                        key={index}
                        onChange={(e) => setCategoryId(e.target.value)}
                      >
                        {item.name}
                      </option>
                    );
                  })
                ) : (
                  <></>
                )}
              </select>
            </div>
            {validateMsg.categoryId ? (
              <p className="register__form--validate">
                {validateMsg.categoryId}
              </p>
            ) : (
              ""
            )}
          </div>
        </div>

        <button
          onClick={(e) => submit(e)}
          className="submit"
          disabled={isValidated ? false : true}
        >
          Thêm
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
