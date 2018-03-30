import React from 'react';
import PropTypes from 'prop-types';
import {sheet} from '../../../../../nano';
import {Value} from 'libreact/lib/Value';

const styles = sheet({
  form: {
    d: 'inline-block',
    maxW: '200px',
    mart: '8px',
    h: '36px',
  },
  input: {
    h: '36px',
    bd: 0,
    out: 0,
    fz: '13px',
    fw: 300,
    pad: '2px',
    col: '#555',
    '&:focus': {
      col: '#000',
    }
  },
});

const TagInput = ({onSubmit}) => {
  return (
    <Value>{({value, set}) =>
      <form className={styles.form} onSubmit={(event) => {
        event.preventDefault();
        onSubmit(value);
        set('');
      }}>
        <input
          className={styles.input} 
          placeholder={'Add tag\u2026'} 
          value={value} 
          onChange={(event) => set(event.target.value)}
          onBlur={() => {
            onSubmit(value);
            set('');
          }}
        />
      </form>
    }</Value>
  );
};

TagInput.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default TagInput;
