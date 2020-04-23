import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import React from 'react';

const CloseCircle = styled.div`
  width: 15px;
  height: 15px;
  background-color: #dddddd;
  cursor: pointer;
  position: absolute;
  right: 5px;
  top: 5px;
  z-index: 100;
`;

const DeleteIcon = (props) => {
  return (
    <CloseCircle
      onClick={props.deleteImage}
      className="d-flex justify-content-center align-items-center rounded-circle shadow"
    >
      <FontAwesomeIcon color="#aaa" icon={faTimes} size="xs" />
    </CloseCircle>
  );
};

export default DeleteIcon;
