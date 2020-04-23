import React from 'react';

const LoadingComponent = (props) => {
  if (props.pastDelay) {
    return (
      <div className="d-flex justify-content-center align-items-center">
        <h2>Loading</h2>
      </div>
    );
  }

  return null;
};

export default LoadingComponent;
