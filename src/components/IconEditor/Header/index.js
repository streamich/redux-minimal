import React from 'react';
import PropTypes from 'prop-types';
import Input from '../../Input';
import TagList from './TagList';
import {sheet} from '../../../nano';

const styles = sheet({
  header: {
    mar: '8px 0 0',
  }
});

const Header = ({icon, onNameChange, onAddTag, onRemoveTag}) => {
  return (
    <div className={styles.header}>
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
