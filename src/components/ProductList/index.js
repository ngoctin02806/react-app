import React, { useState, useEffect } from 'react';
import { Row, Col } from 'reactstrap';
import axios from 'axios';

import config from '../../../config/config';
import ProductCard from '../common/ProductCard';

const ProductList = (props) => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    axios(`${config['HOST']}${config['VERSION']}/products`, {
      method: 'GET',
    }).then(({ data }) => {
      setProductList([...data.products]);
    });
  }, []);

  return (
    <Row style={{padding: "26px 0px"}}>
      {productList.map((prod, index) => (
        <Col key={index} sm={6} md={3}>
          <ProductCard product={prod} />
        </Col>
      ))}
    </Row>
  );
};

export default ProductList;
