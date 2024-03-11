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
  "ประวัติการสั่งซื้อ",
  "ตะกร้าสินค้า",
].map((label, index) => ({
  key: String(index + 1),
  label,
}));

const items2 = [
  { key: "sub1", icon: <UserOutlined />, label: "ประเภทสินค้า" },
  { key: "sub2", icon: <LaptopOutlined />, label: "สุขภัณฑ์อัตโนมัติ" },
  { key: "sub3", icon: <NotificationOutlined />, label: "สุขภัณฑ์ชักโครก" },
  { key: "sub4", icon: <NotificationOutlined />, label: "สุขภัณฑ์เคลื่อนที่" },
  { key: "sub5", icon: <NotificationOutlined />, label: "สุขภัณฑ์เซ็นเซอร์" },
  { key: "sub6", icon: <NotificationOutlined />, label: "สุขภัณฑ์ราดน้ำ" },
];

const FullLayout = () => {
  const [keyMenu, setKeyMenu] = useState("1");
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
  const ProductDetail = [
    {
      id: 1,
      name: "สุขภัณฑ์อัตโนมัติ COTTO C10121H 6L สีขาว",
      price: "29,990",
      image:
        "https://cdn.homepro.co.th/ART_IMAGE/11/691/1169172/160x160/19072021_1169172$Imagec1.jpg",
    },
    {
      id: 2,
      name: "สุขภัณฑ์อัตโนมัติ TOTO CES9788PRVA สีขาว",
      price: "139,900",
      image:
        "https://cdn.homepro.co.th/ART_IMAGE/12/286/1228635/160x160/17022023_1228635$Imagec1.jpg",
    },
    {
      id: 3,
      name: "สุขภัณฑ์อัตโนมัติ KOHLER K-8340X-2EX-0 5.5L สีขาว",
      price: "58,900",
      image:
        "https://cdn.homepro.co.th/ART_IMAGE/11/584/1158454/160x160/31082021_1158454$Imagec1.jpg",
    },
    {
      id: 4,
      name: "สุขภัณฑ์อัตโนมัติ TOTO CES85510PVJ 3/4.5 ลิตร สีขาว",
      price: "146,000",
      image:
        "https://cdn.homepro.co.th/ART_IMAGE/12/419/1241986/160x160/31082023_1241986$Imagec1.jpg",
    },
    {
      id: 5,
      name: "สุขภัณฑ์นั่งราบ MOYA HP-031 สีขาว",
      price: "1,190",
      image:
        "https://cdn.homepro.co.th/ART_IMAGE/10/195/1019540/160x160/24032023_1019540$Imagec1.jpg",
    },
    {
      id: 6,
      name: "สุขภัณฑ์นั่งราบ KARAT K-17713X-S-WK สีขาว",
      price: "1,365",
      image:
        "https://cdn.homepro.co.th/ART_IMAGE/12/013/1201300/160x160/18052022_1201300$Imagec2.jpg",
    },
    {
      id: 7,
      name: "สุขภัณฑ์นั่งยองมีฐาน MOYA 101 สีขาว",
      price: "890",
      image:
        "https://cdn.homepro.co.th/ART_IMAGE/10/812/1081236/160x160/10072021_1081236$Imagec1.jpg",
    },
    {
      id: 8,
      name: "สุขภัณฑ์นั่งราบ NASCO NC-9501-SA สีฟ้า",
      price: "1,590",
      image:
        "https://cdn.homepro.co.th/ART_IMAGE/11/382/1138281/160x160/28032023_1138281$Imagec1.jpg",
    },
    {
      id: 9,
      name: "สุขภัณฑ์ 1 ชิ้น COTTO C11002H 3/4.5L สีขาว (EXC)",
      price: "4,990",
      image:
        "https://cdn.homepro.co.th/ART_IMAGE/11/521/1152151/160x160/26052022_1152151$Imagec1.jpg",
    },
    {
      id: 10,
      name: "สุขภัณฑ์ 1 ชิ้น MOYA 329 3/6L สีขาว",
      price: "3,490",
      image:
        "https://cdn.homepro.co.th/ART_IMAGE/10/839/1083954/160x160/19072023_1083954$Imagec1.jpg",
    },
    {
      id: 11,
      name: "สุขภัณฑ์ 1 ชิ้น MOYA SN-T004 3/4.8L สีขาว (HTD)",
      price: "3,590",
      image:
        "https://cdn.homepro.co.th/ART_IMAGE/10/665/1066554/160x160/12042023_1066554$Imagec1.jpg",
    },
    {
      id: 12,
      name: "สุขภัณฑ์ 1 ชิ้น MOYA 301 3/6 ลิตร สีขาว",
      price: "3,490",
      image:
        "https://cdn.homepro.co.th/ART_IMAGE/11/994/1199471/160x160/27032023_1199471$Imagec1.jpg",
    },
    {
      id: 13,
      name: "สุขภัณฑ์เคลื่อนที่ MOYA BP-1309S สีน้ำตาล",
      price: "1,590",
      image:
        "https://cdn.homepro.co.th/ART_IMAGE/10/643/1064361/160x160/03042023_1064361$Imagec3.jpg",
    },
    {
      id: 14,
      name: "สุขภัณฑ์เคลื่อนที่ MOYA OC13",
      price: "2,190",
      image:
        "https://cdn.homepro.co.th/ART_IMAGE/10/809/1080944/160x160/07092022_1080944$Imagec1.jpg",
    },
    {
      id: 15,
      name: "สุขภัณฑ์เคลื่อนที่ MOYA BP-1788",
      price: "4,790",
      image:
        "https://cdn.homepro.co.th/ART_IMAGE/10/999/1099986/160x160/19042023_1099986$Imagec1.jpg",
    },
    {
      id: 16,
      name: "สุขภัณฑ์ 1 ชิ้น COTTO TOUCHLESS C105327 4.5 ลิตร สีขาว",
      price: "7,390",
      image:
        "https://cdn.homepro.co.th/ART_IMAGE/11/572/1157279/160x160/20092023_1157279$Imagec1.jpg",
    },
    {
      id: 17,
      name: "สุขภัณฑ์ 2 ชิ้น COTTO TOUCHLESS C135137 4.5 ลิตร สีขาว",
      price: "12,950",
      image:
        "https://cdn.homepro.co.th/ART_IMAGE/11/572/1157269/160x160/20092023_1157269$Imagec1.jpg",
    },
    {
      id: 18,
      name: "สุขภัณฑ์ 1 ชิ้น KARAT K-99192X-TF-WK 3/4.5L สีขาว",
      price: "7,150",
      image:
        "https://cdn.homepro.co.th/ART_IMAGE/11/847/1184768/160x160/18102021_1184768$Imagec1.jpg",
    },
    {
      id: 19,
      name: "สุขภัณฑ์ 2 ชิ้น COTTO TOUCHLESS C126227 4.5 ลิตร สีขาว",
      price: "6,990",
      image:
        "https://cdn.homepro.co.th/ART_IMAGE/11/571/1157148/160x160/20092023_1157148$Imagec1.jpg",
    },
    {
      id: 20,
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
          onClick={(e) => { setKeyMenu(e.key); console.log(keyMenu);}}
        />
      </Header>
      <Layout>
        <Sider width={200} style={{ background: colorBgContainer }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{ height: "100%", borderRight: 0 }}
            items={items2}
          />
        </Sider>
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
                <AllProducts ProductDetail={ProductDetail} />
              </>
              : null}

            {/*   =============================  ประวัติการสั่งซื้อ  ============================= */}

            {keyMenu === "3" ? <OrderHistoryTable /> : null}
            {/*   =============================  ตะกร้าสินค้า  ============================= */}
            {keyMenu === "4" ?  <OrderTable /> : null}

          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default FullLayout;
