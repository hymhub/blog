import React from 'react';
import styles from './styles.module.css';

export default function MindFocus(): JSX.Element {
  return (
    <div className={styles.mindFocusBox}>
      <div className={styles.mindFocus}>
        {
          [0, 1, 2].map(it => (
            <div key={it} className={styles.circle}></div>
          ))
        }
      </div>
    </div>
  );
}
