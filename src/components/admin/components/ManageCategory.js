import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import "../../../styles/admin/components/category.css";

const ManageCategory = () => {
  const { id } = useParams();

  const [type, setType] = useState("");

  const [data, setData] = useState([]);

  const url = process.env.REACT_APP_ADMIN + "/categories/";

  const url_image =
    process.env.REACT_APP_BASE_URL + "/storage/images/categories/";

  useEffect(() => {
    id === "1"
      ? setType("mèo")
      : id === "2"
      ? setType("chó")
      : id === "3"
      ? setType("phụ kiện")
      : setType("");

    axios.get(url + id).then((res) => {
      setData(res.data);
    });
  }, [id, url]);

  const remove = (_id, name) => {
    if (window.confirm(`Bạn có chắc chắn muốn xóa ${name} không`)) {
      axios
        .delete(url + "delete/" + _id)
        .then(() => {
          axios.get(url + id).then((res) => {
            setData(res.data);
          });
        })
        .catch((e) => console.log(e));
    }
  };

  return (
    <div className="container category__container">
      <div className="category__container--title">
        Quản lý danh sách - {type}
      </div>

      <div className="category__container--filter">
        <div className="category__container--search">
          <input
            className="category__search--input"
            name="search"
            placeholder="Tìm kiếm..."
            autoComplete="off"
          ></input>

          <button className="category__search--button">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
        <Link className="btn--create" to="/admin/category/add">
          Thêm mới<i className="fa-solid fa-plus"></i>
        </Link>
      </div>

      <div className="category__container--list">
        {data.map((item, index) => {
          return (
            <div key={index} className="category__container--item">
              <div
                className="category__item--image"
                style={{
                  backgroundImage: `url(${url_image + item.image})`,
                }}
              ></div>
              <div className="category__item--name">{item.name}</div>
              <div className="category__item--button">
                <Link
                  className="category__button category__button--update"
                  to={"/admin/category/update/" + item.id}
                >
                  Cập nhật
                </Link>
                <div
                  className="category__button category__button--delete"
                  onClick={(_id, name) => remove(item.id, item.name)}
                >
                  Xóa
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ManageCategory;
