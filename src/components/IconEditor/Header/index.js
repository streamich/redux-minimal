import React from 'react';
import PropTypes from 'prop-types';
import Input from '../../Input';
import TagList from './TagList';

const Header = ({icon, onNameChange, onAddTag, onRemoveTag}) => {
  return (
    <div>
      <div>
        <Input value={icon.name} onChange={onNameChange} />
      </div>
      <TagList tags={icon.tags} onAdd={onAddTag} onRemove={onRemoveTag} />
    </div>
  );
};

Header.propTypes = {
  icon: PropTypes.object.isRequired,
  onNameChange: PropTypes.func.isRequired,
};

export default Header;
