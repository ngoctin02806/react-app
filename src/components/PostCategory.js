import React, { useContext, useEffect } from 'react';
import { Row, Col } from 'reactstrap';
import { Helmet } from 'react-helmet';

import FormCategory from './FormCategory';
import ListCategory from './ListCategory';

import CategoryContext from './context/CategoryContext/CategoryContext';

const PostCategory = (props) => {
  const categoryCtx = useContext(CategoryContext);

  useEffect(() => {
    return () => console.log('PostCategory Unmount');
  });

  return (
    <div className="container">
      <Row className="pt-4 position-relative">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Tạo danh mục</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <Col md={8}>
          <FormCategory
            categories={categoryCtx.categories}
            addCategory={categoryCtx.addCategory}
          />
        </Col>
        <Col md={4}>
          <ListCategory categories={categoryCtx.childCategories} />
        </Col>
      </Row>
    </div>
  );
};

export default PostCategory;
