import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Palette from './Palette';
import Grid from './Grid';
import {sheet} from '../../nano';

const styles = sheet({
  editor: {
    w: '100%',
    maxW: '600px',
    mar: 'auto',
  },
  card: {
    bdrad: '1px',
    boxShadow: '0 1px 3px rgba(0, 0, 0, .1), 0 0 2px rgba(0, 0, 0, .1)',
    pad: '24px',
    mar: '8px 0 0',
  }
}, 'IconEditor');

const IconEditor = ({uuid, icon, onNameChange, onAddTag, onRemoveTag, onColorChange}) => {
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
      <div className={styles.card}>
        <Palette colors={icon.colors} onChange={onColorChange} />
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