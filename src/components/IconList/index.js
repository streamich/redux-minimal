import React from 'react';
import PropTypes from 'prop-types';
import {Value} from 'libreact/lib/Value';
import IconListItem from './IconListItem';
import SearchBox from './SearchBox';

const createFilter = (value) => (icon) => {
  if (!value) return true;

  value = value.toLowerCase();

  if (icon.name.toLowerCase().indexOf(value) > -1) {
    return true;
  }

  for (const tag in icon.tags) {
    if (tag.toLowerCase().indexOf(value) > -1) {
      return true;
    }
  }

  return false;
};

const IconList = ({activeUuid, icons, onSelect}) => {
  return (
    <Value init="">{({value, set}) =>
      <div>
        <SearchBox value={value} onChange={set} onCancel={() => set('')} />
        {
          Object.values(icons).filter(createFilter(value)).map((icon, index) =>
            <IconListItem {...icon} active={activeUuid === icon.uuid} onClick={() => onSelect(icon.uuid)} key={index} />
          )
        }
      </div>
    }</Value>
  );
};

IconList.propTypes = {
  icons: PropTypes.object.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default IconList;
