import { ReactNode } from 'react'
import styles from '@/styles/layouts/rootLayout.module.scss'
const RootLayout = ({ children }: { children: ReactNode }) => {
	return <div className={styles.wrapper}>{children}</div>
}

export default RootLayout
