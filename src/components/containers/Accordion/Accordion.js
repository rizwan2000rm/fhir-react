import React, { useState } from 'react';
import './Accordion.scss';

const Accordion = props => {
  const { headerContent, bodyContent } = props;

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(prev => !prev);
  };

  return (
    <div className="accordion">
      <div className="accordion__header" onClick={handleClick}>
        {headerContent}
      </div>
      <div className={`accordion__data ${open ? 'open' : 'close'}`}>
        <div className="accordion__body">{bodyContent}</div>
      </div>
    </div>
  );
};

export default Accordion;
