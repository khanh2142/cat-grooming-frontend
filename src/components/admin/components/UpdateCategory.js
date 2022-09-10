import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import validator from "validator";

import axios from "axios";

const UpdateCategory = () => {
  const redirect = useNavigate();
  const { id } = useParams();
  const [categoryName, setCategoryName] = useState("");
  const [categoryImage, setCategoryImage] = useState({});
  const [categoryType, setCategoryType] = useState("1");
  const [validateMsg, setValidateMsg] = useState({});
  const [isValidated, setIsValidated] = useState(false);
  const [data, setData] = useState([]);

  const [imagePreview, setImagePreview] = useState();

  console.log(id);

  const url = process.env.REACT_APP_ADMIN;

  const validateAll = () => {
    const msg = {};

    if (validator.isEmpty(categoryName, { ignore_whitespace: false })) {
      msg.categoryName = "Tên danh mục không được bỏ trống !";
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

    axios
      .post(url + "/categories/update/" + id, formData, {
        headers: {
          "content-type": "multipart/form-data",
        },
      })
      .then((res) => redirect("/admin/category/" + categoryType))
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    axios.get(url + "/categories/detail/" + id).then((res) => {
      setData(res.data);
    });
  }, [url, id]);

  console.log(data);

  return (
    <div className="addCategory__container">
      <form
        className="addCategory__container--form form"
        encType="multipart/form-data"
        method="post"
      >
        <div className="form--title">Thêm danh mục</div>
        <div className="addCategory__form--item">
          <label className="label">Tên danh mục</label>
          <input
            className="input"
            type="text"
            placeholder="Nhập tên danh mục..."
            name="category_name"
            accept="image/*"
            onChange={(e) => setCategoryName(e.target.value)}
            onBlur={() => validateAll()}
            defaultValue={data.name}
          ></input>
        </div>
        {validateMsg.categoryName ? (
          <p className="register__form--validate">{validateMsg.categoryName}</p>
        ) : (
          ""
        )}

        <div className="addCategory__form--item">
          <label className="label">Ảnh danh mục</label>
          <div
            className="image--preview"
            style={{
              backgroundImage: `url(${
                process.env.REACT_APP_BASE_URL +
                "/storage/images/categories/" +
                data.image
              })`,
            }}
          >
            <div className="btn--close">
              <i className="fa-solid fa-xmark"></i>
            </div>
          </div>
        </div>

        <div className="addCategory__form--item">
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
          <div className="addCategory__form--item">
            <label className="label">Xem trước</label>
            <div
              className="image--preview"
              style={{ backgroundImage: `url(${imagePreview})` }}
            ></div>
          </div>
        ) : (
          ""
        )}

        <div className="addCategory__form--item">
          <label className="label">Loại danh mục</label>
          <select
            className="input"
            onChange={(e) => setCategoryType(e.target.value)}
            defaultValue="1"
            disabled
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
          Cập nhật
        </button>
      </form>
    </div>
  );
};

export default UpdateCategory;
