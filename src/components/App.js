import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/style.css';

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';

import Header from './common/Header';
import NotFoundPage from './common/NotFoundPage';
import LoadingWrap from './LoadingWrap';
import LoadingComponent from './common/LoadingComponent';

import CategoryContextProvider from './context/CategoryContext/CategoryContextProvider';
import LoadingContextProvider from './context/LoadingContext/LoadingContextProvider';

function App(props) {
  return (
    <div className="position-relative">
      <LoadingContextProvider>
        <Header />
        <LoadingWrap />
        <div>
          <CategoryContextProvider>
            <Switch>
              <Route
                path="/"
                exact
                component={Loadable({
                  loader: () =>
                    new Promise((resolve, reject) => {
                      setTimeout(() => {
                        resolve(import('./Home'));
                      }, 1000);
                    }),
                  loading: LoadingComponent,
                  delay: 200,
                })}
              />
              <Route
                path="/tao-danh-muc"
                component={Loadable({
                  loader: () =>
                    new Promise((resolve, reject) => {
                      setTimeout(() => {
                        resolve(import('./PostCategory'));
                      }, 1000);
                    }),
                  loading: LoadingComponent,
                  delay: 200,
                })}
              />
              <Route component={NotFoundPage} />
            </Switch>
          </CategoryContextProvider>
        </div>
      </LoadingContextProvider>
    </div>
  );
}

export default App;
