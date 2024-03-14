import React, { useState, useEffect } from 'react';
import { Table } from 'antd';
import moment from 'moment';
const { Column } = Table;

const OrderHistoryTable = () => {
  const [data, setData] = useState([]);
  const [masterProduct, setMasterProduct] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const response = await fetch('http://localhost:5000/getdatahistory');
      const responseProduct = await fetch('http://localhost:5000/Listproducts');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      const jsonData = await response.json();
      const jsonDataProduct = await responseProduct.json();
      console.log(jsonDataProduct);
      setMasterProduct(jsonDataProduct);
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const mapIdsToString = (idsString) => {

    const idsArray = idsString.split(',');
    const mappedObjects = idsArray.map((id) => {
      const productList = masterProduct.filter((word) => word.id === parseInt(id));
      if (productList.length > 0) {
        return productList[0]["name"];
      } else {
        return "Product Not Found";
      }
    });

    return mappedObjects;
  };

  return (
    <Table dataSource={data} pagination={false}>
<Column
  title="วันที่สั่งซื้อ"
  dataIndex="createdAt"
  key="createdAt"
  render={(text, record) => moment(record.createdAt).format('DD/MM/YYYY')}
/>
      <Column
        title="รายการสินค้า"
        dataIndex="productId"
        key="productId"
        render={(text, record) => (
          <div>
            {mapIdsToString(record.PaymentOrder.productId).map((productName, index) => (
              <div key={index}>{productName}</div>
            ))}
          </div>
        )}
      />
      <Column title="ราคารวม" dataIndex="totalAmount" key="totalAmount" render={(text, record) => `${record.PaymentOrder.totalAmount} `} />
      <Column title="ชื่อผู้ส่ง - เบอร์" dataIndex="sender" key="sender"
        render={(text, record) => `${record.PaymentOrder.senderName} - ${record.PaymentOrder.senderPhone}`} />
      <Column title="ชื่อผู้รับ - ที่อยู่ - เบอร์" dataIndex="recipient" key="recipient"
        render={(text, record) => `${record.PaymentOrder.receiverName} - ${record.PaymentOrder.receiverAddress} - ${record.PaymentOrder.receiverPhone}`} />
    </Table>
  );
};

export default OrderHistoryTable;
