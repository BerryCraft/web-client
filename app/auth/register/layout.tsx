import React from 'react'
import styles from './RegisterLayout.module.scss'
const RegisterLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <div className={styles.wrapper}>
        {children}
    </div>
  )
}

export default RegisterLayout