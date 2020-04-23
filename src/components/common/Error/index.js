import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import styled from 'styled-components';

const ErrorUser = styled.div`
  color: ${props => props.color || 'rgba(228,67,64,0.82)'};
  font-size: 12px;
`;

const DangerErrorIcon = styled.div`
  color: rgba(228,67,64,0.82);
`;

const ShowedError = (props) => {
  return (
    <div className="d-flex align-items-center">
        <DangerErrorIcon className="mr-1">
            <FontAwesomeIcon icon={faTimesCircle} />
        </DangerErrorIcon>
        <ErrorUser color={props.color}>{props.message}</ErrorUser>
    </div>
  );
};

export default ShowedError;
