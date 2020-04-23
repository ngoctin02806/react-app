import React from 'react';
import LoadingContext from './LoadingContext';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postCategoryLoading: undefined,
      postCategoryDone: undefined,
    };

    this.showLoading = this.showLoading.bind(this);
    this.showDone = this.showDone.bind(this);
  }

  showLoading(isLoading) {
    this.setState({
      postCategoryLoading: isLoading,
    });
  }

  showDone(isShowed) {
    this.setState({
      postCategoryDone: isShowed,
    });
  }

  render() {
    return (
      <LoadingContext.Provider
        value={{
          done: this.state.postCategoryDone,
          loading: this.state.postCategoryLoading,
          showLoading: this.showLoading,
          showDone: this.showDone,
        }}
      >
        {this.props.children}
      </LoadingContext.Provider>
    );
  }
}
