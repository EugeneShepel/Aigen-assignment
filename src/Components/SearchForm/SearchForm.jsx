import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Button, Col, Form, FormGroup, Input, Label, Row,
} from 'reactstrap';
import { fetchDocuments } from '../../Redux/actions/documentsAction';

function SearchForm() {
  const initialValue = {
    id: '',
    title: '',
    date: '',
  };
  const [formData, setFormData] = useState(initialValue);
  const dispatch = useDispatch();

  const inputHandler = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const formHandler = (e) => {
    e.preventDefault();
    formData.id ? dispatch(fetchDocuments(formData.id))
      : dispatch(fetchDocuments());
    setFormData(initialValue);
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
        <Button color="primary">
          Искать
        </Button>
      </Form>
    </div>
  );
}

export default SearchForm;
