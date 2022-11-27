import Footer from 'components/footer/Footer'
import styles from '../styles/layout.module.scss'

import '@/styles/globals.scss'
export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html>
			<head />
			<body className={styles.wrapper}>
				{children}
				<Footer />
			</body>
		</html>
	)
}
