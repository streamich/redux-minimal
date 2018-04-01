import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import {rule} from '../../nano';
import {T} from '../../util';

const className = rule({
  mar: '24px',
});

class OpenFile extends Component {
  input = null;

  ref = (el) => {
    this.input = el;
  };

  onLoadClick = () => {
    setTimeout(() => {
      if (this.input) {
        this.input.click();
      }
    }, 150);
  }

  onFile = (event) => {
    const files = event.target.files;

    for (const file of files)
      this.props.onFile(file);
  };

  render () {
    const {t = T} = this.props;

    return (
      <div className={className} onClick={this.onImportClick}>
        <Button block onClick={this.onLoadClick}>{t('Load file')}</Button>
        <input
          style={{position: 'absolute', left: -9999, top: -9999, opacity: 0}}
          onChange={this.onFile}
          type="file"
          ref={this.ref}
        />
      </div>
    );
  }
}

OpenFile.propTypes = {
  onFile: PropTypes.func.isRequired,
  t: PropTypes.func,
};

export default OpenFile;
