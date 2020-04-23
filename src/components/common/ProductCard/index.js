import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Images from '../Image';

const DivPrice = styled.div`
  color: #f57224;
  font-size: 20px;
  font-weight: initial;
`;

const DivName = styled.div`
  font-weight: normal;
  font-size: 14px;
  color: #535353;
  padding-top: 10px;
`;

const DivImg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const CardImg = styled.div`
  position: relative;
  padding-top: 175px;
`;

const WrapContent = styled.div`
  padding: 10px;
`;

const Card = styled.div`
  width: 100%;

  &:hover {
    box-shadow: 0px 0px 3px #dddddd;
  }
`;

const ProductCard = (props) => {
  const { product_name, price, images, _id } = props.product;
  return (
    <Card>
      <CardImg>
        <DivImg>
          <Images heightSkeleton={150} src={images[0].url} />
        </DivImg>
      </CardImg>
      <WrapContent>
        <DivName>
          <Link to={`/san-pham/${_id}`}>{product_name}</Link>
        </DivName>
        <DivPrice>{price} đ</DivPrice>
      </WrapContent>
    </Card>
  );
};

export default ProductCard;
