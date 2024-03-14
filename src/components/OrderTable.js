<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import { Table, Row, Col, Input, Button, Checkbox , message } from "antd";


=======
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
>>>>>>> 362adc38620e8d5c76848eac38862eb937b76288

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
  const [basketData, setBasketData] = useState([]);
  const [sumPrice, setSumPrice] = useState(0);

  const [senderName, setSenderName] = useState("");
  const [senderPhone, setSenderPhone] = useState("");
  const [receiverName, setReceiverName] = useState("");
  const [receiverAddress, setReceiverAddress] = useState("");
  const [receiverPhone, setReceiverPhone] = useState("");


  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const response = await fetch('http://localhost:5000/basket');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      // Add a 'selected' property to each item in the basketData array
      const updatedData = data.map(item => ({ ...item, selected: false }));
      setBasketData(updatedData);
    } catch (error) {
      console.error('Error loading basket data:', error);
    }
  };

  const handleCheckboxChange = (key, checked) => {
    // Update the selected property of the corresponding item in basketData
    const updatedData = basketData.map(item =>
      item.id === key ? { ...item, selected: checked } : item
    );

    const selectedItems = updatedData.filter(item => item.selected);
    const totalPrice = selectedItems.reduce((acc, currentItem) => {
      // Remove commas from the price string and parse it as an integer
      const priceWithoutComma = currentItem.price.replace(/,/g, '');
      const price = parseInt(priceWithoutComma);

      return acc + (price * currentItem.qty);
    }, 0);
    setSumPrice(totalPrice);
    setBasketData(updatedData);
  };
  const handleDelete = (basketItemId) => {
    // Call API to delete the basket item with the specified ID
    fetch(`http://localhost:5000/basket/${basketItemId}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to delete item');
        }
        // Handle successful response (e.g., display success message)
        message.success('Item deleted successfully');
        loadData();
        // Refresh the table or perform any other necessary actions
      })
      .catch(error => {
        // Handle errors (e.g., display error message)
        console.error('Error deleting item:', error);
        message.error('Failed to delete item');
      });
  };
  

  const columns = [
    {
      title: "เลือก",
      dataIndex: "selected",
      key: "selected",
      align: "center",
      render: (_, record) => (
        <Checkbox checked={record.selected} onChange={(e) => handleCheckboxChange(record.id, e.target.checked)} />
      ),
    },
    {
      title: "รายการสินค้า",
      dataIndex: "name",
      key: "name",
      align: "left",
    },
    {
      title: "ราคา",
      dataIndex: "price",
      key: "price",
      align: "center",
    },
    {
      title: "จำนวน",
      dataIndex: "qty",
      key: "qty",
      align: "center",
    },
    {
      title: "การดำเนินการ",
      key: "action",
      align: "center",
      render: (text, record) => (
        <div>
          <Button type="primary" onClick={() => handleDelete(record.id)}>ลบสินค้า</Button>
        </div>
      ),
    },
  ];

  const handleOrderButtonClick = () => {
    const selectedItems = basketData.filter(item => item.selected);
    console.log(selectedItems);
  
    // Prepare the data for the API request
    var requestData = [];
    let productID = '';
    for (let i = 0; i < selectedItems.length; i++) {
      productID += selectedItems[i].productid + ',';
    }

  
    requestData.push({
      userId: 1,
      orderId: 1,
      totalAmount: sumPrice, // Assuming sumPrice is already calculated correctly
      senderName: senderName,
      senderAddress: '',
      senderPhone: senderPhone,
      receiverName: receiverName,
      receiverAddress: receiverAddress,
      receiverPhone: receiverPhone,
      productid: productID.substring(0, productID.length - 1),
      // Add other fields as needed
    });
    if(selectedItems.length > 0){
    fetch('http://localhost:5000/paymentorders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestData),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to submit order');
        }
        // Handle successful response (e.g., display success message)
        message.success('Order submitted successfully');
        window.location.reload();
        // Clear the basket or perform any other necessary actions
      })
      .catch(error => {
        // Handle errors (e.g., display error message)
        console.error('Error submitting order:', error);
        message.error('Failed to submit order');
      });
    }
  };
  return (
    <div>
<<<<<<< HEAD
      <h2 style={{ textAlign: "center" }}>ตะกร้าสินค้า</h2>
      <Table
        columns={columns}
        dataSource={basketData}
        bordered
        pagination={false}
        style={{ width: "100%", margin: "auto" }}
      />


      <Row justify="space-between" style={{ marginTop: "20px" }}>
        <Col span={3}>
          <label htmlFor="senderName">ชื่อผู้ส่ง:</label>
          <Input type="text" id="senderName" name="senderName" style={{ marginTop: "10px" }}  value={senderName} onChange={e => setSenderName(e.target.value)}/>
        </Col>
    
        <Col span={3}>
          <label htmlFor="senderPhone">เบอร์โทรผู้ส่ง:</label>
          <Input type="text" id="senderPhone" name="senderPhone" style={{ marginTop: "10px" }} value={senderPhone} onChange={e => setSenderPhone(e.target.value)} />
        </Col>
        <Col span={3}>
          <label htmlFor="receiverName">ชื่อผู้รับ:</label>
          <Input type="text" id="receiverName" name="receiverName" style={{ marginTop: "10px" }} value={receiverName} onChange={e => setReceiverName(e.target.value)}/>
        </Col>
        <Col span={3}>
          <label htmlFor="senderAddress">ที่อยู่รับ:</label>
          <Input type="text" id="senderAddress" name="senderAddress" style={{ marginTop: "10px" }} value={receiverAddress} onChange={e => setReceiverAddress(e.target.value)}/>
        </Col>
        <Col span={3}>
          <label htmlFor="receiverPhone">เบอร์โทรผู้รับ:</label>
          <Input type="text" id="receiverPhone" name="receiverPhone" style={{ marginTop: "10px" }} value={receiverPhone} onChange={e => setReceiverPhone(e.target.value)}/>
        </Col>

        <Col span={3}  style={{ marginTop: "30px" }}>
          <label htmlFor="sumPrice" > ราคารวม : {sumPrice} บาท </label>
          {/* <p style={{ marginTop: "10px" , whiteSpace: "nowrap"}}>{sumPrice} บาท</p> */}
        </Col>

        <Col span={3} >
          <Button type="primary" style={{ marginTop: "25px" }} onClick={handleOrderButtonClick}>สั่งสินค้า</Button>
        </Col>
      </Row>


    </div>
  );
};


=======
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
>>>>>>> 362adc38620e8d5c76848eac38862eb937b76288

export default OrderTable;
