import React from 'react';

class HandleError extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errorOccurred: false,
      error: null,
    };
  }

  componentDidCatch(error, info) {
    this.setState({ errorOccurred: true });
    this.setState({error})
  }

  render() {
    if (this.state.errorOccurred) {
      return <div>{this.state.error.stack.toString()}</div>;
    }

    return this.props.children;
  }
}

export default HandleError;
