import { Root, Title } from '../../ui';
import HeaderIcon from '../../datatypes/HeaderIcon';
import React from 'react';
import PropTypes from 'prop-types';
import { isUrl } from '../../../utils/isUrl';

const ResourceCategory = props => {
  const { title, itemsCount, fhirIcons } = props;

  const parseNumber = value =>
    /^[1-9]+\d*$/.test(value) ? Number.parseInt(value) : null;

  const getItemsCountLabel = () =>
    `${parsedItemsCount} ${parsedItemsCount === 1 ? 'item' : 'items'}`;

  const headerIcon = isUrl(fhirIcons)
    ? fhirIcons
    : fhirIcons && fhirIcons['ResourceCategory'];

  const parsedItemsCount = parseNumber(itemsCount);

  return (
    <Root name="ResourceCategory">
      <button
        type="button"
        // className="btn d-flex align-items-center justify-content-between w-100 py-4 px-4 bg-white"
      >
        <div className="">
          <HeaderIcon headerIcon={headerIcon} />
          <Title data-testid="title">{title}</Title>
        </div>
        <div className="">
          {parsedItemsCount > 0 && (
            <div className="" data-testid="itemsCount">
              <small className="">{getItemsCountLabel()}</small>
            </div>
          )}
          <img
            src={require('../../../assets/common/chevron-right.svg')}
            alt="chevron"
            style={{ height: 28, width: 28 }}
          />
        </div>
      </button>
    </Root>
  );
};

ResourceCategory.propTypes = {
  title: PropTypes.string.isRequired,
  itemsCount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default ResourceCategory;
