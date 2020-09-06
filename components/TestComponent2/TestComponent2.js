import React from 'react';
import styles from './TestComponent2.module.scss';
import dynamic from 'next/dynamic';

export default function TestComponent2() {
  return <div className={styles.style2}>I should be cyan!</div>;
}
