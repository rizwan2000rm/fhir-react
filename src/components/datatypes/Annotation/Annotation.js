import PropTypes from 'prop-types';
import React from 'react';

const Annotation = props => {
  const { fhirData } = props;
  if (!Array.isArray(fhirData)) {
    return null;
  }
  return (
    <ul className="fhir-datatype__Annotation">
      {fhirData.map((item, i) => (
        <li className="fhir-datatype__Annotation__item" key={`item-${i}`}>
          {item.text}
        </li>
      ))}
    </ul>
  );
};

Annotation.propTypes = {
  fhirData: PropTypes.arrayOf(
    PropTypes.shape({ text: PropTypes.string.isRequired }),
  ),
};

export default Annotation;
