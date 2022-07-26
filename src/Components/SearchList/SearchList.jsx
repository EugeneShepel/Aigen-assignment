import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  Accordion, AccordionBody, AccordionHeader, AccordionItem,
} from 'reactstrap';
import { sortDocuments } from '../../Redux/actions/documentsAction';
import useSortForm from '../useSortForm/useSortForm';

function SearchList() {
  const [open, setOpen] = useState('1');
  const { sort, SortForm } = useSortForm();
  let documents = useSelector((state) => state.documents);
  const dispatch = useDispatch();

  function sortHandler() {
    dispatch(sortDocuments(sort.sortBy, sort.sortType));
  }

  const toggle = (id) => {
    open === id ? setOpen() : setOpen(id);
  };

  if (!(documents instanceof Array)) {
    documents = [documents];
  }

  useEffect(() => {
    sortHandler();
  }, [sort]);

  return (
    <div className="col-md-8">
      {SortForm}
      <Accordion open={open} toggle={toggle}>
        {documents.length ? documents.map((el) => (
          <AccordionItem key={el.id}>
            <AccordionHeader targetId={el.id.toString()}>
              {el.id}
              {'. '}
              {el.title}
            </AccordionHeader>
            <AccordionBody accordionId={el.id.toString()}>
              {el.body}
            </AccordionBody>
          </AccordionItem>
        )) : <p>Документ не найден</p>}
      </Accordion>
    </div>
  );
}

export default SearchList;
