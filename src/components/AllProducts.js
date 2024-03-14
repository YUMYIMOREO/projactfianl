import React, { useEffect, useState } from 'react';
import { Row, Col } from 'antd';
import ProductDetailCard from './ProductCard';

const AllProducts = ({keyType}) => {
  const [products, setProducts] = useState([]);
  const [masterData, setMasterData] = useState([]);
  useEffect(() => {
    // Load data from the API when the component mounts
    loadData();
  }, [keyType]);

  const loadData = async () => {
    try {
      const response = await fetch('http://localhost:5000/Listproducts');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      
      if(keyType === "0"){
        setProducts(data); 
      }
      else{
        const result = data.filter((word) => word.typeId ===  keyType);
        setProducts(result); 
      }
     
   
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <h2 style={{ textAlign: "center", margin: "20px 0" }}>
        สินค้าทั้งหมด
      </h2>
      <Row gutter={[16, 16]}>
        {/* Map through products array and render ProductDetailCard component */}
        {products.map((product) => (
          <Col key={product.id} span={6}>
            <ProductDetailCard Data={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default AllProducts;
