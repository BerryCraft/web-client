import React from 'react'
import styles from './LoginLayout.module.scss'
const LoginLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <div className={styles.wrapper}>
        {children}
    </div>
  )
}

export default LoginLayout