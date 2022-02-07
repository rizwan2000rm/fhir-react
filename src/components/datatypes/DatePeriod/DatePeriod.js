import Date from '../Date';
import React from 'react';

const DatePeriod = props => {
  const {
    periodBeginLabel,
    periodBeginDate,
    periodBeginTestId,
    periodEndLabel,
    periodEndDate,
    periodEndTestId,
  } = props;

  const SingleDateSpan = props => (
    <span className="fhir-datetype__DatePeriod__begin-date">{props.label}</span>
  );

  return (
    <div className="">
      {periodBeginDate && (
        <div className="">
          <SingleDateSpan label={periodBeginLabel} />
          <Date testId={periodBeginTestId} isBlack fhirData={periodBeginDate} />
        </div>
      )}
      {periodEndDate && (
        <div className="">
          <SingleDateSpan label={periodEndLabel} />
          <Date testId={periodEndTestId} isBlack fhirData={periodEndDate} />
        </div>
      )}
    </div>
  );
};

export default DatePeriod;
