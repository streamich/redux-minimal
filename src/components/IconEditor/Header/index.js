import React from 'react';
import PropTypes from 'prop-types';
import Input from '../../Input';

const Header = ({icon}) => {
  return (
    <div>
      <div>
        <Input value={icon.name} onChange={() => {}} />
      </div>
    </div>
  );
};

Header.propTypes = {
  icon: PropTypes.object.isRequired,
};

export default Header;
