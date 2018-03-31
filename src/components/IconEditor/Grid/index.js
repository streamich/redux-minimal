import React from 'react';
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
    bg: '#eee',
    out: '1px solid #e3e3e3',
    marr: '1px',
  }
});

const Grid = ({onClick}) => {
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
              }}
              onClick={() => onClick(x, y)}
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

export default Grid;
