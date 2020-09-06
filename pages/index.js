import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';

const TestComponent = dynamic(() => import('../components/TestComponent/TestComponent'));

function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link href="/other-page">
        <a>Other page</a>
      </Link>
      <TestComponent />
    </div>
  );
}

export default HomePage;
