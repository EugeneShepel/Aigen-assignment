import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Button, Col, Form, FormGroup, Input, Label, Row,
} from 'reactstrap';
import { fetchDocuments } from '../../Redux/actions/documentsAction';

function SearchForm() {
  const [formData, setFormData] = useState(
    {
      id: '',
      title: '',
      date: '',
      sortType: '',
      sortBy: '',
    },
  );
  const dispatch = useDispatch();

  const inputHandler = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const formHandler = (e) => {
    e.preventDefault();
    // formData.id ? dispatch(fetchDocuments(formData.id))
    //   : dispatch(fetchDocuments());
    if (formData.id) {
      dispatch(fetchDocuments(formData.id));
    } else {
      dispatch(fetchDocuments());
    }
  };

  return (
    <div className="col-md-4">
      <Form onSubmit={formHandler}>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="id">
                ID документа
              </Label>
              <Input
                onChange={inputHandler}
                name="id"
                value={formData.id}
                placeholder="Введите ID"
                type="text"
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="date">
                Создан
              </Label>
              <Input
                onChange={inputHandler}
                name="date"
                value={formData.date}
                type="date"
              />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Label for="title">
            Название документа
          </Label>
          <Input
            onChange={inputHandler}
            name="title"
            value={formData.title}
            placeholder="Введите название"
            type="text"
          />
        </FormGroup>
        <Row>
          <Label for="sort-type">
            Сортировка
          </Label>
          <Col md={6}>
            <FormGroup>
              <Input
                onChange={inputHandler}
                name="sortType"
                value={formData.sortType}
                type="select"
              >
                <option>
                  По дате
                </option>
                <option>
                  По названию
                </option>
              </Input>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Input
                onChange={inputHandler}
                name="sortBy"
                value={formData.sortBy}
                type="select"
              >
                <option>
                  По убыванию
                </option>
                <option>
                  По возрастанию
                </option>
              </Input>
            </FormGroup>
          </Col>
        </Row>
        <Button color="primary">
          Искать
        </Button>
      </Form>
    </div>
  );
}

export default SearchForm;
