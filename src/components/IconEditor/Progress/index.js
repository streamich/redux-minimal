import React from 'react';
import PropTypes from 'prop-types';
import {sheet} from '../../../nano';

const styles = sheet({
  progress: {
    pos: 'absolute',
    top: 0,
    left: 0,
    w: '100%',
    h: '2px',
    bg: 'rgba(0, 0, 0, .15)',
    trs: 'opacity .5s',
  },
  bar: {
    h: '2px',
    bg: '#07f',
    trs: 'width .1s',
  },
});

const Progress = ({value}) => {
  return (
    <div className={styles.progress} style={{opacity: value < 1 ? 1 : 0}}>
      <div className={styles.bar} style={{width: `${100 * value}%`}} />
    </div>
  );
};

Progress.propTypes = {
  value: PropTypes.number.isRequired,
};

export default Progress;
