import React from 'react';
import PropTypes from 'prop-types';
import IconListItem from './IconListItem';
import SearchBox from './SearchBox';

const IconList = ({activeUuid, icons, onSelect}) => {
  return (
    <div>
      <SearchBox onChange={() => {}} />
      {
        Object.values(icons).map((icon, index) =>
          <IconListItem {...icon} active={activeUuid === icon.uuid} onClick={() => onSelect(icon.uuid)} key={index} />
        )
      }
    </div>
  );
};

IconList.propTypes = {
  icons: PropTypes.object.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default IconList;
