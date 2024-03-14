import React, { useState } from 'react';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Card, InputNumber, Button, Modal , message } from 'antd';
import styled from 'styled-components';


const { Meta } = Card;

const StyledCard = styled(Card)`
  width: 300px;
`;

const ProductImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 300px;
  object-fit: contain;
`;

const ProductName = styled.h3`
  margin: 10px 0;
  text-align: center;
`;

const ProductPrice = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
`; 
const QuantityInput = styled(InputNumber)`
  margin-top: 10px;
  width: 30%;
`;

const ProductDetailCard = ({ Data }) => {
  const [open, setOpen] = useState(false);
  const [basket, setBasket] = useState([]);
  const [quantity, setQuantity] = useState(1);

  const AddBasket = async () => {
    var setData = {
      "name": basket.name,
      "price":  basket.price,
      "qty":  basket.qty ? basket.qty : 1 ,
      "productid" : basket.id,
      "userid": 1
    }
    try {
      // Make a POST request to the API endpoint
      const response = await fetch('http://localhost:5000/insertbasket', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(setData), // Convert product data to JSON format
      });
  
      // Check if the request was successful (status code 2xx)
      if (response.ok) {
        // Handle successful response (e.g., display success message)
        message.success('Product added to basket successfully');
        setOpen(false);
      } else {
        // Handle unsuccessful response (e.g., display error message)
        message.error(`Failed to add product to basket: ${response.statusText}`);
      }
    } catch (error) {
      // Handle errors (e.g., network error)
      message.error(`Error adding product to basket: ${error.message}`);
    }
  };
  const handleQuantityChange = (value) => {
    setQuantity(value);
  };

 
  return (
    <>
      <StyledCard
        cover={<ProductImage alt="example" src={Data.image} />}
  
      >
        <Meta title={Data.name} description={`ราคา ${Data.price}  บาท`}  style={{textAlign: "center"}}/>
        <InputNumber style={{ marginTop: "10px" ,marginRight: "15px" ,  textAlign: "center"}} defaultValue={1} min={1}   onChange={(e) => Data["qty"] = e}  />
        <Button type="primary" onClick={() => { setBasket(Data); setOpen(true);} }>เพิ่มลงตระกร้า</Button>,

      </StyledCard>

      <Modal
      title={basket.name}
      visible={open}
      onCancel={() => setOpen(false)}
      footer={[
        <Button key="back" onClick={() => setOpen(false)}>Cancel</Button>,
        <Button key="submit" type="primary" onClick={() => AddBasket()}>Add</Button>
      ]}
    >
      <ProductImage src={basket.image} alt={basket.name} />
      <ProductName>{basket.name}</ProductName>
      <ProductPrice>{basket.price} บาท</ProductPrice>
      <p>Amount : {basket.qty} Qty.</p>
      <p>Total Price: {basket.qty && basket.price ? basket.qty * parseInt((basket.price).replace(/,/g, ''), 10) + " บาท" :  1 }</p>
    </Modal>
    </>
  )
}

export default ProductDetailCard;
