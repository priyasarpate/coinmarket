import React from "react";
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
} from "@ant-design/icons";

function Navbar() {
  return (
    <div className="nav-container">
      <div className="logo-container">
        <img src="./images/cryptocuurency-meta.png" alt="" />
        <Link to="/">Cryting</Link>
      </div>
    </div>
  );
}

export default Navbar;
