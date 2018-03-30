import React from 'react';
import PropTypes from 'prop-types';
import IconListItem from './IconListItem';

const IconList = ({icons}) => {
  return (
    <div>
      {Object.values(icons).map((icon, index) => <IconListItem {...icon} key={index} />)}
    </div>
  );
};

IconList.propTypes = {
  icons: PropTypes.object.isRequired,
};

export default IconList;
