import React from 'react';
import { parseValueIntoMonetaryValueOfGivenCurrency } from '../../../utils';

const PriceLabel = ({ ...props }) => {
  const { totalCost } = props;

  return (
    <h3 className="" data-testid="headerPrice">
      {parseValueIntoMonetaryValueOfGivenCurrency(
        totalCost.value,
        totalCost.code,
      )}
    </h3>
  );
};

export default PriceLabel;
