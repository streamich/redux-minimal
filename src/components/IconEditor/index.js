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

const IconEditor = ({uuid, icon, onNameChange, onAddTag, onRemoveTag, onColorChange, onColorSelect}) => {
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
        <Palette
          activeIndex={icon.colorIndex}
          colors={icon.colors}
          onChange={onColorChange}
          onSelect={onColorSelect}
        />
        <Grid />
      </div>
    </div>
  );
};

IconEditor.propTypes = {
  uuid: PropTypes.string.isRequired,
  icon: PropTypes.shape({
    colorIndex: PropTypes.number.isRequired,
    colors: PropTypes.array.isRequired,
  }),
  onNameChange: PropTypes.func.isRequired,
  onAddTag: PropTypes.func.isRequired,
  onRemoveTag: PropTypes.func.isRequired,
  onColorChange: PropTypes.func.isRequired,
  onColorSelect: PropTypes.func.isRequired,
};

IconEditor.defaultProps = {
  icon: null,
};

export default IconEditor;