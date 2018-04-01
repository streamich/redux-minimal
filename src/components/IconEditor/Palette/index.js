import React from 'react';
import PropTypes from 'prop-types';
import {ChromePicker} from 'react-color';
import {sheet} from '../../../nano';
import Picker from './Picker';

const MAX_COLORS = 10;

const styles = sheet({
  palette: {
    d: 'flex',
    pad: '0 0 24px',
    z: 2,
    pos: 'relative',
    flexWrap: 'wrap',
  },
  picker: {

  }
});

const Palette = ({activeIndex, colors, onChange, onSelect}) => {
  const list = [];

  for (let index = 0; index < MAX_COLORS; index++) {
    list.push(
      <Picker
        key={index}
        active={activeIndex === index}
        color={colors[index] || ''}
        onChange={(color) => onChange(index, color)}
        onSelect={() => onSelect(index)}
      />
    );
  }

  return (
    <div className={styles.palette}>
      {list}
    </div>
  );
};

Palette.propTypes = {
  activeIndex: PropTypes.number.isRequired,
  colors: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default Palette;
