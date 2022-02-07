import React from 'react';

const Accordion = props => {
  const { headerContent, bodyContent } = props;

  return (
    <div>
      <div>{headerContent}</div>
      {bodyContent}
    </div>
  );
};

export default Accordion;
