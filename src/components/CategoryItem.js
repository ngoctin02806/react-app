import React from 'react';

import Image from './common/Image';

const CategoryItem = (props) => {
  return (
    <div
      style={{ cursor: 'pointer' }}
      className="d-flex align-items-center p-1 hover-item"
    >
      <Image
        className="mr-2 rounded-circle"
        width="30px"
        height="30px"
        heightSkeleton={30}
        src={props.urlIcon}
        alt=""
        circle={true}
      />
      <div>{props.nameIcon}</div>
    </div>
  );
};

export default CategoryItem;
