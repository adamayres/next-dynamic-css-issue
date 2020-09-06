import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';

const TestComponent = dynamic(() => import('../components/TestComponent/TestComponent'));

function HomePage() {
  return (
    <div>
      <h1>Other Page</h1>
      <Link href="/">
        <a>Home page</a>
      </Link>
      <TestComponent />
    </div>
  );
}

export default HomePage;
