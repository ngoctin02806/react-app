import React, { useContext } from 'react';
import Loading from './common/LoadingIndicator';
import LoadingContext from "./context/LoadingContext/LoadingContext";

const LoadingWrap = props => {
    const loadingCtx = useContext(LoadingContext);

    return loadingCtx.done ? <Loading done={loadingCtx.done} loading={loadingCtx.loading}/> : ''
};

export default LoadingWrap;