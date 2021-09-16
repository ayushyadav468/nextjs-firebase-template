import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '@/styles/home.module.css';

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>NextJS with Firebase</title>
				<meta name='description' content='NextJS with firebase template' />
			</Head>
			<div className={styles.main_container}>
				<h1 className={styles.heading}>
					Welcome to the template of NextJS with typescript, firebse v9 and
					ContextAPI
				</h1>
			</div>
		</>
	);
};

export default Home;
