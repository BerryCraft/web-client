import { ReactNode } from 'react'
import styles from '@/styles/layouts/rootLayout.module.scss'
import Header from '@/components/page/header/Header'
import Footer from '@/components/page/footer/Footer'
import Nav from '@/components/page/header/Nav'

const RootLayout = ({ children }: { children: ReactNode }) => {
	return (
		<div className={styles.wrapper}>
			<Header />
			<Nav />
			{children}
			<Footer />
		</div>
	)
}

export default RootLayout
