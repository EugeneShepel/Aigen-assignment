import React from 'react';
import { Row } from 'reactstrap';
import SearchForm from '../SearchForm/SearchForm';
import SearchList from '../SearchList/SearchList';

function SearchDocumentPage() {
  return (
    <>
      <h1 className="mb-4">Поиск документов</h1>
      <Row>
        <SearchForm />
        <SearchList />
      </Row>
    </>
  );
}

export default SearchDocumentPage;
