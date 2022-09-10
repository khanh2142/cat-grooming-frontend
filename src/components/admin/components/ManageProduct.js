import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import axios from "axios";

import "../../../styles/admin/components/manageProduct.css";

const ManageProduct = () => {
  const { id } = useParams();

  const [category, setCategory] = useState([]);
  const [product, setProduct] = useState([]);
  const [categoryId, setCategoryId] = useState(0);

  const url = process.env.REACT_APP_ADMIN;

  useEffect(() => {
    axios
      .get(url + "/categories/" + id)
      .then((res) => {
        setProduct([]);
        setCategoryId(0);
        setCategory(res.data);
      })
      .catch((e) => console.log(e));
  }, [id, url]);

  useEffect(() => {
    axios
      .get(url + "/products/by-category/" + categoryId)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((e) => console.log(e));
  }, [id, categoryId, url]);

  return (
    <div>
      <div className="manageProduct__item">
        <select
          onChange={(e) => setCategoryId(e.target.value)}
          className="input"
        >
          <option>Lựa chọn</option>
          {category.map((item, index) => {
            return (
              <option value={item.id} key={item.id}>
                {item.name}
              </option>
            );
          })}
        </select>
        <Link to="/admin/product/add" className="btn--create">
          Thêm mới<i className="fa-solid fa-plus"></i>
        </Link>
      </div>

      <table className="table table-info">
        <thead>
          <tr>
            <th scope="col">STT</th>
            <th scope="col">ID</th>
            <th scope="col">Tên</th>
            <th scope="col">Giới tính</th>
            <th scope="col">Màu sắc</th>
            <th scope="col">Giá gốc</th>
            <th scope="col">Giá sale</th>
            <th scope="col">Số lượng</th>
          </tr>
        </thead>
        <tbody>
          {product
            ? product.map((item, index) => {
                return (
                  <tr key={item.id}>
                    <th scope="row">{index + 1}</th>
                    <td>{item.id}</td>
                    <td>{item.name}</td>

                    <td>
                      {item.gender === 0
                        ? "Đực"
                        : item.gender === 1
                        ? "Cái"
                        : ""}
                    </td>
                    <td>{item.color}</td>
                    <td>{item.price_root}</td>
                    <td>{item.price_sale}</td>
                    <td>{item.quantity}</td>
                  </tr>
                );
              })
            : ""}
        </tbody>
      </table>
    </div>
  );
};

export default ManageProduct;
