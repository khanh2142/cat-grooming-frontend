import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import validator from "validator";

import axios from "axios";

const AddCategory = () => {
  const redirect = useNavigate();
  const { id } = useParams();
  const [categoryName, setCategoryName] = useState("");
  const [categoryImage, setCategoryImage] = useState({});
  const [categoryType, setCategoryType] = useState("1");
  const [validateMsg, setValidateMsg] = useState({});
  const [isValidated, setIsValidated] = useState(false);

  const [imagePreview, setImagePreview] = useState();

  const url = process.env.REACT_APP_ADMIN + "/categories/create";

  const validateAll = () => {
    const msg = {};

    if (validator.isEmpty(categoryName, { ignore_whitespace: false })) {
      msg.categoryName = "Tên danh mục không được bỏ trống !";
    }

    if (typeof categoryImage.name === "undefined") {
      msg.categoryImage = "Vui lòng thêm ảnh cho danh mục này !";
    }

    setValidateMsg(msg);

    if (Object.keys(msg).length > 0) {
      setIsValidated(false);
    } else {
      setIsValidated(true);
    }
  };

  const submit = (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("name", categoryName);
    formData.append("image", categoryImage);
    formData.append("type_id", categoryType);

    axios
      .post(url, formData, {
        headers: {
          "content-type": "multipart/form-data",
        },
      })
      .then((res) => {
        // console.log(res.data);
        redirect("/admin/category/" + categoryType);
      })
      .catch((e) => console.log(e));
  };

  return (
    <div className="admin__container">
      <form
        className="form--container"
        encType="multipart/form-data"
        method="post"
      >
        <div className="form--title">Thêm danh mục</div>
        <div className="form--item">
          <label className="label">Tên danh mục</label>
          <input
            className="input"
            type="text"
            placeholder="Nhập tên danh mục..."
            name="category_name"
            accept="image/*"
            onChange={(e) => setCategoryName(e.target.value)}
            onBlur={() => validateAll()}
          ></input>
        </div>
        {validateMsg.categoryName ? (
          <p className="register__form--validate">{validateMsg.categoryName}</p>
        ) : (
          ""
        )}

        <div className="form--item">
          <label className="label">Ảnh danh mục</label>
          <input
            className="input"
            type="file"
            name="image"
            onChange={(e) => {
              setCategoryImage(e.target.files[0]);
              setImagePreview(URL.createObjectURL(e.target.files[0]));
            }}
            onBlur={() => validateAll()}
          ></input>
        </div>
        {validateMsg.categoryImage ? (
          <p className="register__form--validate">
            {validateMsg.categoryImage}
          </p>
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

        <div className="form--item">
          <label className="label">Loại danh mục</label>
          <select
            className="input"
            onChange={(e) => setCategoryType(e.target.value)}
            defaultValue="1"
          >
            <option value="1">Mèo</option>
            <option value="2">Chó</option>
            <option value="3">Phụ kiện</option>
          </select>
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

export default AddCategory;
