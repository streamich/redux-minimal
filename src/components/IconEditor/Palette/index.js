import React from 'react';
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

const Palette = ({colors, onChange}) => {
  const list = [];

  for (let i = 0; i < MAX_COLORS; i++) {
    list.push(
      <Picker key={i} color={colors[i] || ''} onChange={(color) => onChange(i, color)} />
    );
  }

  return (
    <div className={styles.palette}>
      {list}  
    </div>
  );
};

Palette.propTypes = {

};

export default Palette;
