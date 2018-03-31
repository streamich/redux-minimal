import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {SizeSensor} from 'libreact/lib/SizeSensor';
import {MouseSensor} from 'libreact/lib/MouseSensor';
import {sheet} from '../../../nano';

const SIZE = 16;

const styles = sheet({
  grid: {
    pos: 'relative',
    z: 1,
  },
  row: {
    d: 'flex',
    justifyContent: 'space-between',
  },
  cell: {
    out: '1px solid #eee',
    marr: '1px',
  }
});

class Grid extends Component {
  static propTypes = {
    pixels: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  state = {
    scrubbing: false,
  };

  onMouseDown = () => {
    this.setState({
      scrubbing: true,
    })
  };

  onMouseMove = ({elW, elH, elX, elY}) => {
    if (!this.state.scrubbing) {
      return;
    }

    const x = Math.floor(SIZE * elX / elW);
    const y = Math.floor(SIZE * elY / elH);

    if ((x >= 0) && (y >= 0) && (x < SIZE) && (y < SIZE)) {
      this.props.onClick(x, y);
    }
  };

  onStopTrackingMouse = () => {
    this.setState({
      scrubbing: false
    });
  };

  render () {
    const {pixels, onClick} = this.props;

    return (
      <SizeSensor>{({width}) => {
        const cellWidth = width / SIZE - 1;
        const rows = [];

        for (let y = 0; y < SIZE; y++) {
          const cells = [];

          for (let x = 0; x < SIZE; x++) {
            cells.push(
              <div
                key={x}
                className={styles.cell}
                style={{
                  width: cellWidth,
                  height: cellWidth,
                  background: (pixels[y] || {})[x] || '#fafafa',
                }}
                onMouseDown={() => onClick(x, y)}
              />
            );
          }

          rows.push(
            <div key={y} className={styles.row}>{cells}</div>
          );
        }

        return (
          <div>
            <MouseSensor onMouseMove={this.onMouseMove}>
              <div
                className={styles.grid}
                onMouseDown={this.onMouseDown}
                onMouseUp={this.onStopTrackingMouse}
                onMouseLeave={this.onStopTrackingMouse}
              >
                {rows}
              </div>
            </MouseSensor>
          </div>
        );
      }}</SizeSensor>
    );
  }
}

export default Grid;
