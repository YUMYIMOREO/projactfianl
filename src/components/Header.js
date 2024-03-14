import React from 'react';
import { Menu, Layout } from 'antd';

const { Header } = Layout;

const items1 = [
  "ร้านขายสุขภัณฑ์",
  "หน้าแรก",
  "ดูสินค้าทั้งหมด",
  "ตะกร้าสินค้า",
  "ประวัติการสั่งซื้อ",
].map((label, index) => ({
  key: String(index + 1),
  label,
}));

const HeaderBar = () => {
  return (
    <Header style={{ background: "#D2B48C", padding: 0 }}>
      <div
        className="logo"
        style={{
          width: 120,
          height: 31,
          background: "rgba(255, 255, 255, 0.2)",
          margin: "16px 28px 16px 0",
          float: "left",
        }}
      />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["1"]}
        style={{ lineHeight: "64px" }}
        items={items1}
      />
    </Header>
  );
};

export default HeaderBar;
