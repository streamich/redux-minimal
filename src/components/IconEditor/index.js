import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Colors from './Colors';
import Grid from './Grid';
import {sheet} from '../../nano';

const styles = sheet({
  editor: {
    w: '100%',
  }
}, 'IconEditor');

const IconEditor = ({uuid, icon, onNameChange, onAddTag, onRemoveTag}) => {
  if (!icon) {
    return null;
  }

  return (
    <div className={'fadeInScale' + styles.editor} key={uuid}>
      <Header
        icon={icon}
        onNameChange={onNameChange} 
        onAddTag={onAddTag}
        onRemoveTag={onRemoveTag}
      />
      <div>
        <Colors />
        <Grid />
      </div>
    </div>
  );
};

IconEditor.propTypes = {
  uuid: PropTypes.string.isRequired,
  icon: PropTypes.object,
};

IconEditor.defaultProps = {
  icon: null,
};

export default IconEditor;