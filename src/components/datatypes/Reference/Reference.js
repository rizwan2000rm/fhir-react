import React from 'react';
import _get from 'lodash/get';

const Reference = props => {
  const { fhirData } = props;
  const display = _get(fhirData, 'display');
  const reference = _get(fhirData, 'reference', '');
  return (
    <div
      className="fhir-datatype__Reference"
      data-testid={props['data-testid']}
    >
      {display && <span className="">{display}</span>}
      <span>{reference}</span>
    </div>
  );
};

export default Reference;
