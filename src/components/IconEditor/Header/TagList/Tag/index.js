import React from 'react';
import {jsx} from '../../../../../nano';

const Tag = jsx('span', {
  d: 'inline-block',
  bg: '#ddd',
  col: '#555',
  pad: '0 16px',
  h: '36px',
  lh: '36px',
  mar: '8px 8px 0 0',
  bdrad: '3px',
  fz: '12px',
  cur: 'pointer',
  '&:hover': {
    bg: '#ccc',
  }
});

export default Tag;
