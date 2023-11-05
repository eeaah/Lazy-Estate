import React, { useState } from "react";
import {
    DollarOutlined,
    ContainerOutlined,
    CarOutlined,
    BankOutlined,
    HomeOutlined,
    ArrowDownOutlined,
	CreditCardOutlined,
} from "@ant-design/icons";
import { Button, Menu } from "antd";

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem("Gross Monthly Income", "1", <DollarOutlined />),
  getItem("Credit Card Payment", "2", <ContainerOutlined />),
  getItem("Car Payment", "3", <CarOutlined />),
  getItem("Student Loan Payments", "4", <BankOutlined />),
  getItem("Appraised Value", "5", <HomeOutlined />),
  getItem("Down Payment", "6", <ArrowDownOutlined />),
  getItem("Loan Amount", "7", <BankOutlined />),
  getItem("Monthly Mortgage Payment", "8", <HomeOutlined />),
  getItem("CreditScore", "9", <CreditCardOutlined />),
];
const SideBar = () => {
  return (
    <div
      style={{
        width: 256,
      }}
    >
      <Menu
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        theme="light"
        items={items}
      />
    </div>
  );
};
export default SideBar;
