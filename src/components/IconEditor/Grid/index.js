import React from 'react';
import PropTypes from 'prop-types';
import {SizeSensor} from 'libreact/lib/SizeSensor';
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
    out: '1px solid #888',
    marr: '1px',
  }
});

const Grid = ({pixels, onClick}) => {
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
                background: (pixels[y] || {})[x] || '#eee',
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
        <div className={styles.grid}>
          {rows}
        </div>
      );
    }}</SizeSensor>
  );
};

Grid.propTypes = {
  pixels: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Grid;
