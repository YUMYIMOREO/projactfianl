import React from 'react';
import { Row, Col, Card } from 'antd'; // Import necessary components from antd
const { Meta } = Card; // Destructure Meta from Card

const NewProduct = ({ productData, Recommendedproducts }) => {
  return (
    <div>
      <div>
        <h2 style={{ textAlign: "center", margin: "20px 0" }}>
          New Product
        </h2>
        <Row gutter={[16, 16]}>
          {productData.map((product) => (
            <Col key={product.id} span={6}>
              <Card
                hoverable
                cover={<img alt={product.name} src={product.image} />}
              >
                <Meta
                  title={product.name}
                  description={product.description}
                />
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      <div>
        <h2 style={{ textAlign: "center", margin: "20px 0" }}>
          Recommended Products
        </h2>
        <Row gutter={[16, 16]}>
          {Recommendedproducts.map((product) => (
            <Col key={product.id} span={6}>
              <Card
                hoverable
                cover={<img alt={product.name} src={product.image} />}
              >
                <Meta
                  title={product.name}
                  description={product.description}
                />
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default NewProduct;
