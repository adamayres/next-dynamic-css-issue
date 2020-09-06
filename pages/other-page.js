import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';

const TestComponent1 = dynamic(() => import('../components/TestComponent1/TestComponent1'));
const TestComponent2 = dynamic(() => import('../components/TestComponent2/TestComponent2'));

function HomePage() {
  return (
    <div>
      <h1>Other Page</h1>
      <Link href="/">
        <a>Home page</a>
      </Link>
      <TestComponent1 />
      <TestComponent2 />
    </div>
  );
}

export default HomePage;
