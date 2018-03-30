import React from 'react';
import Header from './Header';
import Colors from './Colors';
import Grid from './Grid';
import {sheet} from '../../nano';

const styles = sheet({
  editor: {

  }
}, 'IconEditor');

const IconEditor = ({uuid}) => {
  return (
    <div className={styles.editor}>
      <Header />
      <div>
        <Colors />
        <Grid />
      </div>
    </div>
  );
};

export default IconEditor;