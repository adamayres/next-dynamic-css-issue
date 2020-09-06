import React from 'react';
import styles from './TestComponent1.module.scss';
import dynamic from 'next/dynamic';

export default function TestComponent1() {
  return <div className={styles.style1}>I should be pink!</div>;
}
