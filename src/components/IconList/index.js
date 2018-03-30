import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({name, tags, pixels}) => {
  return <div>icon...</div>;
};

const IconList = ({icons}) => {
  return (
    <div>
      {Object.values(icons).map((icon, index) => <Icon {...icon} key={index} />)}
    </div>
  );
};

IconList.propTypes = {
  icons: PropTypes.object.isRequired,
};

export default IconList;
