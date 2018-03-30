import React from 'react';
import PropTypes from 'prop-types';
import TagInput from './TagInput';
import {rule} from '../../../../nano';

const className = rule({
  pad: '16px 0',
});

const TagList = ({tags, onAdd, onRemove}) => {
  return (
    <div className={className}>
      tags...
      <TagInput onSubmit={onAdd} />
    </div>
  );
};

TagList.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  onAdd: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default TagList;
