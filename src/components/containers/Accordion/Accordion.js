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
        <div className="accordion__header__content">{headerContent}</div>
        {open ? (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 12H4"
              stroke="#AAAAAA"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        ) : (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 12H4M12 20V12V20ZM12 12V4V12ZM12 12H20H12Z"
              stroke="#AAAAAA"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        )}
      </div>
      <div
        className={`accordion__data ${
          open ? 'accordian__open' : 'accordian__close'
        }`}
      >
        <div className="accordion__body">{bodyContent}</div>
      </div>
    </div>
  );
};

export default Accordion;
