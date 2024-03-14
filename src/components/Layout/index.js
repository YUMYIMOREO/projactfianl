import React, { useState } from "react";
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import {
  Breadcrumb,
  Layout,
  Menu,
  theme,
  Carousel,
  Row,
  Col,
  Card,
} from "antd";
import Image1 from "./1.jpg";
import Image2 from "./2.jpg";
import Image3 from "./3.jpg";
import NewProduct from "../NewProduct";
import AllProducts from "../AllProducts";
import OrderTable from "../OrderTable";
import OrderHistoryTable from "../OrderHistoryTable";

const { Header, Content, Sider } = Layout;
const { Meta } = Card;

const items1 = [
  "หน้าแรก",
  "ดูสินค้าทั้งหมด",
  "ตะกร้าสินค้า",
  "ประวัติการสั่งซื้อ",
].map((label, index) => ({
  key: String(index + 1),
  label,
}));

const items2 = [
  { key: "0", icon: <UserOutlined />, label: "ประเภทสินค้า" },
  { key: "1", icon: <LaptopOutlined />, label: "สุขภัณฑ์อัตโนมัติ" },
  { key: "2", icon: <NotificationOutlined />, label: "สุขภัณฑ์ชักโครก" },
  { key: "3", icon: <NotificationOutlined />, label: "สุขภัณฑ์เคลื่อนที่" },
  { key: "4", icon: <NotificationOutlined />, label: "สุขภัณฑ์เซ็นเซอร์" },
  { key: "5", icon: <NotificationOutlined />, label: "สุขภัณฑ์ราดน้ำ" },
];

const FullLayout = () => {
  const [keyMenu, setKeyMenu] = useState("1");
  const [keyType, setkeyType] = useState("0");

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const productData = [
    {
      id: 1,
      name: "สุขภัณฑ์อัตโนมัติ COTTO C10121H 6L สีขาว",
      price: "29,990",
      image:
        "https://cdn.homepro.co.th/ART_IMAGE/11/691/1169172/160x160/19072021_1169172$Imagec1.jpg",
    },
    {
      id: 2,
      name: "สุขภัณฑ์นั่งราบ MOYA HP-031 สีขาว",
      price: "1,190",
      image:
        "https://cdn.homepro.co.th/ART_IMAGE/10/195/1019540/160x160/24032023_1019540$Imagec1.jpg",
    },
    {
      id: 3,
      name: "สุขภัณฑ์ 1 ชิ้น COTTO C11002H 3/4.5L สีขาว (EXC)",
      price: "4,990",
      image:
        "https://cdn.homepro.co.th/ART_IMAGE/11/521/1152151/160x160/26052022_1152151$Imagec1.jpg",
    },
    {
      id: 4,
      name: "สุขภัณฑ์ 2 ชิ้น COTTO TOUCHLESS C135137 4.5 ลิตร สีขาว",
      price: "12,950",
      image:
        "https://cdn.homepro.co.th/ART_IMAGE/11/572/1157269/160x160/20092023_1157269$Imagec1.jpg",
    },
  ];

  const Recommendedproducts = [
    {
      id: 1,
      name: "สุขภัณฑ์อัตโนมัติ TOTO CES9788PRVA สีขาว",
      price: "139,900",
      image:
        "https://cdn.homepro.co.th/ART_IMAGE/12/286/1228635/160x160/17022023_1228635$Imagec1.jpg",
    },
    {
      id: 2,
      name: "สุขภัณฑ์นั่งราบ NASCO NC-9501-SA สีฟ้า",
      price: "1,590",
      image:
        "https://cdn.homepro.co.th/ART_IMAGE/11/382/1138281/160x160/28032023_1138281$Imagec1.jpg",
    },
    {
      id: 3,
      name: "สุขภัณฑ์เคลื่อนที่ MOYA BP-1788",
      price: "4,790",
      image:
        "https://cdn.homepro.co.th/ART_IMAGE/10/999/1099986/160x160/19042023_1099986$Imagec1.jpg",
    },
    {
      id: 4,
      name: "สุขภัณฑ์ 1 ชิ้น AMERICAN STANDARD 2531SCTL-WT-0 4.8L สีขาว",
      price: "9,590",
      image:
        "https://cdn.homepro.co.th/ART_IMAGE/11/660/1166055/160x160/19072021_1166055$Imagec1.jpg",
    },
  ];
  
  return (
    <Layout>
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
          onClick={(e) => { setKeyMenu(e.key); }}
        />
      </Header>
     
      <Layout>
      {keyMenu === "2" ?
        <Sider width={200} style={{ background: colorBgContainer }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["0"]}
            style={{ height: "100%", borderRight: 0 }}
            items={items2}
            onClick={(e) => {  setkeyType(e.key) }}
          />
        </Sider>
        :null }
        <Layout style={{ padding: "0 24px 24px" }}>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >

            {/*   =============================  หน้าแรก  ============================= */}

            {keyMenu === "1" ?
              <>
                <Carousel autoplay>
                  <div>
                    <img
                      src={Image1}
                      alt="Image 1"
                      style={{ width: "100%", height: "300px" }}
                    />
                  </div>
                  <div>
                    <img
                      src={Image2}
                      alt="Image 2"
                      style={{ width: "100%", height: "300px" }}
                    />
                  </div>
                  <div>
                    <img
                      src={Image3}
                      alt="Image 3"
                      style={{ width: "100%", height: "300px" }}
                    />
                  </div>
                </Carousel>
                <NewProduct productData={productData} Recommendedproducts={Recommendedproducts} />
              </>
              : null}
            {/*   =============================  ดูสินค้าทั้งหมด  ============================= */}
            
            {keyMenu === "2" ?
              <>
                <AllProducts keyType={keyType}  />
              </>
              : null}
       {/*   =============================  ตะกร้าสินค้า  ============================= */}
         {keyMenu === "3" ?  <OrderTable /> : null}
            {/*   =============================  ประวัติการสั่งซื้อ  ============================= */}

            {keyMenu === "4" ? <OrderHistoryTable /> : null}
     

          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default FullLayout;
