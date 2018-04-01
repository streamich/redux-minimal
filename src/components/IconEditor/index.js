import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Palette from './Palette';
import Grid from './Grid';
import Footer from './Footer';
import Welcome from './Welcome';
import Progress from './Progress';
import {sheet, jsx} from '../../nano';

const Separator = jsx('div', {
  bg: '#e6e6e6',
  h: '1px',
  mar: '24px -24px',
});

const styles = sheet({
  editor: {
    w: '100%',
    maxW: '600px',
    mar: 'auto',
  },
  card: {
    pos: 'relative',
    bdrad: '1px',
    boxShadow: '0 1px 3px rgba(0, 0, 0, .1), 0 0 2px rgba(0, 0, 0, .1)',
    pad: '24px',
    mar: '8px 0 0',
  }
}, 'IconEditor');

class IconEditor extends Component {
  static propTypes = {
    uuid: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    icon: PropTypes.shape({
      colorIndex: PropTypes.number.isRequired,
      colors: PropTypes.array.isRequired,
      pixels: PropTypes.object.isRequired,
    }),
    historyProgress: PropTypes.number.isRequired,
    onNameChange: PropTypes.func.isRequired,
    onAddTag: PropTypes.func.isRequired,
    onRemoveTag: PropTypes.func.isRequired,
    onColorChange: PropTypes.func.isRequired,
    onColorSelect: PropTypes.func.isRequired,
    onPutColor: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    onCreateIcon: PropTypes.func.isRequired,
    onHistoryNext: PropTypes.func.isRequired,
    onHistoryPrev: PropTypes.func.isRequired,
  };

  static defaultProps = {
    icon: null,
  };

  componentDidMount () {
    document.addEventListener('keydown', this.onKeyDown);
  }

  componentWillUnmount () {
    document.removeEventListener('keydown', this.onKeyDown);
  }

  onKeyDown = (event) => {
    const {key} = event;

    if (key == 'ArrowRight') {
      this.props.onHistoryNext();
    } else if (key === 'ArrowLeft') {
      this.props.onHistoryPrev();
    }
  };

  render () {
    const {uuid, color, icon, historyProgress, onNameChange, onAddTag, onRemoveTag,
      onColorChange, onColorSelect, onPutColor, onDelete, onCreateIcon} = this.props;

    if (!icon) {
      return <Welcome onCreate={onCreateIcon} />;
    }

    return (
      <div className={'fadeInScale' + styles.editor} key={uuid}>
        <div className={styles.card}>
          <Progress value={historyProgress} />
          <Header
            icon={icon}
            onNameChange={onNameChange}
            onAddTag={onAddTag}
            onRemoveTag={onRemoveTag}
          />
          <Separator />
          <Palette
            activeIndex={icon.colorIndex}
            colors={icon.colors}
            onChange={onColorChange}
            onSelect={onColorSelect}
          />
          <Grid
            pixels={icon.pixels}
            onClick={(x, y) => onPutColor(x, y, color)}
          />
          <Separator />
          <Footer icon={icon} onDelete={onDelete} />
        </div>
      </div>
    );
  }
}

export default IconEditor;
