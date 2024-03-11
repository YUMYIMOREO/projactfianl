import React from "react";
import { Table, Button } from "antd";

const columns = [
  {
    title: "จำนวน",
    dataIndex: "quantity",
    key: "quantity",
  },
  {
    title: "รายการสินค้า",
    dataIndex: "productName",
    key: "productName",
  },
  {
    title: "ราคา",
    dataIndex: "price",
    key: "price",
  },
  {
    title: "ผู้รับ",
    dataIndex: "recipient",
    key: "recipient",
  },
  {
    title: "ที่อยู่",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "การดำเนินการ",
    key: "action",
    render: () => (
      <div>
        <Button type="primary">ลบสินค้า</Button>
      </div>
    ),
  },
];

const data = [
  {
    key: "1",
    quantity: 1,
    productName: "สินค้า A",
    price: 100,
    recipient: "John Doe",
    address: "123 Main St, City, Country",
  },
  {
    key: "2",
    quantity: 2,
    productName: "สินค้า B",
    price: 200,
    recipient: "Jane Smith",
    address: "456 Park Ave, Town, Country",
  },
];

const Header = () => {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <p>ชื่อผู้ใช้งาน : <span>{" นาย ศิรชัช ศรีเกษม"}</span></p>
          <p>ที่อยู่ : <span>{"12/8 หมู่ 14 ตำบล บ้านพระ อำเภอเมือง จังหวัด ปราจีนบุรี 25230"}</span></p>
          <p>วันที่ : </p>
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <p>ราคารวมทั้งหมด: XXXX บาท</p>
        </div>
        <div>
          <Button type="primary">สั่งสินค้า</Button>
        </div>
      </div>
    </div>
  );
};

const OrderTable = () => {
  return (
    <div>
      <Header />
      <h2 style={{ textAlign: "center" }}>ตะกร้าสินค้า</h2>
      <Table
        columns={columns}
        dataSource={data}
        bordered
        pagination={false}
        style={{ width: "80%", margin: "auto" }}
      />
      <Footer />
    </div>
  );
};

export default OrderTable;
