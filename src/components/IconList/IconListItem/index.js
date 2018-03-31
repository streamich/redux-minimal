import React from 'react';
import PropTypes from 'prop-types';
import {Ripple} from 'libreact/lib/Ripple';
import {jsx} from '../../../nano';

const IconPanel = jsx('div', {
  fz: '16px',
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

const IconListItem = ({active, uuid, name, tags, onClick}) =>
  <Ripple color="rgba(255, 255, 255, .25)" ms={400}>
    <div>
      <IconPanel
        className="fadeIn"
        css={{
          bdr: active ? '3px solid #07f' : 0,
          fw: active ? 'bold' : 'normal',
        }}
        onClick={onClick}
      >
          {name || '...'}
      </IconPanel>
    </div>
  </Ripple>;

IconListItem.propTypes = {
  active: PropTypes.bool.isRequired,
  uuid: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tags: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default IconListItem;
