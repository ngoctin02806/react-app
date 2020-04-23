import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListOl } from '@fortawesome/free-solid-svg-icons';

import CategoryItem from './CategoryItem';

const LabelStyled = styled.label`
  font-size: 17px;
`;

const ListCategory = (props) => {
  return (
    <div>
      <FontAwesomeIcon className="mr-1" size="lg" icon={faListOl} />
      <LabelStyled {...props}>Danh mục</LabelStyled>
      <div className="border p-2">
        {props.categories.map((item, index) => (
          <CategoryItem
            key={index}
            nameIcon={item.category_name}
            urlIcon={item.icon_category}
          />
        ))}
      </div>
    </div>
  );
};

export default ListCategory;
