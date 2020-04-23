import React from 'react';
import FadeIn from 'react-fade-in';
import Lottie from 'react-lottie';
import styled from 'styled-components';

import * as circleLoading from '../../../images/circleLoading.json';
import * as doneLoading from '../../../images/doneLoading.json';

const LoadingScreen = styled.div`
  position: absolute;
  background-color: rgba(221,221,221,0.91);
  width: 100%;
  height: 92.5vh;
  z-index: 10;
`;

export default function (props) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: circleLoading.default,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const defaultOptions1 = {
    loop: false,
    autoplay: true,
    animationData: doneLoading.default,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <LoadingScreen className="d-flex align-items-center justify-content-center">
      <FadeIn>
        <div style={{height: '100%'}} className="d-flex align-items-center">
          <h1>Fetching pizza</h1>
          {!props.loading ? (
            <Lottie style={{margin: 0}} options={defaultOptions} width={60} height={60} />
          ) : (
            <Lottie options={defaultOptions1} width={120} height={120} />
          )}
        </div>
      </FadeIn>
    </LoadingScreen>
  );
}
