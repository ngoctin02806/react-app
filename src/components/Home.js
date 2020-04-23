import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

import ProductList from './ProductList';

const ProductTitle = styled.div`
  font-size: 25px;
  color: #aaa;
  font-weight: normal;
`;

const DivTitle = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 20px;
`;

const Home = (props) => {
  return (
    <div className="bg-light">
      <div className="container">
        <DivTitle>
          <Helmet>
            <title>Trang chủ</title>
          </Helmet>
          <ProductTitle>Tất cả sản phẩm</ProductTitle>
        </DivTitle>
        <ProductList />
      </div>
    </div>
  );
};

export default Home;
