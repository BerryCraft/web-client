import styles from '../styles/layout.module.scss'

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html>
			<head />
			<body className={styles.wrapper}>{children}</body>
		</html>
	)
}
