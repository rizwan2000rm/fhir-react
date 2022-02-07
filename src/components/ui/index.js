import React from 'react';

import { getBadgeColor } from '../../utils/getBadgeColor';
import HeaderIcon from '../datatypes/HeaderIcon';

export const Header = ({
  resourceName,
  isAccordionOpenable,
  icon,
  titleTestID,
  title,
  prefixBadge,
  badges,
  additionalBadge,
  additionalContent,
  rightAdditionalContent,
  children,
}) => {
  const rightItemsClass = '';

  return (
    <>
      {// This condition was left due to fact, that to much changes in Header will generate many errors in tests. This condition will be removed after all changes have been made.
      children || (
        <div className={`fhir-ui__${resourceName}-Header`}>
          <div
            className={`fhir-ui__${resourceName}-Header__title-data ${
              isAccordionOpenable ? 'header__title-row' : ''
            }`}
          >
            <div className="">
              <div className={`fhir-ui__${resourceName}-Header__icon`}>
                <HeaderIcon headerIcon={icon} resourceName={resourceName} />
              </div>
              <div className={`fhir-ui__${resourceName}-Header__title`}>
                <Title data-testid={titleTestID || 'title'}>
                  {title || ''}
                </Title>
              </div>
            </div>

            <div
              className={`fhir-ui__${resourceName}-Header__badges ${rightItemsClass}`}
            >
              {prefixBadge && <div className="">{prefixBadge}</div>}
              <div className="">
                {badges}
                {additionalBadge && <div className="">{additionalBadge}</div>}
              </div>
            </div>
          </div>
          <div
            className={`fhir-ui__${resourceName}-Header__additional-content ${
              additionalContent ? '' : ''
            }`}
          >
            {additionalContent}
            <div
              className={`fhir-ui__${resourceName}-Header__rightAdditionalContent ${rightItemsClass}`}
            >
              {rightAdditionalContent}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export const Title = props => (
  <h4 className="fhir-ui__Title" data-testid={props['data-testid'] || 'title'}>
    {props.children}
  </h4>
);

export const Badge = props => {
  return (
    <small
      className={`fhir-ui__Badge ${getBadgeColor(props)}`}
      data-testid={props['data-testid']}
    >
      {props.children}
    </small>
  );
};

export const BadgeSecondary = props => (
  <small
    className={`fhir-ui__BadgeSecondary ${getBadgeColor(props)}`}
    data-testid={props['data-testid']}
  >
    {props.children}
  </small>
);

export const ValueUnit = props => (
  <div className="fhir-ui__ValueUnitRoot">
    <span data-testid="valueQuantity" className="fhir-ui__ValueUnitQty">
      {props.valueQty}
    </span>
    <span data-testid="valueQuantityUnit" className="fhir-ui__ValueUnit">
      {props.valueUnit}
    </span>
  </div>
);

export const Body = ({ tableData = [], reverseContent, children }) => (
  <div className="fhir-ui__Body">
    {reverseContent ? children : null}
    <div className="">
      {tableData.map(
        (value, index) =>
          value.status && (
            <div className="" key={`table-data-item-${index}`}>
              <div className="dataTable__value-label">
                <Label>{value.label}</Label>
              </div>
              <Data data-testid={value.testId}>{value.data}</Data>
            </div>
          ),
      )}
    </div>
    {!reverseContent ? children : null}
  </div>
);

export const Value = props => (
  <div className={`fhir-ui__Value ${props.dirColumn ? '' : ''}`}>
    <Label>{props.label}</Label>
    <Data data-testid={props['data-testid']}>{props.children}</Data>
  </div>
);

export const Label = props => (
  <div className="fhir-ui__Label">{props.children}</div>
);

export const Data = props => (
  <div className="fhir-ui__Data" data-testid={props['data-testid']}>
    {props.children}
  </div>
);

export const Root = props => (
  <div className={`fhir-resource__${props.name}`}>{props.children}</div>
);

export const Table = props => (
  <div className="">
    <table className={`${props.className || ''}`}>{props.children}</table>
  </div>
);

export const TableHeader = props => {
  const { expand, noWordWrap } = props;
  return (
    <th className={`${expand ? '' : ''} ${noWordWrap ? '' : ''}`}>
      {props.children}
    </th>
  );
};

export const TableRow = props => <tr>{props.children}</tr>;

export const TableCell = props => (
  <td className="" data-testid={props['data-testid']}>
    {props.children}
  </td>
);

export const ValueSection = props => (
  <div
    className={`fhir-ui__ValueSection ${props.marginTop ? '' : ''} ${
      props.marginBottom ? 'mb-40' : ''
    } ${props.className || ''}`}
    data-testid={props['data-testid']}
  >
    <label className="fhir-ui__ValueSection-label">{props.label}</label>
    <div className="fhir-ui__ValueSection-body">{props.children}</div>
  </div>
);

export const MissingValue = () => (
  <span className="fhir-ui__MissingValue">-</span>
);

export const NotEnoughData = props => (
  <div data-testid={props['data-testid']} className="fhir-ui__NotEnoughData">
    No additional data
  </div>
);

export const Chevron = props => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20 8L12.3769 15.8393C12.277 15.9422 12.1414 16 12 16C11.8586 16 11.723 15.9422 11.6231 15.8393L4 8"
      stroke={props.strokeColor}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
