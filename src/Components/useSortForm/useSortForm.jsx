import React, { useState } from 'react';
import {
  Col, Form, FormGroup, Input, Label, Row,
} from 'reactstrap';

function useSortForm() {
  const [sort, setSort] = useState({ sortType: 'title', sortBy: 'asc' });
  const inputHandler = (e) => {
    setSort((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return {
    sort,
    setSort,
    SortForm: (
      <Form>
        <Row>
          <Label for="sort-type">
            Сортировка
          </Label>
          <Col md={6}>
            <FormGroup>
              <Input
                onChange={inputHandler}
                name="sortType"
                value={sort.sortType}
                type="select"
              >
                <option value="title">
                  По названию
                </option>
                <option value="date">
                  По дате
                </option>
              </Input>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Input
                onChange={inputHandler}
                name="sortBy"
                value={sort.sortBy}
                type="select"
              >
                <option value="asc">
                  По возрастанию
                </option>
                <option value="desc">
                  По убыванию
                </option>
              </Input>
            </FormGroup>
          </Col>
        </Row>
      </Form>
    ),
  };
}

export default useSortForm;
