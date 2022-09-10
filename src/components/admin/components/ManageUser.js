import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import "../../../styles/admin/components/manageUser.css";

const ManageUser = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);

  const url = process.env.REACT_APP_API_ENDPOINT + "/admin/auth/getUser/" + id;

  const imageUrl = process.env.REACT_APP_IMAGE;

  useEffect(() => {
    axios.get(url).then((result) => {
      setData(result.data);
    });
  }, [url]);

  return (
    <div className="container">
      <table className="table table-info">
        <thead>
          <tr>
            <th scope="col">STT</th>
            <th scope="col">ID</th>
            <th scope="col">Ảnh đại diện</th>
            <th scope="col">Tên đăng nhập</th>
            <th scope="col">Họ và tên</th>
            <th scope="col">Ngày sinh</th>
            <th scope="col">Giới tính</th>
            <th scope="col">Số điện thoại</th>
            <th scope="col">Địa chỉ</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr key={index} className="manageUser__item">
                <th scope="row">{index + 1}</th>
                <td>{item.id}</td>
                <td>
                  <div
                    className="manageUser__item--image"
                    style={{
                      backgroundImage: `url(${
                        imageUrl + "/users/" + item.image
                      })`,
                    }}
                  ></div>
                </td>
                <td>{item.username}</td>
                <td>{item.fullname}</td>
                <td>{item.birthday}</td>
                <td>{item.gender === 0 ? "Nam" : "Nữ"}</td>
                <td>{item.phone}</td>
                <td>{item.address}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ManageUser;
