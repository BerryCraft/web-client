import React from 'react'
import styles from '@/styles/layouts/LoginLayout.module.scss'
const AuthLayout = ({ children }: { children: React.ReactNode }) => {
	return <div className={styles.wrapper}>{children}</div>
}

export default AuthLayout
