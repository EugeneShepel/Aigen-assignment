import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import {
  Accordion, AccordionBody, AccordionHeader, AccordionItem,
} from 'reactstrap';

function SearchList() {
  const [open, setOpen] = useState('1');
  const toggle = (id) => {
    // eslint-disable-next-line no-unused-expressions
    open === id ? setOpen() : setOpen(id);
  };
  const documents = useSelector((state) => state.documents);

  return (
    <div className="col-md-8">
      <Accordion open={open} toggle={toggle}>
        {documents.lenght && documents.map((el) => (
          <AccordionItem key={el.id}>
            <AccordionHeader targetId={el.id.toString()}>
              {el.title}
            </AccordionHeader>
            <AccordionBody accordionId={el.id.toString()}>
              {el.body}
            </AccordionBody>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

export default SearchList;
