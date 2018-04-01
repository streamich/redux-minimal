import React from 'react';
import PropTypes from 'prop-types';
import {sheet} from '../../../nano';
import SvgSearch from './SvgSearch';
import SvgClose from './SvgClose';
import {T} from '../../../util';

const height = 60;

const cssSvgIcon = (size) => ({
  pos: 'absolute',
  w: `${size}px`,
  h: `${size}px`,
  top: `${(height - size) / 2}px`,
});

const styles = sheet({
  wrapper: {
    pos: 'relative',
    pad: `0 ${24 + 32}px`,
    boxSizing: 'border-box',
    bdb: '1px solid #eee',
    bg: '#fafafa',
  },
  input: {
    w: '100%',
    bd: 0,
    bg: 'transparent',
    h: `${height}px`,
    lh: `${height}px`,
    boxSizing: 'border-box',
    out: 0,
    fz: '14px',
    ff: 'Ubuntu,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Cantarell,"Open Sans","Helvetica Neue",sans-serif',
    fontStyle: 'italic',
    '&:focus': {
      fontStyle: 'normal',
    }
  },
  search: {
    ...cssSvgIcon(24),
    left: '24px',
  },
  close: {
    ...cssSvgIcon(20),
    right: '24px',
    cur: 'pointer',
    op: .6,
    '&:hover': {
      op: 1,
    }
  },
});

const SearchBox = ({value, onChange, onCancel, t = T}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.search}>
        <SvgSearch />
      </div>
      <input
        className={styles.input}
        value={value}
        placeholder={t('Filter')}
        onChange={(event) => onChange(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === 'Escape') onCancel();
        }}
      />
      {value &&
        <div className={styles.close} onClick={onCancel}>
          <SvgClose />
        </div>
      }
    </div>
  );
};

SearchBox.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  t: PropTypes.func,
};

export default SearchBox;
