import React from 'react';
import styles from './styles.module.css';

const getCustomStyle = (idx: number): React.CSSProperties & { ['--idx']?: string } => ({
  ['--idx']: idx.toString(),
})

export default function Note(): JSX.Element {
  return (
    <div className={styles.noteBox}>
      {
        [0, 1, 2, 3, 4, 5, 6].map(it => (
          <div key={it} style={getCustomStyle(it)}></div>
        ))
      }
    </div>
  );
}
