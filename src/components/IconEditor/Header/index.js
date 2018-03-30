import React from 'react';
import PropTypes from 'prop-types';

const Header = ({icon}) => {
  return (
    <div>
      <div>{icon.name}</div>
    </div>
  );
};

Header.propTypes = {
  icon: PropTypes.object.isRequired,
};

export default Header;
