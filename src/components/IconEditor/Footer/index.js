import React from 'react';
import PropTypes from 'prop-types';
import {sheet} from '../../../nano';
import SvgDownload from './SvgDownload';
import exportImage from '../../../api/exportImage';

const styles = sheet({
  footer: {
    d: 'flex',
    mar: '-24px 0',
  },
  download: {
    pad: '24px 0',
    w: '50%',
    ta: 'center',
    op: .6,
    cur: 'pointer',
    svg: {
      d: 'inline-block',
    },
    '&:hover': {
      op: 1
    }
  },
  delete: {
    pad: '24px 0',
    w: '50%',
    ta: 'center',
    ff: 'Ubuntu,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Cantarell,"Open Sans","Helvetica Neue",sans-serif',
    fz: '14px',
    col: '#999',
    textTransform: 'uppercase',
    cur: 'pointer',
    '&:hover': {
      col: 'red',
    }
  }
});

const Footer = ({icon, onDelete}) => {
  return (
    <div className={styles.footer}>
        <div className={styles.download} onClick={() => exportImage(icon)}>
          <SvgDownload />
        </div>
        <div className={styles.delete} onClick={onDelete}>
          Delete
        </div>
    </div>
  );
};

Footer.propTypes = {
  icon: PropTypes.shape({
    colorIndex: PropTypes.number.isRequired,
    colors: PropTypes.array.isRequired,
    pixels: PropTypes.object.isRequired,
  }),
  onDelete: PropTypes.func.isRequired,
};

export default Footer;
