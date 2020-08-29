import Link from 'next/link';
import dynamic from 'next/dynamic';
const TestComponent2 = dynamic(() => import('../components/TestComponent2/TestComponent2'));

function HomePage() {
	return <div>
		<h1>Other Page</h1>
		<Link href="/">
			<a>Home page</a>
		</Link>
		<TestComponent2/>
	</div>
}

export default HomePage
