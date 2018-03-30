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
      {Object.keys(tags).map((tag, index) =>
        <span key={index}>{tag}</span>
      )}
      <TagInput onSubmit={onAdd} />
    </div>
  );
};

TagList.propTypes = {
  tags: PropTypes.object.isRequired,
  onAdd: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default TagList;
