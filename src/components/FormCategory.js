import React, { useState, useContext } from 'react';
import axios from 'axios';
import { Col, Row, Form, FormGroup, Label, Input, Button } from 'reactstrap';

import config from '../../config/config';

import AddImage from './common/AddImage';
import ShowedError from './common/Error';

import LoadingContext from "./context/LoadingContext/LoadingContext";

const FormCategory = (props) => {
  const loadingCtx = useContext(LoadingContext);

  const [nameCategoryObj, setNameCategoryObj] = useState({
    value: '',
    errorMsg: '',
    isValidInput: true,
  });
  const [identifyOfCategoryObj, setIdentifyCategoryObj] = useState({
    value: '',
    errorMsg: '',
    isValidInput: true,
  });

  const validateInput = (name, value) => {
    if (name === 'category') {
      const regex = /[^a-zA-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]$/u;
      const checkingResult = regex.exec(value);
      if (value === '') {
        return {
          isValidInput: false,
          errorMsg: 'Vui lòng không để trống Tên danh mục.',
        };
      }

      if (checkingResult !== null && checkingResult[0] !== ' ') {
        return {
          isValidInput: false,
          errorMsg: 'Vui lòng nhập đúng Tên danh mục.',
        };
      }
    }

    return {
      isValidInput: true,
      errorMsg: '',
    };
  };

  const handleInputValidation = (event) => {
    const validObj = validateInput(event.target.name, event.target.value);

    setNameCategoryObj({
      value: event.target.value,
      ...validObj,
    });
  };

  const submitForm = (event) => {
    event.preventDefault();
    if (nameCategoryObj.value === '') {
      setNameCategoryObj({
        value: '',
        isValidInput: false,
        errorMsg: 'Vui lòng không để trống Tên danh mục.',
      });
    } else {
      const data = {
        category_name: nameCategoryObj.value,
        icon_category: localStorage.getItem('icon-category'),
        parent:
          identifyOfCategoryObj.value === ''
            ? null
            : identifyOfCategoryObj.value,
      };

      loadingCtx.showDone(true);

      setTimeout(() => {
        axios(`${config['HOST']}${config['VERSION']}/categories`, {
          method: 'POST',
          data: {
            ...data,
          },
        })
          .then(({ data }) => {
            localStorage.removeItem('icon-category');
            setNameCategoryObj({
              value: '',
              isValidInput: true,
              errorMsg: '',
            });

            loadingCtx.showLoading(true);

            setTimeout(() => {
              loadingCtx.showDone(false);
            }, 1000);
            props.addCategory(data);
          })
          .catch((err) => {
            console.log(err.response);
          });
      }, 2000);
    }
  };

  return (
    <Form onSubmit={submitForm}>
      <Row>
        <Col md={12}>
          <AddImage />
        </Col>
      </Row>
      <Row form className="mt-2">
        <Col md={6}>
          <FormGroup>
            <Label for="exampleEmail">Tên danh mục</Label>
            <Input
              type="text"
              name="category"
              id="categoryName"
              placeholder="Tên danh mục"
              value={nameCategoryObj.value}
              onChange={(event) =>
                setNameCategoryObj({
                  value: event.target.value,
                  isValidInput: true,
                  errorMsg: '',
                })
              }
              onBlur={(event) => handleInputValidation(event)}
            />
            {!nameCategoryObj.isValidInput && (
              <ShowedError message={nameCategoryObj.errorMsg} />
            )}
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label className="p-0" for="exampleSelect">
              Danh mục cha
            </Label>
            <Input
              value={identifyOfCategoryObj.value}
              onChange={(event) =>
                setIdentifyCategoryObj({
                  value: event.target.value,
                  isValidInput: true,
                  errorMsg: '',
                })
              }
              type="select"
              name="select"
              id="exampleSelect"
            >
              <option value="">Chọn danh mục</option>
              {props.categories.map((cate, i) => (
                <option key={cate._id} value={cate._id}>
                  {cate.category_name}
                </option>
              ))}
            </Input>
          </FormGroup>
        </Col>
      </Row>
      <Button color="primary">Tạo</Button>
    </Form>
  );
};

export default FormCategory;
