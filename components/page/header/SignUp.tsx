import styles from '@/styles/components/page/header/signup.module.scss'
import Link from 'next/link'

const SignUp = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.button}>
				<Link href={'/auth/login'}>Войти</Link>
			</div>
		</div>
	)
}

export default SignUp
