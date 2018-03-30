import React from 'react';
import PropTypes from 'prop-types';
import {jsx} from '../../../nano';

const IconPanel = jsx('div', {
  pad: '24px',
  bdb: '1px solid #eee',
  col: '#111',
  cur: 'pointer',
  trs: 'background .2s, color .2s',
  '&:hover': {
    col: '#fff',
    bg: '#07f',
  }
});

const IconListItem = ({uuid, name, tags}) => {
  return <IconPanel className="fadeIn">{name}</IconPanel>;
};

IconListItem.propTypes = {
  uuid: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tags: PropTypes.object.isRequired,
};

export default IconListItem;
