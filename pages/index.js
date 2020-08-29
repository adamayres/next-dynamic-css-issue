import Link from 'next/link';
import dynamic from 'next/dynamic';

const TestComponent1 = dynamic(() => import('../components/TestComponent1/TestComponent1'));

function HomePage() {
	return <div>
		<h1>Home Page</h1>
		<Link href="/other-page">
			<a>Other page</a>
		</Link>
		<TestComponent1/>
	</div>
}

export default HomePage
