import { ReactNode } from 'react'
import styles from '@/styles/layouts/rootLayout.module.scss'
import Header from '@/components/page/header/Header'

const RootLayout = ({ children }: { children: ReactNode }) => {
	return (
		<div className={styles.wrapper}>
			<Header />
			{children}
		</div>
	)
}

export default RootLayout
