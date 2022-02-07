import React from 'react';

import { Value } from '../../ui/index';
import { ValueSection } from '../../ui/index';
import ExplanationOfBenefitGraph from '../ExplanationOfBenefitGraph/ExplanationOfBenefitGraph';
import { parseValueIntoMonetaryValueOfGivenCurrency } from '../../../utils';

const TotalGraph = ({ fhirData }) => {
  const { totalCost, totalBenefit } = fhirData;

  // currently supported format: STU3
  const getChartData = () => {
    if (totalCost && totalBenefit) {
      return [
        {
          id: 'youPaid',
          label: 'You paid',
          value: totalCost.value - totalBenefit.value,
          color: '#0D6EFD',
        },
        {
          id: 'planDiscount',
          label: 'Plan discount',
          value: totalBenefit.value,
          color: '#FFC107',
        },
      ];
    }
  };

  return (
    <ValueSection label="Total" data-testid="total" marginTop>
      <div className="">
        <div className="graph-width-sm">
          <ExplanationOfBenefitGraph
            pieChartProperties={{ isInteractive: false }}
            data={getChartData({ totalCost, totalBenefit })}
            margin={{ top: 20, bottom: 20 }}
          />
        </div>
        <div className="">
          <div className="">
            {getChartData({ totalCost, totalBenefit }).map((item, index) => (
              <div
                key={`graph-legend-item-${index}`}
                style={{ minWidth: 160 }}
                className=""
              >
                <span
                  className=""
                  style={{ width: 4, background: item.color }}
                />
                <Value dirColumn label={item.label} data-testid={item.id}>
                  {parseValueIntoMonetaryValueOfGivenCurrency(
                    item.value,
                    totalBenefit.code,
                  )}
                </Value>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ValueSection>
  );
};

export default TotalGraph;
