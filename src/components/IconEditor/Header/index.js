import React from 'react';
import PropTypes from 'prop-types';
import Input from '../../Input';

const Header = ({icon, onNameChange}) => {
  return (
    <div>
      <div>
        <Input value={icon.name} onChange={onNameChange} />
      </div>
    </div>
  );
};

Header.propTypes = {
  icon: PropTypes.object.isRequired,
  onNameChange: PropTypes.func.isRequired,
};

export default Header;
