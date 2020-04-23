import React from 'react';
import axios from 'axios';
import config from '../../../../config/config';
import CategoryContext from './CategoryContext';

class CategoryContextProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      childCategories: [],
    };

    this.handleRenderCategories = this.handleRenderCategories.bind(this);
  }

  componentDidMount() {
    axios(`${config['HOST']}${config['VERSION']}/parent-categories`, {
      method: 'GET',
    })
      .then(({ data }) => {
        this.setState({ categories: [...data] });
      })
      .catch((err) => {
        console.log(err);
      });

    axios(`${config['HOST']}${config['VERSION']}/child-categories`, {
      method: 'GET',
    })
      .then(({ data }) => {
        this.setState({
          childCategories: [...data],
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleRenderCategories(category) {
    this.setState({
      childCategories: [...this.state.childCategories].concat(category),
    });
  }

  render() {
    return (
      <CategoryContext.Provider
        value={{
          categories: this.state.categories,
          childCategories: this.state.childCategories,
          addCategory: this.handleRenderCategories,
        }}
      >
        {this.props.children}
      </CategoryContext.Provider>
    );
  }
}

export default CategoryContextProvider;
