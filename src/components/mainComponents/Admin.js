import React from "react";

import { Routes, Route } from "react-router-dom";
import Menu from "../admin/Menu";
import Main from "../admin/Main";
import ManageStaff from "../admin/components/ManageStaff";
import ManageUser from "../admin/components/ManageUser";

const Admin = () => {
  return (
    <div className="admin">
      <Menu></Menu>
      <Main></Main>
    </div>
  );
};

export default Admin;
