import React from 'react';
import PropTypes from 'prop-types';
import Illustration from './Illustration.svg';
import Button from '../../Button';
import {sheet} from '../../../nano';
import {T} from '../../../util';

const styles = sheet({
  welcome: {
    maxW: '300px',
    margin: '64px auto',
  },
  illustration: {
    ta: 'center',
    filter: 'grayscale(100%)',
    svg: {
      maxW: '200px',
    }
  },
  text: {
    fz: '26px',
    lh: '36px',
    fw: 300,
    ta: 'center',
    mar: '24px 0 0',
  },
  btn: {
    mar: '16px 0 0',
  },
});

const Welcome = ({onCreate, t = T}) => {
  return (
    <div className={styles.welcome}>
      <div className={styles.illustration}>
        <Illustration />
      </div>
      <div className={styles.text}>
        {t('Create your first icon')}
      </div>
      <div className={styles.btn}>
        <Button block onClick={onCreate}>{t('Create')}</Button>
      </div>
    </div>
  );
};

Welcome.propTypes = {
  onCreate: PropTypes.func.isRequired,
  t: PropTypes.func,
};

export default Welcome;
