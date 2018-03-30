import React from 'react';
import PropTypes from 'prop-types';
import {sheet} from '../../../../../nano';
import {Value} from 'libreact/lib/Value';

const styles = sheet({
  form: {
    d: 'inline-block',
    maxW: '200px',
    pad: '0 0 0 10px',
  },
  input: {
    bd: 0,
    out: 0,
    fz: '12px',
    fw: 300,
    pad: '2px',
    '&:focus': {
      fw: 'bold',
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
        />
      </form>
    }</Value>
  );
};

TagInput.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default TagInput;
