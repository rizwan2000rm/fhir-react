import React from 'react';
import { render } from '@testing-library/react';

import { fhirVersions } from '../../../index';

import List from './List';

import example1Dstu2 from '../../../fixtures/dstu2/resources/list/example1.json';
import example2R4 from '../../../fixtures/r4/resources/list/example2.json';

describe('should render List component properly', () => {
  it('should render with DSTU2 source data', () => {
    const defaultProps = {
      fhirResource: example1Dstu2,
      fhirVersion: fhirVersions.DSTU2,
    };

    const { container, getByTestId, queryByTestId } = render(
      <List {...defaultProps} />,
    );
    expect(container).not.toBeNull();

    expect(getByTestId('title').textContent).toContain('List example');
    expect(getByTestId('status').textContent).toContain('current');
    expect(getByTestId('identifier').textContent).toContain('23974652');
    expect(getByTestId('mode').textContent).toContain('changes');
    expect(getByTestId('subject').textContent).toContain('Patient/example');
    expect(getByTestId('date').textContent).toContain('11/25/2012');
    expect(queryByTestId('code')).toBeNull();
    expect(getByTestId('source').textContent).toContain('Patient/example');
    expect(getByTestId('entries')).not.toBeNull();
    expect(queryByTestId('usdfExtensions')).toBeNull();
  });

  it('should render R4 without daVinci PDex profile', () => {
    const defaultProps = {
      fhirResource: example2R4,
      fhirVersion: fhirVersions.R4,
    };

    const { container, getByTestId, queryByTestId } = render(
      <List {...defaultProps} />,
    );
    expect(container).not.toBeNull();

    expect(getByTestId('identifier').textContent).toContain('test');
    expect(getByTestId('mode').textContent).toContain('snapshot');
    expect(getByTestId('date').textContent).toContain('6/12/20');
    expect(getByTestId('entries')).not.toBeNull();
    expect(queryByTestId('usdfExtensions')).toBeNull();
  });

  it('should render R4 with daVinci PDex profile', () => {
    const defaultProps = {
      fhirResource: example2R4,
      fhirVersion: fhirVersions.R4,
      withDaVinciPDex: true,
    };

    const { container, getByTestId, queryByTestId } = render(
      <List {...defaultProps} />,
    );
    expect(container).not.toBeNull();

    expect(getByTestId('identifier').textContent).toContain('test');
    expect(getByTestId('mode').textContent).toContain('snapshot');
    expect(getByTestId('date').textContent).toContain('6/12/2015');
    expect(getByTestId('entries')).not.toBeNull();

    expect(queryByTestId('usdfExtensions')).not.toBeNull();
    expect(getByTestId('drugTierDefinition')).not.toBeNull();
    expect(getByTestId('drugTierID').textContent).toContain('Generic:');
    expect(getByTestId('mailOrder').textContent).toContain('yes');
    expect(getByTestId('costSharing')).not.toBeNull();
    expect(getByTestId('pharmacyType').textContent).toContain(
      '(1-month-in-retail)',
    );
    expect(getByTestId('copayAmount').textContent).toContain('0');

    expect(getByTestId('usdfNetwork').textContent).toContain('PREFERRED');
    expect(getByTestId('usdfSummaryURL').textContent).toContain(
      'http://url/to/health/plan/information',
    );
    expect(getByTestId('usdfFormularyURL').textContent).toContain(
      'http://url/to/formulary/information',
    );
    expect(getByTestId('usdfEmailPlanContact').textContent).toContain(
      'Patrick.Breen@carefirst.com',
    );
    expect(getByTestId('usdfMarketingURL').textContent).toContain(
      'https://content.carefirst.com/sbc/D,$0/ D,$0/ D,$0/ D,$0/ D,$0B+',
    );
    expect(getByTestId('usdfPlanIDType').textContent).toContain('HIOS-PLAN-ID');
  });
});
