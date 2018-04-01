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
  mounted = false;

  componentDidMount () {
    this.mounted = true;
  }

  componentWillUnmount () {
    this.mounted = false;
  }

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

  onInputChange = (event) => {
    const files = event.target.files;

    for (const file of files)
      this.onFile(file);
  };

  onFile (file) {
    const reader = new FileReader();

    reader.onload = (event) => {
      if (!this.mounted) {
        return;
      }

      try {
        const json = JSON.parse(event.target.result);

        if (typeof json !== 'object') {
          throw TypeError('Expected an object.');
        }

        if (typeof json.name !== 'string') {
          throw TypeError('Expected icon to have a name.');
        }

        this.props.onIcon(json);
      } catch (error) {
        alert(error.message);
      }
    };

    reader.readAsText(file);
  };

  render () {
    const {t = T} = this.props;

    return (
      <div className={className} onClick={this.onImportClick}>
        <Button block onClick={this.onLoadClick}>{t('Load file')}</Button>
        <input
          style={{position: 'absolute', left: -9999, top: -9999, opacity: 0}}
          onChange={this.onInputChange}
          type="file"
          ref={this.ref}
        />
      </div>
    );
  }
}

OpenFile.propTypes = {
  onIcon: PropTypes.func.isRequired,
  t: PropTypes.func,
};

export default OpenFile;
