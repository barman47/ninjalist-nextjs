import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
	return (
		<>
			<Head>
				<title>Ninja List | Home</title>
				<meta name="keywords" content="ninjas" />
			</Head>
			<div className={styles.container}>
				<h1 className={styles.title}>Homepage</h1>
				<p className={styles.text}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam praesentium voluptas nobis cupiditate quos soluta sit omnis a optio saepe. Impedit, cum rem a quae ullam nesciunt facere sed. Soluta.</p>
				<p className={styles.text}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam praesentium voluptas nobis cupiditate quos soluta sit omnis a optio saepe. Impedit, cum rem a quae ullam nesciunt facere sed. Soluta.</p>
				<Link href="/ninjas">
					<a className={styles.btn}>See Ninja Listing</a>
				</Link>
			</div>
		</>
	);
}
