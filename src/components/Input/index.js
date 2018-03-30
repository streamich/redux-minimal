import React from 'react';
import PropTypes from 'prop-types';
import {rule} from '../../nano';

const className = rule({
  bd: 0,
  bdb: '1px solid #ddd',
  bg: '#fff',
  out: 0,
  h: '40px',
  minW: '200px',
  trs: 'border .2s',
  '&:focus': {
    bdb: '1px solid #07f',
  }
});

const Input = ({value, onChange}) =>
  <input
    className={className}
    value={value}
    onChange={(event) => onChange(event.target.value)}
  />;

Input.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;
