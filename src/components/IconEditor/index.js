import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Colors from './Colors';
import Grid from './Grid';
import {sheet} from '../../nano';

const styles = sheet({
  editor: {

  }
}, 'IconEditor');

const IconEditor = ({uuid, icon}) => {
  if (!icon) {
    return null;
  }

  return (
    <div className={styles.editor}>
      <Header icon={icon} />
      <div>
        <Colors />
        <Grid />
      </div>
    </div>
  );
};

IconEditor.propTypes = {
  uuid: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired,
};

export default IconEditor;