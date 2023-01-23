import React from 'react'
import styles from '@/styles/layouts/LoginLayout.module.scss'
const LoginLayout = ({ children }: { children: React.ReactNode }) => {
	return <div className={styles.wrapper}>{children}</div>
}

export default LoginLayout
