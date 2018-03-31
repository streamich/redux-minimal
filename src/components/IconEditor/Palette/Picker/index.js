import React from 'react';
import {Toggle} from 'libreact/lib/Toggle';
import {OutsideClick} from 'libreact/lib/OutsideClick';
import {ChromePicker} from 'react-color'
import {sheet} from '../../../../nano';

const styles = sheet({
  picker: {
    pos: 'relative',
  },
  toggle: {
    w: '50px',
    h: '50px',
    bd: '1px solid #eee',
    textTransform: 'uppercase',
    fw: 300,
    ta: 'center',
    lh: '50px',
    fz: '11px',
    letterSpacing: '2px',
    col: '#888',
    boxSizing: 'border-box',
    cur: 'pointer',
    '&:hover': {
      col: '#555',
      bd: '1px solid #ddd',
    },
  },
  select: {
    pos: 'absolute',
    top: '40px',
    left: '10px',
  },
});

const Picker = () => {
  return (
    <Toggle>{({on, toggle, set}) =>
      <OutsideClick onClick={() => set(false)}>
        <div className={styles.picker}>
          <div className={styles.toggle} onClick={toggle}>
            Pick
          </div>
          {on &&
            <div className={styles.select}>
              <ChromePicker />
            </div>
          }
        </div>
      </OutsideClick>
    }</Toggle>
  );
};

export default Picker;
