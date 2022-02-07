import React from 'react';
import { Value } from '../../ui';
import { parseValueIntoMonetaryValueOfGivenCurrency } from '../../../utils';

const AccountBalance = props => {
  const { totalBenefit, totalCost } = props;

  return (
    <div className="fhir-datatype__AccountBalance">
      <Value label="Total cost" data-testid="totalCost" secondary>
        {parseValueIntoMonetaryValueOfGivenCurrency(
          totalCost.value,
          totalCost.code,
        )}
      </Value>
      <Value label="Coverd by benefit" data-testid="totalBenefit" secondary>
        {parseValueIntoMonetaryValueOfGivenCurrency(
          totalBenefit.value * -1,
          totalBenefit.code,
        )}
      </Value>
      <div className="" />
      <Value label="Patient Owed" secondary>
        {parseValueIntoMonetaryValueOfGivenCurrency(
          totalCost.value - totalBenefit.value,
          totalBenefit.code,
        )}
      </Value>
    </div>
  );
};

export default AccountBalance;
