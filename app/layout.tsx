'use client'
import MainHeader from '@/components/main/header/Header'
import Nav from '@/components/main/header/nav/Nav'
import { store } from '@/store/store'

import styles from '../styles/layout.module.scss'
import '@/styles/globals.scss'
import { Provider } from 'react-redux'
import Footer from '@/components/footer/Footer'

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html>
			<head />
			<body>
				<Provider store={store}>
					<MainHeader />
					<Nav />
					<div className={styles.wrapper}>
						{children}
						<Footer />
					</div>
				</Provider>
			</body>
		</html>
	)
}
