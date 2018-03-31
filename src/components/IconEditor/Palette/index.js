import React from 'react';
import {ChromePicker} from 'react-color';
import {sheet} from '../../../nano';
import Picker from './Picker';

const styles = sheet({
  palette: {
    pad: '0 0 24px',
    z: 2,
    pos: 'relative',
  },
  row: {
    d: 'flex',
  }
});

const Palette = () => {
  const list = [];

  return (
    <div className={styles.palette}>
      {list}
      <Picker />  
    </div>
  );
};

export default Palette;
