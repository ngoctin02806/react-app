import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const getWidth = props => props.width ? props.width : "100%";
const getHeight = props => props.height ? props.height : "100%";

const Images = styled.img`
  width: ${getWidth};
  height: ${getHeight};
  object-fit: cover;
`;

const Temp = styled.div`
  width: ${getWidth};
  height: ${getHeight};
`;
const ImageComponent = (props) => {
  const [load, setLoad] = useState(true);
  useEffect(() => {
    const newImg = new Image();
    newImg.onload = function () {
      setLoad(false);
    };
    newImg.src = props.src;
  }, []);

  return load ? (
    <SkeletonTheme color="#eee" highlightColor="#ddd">
      <Temp width={props.width} height={props.height}>
        <Skeleton circle={props.circle || false} height={props.heightSkeleton} />
      </Temp>

    </SkeletonTheme>
  ) : (
    <Images {...props} />
  );
};
export default ImageComponent;
