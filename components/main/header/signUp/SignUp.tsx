import Link from 'next/link'
import styles from './signUp.module.scss'
const SignUp = () => {
	return (
		<div className={styles.buttons}>
			<button>Регистрация</button>
			<div></div>
			<button>
				<Link href={'/auth/login'}>Войти</Link>
			</button>
		</div>
	)
}

export default SignUp
