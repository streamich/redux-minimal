import React from 'react';
import PropTypes from 'prop-types';
import {Toggle} from 'libreact/lib/Toggle';
import {OutsideClick} from 'libreact/lib/OutsideClick';
import {ChromePicker} from 'react-color'
import {sheet} from '../../../../nano';

const styles = sheet({
  picker: {
    pos: 'relative',
    mar: '1px',
  },
  toggle: {
    w: '50px',
    h: '50px',
    textTransform: 'uppercase',
    fw: 300,
    ta: 'center',
    lh: '50px',
    fz: '11px',
    letterSpacing: '2px',
    col: '#888',
    boxSizing: 'border-box',
    cur: 'pointer',
    trs: 'background .2s',
    '&:hover': {
      col: '#555',
      opacity: '0.6',
    },
  },
  toggleActive: {
    out: '3px solid #07f',
  },
  select: {
    pos: 'absolute',
    top: '40px',
    left: '10px',
  },
});

const Picker = ({active, color, onChange, onSelect}) => {
  return (
    <Toggle>{({on, toggle, set}) =>
      <OutsideClick onClick={() => set(false)}>
        <div
          className={styles.picker}
          style={{
            zIndex: on ? 3 : (active ? 2 : 1),
            background: color || '#f5f5f5',
          }}
        >
          <div
            className={styles.toggle + (active ? styles.toggleActive : '')}
            onClick={() => {
              onSelect();
              if (!color) toggle();
            }}
            onDoubleClick={() => {
              onSelect();
              toggle();
            }}
          />
          {on &&
            <div className={styles.select}>
              <ChromePicker
                color={color}
                onChange={(color) => onChange(color.hex)}
                onChangeComplete={(color) => onChange(color.hex)}
              />
            </div>
          }
        </div>
      </OutsideClick>
    }</Toggle>
  );
};

Picker.propTypes = {
  active: PropTypes.bool,
  color: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
};

Picker.defaultProps = {
  active: false,
};

export default Picker;
